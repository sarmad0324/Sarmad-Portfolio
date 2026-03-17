export default function Footer() {
  return (
    <footer className="px-6 py-12 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="space-y-2">
            <p className="text-textPrimary font-bold text-xl">Sarmad Irfan</p>
            <p className="text-primary font-semibold text-sm">Product Engineer & Technical Partner</p>
            <p className="text-textMuted text-sm">Based in Lahore, working internationally</p>
            <a href="mailto:sarmad.irfan@syntaxleap.com" className="text-primary text-sm inline-block hover:text-primaryHover transition-colors mt-3">
              sarmad.irfan@syntaxleap.com
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div>
              <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mb-3">Connect</p>
              <div className="flex flex-col gap-2">
                <a href="https://calendly.com/sarmadirfan78/30min" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  Book a Call
                </a>
                <a href="mailto:sarmad.irfan@syntaxleap.com" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  Email
                </a>
                <a href="https://wa.me/923368486356" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mb-3">Work</p>
              <div className="flex flex-col gap-2">
                <a href="/case-studies" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  Case Studies
                </a>
                <a href="/about" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  About
                </a>
                <a href="/#contact" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <p className="text-textMuted text-xs font-semibold uppercase tracking-wider mb-3">Resources</p>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/sarmad0324" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  LinkedIn
                </a>
                <a href="https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary text-sm transition-colors">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-textMuted text-xs mt-10 pt-6 border-t border-border">© 2026 Sarmad Irfan. All rights reserved.</p>
      </div>
    </footer>
  );
}
