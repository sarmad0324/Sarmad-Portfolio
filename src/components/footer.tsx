import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiFileText, FiCalendar } from "react-icons/fi";

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/sarmad0324", label: "GitHub" },
  { icon: HiOutlineMail, href: "mailto:sarmad@sarmadirfan.com", label: "Email" },
  { icon: FaWhatsapp, href: "https://wa.me/923368486356", label: "WhatsApp" },
  { icon: FiCalendar, href: "https://calendly.com/sarmad-sarmadirfan/30min", label: "Book a Call" },
  { icon: FiFileText, href: "https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing", label: "Resume" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div className="space-y-1">
            <p className="text-textPrimary font-bold text-lg font-Sora">
              Sarmad<span className="text-primary">.</span>
            </p>
            <p className="text-primary text-sm font-semibold">Technical Partner & Product Engineer</p>
            <p className="text-textMuted text-xs">Based in Lahore — working internationally</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-textMuted">
            <a href="/#offers" className="hover:text-textSecondary transition-colors">Offers</a>
            <a href="/case-studies" className="hover:text-textSecondary transition-colors">Case Studies</a>
            <a href="/#about" className="hover:text-textSecondary transition-colors">About</a>
            <a href="/#contact" className="hover:text-textSecondary transition-colors">Contact</a>
          </div>

          {/* Social icons */}
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
          <p className="text-textMuted text-xs">© 2026 Sarmad Irfan. All rights reserved.</p>
          <a
            href="mailto:sarmad@sarmadirfan.com"
            className="text-textMuted text-xs hover:text-primary transition-colors"
          >
            sarmad@sarmadirfan.com
          </a>
        </div>
      </div>
    </footer>
  );
}
