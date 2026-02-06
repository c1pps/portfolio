import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative text-white py-8 overflow-hidden border-t border-white/10">
            <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="flex items-center gap-5 mb-2">
                    <a href="https://github.com/c1pps" target="_blank" rel="noopener" aria-label="GitHub" className="group text-neutral-400 hover:text-white transition duration-300">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/dev-neveu-jules/" target="_blank" rel="noopener" aria-label="LinkedIn" className="group text-neutral-400 hover:text-white transition duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="/#contact" aria-label="Contact" className="group text-neutral-400 hover:text-white transition duration-300">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
                <p className="text-xs tracking-widest uppercase text-zinc-400 text-center">
                © 2026 — Wthejulio · PORTFOLIO
                </p>
            </div>
        </footer>
    )
}
