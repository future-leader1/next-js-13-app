"use client";

import { useState } from "react";
export default function Contact() {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("HEy");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
