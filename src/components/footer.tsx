import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiFileText, FiCalendar } from "react-icons/fi";
import { BRAND } from "@/lib/seo";

const socialLinks = [
  { icon: FaLinkedinIn, href: BRAND.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: BRAND.github, label: "GitHub" },
  { icon: HiOutlineMail, href: `mailto:${BRAND.email}`, label: "Email" },
  { icon: FaWhatsapp, href: "https://wa.me/923368486356", label: "WhatsApp" },
  { icon: FiCalendar, href: BRAND.calendly, label: "Book a Call" },
  {
    icon: FiFileText,
    href: "https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing",
    label: "Resume",
  },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <p className="text-textPrimary font-bold text-lg font-Sora">{BRAND.name}</p>
            <p className="text-primary text-sm font-semibold">
              Technical Partner · AI Systems Integration · Product Rescue
            </p>
            <p className="text-textMuted text-xs">Based in Lahore · Working internationally</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-textMuted">
            <a href="/#offers" className="hover:text-textSecondary transition-colors">
              Offers
            </a>
            <a href="/case-studies" className="hover:text-textSecondary transition-colors">
              Case Studies
            </a>
            <a href="/#about" className="hover:text-textSecondary transition-colors">
              About
            </a>
            <a href="/#contact" className="hover:text-textSecondary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <link.icon className="text-xs" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-textMuted text-xs">© 2026 {BRAND.name}. All rights reserved.</p>
          <a
            href={`mailto:${BRAND.email}`}
            className="text-textMuted text-xs hover:text-primary transition-colors"
          >
            {BRAND.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
