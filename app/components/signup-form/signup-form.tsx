import { useState, type FormEvent } from "react";
import { SIGNUP_FORM } from "~/models/components";

export const meta = () => SIGNUP_FORM.meta;
export const handle = SIGNUP_FORM.routeHandle;

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
    <div className="w-full">
      <h1>Form</h1>
      <form
        className="flex flex-col gap-2 border-2 border-gray-100 rounded-lg p-12 w-full max-w-fit md:items-end"
        onSubmit={onSubmit}
      >
        <div className="flex gap-2 items-center justify-end flex-col md:flex-row">
          <label htmlFor="email-input">Email</label>
          <input
            className="w-full"
            id="email-input"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex gap-2 items-center justify-end flex-col md:flex-row">
          <label htmlFor="password-input">Password</label>
          <input
            className="w-full"
            id="password-input"
            type="password"
            name="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            aria-describedby="password-hint"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <span id="password-hint" className="text-xs opacity-30 w-fit">
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
