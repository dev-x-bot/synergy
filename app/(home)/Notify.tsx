"use client";

import { useState } from "react";

export default function Notify() {
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState(
    "Enter your email for early access"
  );
  const [note, setNote] = useState("Be the first to know when we go live.");
  const [ok, setOk] = useState(false);

  function submit() {
    const v = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!valid) {
      setNote("Please enter a valid email address.");
      setOk(false);
      return;
    }
    setNote("You're on the list — we'll be in touch. ✦");
    setOk(true);
    setEmail("");
    setPlaceholder("Subscribed");
  }

  return (
    <>
      <div className="notify stagger d5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
          }}
          placeholder={placeholder}
          aria-label="Email address"
        />
        <button type="button" onClick={submit}>
          Notify Me
        </button>
      </div>
      <p className={"note stagger d5" + (ok ? " ok" : "")}>{note}</p>
    </>
  );
}
