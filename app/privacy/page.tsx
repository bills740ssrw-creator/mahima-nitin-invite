import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Mahima & Nitin",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto font-raleway text-cream/80 text-sm leading-relaxed space-y-6">
        <h1 className="font-cinzel text-gold text-3xl tracking-wide">
          Privacy Policy
        </h1>
        <p className="font-cormorant italic text-gold-light/70 text-lg">
          Last updated: 2026
        </p>
        <p>
          This wedding invitation website is a personal site created for
          family and friends. We do not collect, store, or sell any personal
          information.
        </p>
        <h2 className="font-cinzel text-gold text-xl pt-4">Cookies &amp; Analytics</h2>
        <p>
          This site does not use cookies, tracking pixels, or third-party
          analytics. Any hosting provider may retain standard server logs for
          security and reliability purposes.
        </p>
        <h2 className="font-cinzel text-gold text-xl pt-4">Third-Party Links</h2>
        <p>
          The site links to Google Maps for venue directions. Clicking those
          links takes you to Google&apos;s website, which is governed by
          Google&apos;s own privacy policy.
        </p>
        <h2 className="font-cinzel text-gold text-xl pt-4">Contact</h2>
        <p>
          Questions about this policy? Reach the family at{" "}
          <a href="mailto:family@example.com" className="text-gold-light underline">
            family@example.com
          </a>
          . (Replace with the family&apos;s contact email before sharing
          publicly.)
        </p>
        <p className="text-cream/40 pt-6 border-t border-white/10">
          Note: This is placeholder legal text prepared for launch; attorney
          review is pending.
        </p>
        <Link href="/" className="inline-block text-gold-light underline pt-4">
          ← Back to invitation
        </Link>
      </div>
    </main>
  );
}
