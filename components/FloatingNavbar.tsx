"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, UtensilsCrossed } from "lucide-react";
import { WhatsAppBrandIcon } from "@/components/icons/WhatsAppIcon";
import Image from "next/image";
import { WA_NUMBER } from "@/constants/config";



export function FloatingNavbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.3 }}
                className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 bg-white/10 dark:bg-zinc-900/40 backdrop-blur-md shadow-xl shadow-black/20 dark:shadow-black/50"
            >
                {/* LEFT: Logo + Brand */}
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div
                        whileTap={{ scale: 0.92 }}
                        className="w-10 h-10 relative shrink-0 group-hover:scale-105 transition-all"
                    >
                        <Image
                            src="/images/logo catering.png"
                            alt="Shanti Catering Logo"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                    <span className="text-sm font-semibold text-foreground hidden sm:block whitespace-nowrap tracking-tight">
                        Shanti Catering
                    </span>
                </Link>

                {/* Divider */}
                <div className="w-px h-5 bg-white/20 dark:bg-white/10 mx-1" />

                {/* CENTER: Nav Links */}
                <div className="flex items-center gap-1">
                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/"
                            className="px-3 py-1.5 text-sm font-medium rounded-full text-foreground/80 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5 transition-all"
                        >
                            Home
                        </Link>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/menu"
                            className="px-3 py-1.5 text-sm font-medium rounded-full text-foreground/80 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5 transition-all"
                        >
                            Menu
                        </Link>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-px h-5 bg-white/20 dark:bg-white/10 mx-1" />

                {/* RIGHT: WA Button + Theme Toggle */}
                <div className="flex items-center gap-2">
                    <motion.a
                        href={`https://wa.me/${WA_NUMBER}?text=Halo%20Shanti%20Catering%2C%20saya%20ingin%20memesan%20catering!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold transition-colors shadow-md shadow-emerald-900/30"
                    >
                        <WhatsAppBrandIcon className="w-4 h-4" />
                        <span className="hidden sm:block whitespace-nowrap">Order via WA</span>
                    </motion.a>

                    {mounted && (
                        <motion.button
                            whileTap={{ scale: 0.90 }}
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="w-8 h-8 flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5 transition-all"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </motion.button>
                    )}
                </div>
            </motion.nav>
        </div>
    );
}
