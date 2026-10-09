"use client";

import { useState } from "react";
import { isValidEmail, normalizeEmail } from "@/lib/email";

const GENERIC_ERROR =
  "We couldn’t subscribe you just now. Please try again in a moment.";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");
  const [invalid, setInvalid] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;

    if (!isValidEmail(normalizeEmail(email))) {
      setStatus("error");
      setInvalid(true);
      setMessage("Enter a valid email address, like name@example.com.");
      return;
    }

    setStatus("submitting");
    setInvalid(false);
    setMessage("");
    try {
      const response = await fetch("/api/newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus("error");
        setInvalid(response.status === 400);
        setMessage(data.error || GENERIC_ERROR);
        return;
      }
      setStatus("success");
      setMessage("You’re subscribed. Thanks for joining!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(
        "We couldn’t reach the server. Check your connection and try again."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (invalid) setInvalid(false);
          }}
          aria-invalid={invalid || undefined}
          aria-describedby="newsletter-status"
          className={`min-w-0 flex-1 rounded-l border bg-gray-100 px-4 py-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-caput-mortuum ${
            invalid ? "border-red-700" : "border-gray-200"
          }`}
        />
        <button
          type="submit"
          aria-disabled={status === "submitting"}
          className="rounded-r bg-caput-mortuum px-4 py-2 text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-caput-mortuum focus-visible:ring-offset-2 aria-disabled:cursor-wait aria-disabled:opacity-80"
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots fill it in. */}
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        <label htmlFor="newsletter-website">Leave this field empty</label>
        <input
          id="newsletter-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <p
        id="newsletter-status"
        role="status"
        className={`mt-2 min-h-[1.25rem] text-sm ${
          status === "error" ? "text-red-700" : "text-kombu-green"
        }`}
      >
        {message}
      </p>
      <p className="text-xs text-gray-500">No spam. Unsubscribe any time.</p>
    </form>
  );
}
