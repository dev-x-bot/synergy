"use client";

import { useState } from "react";
import { ArrowRight } from "../_lib/icons";

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
        <ArrowRight />
      </button>
    </form>
  );
}
