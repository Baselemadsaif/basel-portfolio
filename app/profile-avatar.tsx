"use client";

import { useEffect, useState } from "react";

export function ProfileAvatar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="profile-avatar"
        onClick={() => setIsOpen(true)}
        aria-label="View larger photo of Basel Al-Saif"
      >
        <img src="/basel-al-saif.jpg" alt="" width="1304" height="1254" />
      </button>

      {isOpen && (
        <div
          className="avatar-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Basel Al-Saif, enlarged photo"
        >
          <button
            type="button"
            className="avatar-lightbox-backdrop"
            onClick={() => setIsOpen(false)}
            aria-label="Close enlarged photo"
          />
          <img
            src="/basel-al-saif.jpg"
            alt="Basel Al-Saif"
            className="avatar-lightbox-image"
          />
          <button
            type="button"
            className="avatar-lightbox-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
