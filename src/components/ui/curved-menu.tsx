"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const CUBIC_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export interface iNavItem {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
}

export interface iNavLinkProps extends iNavItem {
  setIsActive: (isActive: boolean) => void;
  index?: number;
}

export interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: iNavItem[];
  footer?: React.ReactNode;
}

export interface iHeaderProps {
  navItems?: iNavItem[];
  footer?: React.ReactNode;
  className?: string;
}

const MENU_SLIDE_ANIMATION: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: CUBIC_EASE },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: CUBIC_EASE },
  },
};

const defaultNavItems: iNavItem[] = [
  { heading: "Scrubbers", href: "#products" },
  { heading: "How It Works", href: "#process" },
  { heading: "Engineering", href: "#engineering-checklist" },
  { heading: "Industries", href: "#industries" },
  { heading: "Company", href: "#about" },
  { heading: "FAQ", href: "#faq" },
  { heading: "Contact Us", href: "#contact" },
];

// Clean text-only footer without any icons (icons removed as requested)
const CustomFooter: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-xs text-slate-500 px-8 sm:px-12 py-6 border-t border-slate-100 bg-slate-50/50">
      <div className="flex items-center justify-between font-semibold tracking-wider uppercase text-[11px] text-slate-700">
        <span>NAPCEN Engineering</span>
        <a
          href="tel:+917904469219"
          className="text-[#0D59AA] hover:underline"
        >
          +91 79044 69219
        </a>
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <a
          href="mailto:info@napcen.com"
          className="hover:text-slate-700 transition-colors"
        >
          info@napcen.com
        </a>
        <span>ISO 9001:2015</span>
      </div>
    </div>
  );
};

const NavLink: React.FC<iNavLinkProps> = ({
  heading,
  href,
  setIsActive,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleClick = (e: React.MouseEvent) => {
    setIsActive(false);

    // If anchor link on the same page, scroll smoothly
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }
  };

  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      onClick={handleClick}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-slate-200/80 py-3.5 sm:py-4 transition-colors duration-300 uppercase cursor-pointer"
      {...linkProps}
    >
      <Link
        ref={ref}
        onMouseMove={handleMouseMove}
        href={href}
        className="w-full flex items-center"
      >
        <div className="relative flex items-center w-full">
          <div className="flex flex-row gap-1">
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 6 },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative z-10 block text-2xl sm:text-3xl font-light tracking-wide text-slate-800 group-hover:text-[#0D59AA] transition-colors duration-300"
            >
              {heading.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 4 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Curve: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState(800);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${windowHeight} L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${windowHeight} L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;

  const curve: Variants = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: CUBIC_EASE },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: CUBIC_EASE },
    },
  };

  return (
    <svg
      className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full pointer-events-none"
      style={{ fill: "#ffffff" }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

const CurvedNavbar: React.FC<
  iCurvedNavbarProps & { footer?: React.ReactNode }
> = ({ setIsActive, navItems, footer }) => {
  return (
    <motion.div
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100dvh] w-[88vw] max-w-[360px] sm:max-w-sm fixed right-0 top-0 z-50 bg-white shadow-2xl flex flex-col justify-between"
    >
      <div className="h-full pt-16 flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-1 px-8 sm:px-12 overflow-y-auto">
          <section className="bg-transparent mt-2">
            <div className="mx-auto w-full">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.href + index}
                  {...item}
                  setIsActive={setIsActive}
                  index={index + 1}
                />
              ))}
            </div>
          </section>
        </div>

        {footer}
      </div>
      <Curve />
    </motion.div>
  );
};

export const Header: React.FC<iHeaderProps> = ({
  navItems = defaultNavItems,
  footer = <CustomFooter />,
  className = "",
}) => {
  const [isActive, setIsActive] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsActive(false);
    };
    if (isActive) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive]);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Menu Trigger Button */}
      <div className={`relative ${className}`}>
        <button
          type="button"
          onClick={handleClick}
          aria-label={isActive ? "Close menu" : "Open menu"}
          className="fixed right-4 top-4 z-50 w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer bg-white shadow-md border border-slate-200/70 transition-transform active:scale-95"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-center pointer-events-none">
            <span
              className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 origin-center ${
                isActive ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-800 transition-opacity duration-300 ${
                isActive ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 origin-center ${
                isActive ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Dimmed Backdrop for Mobile */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsActive(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40"
          />
        )}
      </AnimatePresence>

      {/* Curved Sliding Drawer */}
      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar
            setIsActive={setIsActive}
            navItems={navItems}
            footer={footer}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export const DemoOne = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="text-white h-screen text-7xl text-center flex justify-center items-center">
        hello<span className="italic">!</span>
      </div>
    </div>
  );
};

export default Header;
