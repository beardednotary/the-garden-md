"use client";

import { FormEvent, useState } from "react";

type EmailCaptureProps = {
  source: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  downloadUrl?: string;
  downloadLabel?: string;
};

export function EmailCapture({
  source,
  heading = "Get the free GardenMD Quick Reference Guide",
  description = "A printable symptom cheat sheet and seed starting calendar, sent straight to your inbox.",
  buttonLabel = "Send me the guide",
  downloadUrl = "/downloads/gardenmd-quick-reference-guide.pdf",
  downloadLabel = "Download the PDF now"
}: EmailCaptureProps) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!endpoint) {
      setStatus("error");
      setMessage("Email signup isn't connected yet.");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          source,
          message: `Quick Reference Guide signup from ${source}`,
          _subject: `New GardenMD signup: ${source}`
        })
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-paper-light p-5 shadow-panel">
        <h3 className="font-serif text-2xl text-green-dark">You're on the list</h3>
        <p className="mt-2 text-[15px] text-ink">Here's your copy right now, no need to wait on email.</p>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block border border-green-dark bg-green-dark px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-paper-light hover:bg-transparent hover:text-green-dark"
        >
          {downloadLabel}
        </a>
      </div>
    );
  }

  return (
    <div className="border border-border bg-paper-light p-5 shadow-panel">
      <h3 className="font-serif text-2xl text-green-dark">{heading}</h3>
      <p className="mt-2 text-[15px] text-ink">{description}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={`${source}-email`}>
          Email address
        </label>
        <input
          id={`${source}-email`}
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="flex-1 border border-border bg-paper px-3 py-2 text-ink outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="border border-green-dark bg-green-dark px-5 py-2 text-sm font-semibold uppercase tracking-[0.1em] text-paper-light hover:bg-transparent hover:text-green-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : buttonLabel}
        </button>
      </form>
      {status === "error" && <p className="mt-2 text-sm text-rust">{message}</p>}
      <p className="mt-3 text-xs text-muted">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
