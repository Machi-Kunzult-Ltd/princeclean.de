// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          className="form-input"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          required
          className="form-input"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          required
          className="form-input"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Nachricht *
        </label>
        <textarea
          id="message"
          required
          className="form-textarea"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
          ✅ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
        </div>
      )}

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
          ❌ {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary w-full"
      >
        {status === "loading" ? (
          <span>Wird gesendet...</span>
        ) : (
          <>
            <span>Anfrage senden</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-xs text-gray-600 text-center">
        Mit dem Absenden stimmen Sie unseren{" "}
        <Link href="/datenschutz" className="text-[#3b82f6] hover:underline">
          Datenschutzbestimmungen
        </Link>{" "}
        zu.
      </p>
    </form>
  );
}
