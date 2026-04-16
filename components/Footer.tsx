export default function Footer() {
  return (
    <footer className="py-20 bg-muted border-t border-gray-100 text-foreground/60">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/30 transition-all" />
              <svg className="w-6 h-6 text-primary relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12L12 20L20 12L12 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 9L9 12L12 15L15 12L12 9Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tight text-foreground">
                AutoProcess
              </span>
              <span className="text-2xl font-black tracking-tight text-primary ml-0.5">
                X
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Cookies</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/oscar-alvarez-romani-7882302b3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-foreground hover:border-primary hover:bg-primary/5 transition-all cursor-pointer shadow-sm group/sm"
              aria-label="LinkedIn"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current text-foreground group-hover/sm:text-primary" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center text-[10px] font-black uppercase tracking-[0.2em] border-t border-gray-100 pt-10 opacity-30">
          © {new Date().getFullYear()} AutoProcessX — Empresa de Inteligencia Artificial y Automatización de Procesos en Barcelona · n8n Gold Partner
        </div>
      </div>
    </footer>
  )
}
