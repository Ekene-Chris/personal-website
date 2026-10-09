"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { webinar } from "@/lib/webinar/config";
import { COUNTRIES } from "@/lib/webinar/countries";
import {
  BLOCKER_MAX_LENGTH,
  DEFAULT_COUNTRY,
  PRIMARY_AREAS,
  YEARS_OF_EXPERIENCE,
  validateRegistration,
} from "@/lib/webinar/registration";
import { REGISTERED_FLAG, readUtmParams } from "@/lib/webinar/tracking";

const GENERIC_ERROR =
  "We couldn’t save your seat just now. Please try again in a moment.";

// Used to move focus to the first problem after a failed submit.
const FIELD_ORDER = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "role",
  "years",
  "area",
  "blocker",
  "consent",
];

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  country: DEFAULT_COUNTRY,
  phone: "",
  role: "",
  years: "",
  area: "",
  blocker: "",
  consent: false,
  website: "", // honeypot
};

// text-base keeps iOS Safari from zooming in when a field is focused.
const inputClass = (hasError) =>
  `block w-full rounded-lg border bg-white px-4 py-3 text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-caput-mortuum ${
    hasError ? "border-red-700" : "border-black/20"
  }`;

function ChevronDown({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Field({ id, label, optional, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-black">
        {label}
        {optional && (
          <span className="font-normal text-black/60"> (optional)</span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-black/60">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function RegistrationForm() {
  const router = useRouter();
  const formRef = useRef(null);
  const utmRef = useRef({});
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    utmRef.current = readUtmParams();
  }, []);

  const country =
    COUNTRIES.find((c) => c.code === values.country) ??
    COUNTRIES.find((c) => c.code === DEFAULT_COUNTRY);

  function setField(name, value) {
    const next = { ...values, [name]: value };
    setValues(next);
    // Once a field is showing an error, re-check it as the visitor types so
    // the message clears as soon as it’s fixed. The country affects the number.
    const field = name === "country" ? "phone" : name;
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: validateRegistration(next).errors[field],
      }));
    }
  }

  // Validate on blur, but don’t flag empty fields someone has only tabbed
  // past; those are caught on submit.
  function handleBlur(event) {
    const field = event.target.name === "country" ? "phone" : event.target.name;
    if (!values[field] && !errors[field]) return;
    setErrors((current) => ({
      ...current,
      [field]: validateRegistration(values).errors[field],
    }));
  }

  function focusFirstError(fieldErrors) {
    const first = FIELD_ORDER.find((name) => fieldErrors[name]);
    if (first) formRef.current?.elements.namedItem(first)?.focus();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting) return;

    const result = validateRegistration(values);
    setErrors(result.errors);
    setSubmitError("");
    if (!result.isValid) {
      focusFirstError(result.errors);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, utm: utmRef.current }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
          focusFirstError(data.fieldErrors);
        }
        setSubmitError(data.error || GENERIC_ERROR);
        setSubmitting(false);
        return;
      }
    } catch {
      setSubmitError(
        "We couldn’t reach the server. Check your connection and try again."
      );
      setSubmitting(false);
      return;
    }

    try {
      sessionStorage.setItem(REGISTERED_FLAG, "1");
    } catch {}
    // Leave the button in its loading state while the next page loads.
    router.push("/webinar/thank-you/");
  }

  const describedBy = (name, hasHint) =>
    [hasHint && `${name}-hint`, errors[name] && `${name}-error`]
      .filter(Boolean)
      .join(" ") || undefined;

  const fieldProps = (name, { hasHint = false } = {}) => ({
    id: name,
    name,
    value: values[name],
    onChange: (event) => setField(name, event.target.value),
    onBlur: handleBlur,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": describedBy(name, hasHint),
    className: inputClass(errors[name]),
  });

  const selectProps = (name) => {
    const props = fieldProps(name);
    return {
      ...props,
      className: `${props.className} appearance-none pr-10 ${
        values[name] ? "" : "text-black/50"
      }`,
    };
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submitting}
      className="relative space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First name" error={errors.firstName}>
          <input
            {...fieldProps("firstName")}
            type="text"
            autoComplete="given-name"
            required
          />
        </Field>
        <Field id="lastName" label="Last name" error={errors.lastName}>
          <input
            {...fieldProps("lastName")}
            type="text"
            autoComplete="family-name"
            required
          />
        </Field>
      </div>

      <Field id="email" label="Email" error={errors.email}>
        <input
          {...fieldProps("email")}
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          required
        />
      </Field>

      <Field
        id="phone"
        label="WhatsApp number"
        hint="We’ll send session reminders here."
        error={errors.phone}
      >
        <div className="flex">
          {/* The native select sits invisibly on top of a compact label, so
              phones still get their own picker. */}
          <div
            className={`relative flex shrink-0 items-center gap-1 rounded-l-lg border border-r-0 bg-linen px-3 text-base text-black focus-within:ring-2 focus-within:ring-caput-mortuum ${
              errors.phone ? "border-red-700" : "border-black/20"
            }`}
          >
            <span aria-hidden="true">
              {country.code} +{country.dial}
            </span>
            <ChevronDown className="text-black/60" />
            <select
              id="country"
              name="country"
              aria-label="Country code"
              value={values.country}
              onChange={(event) => setField("country", event.target.value)}
              onBlur={handleBlur}
              className="absolute inset-0 w-full cursor-pointer opacity-0"
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} (+{c.dial})
                </option>
              ))}
            </select>
          </div>
          <input
            {...fieldProps("phone", { hasHint: true })}
            className={`${inputClass(errors.phone)} rounded-l-none`}
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder={country.code === "NG" ? "803 123 4567" : undefined}
            required
          />
        </div>
      </Field>

      <Field id="role" label="Current role" error={errors.role}>
        <input
          {...fieldProps("role")}
          type="text"
          autoComplete="organization-title"
          placeholder="e.g. DevOps Engineer"
          required
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="years" label="Years of experience" error={errors.years}>
          <div className="relative">
            <select {...selectProps("years")} required>
              <option value="" disabled>
                Select…
              </option>
              {YEARS_OF_EXPERIENCE.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/60" />
          </div>
        </Field>
        <Field id="area" label="Primary area" error={errors.area}>
          <div className="relative">
            <select {...selectProps("area")} required>
              <option value="" disabled>
                Select…
              </option>
              {PRIMARY_AREAS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/60" />
          </div>
        </Field>
      </div>

      <Field
        id="blocker"
        label="What’s your biggest blocker right now?"
        optional
        error={errors.blocker}
      >
        <textarea
          {...fieldProps("blocker", { hasHint: true })}
          rows={4}
          maxLength={BLOCKER_MAX_LENGTH}
        />
        <p id="blocker-hint" className="mt-1 text-right text-xs text-black/60">
          {values.blocker.length}/{BLOCKER_MAX_LENGTH} characters
        </p>
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(event) => setField("consent", event.target.checked)}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            required
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-caput-mortuum"
          />
          <label htmlFor="consent" className="cursor-pointer text-sm text-black/80">
            I agree to receive emails and WhatsApp messages from Teleios about
            this webinar and our programs.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="mt-2 text-sm text-red-700">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots fill it in. */}
      <div
        aria-hidden="true"
        className="absolute -left-[10000px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) =>
            setValues((current) => ({ ...current, website: event.target.value }))
          }
        />
      </div>

      {submitError && (
        <div
          role="alert"
          className="rounded-lg border border-red-700/30 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {submitError}
        </div>
      )}

      <button
        type="submit"
        aria-disabled={submitting}
        className="flex w-full items-center justify-center gap-3 rounded-lg bg-caput-mortuum px-6 py-4 text-lg font-semibold text-white transition duration-200 hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-caput-mortuum focus-visible:ring-offset-2 aria-disabled:cursor-wait aria-disabled:opacity-80"
      >
        {submitting ? (
          <>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 animate-spin"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                className="opacity-30"
              />
              <path
                d="M22 12a10 10 0 00-10-10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Saving your seat…
          </>
        ) : (
          "Save My Seat"
        )}
      </button>
      <p className="text-center text-sm text-black/60">
        We’ll email you the {webinar.platform} link.
      </p>
    </form>
  );
}
