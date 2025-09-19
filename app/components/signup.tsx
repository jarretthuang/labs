import { useState, type FormEvent } from "react";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "signup - jarrett's web labs" }];
}

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseStatus, setResponseStatus] = useState("");
  const [response, setResponse] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setResponseStatus(response.ok ? "success" : "failure");
    const text = await response.text();
    setResponse(text);
  };

  const statusEmoji =
    responseStatus === "success"
      ? "✅"
      : responseStatus === "failure"
        ? "❌"
        : "";

  return (
    <div>
      <h1>Signup Form</h1>
      <form
        className="flex flex-col gap-2 border-2 border-gray-100 rounded-lg p-8 w-fit"
        onSubmit={onSubmit}
      >
        <div className="flex gap-2 items-center justify-end">
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex gap-2 items-center justify-end">
          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="password"
            name="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            aria-describedBy="password-hint"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <span id="password-hint" className="text-xs opacity-30">
          Your password must contain at least 8 characters.
        </span>
        <button className="self-end">Signup</button>
      </form>
      {response && (
        <div>
          <h1>Response {statusEmoji}</h1>
          <span>{response}</span>
        </div>
      )}
    </div>
  );
}
