import Link from 'next/link';

const termsSections = [
  {
    id: 'use-of-website',
    title: 'Use of Website',
    content:
      'This website is provided for informational and business purposes only. You agree not to misuse the site or attempt to disrupt its operation.',
  },
  {
    id: 'services-disclaimer',
    title: 'Services Disclaimer',
    content:
      'Astrix Digital Media provides consulting, marketing & sales automation, AI systems and related services. We do not guarantee specific business outcomes or revenue results.',
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content:
      'All content on this website belongs to Astrix Digital Media and may not be copied or reused without permission.',
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content:
      'We are not liable for any direct or indirect damages resulting from the use of this website or reliance on its content.',
  },
  {
    id: 'external-links',
    title: 'External Links',
    content:
      'Our website may contain links to third-party sites. We are not responsible for their content or privacy practices.',
  },
  {
    id: 'changes',
    title: 'Changes',
    content:
      'We may update these terms at any time. Continued use of the website implies acceptance of the updated terms.',
  },
  {
    id: 'contact',
    title: 'Contact',
    content:
      'For questions regarding these terms, contact: info@astrixdigitalmedia.com.',
  },
];

export default function TermsPage() {
  return (
    <main className="pt-10  bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border/50 bg-linear-to-b from-card to-background">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: 1/21/2026
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
            By accessing or using this website, you agree to the following terms.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-10">
        {/* Main Terms Sections */}
        <div className="space-y-12">
          {termsSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-20"
            >
              <h2 className="text-2xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="mt-4 leading-relaxed text-foreground/80">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}