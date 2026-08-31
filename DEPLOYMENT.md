# Portfolio deployment pipeline

The GitHub Actions workflow in `.github/workflows/deploy.yml` follows this flow:

1. A pull request targeting `main` installs the dependencies and tests the site.
2. Merging the approved pull request into `main` runs the tests again.
3. The workflow builds the Docker container.
4. It pushes two tags to Docker Hub:
   - `baselsaif/basel-portfolio:latest`
   - `baselsaif/basel-portfolio:<git-commit-sha>`
5. It deploys the commit-specific image to the `basel-portfolio` Cloud Run service in `me-central1`.

## One-time GitHub setup

Create a GitHub repository and push this project to its `main` branch. Then add these repository settings under **Settings → Secrets and variables → Actions**.

Variables:

- `DOCKERHUB_USERNAME`: `baselsaif`
- `GCP_PROJECT_ID`: the Google Cloud project ID containing the Cloud Run service

Secrets:

- `DOCKERHUB_TOKEN`: a Docker Hub personal access token with read and write access
- `GCP_WORKLOAD_IDENTITY_PROVIDER`: the full Google Workload Identity Provider name
- `GCP_SERVICE_ACCOUNT`: the deployment service-account email

## One-time Google Cloud setup

Run the following in Google Cloud Shell after replacing the first two values. The GitHub repository must use the exact `owner/repository` form, including capitalization.

```bash
export PROJECT_ID="portfolio-507202"
export GITHUB_REPOSITORY="Baselemadsaif/basel-portfolio"

export PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"
export DEPLOYER_NAME="github-cloud-run-deployer"
export DEPLOYER_EMAIL="${DEPLOYER_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
export POOL_NAME="github-actions"
export PROVIDER_NAME="github"

gcloud services enable \
  iamcredentials.googleapis.com \
  run.googleapis.com \
  --project="$PROJECT_ID"

gcloud iam service-accounts create "$DEPLOYER_NAME" \
  --project="$PROJECT_ID" \
  --display-name="GitHub Cloud Run deployer"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${DEPLOYER_EMAIL}" \
  --role="roles/run.developer"

export RUNTIME_SERVICE_ACCOUNT="$(gcloud run services describe basel-portfolio \
  --project="$PROJECT_ID" \
  --region="me-central1" \
  --format='value(spec.template.spec.serviceAccountName)')"

if [ -z "$RUNTIME_SERVICE_ACCOUNT" ]; then
  export RUNTIME_SERVICE_ACCOUNT="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"
fi

gcloud iam service-accounts add-iam-policy-binding "$RUNTIME_SERVICE_ACCOUNT" \
  --project="$PROJECT_ID" \
  --member="serviceAccount:${DEPLOYER_EMAIL}" \
  --role="roles/iam.serviceAccountUser"

gcloud iam workload-identity-pools create "$POOL_NAME" \
  --project="$PROJECT_ID" \
  --location="global" \
  --display-name="GitHub Actions"

gcloud iam workload-identity-pools providers create-oidc "$PROVIDER_NAME" \
  --project="$PROJECT_ID" \
  --location="global" \
  --workload-identity-pool="$POOL_NAME" \
  --display-name="GitHub" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
  --attribute-condition="assertion.repository=='${GITHUB_REPOSITORY}'"

gcloud iam service-accounts add-iam-policy-binding "$DEPLOYER_EMAIL" \
  --project="$PROJECT_ID" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_NAME}/attribute.repository/${GITHUB_REPOSITORY}"

gcloud iam workload-identity-pools providers describe "$PROVIDER_NAME" \
  --project="$PROJECT_ID" \
  --location="global" \
  --workload-identity-pool="$POOL_NAME" \
  --format='value(name)'

echo "$DEPLOYER_EMAIL"
```

Use the final two output values for the `GCP_WORKLOAD_IDENTITY_PROVIDER` and `GCP_SERVICE_ACCOUNT` GitHub secrets.

## Optional deployment approval

The deploy job uses a GitHub environment named `production`. Under **Settings → Environments → production**, add yourself as a required reviewer if your GitHub plan supports deployment reviewers for the repository. Without that rule, merging to `main` is treated as the approval and deployment starts automatically.

## Normal update process

1. Create a branch and make the portfolio change.
2. Push the branch and open a pull request.
3. Wait for the test check to pass.
4. Review and merge the pull request.
5. Follow the workflow from the repository's **Actions** tab.

If deployment fails, Cloud Run continues serving the previous successful revision.
