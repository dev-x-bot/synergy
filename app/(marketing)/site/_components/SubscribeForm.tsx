"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Your email address");

  return (
    <form
      className="sub-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) {
          setValue("");
          setPlaceholder("You're subscribed — talk soon ✦");
        }
      }}
    >
      <input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Email address"
        required
      />
      <button type="submit" aria-label="Subscribe">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
