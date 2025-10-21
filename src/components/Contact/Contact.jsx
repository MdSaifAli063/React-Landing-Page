import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (form.tel && !/^[\d+\-\s()]{7,}$/.test(form.tel)) {
      e.tel = "Enter a valid phone number.";
    }
    if (!form.message.trim()) e.message = "Please write a brief message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) return;

    try {
      setSubmitting(true);
      // Simulate network call; replace with your API endpoint:
      await new Promise((res) => setTimeout(res, 900));
      setStatus("success");
      setForm({ name: "", email: "", tel: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex items-start justify-center min-h-[700px] bg-gradient-to-b from-white to-gray-50 sm:items-center sm:pt-0 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left panel: Contact info */}
          <div className="lg:col-span-1">
            <div className="h-full rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-8">
              <h1 className="text-3xl sm:text-4xl text-gray-900 font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mt-2">
                Fill in the form to start a conversation. We typically reply within 1–2 business days.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start text-gray-700">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-orange-600 flex-shrink-0"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-sm sm:text-base font-medium">
                    Acme Inc, 123 Market Street, New York, NY 10001
                  </div>
                </div>

                <div className="flex items-start text-gray-700">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-orange-600 flex-shrink-0"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href="tel:+441234567890"
                    className="ml-4 text-sm sm:text-base font-medium text-orange-700 hover:text-orange-800 underline underline-offset-2"
                  >
                    +44 1234 567 890
                  </a>
                </div>

                <div className="flex items-start text-gray-700">
                  <svg
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-orange-600 flex-shrink-0"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:info@acme.org"
                    className="ml-4 text-sm sm:text-base font-medium text-orange-700 hover:text-orange-800 underline underline-offset-2"
                  >
                    info@acme.org
                  </a>
                </div>
              </div>

              <div className="mt-10 rounded-lg bg-orange-50 border border-orange-100 p-4 text-sm text-orange-900">
                Prefer live chat? We’re available Mon–Fri, 9am–6pm.
              </div>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-gray-800">
                    Full name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={onChange}
                    className={`mt-2 py-3 px-3 rounded-lg bg-white border text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.name ? "border-red-400" : "border-gray-300"
                    }`}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-800">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={onChange}
                    className={`mt-2 py-3 px-3 rounded-lg bg-white border text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.email ? "border-red-400" : "border-gray-300"
                    }`}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label htmlFor="tel" className="text-sm font-medium text-gray-800">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    autoComplete="tel"
                    placeholder="+44 1234 567 890"
                    value={form.tel}
                    onChange={onChange}
                    className={`mt-2 py-3 px-3 rounded-lg bg-white border text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.tel ? "border-red-400" : "border-gray-300"
                    }`}
                    aria-invalid={Boolean(errors.tel)}
                    aria-describedby={errors.tel ? "tel-error" : "tel-help"}
                  />
                  {errors.tel ? (
                    <p id="tel-error" className="mt-1 text-sm text-red-600">
                      {errors.tel}
                    </p>
                  ) : (
                    <p id="tel-help" className="mt-1 text-sm text-gray-500">
                      Optional. Include country code if outside the UK.
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-800">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={onChange}
                    className={`mt-2 py-3 px-3 rounded-lg bg-white border text-gray-900 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition ${
                      errors.message ? "border-red-400" : "border-gray-300"
                    }`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {status === "success" && (
                <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 text-sm">
                  Thanks! Your message has been sent. We’ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 text-sm">
                  Something went wrong. Please try again later.
                </div>
              )}

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                    submitting
                      ? "bg-orange-300 cursor-not-allowed"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>

                <p className="text-sm text-gray-500">
                  By submitting, you agree to our Terms and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}