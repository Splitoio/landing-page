import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async () => {
    // Reset states
    setStatus("loading");
    setErrorMessage("");

    // Validate email
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(
        "https://api.getwaitlist.com/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            waitlist_id: 23324,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to join waitlist");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="text-center mb-24">
      <div className="max-w-xl mx-auto">
        <div className="animate-border-light">
          <div className="input-container flex flex-col sm:flex-row gap-2 p-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent rounded-lg px-4 py-3 focus:outline-none text-zinc-300 
                placeholder:text-zinc-500 placeholder:text-base min-w-0"
              disabled={status === "loading"}
            />
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className={`bg-[#c01040] hover:bg-[#ff235e] text-zinc-950 px-4 sm:px-6 py-3 rounded-lg font-semibold 
              transition-all duration-300 ease-out
              shadow-[0_0_30px_rgba(255,0,82,0.15)]
              hover:shadow-[0_0_40px_rgba(255,0,82,0.35)]
              hover:scale-105
              hover:translate-y-[-2px]
              active:scale-95
              whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed 
              disabled:hover:scale-100 disabled:hover:rotate-0 disabled:hover:translate-y-0
              text-sm sm:text-base ${
                status === "success" ? "bg-green-500 hover:bg-green-600" : ""
              }`}
            >
              {status === "loading"
                ? "Joining..."
                : status === "success"
                ? "Joined!"
                : "Join waitlist"}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {status === "error" && (
          <div className="mt-2 text-red-500 text-sm">{errorMessage}</div>
        )}

        {/* Success Message */}
        {status === "success" && (
          <div className="mt-2 text-green-500 text-sm">
            Successfully joined the waitlist! Check your email for confirmation.
          </div>
        )}
      </div>

      <p className="text-zinc-500 mt-6 text-m">
        Join{" "}
        <span className="font-bold">
          <AnimatedCounter />
        </span>
        + others on the waitlist
      </p>
    </div>
  );
}
