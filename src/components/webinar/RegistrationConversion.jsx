"use client";

import { useEffect } from "react";
import { REGISTERED_FLAG } from "@/lib/webinar/tracking";

const linkedInConversionId = process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_ID;

// Fires the "registration" conversion on GA, Meta and LinkedIn, once per
// successful sign-up.
export default function RegistrationConversion() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(REGISTERED_FLAG) !== "1") return;
    } catch {
      return;
    }

    const pending = [
      {
        ready: () => typeof window.gtag === "function",
        fire: () => window.gtag("event", "registration"),
      },
      {
        ready: () => typeof window.fbq === "function",
        fire: () => window.fbq("track", "CompleteRegistration"),
      },
      /^\d+$/.test(linkedInConversionId ?? "") && {
        ready: () => typeof window.lintrk === "function",
        fire: () =>
          window.lintrk("track", { conversion_id: Number(linkedInConversionId) }),
      },
    ].filter(Boolean);

    // The pixels load after hydration, so keep checking briefly until each
    // one is available. Unconfigured pixels simply never become ready.
    let attempts = 0;
    const timer = setInterval(() => {
      if (attempts === 0) {
        try {
          sessionStorage.removeItem(REGISTERED_FLAG);
        } catch {}
      }
      for (let i = pending.length - 1; i >= 0; i--) {
        if (pending[i].ready()) {
          pending[i].fire();
          pending.splice(i, 1);
        }
      }
      attempts += 1;
      if (pending.length === 0 || attempts >= 20) clearInterval(timer);
    }, 250);

    return () => clearInterval(timer);
  }, []);

  return null;
}
