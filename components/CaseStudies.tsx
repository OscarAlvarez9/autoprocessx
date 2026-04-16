"use client"

import { motion } from "framer-motion"
import { Rocket, CheckCircle2, ArrowUpRight, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { caseStudies } from "@/lib/cases"

export default function CaseStudies() {
  return (
    <section id="casos" className="py-20 lg:py-40 bg-white text-foreground overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Flagship Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16 lg:mb-32 gap-8 lg:gap-12">
            <div className="max-w-3xl">
                <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                    <div className="h-[2px] w-8 lg:w-12 bg-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] text-secondary">Algunos de nuestros proyectos</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-[84px] font-black mb-6 lg:mb-10 tracking-tighter leading-[1] lg:leading-[0.9] text-foreground">
                    Nuestros proyectos y <br className="hidden md:block" />
                    <span className="text-secondary italic">socios activos.</span>
                </h2>
                <p className="text-foreground/40 text-lg md:text-xl lg:text-2xl font-medium max-w-xl leading-relaxed italic">
                    Nos enfocamos en resultados tangibles: procesos más ágiles, equipos con menos carga operativa y una base sólida para crecer.
                </p>
            </div>
            
            <div className="w-full lg:w-auto lg:pt-20">
                <div className="p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] bg-muted/30 border border-gray-100 backdrop-blur-xl">
                    <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-4">
                        <div className="h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-secondary animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40">System Tracking</span>
                    </div>
                    <div className="text-xl lg:text-2xl font-black text-foreground tracking-tighter italic">Performance Active</div>
                </div>
            </div>
        </div>

        {/* Flagship Case Grid */}
        <div className="space-y-20 lg:space-y-32">
            {caseStudies.map((project, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="hidden lg:block absolute -inset-4 bg-gradient-to-br from-gray-100 to-transparent rounded-[72px] -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className={`relative ${project.theme === 'dark' || project.logo.includes('workflow') ? 'aspect-auto min-h-[300px] bg-[#0a0a0a]' : 'aspect-[4/3] bg-white'} rounded-[24px] lg:rounded-[64px] overflow-hidden border border-gray-100 shadow-xl lg:shadow-2xl flex items-center justify-center`}>
                            <Image 
                                src={project.logo} 
                                alt={project.title} 
                                fill={true}
                                className={`${project.logo.includes('platform') || project.logo.includes('dashboard') || project.logo.includes('opoai') ? 'object-cover' : 'object-contain p-12'} lg:group-hover:scale-105 transition-transform duration-[2000ms] ease-out`}
                            />
                            {/* Technical Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-32 lg:h-40 bg-gradient-to-t from-black/5 lg:from-black/5 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 text-left lg:px-4">
                        <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-10">
                            <span className="text-primary text-3xl lg:text-4xl font-black italic opacity-20">{project.id}</span>
                            <div className="h-[1px] flex-grow bg-gray-100" />
                            <div className="px-3 py-1.5 lg:px-5 lg:py-2 rounded-full bg-primary/5 text-primary text-[9px] lg:text-[10px] font-black uppercase tracking-widest border border-primary/10">{project.client}</div>
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-black mb-4 lg:mb-8 tracking-tighter leading-tight text-foreground">{project.title}</h3>
                        <p className="text-foreground/50 mb-8 lg:mb-12 text-base md:text-lg lg:text-xl font-medium leading-relaxed italic">{project.desc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-8 lg:mb-12">
                            {project.tags?.map((tag: string, idx: number) => (
                                <span key={idx} className="px-3 py-1.5 rounded-full bg-muted text-[10px] font-black uppercase tracking-widest text-foreground/50 border border-gray-100">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8">
                            <Link href={`/casos-de-exito/${project.slug}`} className="w-full sm:w-auto">
                                <Button 
                                    size="lg" 
                                    variant="outline"
                                    className="w-full h-14 lg:h-16 px-8 lg:px-10 rounded-2xl border-2 border-primary/10 text-primary font-black hover:bg-primary/5 group transition-all"
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        Explorar Specs
                                        <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Global CTA */}
        <div className="mt-40 text-center">
             <Link href="/casos-de-exito">
                 <Button className="h-20 px-12 rounded-full bg-primary hover:bg-primary/90 text-white text-xl font-black shadow-[0_20px_40px_-10px_rgba(15,71,175,0.3)] transition-all hover:scale-105 group">
                    <span className="flex items-center gap-4">
                        Explorar todos los despliegues técnicos
                        <Globe className="h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                    </span>
                 </Button>
             </Link>
        </div>
      </div>
    </section>
  )
}

function ActivityIcon({ className }: { className?: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
    )
}
