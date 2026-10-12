import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Mahima & Nitin",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto font-raleway text-cream/80 text-sm leading-relaxed space-y-6">
        <h1 className="font-cinzel text-gold text-3xl tracking-wide">
          Terms of Use
        </h1>
        <p className="font-cormorant italic text-gold-light/70 text-lg">
          Last updated: 2026
        </p>
        <p>
          This website is a personal wedding invitation shared with invited
          guests. By using it, you agree to use its content (text, photos, and
          event details) solely for personal, non-commercial purposes.
        </p>
        <h2 className="font-cinzel text-gold text-xl pt-4">Event Details</h2>
        <p>
          Dates, times, and venues are subject to change. Please refer to
          communications from the family for the most current information.
        </p>
        <h2 className="font-cinzel text-gold text-xl pt-4">Content &amp; Photos</h2>
        <p>
          All photographs and personal content belong to the couple and their
          families. Please do not redistribute them publicly without
          permission.
        </p>
        <h2 className="font-cinzel text-gold text-xl pt-4">Liability</h2>
        <p>
          Event details are provided as a convenience. The hosts are not
          responsible for changes made by third-party venues.
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
