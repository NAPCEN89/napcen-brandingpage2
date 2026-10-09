"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Droplet, Wind, Grip, Fan, Table, Beaker, RefreshCcw, Share2, Leaf, Shield, Settings, BarChart3, Phone, Mail, MapPin, ChevronRight, Target, Sliders, Layers, Briefcase, Factory, LifeBuoy, Globe, Users, FileText, Send, Cloud, FlaskConical, Pill, Car, PaintRoller, Utensils, Cpu, Scissors, Gem, FileSearch, MonitorCog, Wrench, Headset, Building2, Anchor, FileBadge, ArrowRight, Plane, Thermometer, Activity, BarChart2, Info, PenTool, Truck, CheckSquare, Plus, Zap, Grid, Flame, Columns, Hexagon, CircleDot } from "lucide-react";
import { Footer } from "@/components/ui/modem-animated-footer";
import ThreeBackground from "@/components/napcen-landing/ThreeBackground";
import LogoTicker from "@/components/napcen-landing/LogoTicker";

import { CircularTestimonials } from '@/components/ui/circular-testimonials';

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const clientTestimonials = [
  {
    quote: "We are very satisfied with NAPCEN's wet scrubber. It delivers excellent performance in controlling fumes and gases, helping us achieve a cleaner and safer working environment.",
    name: "GFC Recycling",
    designation: "Wet Scrubber · Testimonial excerpt",
    src: "/clients/C1.png",
  },
  {
    quote: "NAPCEN's fume extraction system has made a clear difference on our shop floor. Emissions are well under control and our team now works in a much healthier atmosphere.",
    name: "PH1",
    designation: "Fume Extraction · Testimonial excerpt",
    src: "/clients/C2.png",
  },
  {
    quote: "The scrubber supplied by NAPCEN handles our acidic gases reliably, even in a highly corrosive environment. Robust build quality and very dependable after-sales support.",
    name: "Sanmar",
    designation: "Gas Scrubber · Testimonial excerpt",
    src: "/clients/C3.png",
  },
  {
    quote: "From design to commissioning, NAPCEN delivered on every promise. Their pollution control system helps us stay compliant while keeping our plant clean and safe.",
    name: "Coromandel",
    designation: "Air Pollution Control · Testimonial excerpt",
    src: "/clients/C5.png",
  },
  {
    quote: "The extraction and filtration unit provided by NAPCEN exceeded our expectations. Our facility is noticeably cleaner, and their team provided excellent technical guidance throughout the project.",
    name: "Biorad Medisys",
    designation: "Extraction System · Testimonial excerpt",
    src: "/clients/C6.png",
  },
  {
    quote: "We required a custom scrubber for our specialized process exhaust, and NAPCEN engineered exactly what we needed. The system operates with exceptional reliability with minimal maintenance.",
    name: "Canny Controls",
    designation: "Custom Scrubber System · Testimonial excerpt",
    src: "/clients/C7.png",
  },
];

export default function NapcenLandingPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", scrubber: "", pollutant: "", airflow: "", description: ""
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [productFilter, setProductFilter] = useState("All equipment");
  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thank you! Your inquiry has been successfully submitted.");
        setFormData({
          name: "", company: "", email: "", phone: "", scrubber: "", pollutant: "", airflow: "", description: ""
        });
      } else {
        alert("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-napcean-blue selection:text-white">
      {/* TOPBAR */}
      <div className="hidden lg:block bg-[#051124] text-slate-300 text-[11.5px] py-2 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">

          <div className="flex items-center gap-4 divide-x divide-white/10">
            <div className="flex items-center gap-1.5 text-emerald-500 font-bold tracking-wide">
              <Globe size={13} /> Global Engineering & Export Hub
            </div>

            <div className="flex items-center gap-1.5 pl-4 font-medium text-slate-300 tracking-wide">
              <Plane size={13} className="text-slate-400" /> Exporting to 30+ Countries
            </div>

            <div className="flex items-center gap-2 pl-4">
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">ISO 9001:2015</span>
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">CE MARKED</span>
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">ATEX / ASME</span>
            </div>
          </div>

          <div className="flex items-center gap-4 divide-x divide-white/10">
            <a href="mailto:info@napcen.com" className="flex items-center gap-1.5 font-medium hover:text-white transition-colors tracking-wide">
              <Mail size={13} className="text-blue-500" />
              info@napcen.com
            </a>

            <a href="tel:+917904469219" className="flex items-center gap-1.5 pl-4 text-white font-bold hover:text-emerald-400 transition-colors tracking-wide">
              <Phone size={13} className="text-emerald-500" /> +91 79044 69219
            </a>
          </div>

        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <a href="#" className="flex items-center gap-3">
            <Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={140} height={50} className="object-contain" />
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-700">
            <a href="#products" className="hover:text-primary-blue transition-colors">Scrubbers</a>
            <a href="#process" className="hover:text-primary-blue transition-colors">How it works</a>
            <a href="#engineering-checklist" className="hover:text-primary-blue transition-colors">Engineering</a>
            <a href="#industries" className="hover:text-primary-blue transition-colors">Industries</a>
            <a href="#about" className="hover:text-primary-blue transition-colors">Company</a>
            <a href="#faq" className="hover:text-primary-blue transition-colors">FAQ</a>

          </nav>
        </div>
      </header>

      <main>        {/* HERO SECTION */}
        <section className="relative bg-white overflow-hidden pt-16 pb-12">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-20 right-40 w-64 h-64 border border-blue-100 rounded-full opacity-50" />
            <div className="absolute top-40 right-20 w-[500px] h-[500px] border border-blue-50 rounded-full opacity-50" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 xl:gap-12 items-center md:items-stretch min-h-[480px]">

              {/* LEFT: TEXT & STATS */}
              <div className="w-full md:w-[45%] xl:w-[43%] flex flex-col justify-start pt-5 sm:pt-6 lg:pt-8">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    ENGINEERED AIR POLLUTION CONTROL
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-black text-[#0f1b3a] leading-[1.1] tracking-tight mb-6">
                  Industrial Wet <br />
                  Scrubber <br />
                  <span className="text-primary-blue">Manufacturer in India</span>
                </h1>

                <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  Purpose-engineered wet scrubber systems for chemical fumes, acid gases, soluble contaminants and particulate-laden exhaust. Designed around your process conditions—not around a catalogue size.
                </p>

                <div className="flex flex-wrap items-center gap-4 pb-8 w-full">
                  <a href="#contact" className="bg-primary-blue  text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-sm flex items-center gap-2">
                    Discuss Your Application <ArrowRight size={16} />
                  </a>
                  <a href="#products" className="bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold py-4 px-8 rounded-full transition-all shadow-sm text-sm flex items-center gap-2">
                    Explore Wet Scrubbers
                  </a>
                </div>

                <div className="flex flex-row justify-between items-start w-full pr-6 md:pr-12 lg:pr-16 xl:pr-20 pt-8 gap-2 md:gap-4 overflow-x-auto hide-scrollbar pb-2">
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <span className="text-[12px] xl:text-[13px] text-[#0f1b3a] font-bold whitespace-nowrap">Application-led</span>
                    <span className="text-[11px] xl:text-[12px] text-slate-500 whitespace-nowrap">System selection</span>
                  </div>
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <span className="text-[12px] xl:text-[13px] text-[#0f1b3a] font-bold whitespace-nowrap">Custom engineered</span>
                    <span className="text-[11px] xl:text-[12px] text-slate-500 whitespace-nowrap">Process-specific design</span>
                  </div>
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <span className="text-[12px] xl:text-[13px] text-[#0f1b3a] font-bold whitespace-nowrap">Corrosion aware</span>
                    <span className="text-[11px] xl:text-[12px] text-slate-500 whitespace-nowrap">Material selection</span>
                  </div>
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <span className="text-[12px] xl:text-[13px] text-[#0f1b3a] font-bold whitespace-nowrap">End-to-end</span>
                    <span className="text-[11px] xl:text-[12px] text-slate-500 whitespace-nowrap">Engineering to support</span>
                  </div>
                </div>
              </div>



              {/* RIGHT: FORM */}
              <div className="w-full md:w-[52%] xl:w-[54%] relative z-20 flex flex-col justify-start mt-12 md:mt-0 md:-ml-4 lg:-ml-8 xl:-ml-12" id="contact">
                <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase">
                      CONTACT DETAILS
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-[#0f1b3a] mb-3">Request an engineered quotation</h3>
                  <p className="text-[14px] text-slate-500 mb-6 font-medium leading-relaxed">Tell us what your process generates. Approximate values are welcome.</p>

                  <form onSubmit={handleDemoSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 xl:gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Name *</label>
                        <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Company *</label>
                        <input required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 xl:gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Work email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Phone *</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 xl:gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Select scrubber / duty</label>
                        <select value={formData.scrubber} onChange={(e) => setFormData({ ...formData, scrubber: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                          <option value="">Select scrubber / duty</option>
                          <option>Packed Bed Wet Scrubber</option>
                          <option>Venturi Scrubber</option>
                          <option>Acid / HCl Scrubber</option>
                          <option>Chlorine Scrubber</option>
                          <option>Vent Gas Scrubber</option>
                          <option>Incinerator Wet Scrubber</option>
                          <option>Not sure — need selection help</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Airflow (m³/h)</label>
                        <input value={formData.airflow} onChange={(e) => setFormData({ ...formData, airflow: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f1b3a]">Pollutant / contaminant</label>
                      <select value={formData.pollutant} onChange={(e) => setFormData({ ...formData, pollutant: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                        <option value="">Select pollutant</option>
                        <option>Hydrogen Chloride (HCl)</option>
                        <option>Hydrogen Fluoride (HF)</option>
                        <option>Hydrogen Sulfide (H₂S)</option>
                        <option>Sulfur Dioxide (SO₂)</option>
                        <option>Ammonia (NH₃)</option>
                        <option>Chlorine (Cl₂)</option>
                        <option>Nitric Acid Fumes</option>
                        <option>Sulfuric Acid Fumes</option>
                        <option>Chromic Acid Fumes</option>
                        <option>Chemical Vapors</option>
                        <option>Industrial Odour</option>
                        <option>Fine Particulate Matter</option>
                        <option>Other / Multiple pollutants</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f1b3a]">Temperature and application</label>
                      <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all min-h-[80px] resize-y font-medium text-slate-700 shadow-sm" />
                    </div>

                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      Required fields are marked *.
                    </p>

                    <div className="flex justify-end pt-2">
                      <button type="submit" className="w-full sm:w-auto px-8 sm:px-12 bg-[#0a5cbb] text-white font-black py-4 rounded-xl transition-all shadow-md text-sm lg:text-[15px] flex items-center justify-center gap-2 tracking-wide">
                        Send inquiry <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>

                  <div className="flex justify-center items-center gap-6 md:gap-10 mt-6 pt-4 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5"><Shield size={12} className="text-[#0f1b3a]" /> Quick Response</div>
                    <div className="flex items-center gap-1.5"><Users size={12} className="text-[#0f1b3a]" /> Expert Support</div>
                    <div className="flex items-center gap-1.5"><Settings size={12} className="text-[#0f1b3a]" /> Custom Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoTicker />
        {/* ABOUT NAPCEN SECTION */}
        <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
          {/* Background Pattern Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            {/* Large faint circles in corners */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/30 blur-3xl"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/30 blur-3xl"></div>

            {/* Dotted grid pattern clusters */}
            <div className="absolute top-12 left-12 w-24 h-24 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40"></div>
            <div className="absolute top-[40%] right-12 w-24 h-32 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40"></div>
            <div className="absolute bottom-16 left-1/3 w-32 h-16 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40"></div>
          </div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">

            {/* Left Image Side */}
            <div className="relative w-full aspect-square max-w-[550px] mx-auto lg:mx-0 mt-8 lg:mt-0">

              {/* Outer faint circle rings */}
              <div className="absolute inset-[-12%] rounded-full border border-blue-200/50 pointer-events-none"></div>
              <div className="absolute inset-[-6%] rounded-full border border-blue-300/50 pointer-events-none">
                {/* Dots on the ring */}
                <div className="absolute top-[18%] left-[8%] w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div>
                <div className="absolute bottom-[40%] left-[-1.5%] w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div>
              </div>

              {/* Main Circular Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-[6px] border-white z-10 bg-white">
                <Image
                  src="/About us napcen img.png"
                  alt="Industrial Facility"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Dark Card */}
              <div className="absolute bottom-[5%] left-[-5%] lg:left-[-15%] z-20 bg-[#0f1b3a] rounded-[20px] p-4 pr-8 flex items-center gap-4 shadow-2xl w-[95%] sm:w-auto">
                {/* Circle Icon */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0 shadow-inner">
                  <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" fill="white" />
                    <circle cx="12" cy="9" r="3.5" fill="#1e3a8a" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#3b82f6] font-extrabold text-[13px] tracking-wide">NAPCEN</span>
                  <span className="text-slate-300 text-[11px] font-medium leading-tight">Air pollution control equipment manufacturer</span>
                  <span className="text-slate-300 text-[11px] font-medium leading-tight">Villanur, Puducherry, India</span>
                </div>
              </div>
            </div>

            {/* Right Text Side */}
            <div className="flex flex-col max-w-xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase">
                  ABOUT NAPCEN
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-8">
                Industrial air<br />
                pollution control<br />
                engineering from<br />
                <span className="text-primary-blue">Puducherry, India</span>
              </h2>

              <p className="text-slate-500 text-[15.5px] leading-[1.7] font-medium mb-6">
                NAPCEN specializes in industrial air filtration and pollution-control systems for dust, fumes, corrosive gases, toxic vapours, oil mist, odours and other airborne contaminants. Its wider equipment portfolio includes wet and dry scrubbers, dust collectors, fume extraction systems and related air-pollution-control solutions.
              </p>

              <p className="text-slate-500 text-[15.5px] leading-[1.7] font-medium mb-10">
                For wet-scrubber projects, the focus is on matching equipment configuration to the actual emission stream and integrating the scrubber with the surrounding duct, fan, recirculation and control requirements.
              </p>

              <div>
                <a href="#contact" className="inline-flex items-center gap-3 bg-[#0f1b3a] hover:bg-[#1a2d5c] text-white font-bold py-4 px-9 rounded-full transition-all shadow-xl text-[14px]">
                  Visit NAPCEN main website <ArrowRight size={18} />
                </a>
              </div>
            </div>

          </div>
        </section>
        {/* WET SCRUBBER EXPLAINER SECTION */}
        <section id="how-it-works" className="py-20 bg-white border-t border-slate-100 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* LEFT — Labelled diagram */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
                <div className="relative overflow-hidden bg-transparent min-h-[500px] lg:min-h-[650px] flex items-center justify-center">

                  {/* NAPCEN badge top-left */}
                  <div className="absolute top-0 left-0 z-20 flex flex-col">
                    <span className="text-[11px] font-black text-[#0f1b3a] tracking-wider uppercase">NAPCEN</span>
                    <span className="text-[9px] text-slate-500 font-medium leading-none mt-0.5">industrial wet scrubber system</span>
                  </div>

                  {/* Tower image */}
                  <div className="relative w-full h-[500px] lg:h-[650px]">
                    <Image
                      src="/Industrial Wet Scrubber System Diagram.png"
                      alt="Wet scrubber diagram"
                      fill
                      className="object-contain object-center scale-110"
                    />
                  </div>

                  {/* Floating caption box over the image */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-[#0f1b3a]/95 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl z-20">
                    <p className="text-[12px] font-bold text-[#fdb714] mb-1">Wet scrubbing, engineered around the pollutant.</p>
                    <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                      Gas chemistry, loading, airflow, temperature and required outlet conditions determine the right configuration.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT — Text + feature cards */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col">
                <div className="flex items-center gap-3 mb-5">

                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase">WET SCRUBBER WORKING PRINCIPLE</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                  What is a wet scrubber—and <span className="text-primary-blue">how does it work?</span>
                </h2>

                <p className="text-slate-500 text-[15px] leading-relaxed font-medium mb-4">
                  A wet scrubber is an air pollution control system that contacts contaminated exhaust with a liquid. Depending on the application, pollutants are transferred into the liquid by absorption, reacted with a suitable reagent, or captured when particles collide with liquid droplets.
                </p>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium mb-10">
                  For gas absorption, packed media can create a large wetted surface for gas–liquid contact. For particulate duty, a Venturi can accelerate the gas and atomize liquid into fine droplets to increase particle capture. A downstream mist eliminator removes entrained droplets before the treated gas leaves the system.
                </p>

                {/* 4 feature cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { num: "01", title: "Gas–liquid contact", icon: Droplet },
                    { num: "02", title: "Absorption / reaction", icon: FlaskConical },
                    { num: "03", title: "Droplet separation", icon: Layers },
                    { num: "04", title: "Recirculation control", icon: RefreshCcw },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.num} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#3b82f6]/40 hover:bg-blue-50/30 transition-all group cursor-default">
                        <div className="w-9 h-9 bg-transparent flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#3b82f6]" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] font-black text-[#0f1b3a] leading-tight">{item.title}</div>
                        </div>
                        <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-[#3b82f6] flex-shrink-0 transition-colors" />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* PROCESS SEQUENCE SECTION */}
        <section id="process" className="py-24 bg-black relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {/* Header Area */}
            <div className="mb-20 text-center max-w-4xl mx-auto flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-slate-400 font-bold text-[11px] tracking-[0.2em] uppercase">
                  ENGINEERING APPROACH
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-white leading-[1.1] tracking-tight mb-6">
                From process data <br className="hidden md:block" />
                to a complete wet scrubber system
              </h2>
              <p className="text-slate-400 text-[15px] lg:text-[17px] leading-relaxed font-medium max-w-3xl mx-auto">
                A good scrubber starts with correct process information. Our workflow is structured around your actual emission-control requirement.
              </p>
            </div>

            {/* Steps Container */}
            <div className="relative mt-12">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-[16px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Process Study",
                    desc: "Understand source, pollutant and operating conditions.",
                    icon: FileSearch
                  },
                  {
                    step: "02",
                    title: "Design Basis",
                    desc: "Establish airflow, concentration and target limits.",
                    icon: PenTool
                  },
                  {
                    step: "03",
                    title: "Scrubber Selection",
                    desc: "Choose the suitable gas-liquid contact technology.",
                    icon: Droplet
                  },
                  {
                    step: "04",
                    title: "Engineering",
                    desc: "Size tower, packing, nozzles, pump and accessories.",
                    icon: Settings
                  },
                  {
                    step: "05",
                    title: "Fabrication",
                    desc: "Manufacture with suitable construction materials.",
                    icon: Wrench
                  },
                  {
                    step: "06",
                    title: "Support",
                    desc: "Installation guidance, commissioning and service support.",
                    icon: Headset
                  }
                ].map((item, i, arr) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="relative pt-6">

                      {/* Connecting Arrows (Desktop) */}
                      {i < arr.length - 1 && (
                        <div className="hidden lg:flex absolute top-[6px] -right-[12px] w-5 h-5 bg-black border-2 border-white/20 rounded-full items-center justify-center z-20">
                          <ChevronRight className="w-3 h-3 text-slate-400" strokeWidth={3} />
                        </div>
                      )}

                      {/* Card */}
                      <div className="bg-white/[0.04] rounded-2xl rounded-tl-[40px] border border-white/10 hover:border-[#3b82f6]/50 hover:bg-white/[0.07] transition-all p-6 pt-12 h-full flex flex-col relative group">

                        {/* Number Badge */}
                        <div className="absolute -top-5 -left-1 lg:-left-3 w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold text-[15px] shadow-lg border-[3px] border-black group-hover:scale-110 transition-transform z-10">
                          {item.step}
                        </div>

                        {/* Image/Icon Placeholder */}
                        <div className="w-full h-32 bg-white/[0.03] rounded-xl mb-6 flex items-center justify-center text-[#3b82f6]/60 group-hover:bg-[#3b82f6]/10 group-hover:text-[#3b82f6] transition-colors border border-white/5">
                          <Icon size={44} strokeWidth={1.5} />
                        </div>

                        <h3 className="text-[17px] font-black text-white mb-3">{item.title}</h3>
                        <p className="text-slate-400 text-[12px] leading-[1.6] font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* SOLUTIONS SECTION */}
        <section id="applications" className="py-24 bg-white relative overflow-hidden">
          <div className="w-full px-6 md:px-12 2xl:px-24">

            {/* Header Area */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start lg:items-end mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl">
                <div className="mb-4">
                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase">
                    FEATURES & BENEFITS
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight">
                  Designed for<br />
                  controllability,<br />
                  maintainability and<br />
                  <span className="text-primary-blue">process fit</span>
                </h2>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-md lg:mb-4 shrink-0">
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                  Good wet-scrubber performance depends on stable operating parameters and maintainable gas–liquid contact—not on a single headline efficiency figure.
                </p>
              </motion.div>
            </div>

            {/* Feature Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
                { sub: "ENGINEERING", title: "Application-specific configuration", desc: "Packed bed, Venturi or other wet-contact arrangement selected against pollutant behaviour and process duty.", icon: Settings },
                { sub: "MATERIALS", title: "Corrosion-conscious construction", desc: "Material selection can be matched to gas chemistry, scrubbing liquid, temperature and mechanical requirements.", icon: Shield },
                { sub: "CONTROL", title: "Process monitoring", desc: "Pressure differential, liquid flow and chemistry-related parameters can be incorporated according to the control philosophy.", icon: Activity },
                { sub: "SEPARATION", title: "Mist elimination", desc: "Entrainment control helps retain contaminated droplets in the system before treated gas discharge.", icon: Wind },
                { sub: "ACCESS", title: "Maintenance-oriented layout", desc: "Access to pumps, nozzles, packing and mist eliminator can be considered during equipment arrangement.", icon: Wrench },
                { sub: "INTEGRATION", title: "Complete system approach", desc: "Scrubber, recirculation, ducting, fan and controls can be coordinated as one engineered pollution-control system.", icon: Layers }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 lg:p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all min-h-[240px] flex flex-col justify-start group overflow-hidden">

                    {/* Background faint icon */}
                    <div className="absolute -bottom-8 -right-8 text-slate-100/60 group-hover:text-primary-blue/5 transition-colors duration-500 pointer-events-none z-0">
                      <Icon size={160} strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <div className="text-slate-400 font-bold text-[10px] tracking-[0.2em] uppercase mb-4 transition-colors group-hover:text-primary-blue">
                        {item.sub}
                      </div>
                      <h3 className="text-[17px] md:text-lg font-bold mb-3 text-[#0f1b3a] leading-snug">{item.title}</h3>
                      <p className="text-slate-500 text-[13px] font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </section>
        {/* PRODUCTS SECTION */}
        <section id="products" className="py-24 bg-white relative overflow-hidden">
          <div className="w-full px-4 md:px-8 xl:px-12 2xl:px-16">
            {/* Header Area */}
            {/* Header Area */}
            <div className="relative min-h-[380px] lg:min-h-[400px] mb-8 lg:mb-1 flex items-center">

              {/* Background Image Container */}
              <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] z-0 pointer-events-none">
                <Image
                  src="/Industrial Scrubber Tower Blueprint.png"
                  alt="Industrial Scrubber Tower Blueprint"
                  fill
                  className="object-contain object-right"
                  priority
                />
                {/* Gradient masks to blend the image perfectly into the white background */}
                <div className="absolute inset-y-0 left-0 w-1/2 lg:w-[40%] bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 w-full py-4 lg:py-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full max-w-full lg:max-w-5xl">
                  {/* Title block */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#0f1b3a] font-bold text-[11px] tracking-[0.2em] uppercase">WET SCRUBBER PORTFOLIO</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-[72px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-8">
                    Wet scrubber<br />
                    systems for different<br />
                    <span className="text-primary-blue">emission challenges</span>
                  </h2>

                  {/* Paragraph block */}
                  <div className="max-w-md bg-white/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-4 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-white/50 lg:border-none">
                    <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                      NAPCEN's wet-scrubber portfolio is organized around the contaminant and process duty. Final selection should follow an engineering review of the actual exhaust stream.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Product Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5">
              {[
                {
                  category: "GAS ABSORPTION",
                  title: "Packed Bed Wet Scrubber",
                  desc: "Large wetted packing area supports efficient gas-liquid contact for soluble and reactive gaseous contaminants. Available as a process-specific absorption system with recirculation and mist elimination.",
                  btnText: "Request design review →",
                  icon: Droplet,
                  image: "/Industrial Processing Tower with Yellow Platforms.png",
                  equipmentSelect: "Packed Bed Wet Scrubber",
                  filterTag: "Scrubbers"
                },
                {
                  category: "PARTICULATE DUTY",
                  title: "Venturi Scrubber",
                  desc: "High-velocity throat contact atomizes scrubbing liquid and promotes particle-droplet interaction. Suitable where particulate capture and robust wet handling are central to the duty.",
                  btnText: "Discuss Venturi duty →",
                  icon: Wind,
                  image: "/Industrial Tower with Yellow Safety Railings.png",
                  equipmentSelect: "Venturi Scrubber",
                  filterTag: "Scrubbers"
                },
                {
                  category: "ACID FUMES",
                  title: "HCl / Acid Fume Scrubber",
                  desc: "Engineered for corrosive acid-gas service with suitable absorbent chemistry, liquid distribution and corrosion-resistant material selection based on process conditions.",
                  btnText: "Share gas data →",
                  icon: Droplet,
                  image: "/Industrial Processing Tower with Yellow Platforms (1).png",
                  equipmentSelect: "Acid / HCl Scrubber",
                  filterTag: "Scrubbers"
                },
                {
                  category: "EMERGENCY & PROCESS",
                  title: "Chlorine Scrubber",
                  desc: "Process-specific scrubbing systems for chlorine-bearing exhaust or vent streams, designed around expected release scenario, gas load, chemistry and required treatment duty.",
                  btnText: "Discuss chlorine duty →",
                  icon: Shield,
                  image: "/Industrial Scrubber Tower with Yellow Safety Rails.png",
                  equipmentSelect: "Chlorine Scrubber",
                  filterTag: "Scrubbers"
                },
                {
                  category: "PROCESS VENTS",
                  title: "Vent Gas Scrubber",
                  desc: "Custom treatment for tank vents, process vessels and intermittent or continuous gaseous emissions where pollutant solubility and chemistry favour wet absorption.",
                  btnText: "Send vent conditions →",
                  icon: Wind,
                  image: "/Industrial Processing Tower with Yellow Platforms (2).png",
                  equipmentSelect: "Vent Gas Scrubber",
                  filterTag: "Scrubbers"
                },
                {
                  category: "HOT EXHAUST",
                  title: "Incinerator Wet Scrubber",
                  desc: "Wet treatment arrangements for suitable incinerator exhaust duties, configured around inlet temperature, pollutant mix, particulate loading and downstream liquid management.",
                  btnText: "Review exhaust data →",
                  icon: Fan,
                  image: "/Industrial Scrubber Vessel Assembly.png",
                  equipmentSelect: "Incinerator Wet Scrubber",
                  filterTag: "Scrubbers"
                }
              ]
                .filter(item => productFilter === "All equipment" || item.filterTag === productFilter)
                .map((item, i) => {
                  const Icon = item.icon;
                  const isHighlight = false;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="relative p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-blue/30 transition-all group overflow-hidden min-h-[300px] flex flex-col justify-between">

                      {/* Content - restricted width to avoid overlapping image */}
                      <div className="relative z-20 w-[60%] lg:w-[65%] flex flex-col h-full">
                        {/* Top Category */}
                        <div className="flex items-center gap-2 mb-5">
                          <span className="text-primary-blue font-black text-sm tracking-widest">0{i + 1}</span>
                          <span className="text-slate-300">/</span>
                          <span className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">{item.category}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-[#0f1b3a] pr-2">{item.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium pr-2">{item.desc}</p>

                        {(item as any).extraLabel && (
                          <div className="mb-4">
                            <span className="font-bold text-[10px] text-slate-700 uppercase">{(item as any).extraLabel}:</span>
                            <span className="text-xs text-slate-500 ml-2">{(item as any).extraText}</span>
                          </div>
                        )}

                        <div className="mt-auto pt-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setFormData({ ...formData, scrubber: item.equipmentSelect || "" });
                              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0f1b3a] group-hover:text-primary-blue transition-colors border-b-2 border-primary-blue/30 group-hover:border-primary-blue pb-1"
                          >
                            {item.btnText}
                          </button>
                        </div>
                      </div>

                      {/* Scrubber Image */}
                      <div className="absolute right-0 bottom-0 w-[45%] lg:w-[42%] h-[90%] z-10 group-hover:scale-105 group-hover:-translate-x-2 transition-transform duration-500 flex items-end justify-end pointer-events-none">
                        <div className="relative w-full h-full">
                          <Image src={item.image} alt={item.title} fill className="object-contain object-bottom drop-shadow-xl" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>

            {/* Bottom Footer for Products Section */}
            <div className="mt-16 flex justify-between items-center text-xs text-slate-400 font-bold tracking-widest uppercase">
              <div className="flex items-center gap-4">
                Engineered for a cleaner tomorrow
              </div>
              <div className="hidden md:flex gap-4">
                <span>Air</span>
                <span className="text-slate-300">/</span>
                <span>People</span>
                <span className="text-slate-300">/</span>
                <span>Industry</span>
              </div>
            </div>
          </div>
        </section>
        {/* POLLUTANT CONTROL APPLICATIONS SECTION */}
        <section id="pollutants" className="py-24 bg-black relative overflow-hidden">
          {/* Subtle glow + grid accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#3b82f6]/15 blur-[140px] rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto flex flex-col items-center"
            >
              <span className="text-slate-400 font-bold text-[11px] tracking-[0.2em] uppercase">
                Pollutant Control Applications
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-white leading-[1.1] tracking-tight mb-6">
                Wet scrubbers for gases, fumes, <br className="hidden md:block" />
                vapors and particulate emissions
              </h2>
              <p className="text-slate-400 text-[15px] lg:text-[17px] leading-relaxed font-medium max-w-3xl mx-auto">
                Actual removal performance depends on the pollutant, concentration, gas flow, temperature, chemistry and equipment design. Ask NAPCEN for an application-specific assessment.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mt-14 flex flex-wrap justify-center gap-3"
            >
              {[
                "Hydrogen Chloride (HCl)",
                "Hydrogen Fluoride (HF)",
                "Hydrogen Sulfide (H₂S)",
                "Sulfur Dioxide (SO₂)",
                "Ammonia (NH₃)",
                "Chlorine (Cl₂)",
                "Nitric Acid Fumes",
                "Sulfuric Acid Fumes",
                "Chromic Acid Fumes",
                "Chemical Vapors",
                "Industrial Odour",
                "Fine Particulate Matter",
              ].map((pollutant) => (
                <motion.span
                  key={pollutant}
                  variants={scaleUp}
                  className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-white text-[13px] font-bold hover:bg-[#3b82f6]/15 hover:border-[#3b82f6]/50 hover:text-[#93c5fd] hover:-translate-y-0.5 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {pollutant}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ENGINEERING INPUTS CHECKLIST SECTION */}
        <section id="engineering-checklist" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">

              {/* Left Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase">WET SCRUBBER DESIGN & PERFORMANCE</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                  Engineering starts<br />
                  with the <span className="text-primary-blue">exhaust<br />stream.</span>
                </h2>

                <p className="text-slate-500 text-[15px] leading-relaxed font-medium mb-10 max-w-lg">
                  A credible wet scrubber design cannot be selected from airflow alone. NAPCEN's application review considers pollutant chemistry, concentration, temperature, particulate characteristics, moisture, target outlet condition, available utilities and material compatibility.
                </p>

                <div className="space-y-3">
                  {[
                    { num: '01', title: 'Airflow & gas conditions', desc: 'Actual/standard flow, temperature, pressure, humidity and process variability.', icon: Wind },
                    { num: '02', title: 'Pollutant characterization', desc: 'Gas species, concentration, particulate loading and particle size where relevant.', icon: FlaskConical },
                    { num: '03', title: 'Absorbent & chemistry', desc: 'Water or reagent selection, pH strategy and expected reaction/absorption behaviour.', icon: Droplet },
                    { num: '04', title: 'Hydraulics & internals', desc: 'Liquid distribution, packing or throat design, mist elimination and recirculation.', icon: Settings },
                    { num: '05', title: 'Materials & lifecycle', desc: 'Construction selected for temperature, corrosion environment, mechanical duty and maintenance access.', icon: Layers },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 group cursor-default">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50/50 group-hover:bg-blue-100/50 transition-colors shrink-0">
                        <item.icon className="w-[18px] h-[18px] text-primary-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#0f1b3a] font-bold text-[14px] mb-0.5">{item.title}</h4>
                        <p className="text-slate-500 text-[12px] leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 group-hover:border-primary-blue transition-colors shrink-0">
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-blue transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#12161b] rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden h-full flex flex-col border border-white/5">
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[28px] font-bold text-white tracking-tight">Typical engineering inputs</h3>
                </div>
                <p className="text-slate-400 text-[13px] font-medium mb-8">
                  Key parameters used for wet scrubber design & performance evaluation.
                </p>

                {/* Table/List */}
                <div className="flex-1 space-y-2">
                  {[
                    { icon: Wind, title: 'Gas flow', sub: 'Volumetric or mass flow rate', value: 'm³/h or Nm³/h' },
                    { icon: Thermometer, title: 'Inlet temperature', sub: 'Process gas temperature', value: '°C' },
                    { icon: FlaskConical, title: 'Pollutant', sub: 'Target contaminants', value: 'Gas / fume / PM' },
                    { icon: BarChart2, title: 'Inlet loading', sub: 'Concentration at inlet', value: 'ppm / mg·Nm⁻³' },
                    { icon: Target, title: 'Required outlet', sub: 'Target emission limit', value: 'Project-specific' },
                    { icon: Droplet, title: 'Scrubbing medium', sub: 'Liquid or reagent', value: 'Water / reagent' },
                    { icon: Layers, title: 'Materials', sub: 'Construction material', value: 'Selected by duty' },
                    { icon: Activity, title: 'Monitoring', sub: 'Key performance parameters', value: 'ΔP · flow · pH*' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group cursor-default">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="text-slate-200 text-[14px] font-bold mb-0.5">{item.title}</div>
                          <div className="text-slate-500 text-[12px]">{item.sub}</div>
                        </div>
                      </div>
                      <div className="text-[#64b5f6] text-[13px] font-bold text-right pl-4">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Info Box */}
                <div className="mt-8 flex gap-4 bg-[#1f252d] rounded-2xl p-4 lg:p-5 border border-[#1e3a8a]/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/10 z-0"></div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white shrink-0 z-10">
                    <Info className="w-4 h-4" />
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed relative z-10 font-medium my-auto">
                    *Instrumentation depends on process and control philosophy. Final performance is established from approved design basis and operating conditions.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section id="industries" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start lg:items-end mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl">
                <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">
                  Applications across industry
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight">
                  Wet scrubbing for demanding <span className="text-primary-blue">industrial processes</span>
                </h2>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-md lg:mb-4 shrink-0">
                <p className="text-slate-500 text-base leading-relaxed font-medium">
                  Wet scrubbers can serve a broad range of industrial exhaust duties when pollutant properties, process conditions and treatment chemistry are compatible with wet collection.
                </p>
              </motion.div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Chemical Processing", desc: "Acid fumes, soluble gases, process vents and reaction exhaust.", image: "/INDUSTRIAL/Sunset%20Petrochemical%20Refinery%20Panorama.png" },
                { title: "Metal Processing", desc: "Pickling, surface treatment and suitable acid-mist or chemical-fume duties.", image: "/INDUSTRIAL/Steelworks%20to%20Smart%20Automotive%20Assembly.png" },
                { title: "Mining & Minerals", desc: "Wet particulate capture for appropriate crushing, handling or process exhaust.", image: "/INDUSTRIAL/Sunlit%20Aggregate%20Plant%20and%20Quarry.png" },
                { title: "Pharmaceuticals", desc: "Selected process fumes and chemical exhaust requiring controlled treatment.", image: "/INDUSTRIAL/Futuristic%20Pharmaceutical%20Research%20and%20Production%20Facility.png" },
                { title: "Incineration", desc: "Selected hot-gas treatment arrangements based on exhaust composition and temperature.", image: "/INDUSTRIAL/Industrial%20Power%20Plant%20at%20Sunset.png" },
                { title: "Oil & Gas", desc: "Selected process vents and soluble/reactive gas duties after application assessment.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
                { title: "Paint & Coatings", desc: "Process-specific exhaust treatment after contaminant and solvent review.", image: "/INDUSTRIAL/Vibrant%20Paint%20and%20Printing%20Factory.png" },
                { title: "Electronics", desc: "Process exhaust where compatible soluble or reactive gases require scrubbing.", image: "/INDUSTRIAL/High-Tech%20Semiconductor%20Cleanroom%20Montage.png" }
              ].map((ind, i) => {
                const isBlue = i % 2 === 0;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 min-h-[200px] group flex">
                    {/* Background Image */}
                    <div className="absolute inset-0 right-0 w-full h-full z-0">
                      <Image src={ind.image} fill className="object-cover object-right group-hover:scale-105 transition-transform duration-700" alt={ind.title} />
                    </div>

                    {/* White Curved Overlay */}
                    <div className="absolute inset-0 w-[68%] h-full z-10 pointer-events-none">
                      <svg className="w-full h-full drop-shadow-[4px_0_8px_rgba(0,0,0,0.06)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,0 L75,0 C75,35 100,55 100,100 L0,100 Z" fill="white" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 w-[55%] p-5 md:p-6 flex flex-col justify-center">

                      <h3 className="text-[16px] md:text-lg font-black text-[#0f1b3a] mb-3 leading-snug">{ind.title}</h3>
                      <p className="text-[11px] md:text-[12px] text-slate-500 leading-relaxed font-medium">{ind.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* INSTALLATION SECTION */}
        <section id="installation" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="w-full max-w-full overflow-hidden">
              {/* Header Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center"
              >
                <div className="flex items-center justify-center gap-2 text-primary-gray font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
                  Installation & commissioning
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f1b3a] tracking-tight mb-4">
                  A disciplined route from process data<br className="hidden md:block" /> to operating system
                </h3>
                <p className="text-slate-500 font-medium text-[15px] md:text-base leading-relaxed max-w-2xl">
                  Project scope can be configured around the customer's requirement. The sequence below shows a typical engineering workflow rather than a fixed contractual scope.
                </p>
              </motion.div>

              {/* Pipeline Workflow Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="w-full"
              >
                <div className="flex overflow-x-auto lg:overflow-visible pb-12 hide-scrollbar lg:justify-between items-start gap-4 lg:gap-0 snap-x snap-mandatory">
                  {[
                    {
                      step: "01",
                      title: "Application study",
                      desc: "Collect process, pollutant, airflow, temperature, utility and site data.",
                      color: "text-blue-600", bg: "bg-blue-600", borderColor: "border-blue-600",
                      image: "/INDUSTRIAL/Engineers Inspecting a Modern Chemical Plant.png"
                    },
                    {
                      step: "02",
                      title: "Design basis",
                      desc: "Define scrubber type, contact method, materials, hydraulics and system pressure requirements.",
                      color: "text-sky-500", bg: "bg-sky-500", borderColor: "border-sky-500",
                      image: "/INDUSTRIAL/Industrial%20Process%20Design%20Workstation.png"
                    },
                    {
                      step: "03",
                      title: "Detailed engineering",
                      desc: "Develop equipment arrangement, connections, recirculation and instrumentation requirements.",
                      color: "text-teal-400", bg: "bg-teal-400", borderColor: "border-teal-400",
                      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80"
                    },
                    {
                      step: "04",
                      title: "Manufacturing",
                      desc: "Fabricate the approved system and carry out applicable in-house quality checks.",
                      color: "text-green-500", bg: "bg-green-500", borderColor: "border-green-500",
                      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80"
                    },
                    {
                      step: "05",
                      title: "Dispatch & erection",
                      desc: "Coordinate delivery and site installation where included in the agreed project scope.",
                      color: "text-yellow-500", bg: "bg-yellow-500", borderColor: "border-yellow-500",
                      image: "/INDUSTRIAL/Steelworks%20to%20Smart%20Automotive%20Assembly.png"
                    },
                    {
                      step: "06",
                      title: "Commissioning",
                      desc: "Verify rotation, flow, pumps, liquid distribution, controls and operating parameters.",
                      color: "text-orange-500", bg: "bg-orange-500", borderColor: "border-orange-500",
                      image: "/INDUSTRIAL/Precision Inspection of a Stainless Vessel.png"
                    },
                    {
                      step: "07",
                      title: "Performance review",
                      desc: "Stabilize operation against the approved design basis and agreed verification method.",
                      color: "text-red-500", bg: "bg-red-500", borderColor: "border-red-500",
                      image: "/INDUSTRIAL/Industrial%20Dispatch%20and%20Crane%20Installation.png"
                    },
                    {
                      step: "08",
                      title: "After-sales support",
                      desc: "Support operation, maintenance planning and replacement requirements as applicable.",
                      color: "text-purple-600", bg: "bg-purple-600", borderColor: "border-purple-600",
                      image: "/Industrial After-Sales Support Workflow.png"
                    }
                  ].map((item, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center text-center relative group w-[220px] lg:w-[11%] shrink-0 snap-center">
                        <div className="relative mb-5 inline-block">
                          <div className={`w-28 h-28 lg:w-32 lg:h-32 rounded-full border-[3px] p-1 lg:p-1.5 transition-colors duration-300 bg-white ${item.borderColor}`}>
                            <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100">
                              <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 112px, 128px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                          </div>

                          <div className={`absolute -top-1 -left-1 w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center text-white font-bold text-[13px] lg:text-sm border-2 border-white shadow-sm z-10 ${item.bg}`}>
                            {item.step}
                          </div>
                        </div>

                        <h4 className="text-[15px] lg:text-[16px] font-black text-[#0f1b3a] mb-2 leading-tight px-1">{item.title}</h4>
                        <p className="text-[11px] lg:text-[12px] text-slate-500 leading-relaxed font-medium px-1">{item.desc}</p>
                      </div>

                      {i < arr.length - 1 && (
                        <div className="hidden lg:flex flex-1 items-center justify-center relative min-w-[10px]" style={{ height: '128px' }}>
                          <div className={`h-[2px] w-full ${arr[i + 1].bg}`}></div>
                          <div className={`absolute right-0 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-current ${arr[i + 1].color}`} style={{ right: '-3px' }}></div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY NAPCEN SECTION */}
        <section id="why-napcen" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {/* Header Area */}
            <div className="mb-20 text-center max-w-4xl mx-auto flex flex-col items-center">
              <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">
                Why industries choose NAPCEN
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#0f1b3a] leading-[1.1] tracking-tight mb-6">
                Engineering-led air <span className="text-primary-blue">pollution control</span>
              </h2>
            </div>

            {/* Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
                { title: "Application-Based Design", desc: "Scrubber selection and sizing are based on process conditions rather than simply choosing a standard unit.", icon: Settings },
                { title: "Corrosion-Aware Materials", desc: "Construction materials and internal components can be selected to suit chemical exposure and operating conditions.", icon: Shield },
                { title: "Complete Air Pollution Control", desc: "Connect the scrubber with ducting, pumps, fans, mist eliminators and other required system components.", icon: ArrowRight },
                { title: "Maintenance Focus", desc: "Access, nozzles, packing, pumps and operating parameters are considered for practical maintenance.", icon: Wrench },
                { title: "Site-Specific Engineering", desc: "Equipment can be developed around available space, inlet and outlet ducting, utilities and installation conditions.", icon: PenTool },
                { title: "Technical Support", desc: "Get assistance from enquiry and design through fabrication, installation guidance and after-sales support.", icon: Headset }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all group flex flex-col">
                    <div className="w-12 h-12 rounded-[14px] bg-blue-50/80 text-primary-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0f1b3a] mb-3 leading-snug">{item.title}</h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* QUALITY ASSURANCE SECTION */}
        <section id="quality" className="pt-24 pb-20 bg-white relative overflow-hidden border-t border-slate-100">

          {/* Right Side Background Scrubber Image */}
          <div className="absolute top-[5%] right-0 w-full lg:w-[50%] h-[90%] pointer-events-none hidden lg:block opacity-90 z-0">
            <Image
              src="/Industrial Scrubber Tower with Yellow Safety Rails.png"
              alt="Quality Assurance Scrubber"
              fill
              className="object-contain object-right-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Annotations */}
            <div className="absolute top-[10%] lg:top-[12%] left-[20%] lg:left-[22%] flex flex-col items-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fdb714]"></div>
                <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-widest">PROCESS INPUTS</span>

                {/* Connecting Line (goes right) */}
                <svg className="overflow-visible relative z-0" width="1" height="1">
                  <path d="M0,0 L30,0 L30,40 L90,40" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="90" cy="40" r="2.5" fill="#fdb714" />
                </svg>
              </div>
              <span className="text-[10px] text-slate-500 pl-4 leading-none mt-1">Verified & controlled</span>
            </div>

            <div className="absolute top-[42%] left-[5%] lg:left-[8%] flex flex-col items-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fdb714]"></div>
                <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-widest">MATERIAL QUALITY</span>

                {/* Connecting Line (goes right) */}
                <svg className="overflow-visible relative z-0" width="1" height="1">
                  <path d="M0,0 L120,0" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="120" cy="0" r="2.5" fill="#fdb714" />
                </svg>
              </div>
              <span className="text-[10px] text-slate-500 pl-4 leading-none mt-1">As per specification</span>
            </div>

            <div className="absolute top-[35%] right-[-2%] lg:-right-[8%] flex flex-col items-start">
              <div className="flex items-center gap-2">
                {/* Connecting Line (goes left) */}
                <svg className="overflow-visible relative z-0" width="1" height="1">
                  <path d="M0,0 L-60,0 L-60,50 L-110,50" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="-110" cy="50" r="2.5" fill="#fdb714" />
                </svg>

                <div className="w-2 h-2 rounded-full bg-[#fdb714]"></div>
                <span className="text-[11px] font-extrabold text-slate-700 uppercase tracking-widest bg-white/40 backdrop-blur-sm rounded-sm">INSPECTION & TESTING</span>
              </div>
              <span className="text-[10px] text-slate-500 pl-[18px] leading-none mt-1 bg-white/40 backdrop-blur-sm rounded-sm inline-block">At every stage</span>
            </div>
          </div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {/* Top Area */}
            <div className="max-w-2xl mb-8 lg:mb-12 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase">
                  QUALITY ASSURANCE
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-8">
                Quality is built into<br />
                the design basis—<br />
                <span className="text-primary-blue">not added</span> at dispatch.
              </h2>
              <p className="text-slate-500 text-[15px] lg:text-lg leading-relaxed font-medium max-w-xl">
                Wet-scrubber quality starts with correct process inputs, compatible materials and fabrication against approved drawings. Inspection and testing should match the equipment material, service and agreed project documentation.
              </p>
            </div>

            {/* Quality Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-6 xl:gap-8">
              {[
                {
                  title: "Design review",
                  desc: "Process duty, configuration, interfaces and maintainability reviewed before fabrication.",
                  icon: FileSearch,
                  image: "/Industrial Blueprint Review Montage.png"
                },
                {
                  title: "Material verification",
                  desc: "Construction materials checked against the approved design and chemical-service requirements.",
                  icon: Layers,
                  image: "/Industrial Material Verification Inspection.png"
                },
                {
                  title: "Fabrication inspection",
                  desc: "Dimensional, workmanship and equipment-specific checks performed according to project requirements.",
                  icon: Factory,
                  image: "/Industrial Fabrication Inspection Scene.png"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="bg-white/95 backdrop-blur-sm rounded-[24px] border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_50px_rgb(0,0,0,0.1)] transition-all duration-300 group flex flex-col relative overflow-hidden">
                    <div className="p-8 pb-6 flex flex-col flex-1 relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        {/* <div className="flex flex-col gap-3">
                          <span className="text-slate-400 font-bold text-[15px] leading-none">0{i + 1}</span>
                        </div>
                        <div className="w-[50px] h-[50px] rounded-full bg-[#fdf8ed] text-[#0f1b3a] flex items-center justify-center transition-transform group-hover:scale-110">
                          <Icon size={22} strokeWidth={1.5} />
                        </div> */}
                      </div>
                      <h3 className="text-[20px] font-bold text-[#0f1b3a] mb-3">{item.title}</h3>
                      <p className="text-slate-500 text-[13px] leading-relaxed font-medium">{item.desc}</p>
                    </div>

                    <div className="relative w-full h-[180px] mt-auto p-3 pt-0">
                      <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />

                        {/* Gradient for readability */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white/90 via-white/50 to-transparent z-10"></div>

                        {/* Learn More Button */}
                        {/* <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20 cursor-pointer">
                          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-[#0f1b3a] group-hover:text-white transition-colors">
                            <ArrowRight size={16} className="text-inherit" />
                          </div>
                          <span className="text-[#0f1b3a] text-[13px] font-bold group-hover:text-[#0f1b3a]/80 transition-colors">Learn more</span>
                        </div> */}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* NEW REGIONAL COVERAGE & REQUIREMENTS SECTION */}
        <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden border-t border-slate-100 flex items-center min-h-[800px]">

          {/* Center Background Elements (Map & Tower) */}
          <div className="absolute inset-0 w-full h-full flex justify-center items-end pointer-events-none z-0 overflow-hidden">
            {/* The Map & Points */}
            <div className="absolute -top-[5%] lg:-top-[0%] left-[55%] lg:left-[58%] -translate-x-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] z-0">
              <Image
                src="/india_map_bg.jpg"
                alt="India Map"
                fill
                className="object-contain opacity-[0.85] mix-blend-multiply"
                unoptimized
              />


            </div>

            {/* The Tower Image */}
            <div className="relative w-[400px] h-[600px] lg:w-[500px] lg:h-[700px] z-10 bottom-[50px] left-[10%] lg:left-[4%]">
              <Image
                src="/Industrial Processing Tower with Yellow Platforms (2).png"
                alt="Processing Tower"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          <div className="container mx-auto px-6 max-w-[1400px] relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-center">

            {/* Left Side: Text and Regions */}
            <div className="max-w-xl pb-12 lg:pb-0 pt-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase">
                  WET SCRUBBER MANUFACTURER & SUPPLIER ACROSS INDIA
                </span>
              </div>

              <h2 className="text-4xl lg:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-8">
                Serving industrial projects across major <span className="text-primary-blue">manufacturing regions</span>
              </h2>

              <p className="text-slate-500 text-[15px] lg:text-lg leading-relaxed font-medium mb-10">
                NAPCEN's main website identifies service/location coverage across major Indian industrial markets. Project feasibility, delivery and site scope should be confirmed for each enquiry.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                {['Chennai', 'Coimbatore', 'Bengaluru', 'Trichy', 'Pune', 'Kerala', 'Hyderabad', 'Mumbai', 'Hosur', 'Ahmedabad', 'Puducherry'].map((region) => (
                  <span
                    key={region}
                    className="px-5 py-2.5 rounded-full border-2 text-sm font-bold flex items-center gap-2 shadow-sm transition-all duration-300 cursor-default group border-slate-200 bg-white text-slate-500 hover:border-[#0f1b3a] hover:bg-slate-50 hover:text-[#0f1b3a]"
                  >
                    <div className="transition-all duration-300 overflow-hidden flex items-center justify-center w-0 opacity-0 group-hover:w-4 group-hover:opacity-100">
                      <MapPin
                        size={16}
                        className="text-[#0f1b3a] fill-[#0f1b3a] shrink-0"
                      />
                    </div>
                    {region}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: The Dark Card */}
            <div className="flex justify-end relative z-20 w-full">
              <div className="w-full max-w-[480px] bg-[#0c162c] rounded-3xl p-10 relative overflow-hidden shadow-2xl border border-slate-800">

                {/* Background skyline for the card */}
                <div className="absolute bottom-0 left-0 w-full h-[200px] opacity-[0.15] pointer-events-none">
                  <Image
                    src="/Blueprint Refinery Skyline on Transparent Background.png"
                    alt="Refinery Blueprint"
                    fill
                    className="object-cover object-bottom"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-6 leading-snug">
                    Searching for a wet scrubber supplier?
                  </h3>
                  <p className="text-slate-300 text-[14px] leading-relaxed mb-10">
                    For a meaningful proposal, send more than an airflow figure. The fastest route to a technically useful discussion is to include:
                  </p>

                  <div className="flex flex-col gap-5">
                    {[
                      { num: "01", icon: Wind, text: "Airflow & temperature" },
                      { num: "02", icon: FlaskConical, text: "Pollutant & concentration" },
                      { num: "03", icon: FileText, text: "Process description" },
                      { num: "04", icon: Settings, text: "Required outlet / standard" },
                      { num: "05", icon: MapPin, text: "Site & utility constraints" }
                    ].map((req, i) => {
                      const Icon = req.icon;
                      return (
                        <div key={i} className="flex items-center justify-between group cursor-default pb-4 border-b border-white/5 last:border-0 last:pb-0">
                          <div className="flex items-center gap-5">
                            <span className="text-slate-500 font-medium text-sm">{req.num}</span>
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-white/10 transition-colors border border-white/5">
                              <Icon size={18} strokeWidth={1.5} />
                            </div>
                            <span className="text-slate-200 font-bold text-[14px] tracking-wide">{req.text}</span>
                          </div>
                          <ArrowRight size={14} className="text-slate-600 group-hover:text-white transition-colors" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="sticky top-32">
                <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">
                  WET SCRUBBER FAQ
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6 pr-4 xl:pr-8">
                  Questions engineers and buyers ask before <span className="text-primary-blue">selecting a scrubber</span>
                </h2>
                <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  Selection depends on the emission stream. These answers provide a starting point; final equipment design requires project-specific data.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col">
                {[
                  {
                    q: "What pollutants can an industrial wet scrubber remove?",
                    a: "Wet scrubbers can be applied to soluble or reactive gases, fumes and particulate matter, depending on the scrubber type and liquid chemistry. Packed towers are commonly used for gas absorption, while Venturi scrubbers are particularly suited to particulate collection. Suitability must be checked for the actual contaminant and process."
                  },
                  {
                    q: "What is the difference between a packed bed and Venturi scrubber?",
                    a: "A packed bed spreads liquid over packing to create a large wetted surface for gas absorption. A Venturi accelerates the gas through a restricted throat and atomizes liquid into small droplets, increasing particle–droplet interaction. The correct choice depends on whether the dominant duty is gaseous absorption, particulate control, or a combined treatment train."
                  },
                  {
                    q: "How is a wet scrubber sized?",
                    a: "Engineering inputs typically include gas flow, temperature, pollutant species and loading, particle size/loading where relevant, required outlet condition, gas solubility or reaction chemistry, liquid-to-gas requirements, allowable pressure drop, material compatibility and site constraints."
                  },
                  {
                    q: "Which parameters indicate wet scrubber performance?",
                    a: "Important operating indicators commonly include pressure differential and liquid flow. For gaseous control, liquid concentration or related chemistry parameters such as pH can also be important. The appropriate monitoring plan depends on the process and scrubber design."
                  },
                  {
                    q: "Can wet scrubbers handle corrosive acid gases?",
                    a: "Wet absorption is widely used for inorganic and acid-gas control. The scrubbing reagent, construction material, temperature and liquid-management strategy must be selected for the specific gas chemistry and concentration."
                  },
                  {
                    q: "What maintenance does a wet scrubber require?",
                    a: "Maintenance commonly includes inspection of nozzles or liquid distributors, pumps, piping, packing where fitted, mist eliminators, tanks and instrumentation. Operators should also watch for inadequate liquid flow, scaling, plugging, corrosion and liquid re-entrainment."
                  },
                  {
                    q: "What information should I send for a wet scrubber quotation?",
                    a: "Send airflow, gas temperature, pollutant name and concentration, particulate loading/size if applicable, process description, desired outlet condition, operating hours, available utilities, preferred material if specified, installation location and any layout restrictions."
                  }
                ].map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="border-b border-slate-200 last:border-0 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                      >
                        <h3 className={`text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-primary-blue' : 'text-[#0f1b3a] group-hover:text-primary-blue'}`}>
                          {faq.q}
                        </h3>
                        <div className={`relative shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-primary-blue bg-primary-blue shadow-md' : 'border-slate-200 bg-slate-50 group-hover:border-primary-blue group-hover:bg-blue-50'}`}>
                          <div className={`absolute w-3.5 h-[2px] transition-all duration-300 rounded-full ${isOpen ? 'bg-white' : 'bg-slate-600 group-hover:bg-primary-blue'}`}></div>
                          <div className={`absolute w-[2px] h-3.5 transition-all duration-300 rounded-full ${isOpen ? 'bg-white rotate-90 scale-0' : 'bg-slate-600 group-hover:bg-primary-blue scale-100'}`}></div>
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="pb-8 pr-12 text-slate-500 text-[15px] font-medium leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-12 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="mb-8 text-center max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-gray-500 font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">
                Customer voice
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1b3a] leading-[1.1] tracking-tight">
                Wet scrubber <span className="text-primary-blue">testimonial</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-6 items-center justify-center relative rounded-3xl p-4 lg:p-12">
              <div className="items-center justify-center relative flex w-full" style={{ maxWidth: "1024px" }}>
                <CircularTestimonials
                  testimonials={clientTestimonials}
                  autoplay={true}
                  colors={{
                    name: "#0f1b3a",
                    designation: "#64748b",
                    testimony: "#334155",
                    arrowBackground: "#f1f5f9",
                    arrowForeground: "#0f1b3a",
                    arrowHoverBackground: "#3b82f6",
                  }}
                  fontSizes={{
                    name: "24px",
                    designation: "15px",
                    quote: "22px",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* COMBINED CTA & FOOTER SECTION */}
        <Footer
          className="bg-black pt-24"
          brandName="NAPCEN"
          brandDescription="Industrial Air Pollution Control Equipment & Engineering Solutions. Built around the application, not just the equipment."
          creatorName="NAPCEN Team"
          creatorUrl="#"
          navLinks={[
            { label: "Applications", href: "#applications" },
            { label: "Products", href: "#products" },
            { label: "Engineering", href: "#engineering" },
            { label: "Industries", href: "#industries" },
            { label: "FAQ", href: "#faq" },
            { label: "Enquire", href: "#contact" },
          ]}
          socialLinks={[
            { icon: <Globe className="w-5 h-5" />, href: "#", label: "Website" },
            { icon: <Users className="w-5 h-5" />, href: "#", label: "LinkedIn" },
            { icon: <Mail className="w-5 h-5" />, href: "#contact", label: "Email" },
          ]}
          brandIcon={<Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={80} height={80} className="object-contain p-2" />}
        >
          <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-20 border-b border-white/10 pb-20">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

              {/* Left Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-xl">
                <span className="text-white font-mono text-[11px] tracking-[0.3em] uppercase mb-6 block">
                  Let's Build Together
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black text-white mb-6 leading-[1.1] tracking-tight">
                  Need industrial air <br className="hidden md:block" />
                  pollution control equipment?
                </h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  Start a technical discussion with NAPCEN engineers. We analyze your process to provide the most effective pollution control solution.
                </p>

                {/* Contact Minimal Blocks */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0">
                        <Phone className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">SALES INQUIRY</div>
                        <a href="tel:+917904469219" className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block">
                          +91 79044 69219
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0">
                        <Mail className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">GENERAL SUPPORT</div>
                        <a href="mailto:info@napcen.com" className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block"> info@napcen.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0 mt-1">
                      <MapPin className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block leading-relaxed">
                        No. 42, Main Road, Villianur,<br />
                        Puducherry, India - 605110
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column (Dark Sleek Card) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative z-10 overflow-hidden group">
                {/* Glow effect */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors duration-700"></div>

                <h3 className="text-3xl font-bold text-white mb-4 relative z-10 tracking-tight">Request a quotation</h3>
                <p className="text-slate-400 mb-10 font-medium leading-relaxed relative z-10">
                  Provide your process specifications, and our engineers will evaluate the requirements for a customized solution.
                </p>
                <a href="mailto:info@napcen.com" className="relative z-10 flex w-full justify-between items-center bg-white hover:bg-slate-200 text-black font-black py-4 px-8 rounded-full transition-all text-sm tracking-widest uppercase group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span>Get my quotation</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Privacy Disclaimer */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <h4 className="text-slate-300 font-bold text-sm mb-2">Enquiry data & privacy</h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-4xl">
                This preview processes form values in your browser to prepare a message. It does not upload or store your form entries on this website. If you choose WhatsApp or email, the information you review is passed to that service when you open it and sent to NAPCEN only when you confirm Send. Contact <a href="mailto:info@napcen.com" className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors">info@napcen.com</a> about handling of enquiries. No advertising conversion tag is installed in this preview.
              </p>
            </div>
          </div>
        </Footer>
      </main>
    </div >
  );
}
