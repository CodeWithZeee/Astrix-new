"use client";
import { Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "information", title: "Information We Collect" },
    { id: "usage", title: "How We Use Information" },
    { id: "protection", title: "Data Protection" },
    { id: "third-party", title: "Third-Party Tools" },
    { id: "rights", title: "Your Rights" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <main className="pt-14 min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 py-8 md:py-12 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-pretty bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: 1/21/2026</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Sidebar Navigation */}
        <aside className="md:sticky md:top-8 h-fit md:w-48 shrink-0 px-4 md:px-8">
          <div className="flex flex-row md:flex-col gap-2 md:gap-4 md:border-l-2 border-primary/50 md:pl-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm md:text-base text-muted-foreground hover:text-primary hover:translate-x-1 md:hover:translate-x-1 transition-all duration-200 whitespace-nowrap md:whitespace-normal font-medium"
              >
                {section.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-8 max-w-2xl">
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-lg text-foreground leading-relaxed">
              Astrix Digital Media respects
              your privacy and is committed to protecting any personal
              information you share with us.
            </p>
          </div>

          {/* Information We Collect */}
          <section
            id="information"
            className="mb-4 scroll-mt-8 p-6 rounded-2xl bg-secondary/5 border border-border/40 transition-colors hover:bg-secondary/40"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Information We Collect
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              We may collect basic information such as name, email address,
              phone number, business details and website usage data when you
              voluntarily provide it or interact with our website.
            </p>
          </section>

          {/* How We Use Information */}
          <section
            id="usage"
            className="mb-4 scroll-mt-8 p-6 rounded-2xl bg-secondary/5 border border-border/40 transition-colors hover:bg-secondary/40"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              How We Use Information
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              We use your information to respond to inquiries, provide services
              or consultations, improve our website and systems and communicate
              relevant updates. We do not sell or rent your personal data.
            </p>
          </section>

          {/* Data Protection */}
          <section
            id="protection"
            className="mb-4 scroll-mt-8 p-6 rounded-2xl bg-secondary/5 border border-border/40 transition-colors hover:bg-secondary/40"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Data Protection
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              We take reasonable measures to protect your data using secure
              systems and access controls.
            </p>
          </section>

          {/* Third-Party Tools */}
          <section
            id="third-party"
            className="mb-4 scroll-mt-8 p-6 rounded-2xl bg-secondary/5 border border-border/40 transition-colors hover:bg-secondary/40"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Third-Party Tools
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              We may use trusted third-party tools for analytics, automation,
              and communication. These tools only receive information necessary
              to perform their function.
            </p>
          </section>

          {/* Your Rights */}
          <section
            id="rights"
            className="mb-4 scroll-mt-8 p-6 rounded-2xl bg-secondary/5 border border-border/40 transition-colors hover:bg-secondary/40"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Your Rights
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              You may request access, updates or deletion of your personal
              information by contacting us.
            </p>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="mb-4 scroll-mt-8 p-6 rounded-2xl bg-secondary/5 border border-border/40 transition-colors hover:bg-secondary/40"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Contact</h2>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <p className="text-foreground">
                For privacy-related questions, contact:{" "}
                <a
                  href="mailto:info@astrixdigitalmedia.com"
                  className="text-primary hover:underline transition-colors"
                >
                  info@astrixdigitalmedia.com
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
}
