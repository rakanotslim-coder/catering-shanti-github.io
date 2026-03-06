"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./BentoGrid";
import { UtensilsCrossed, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { WA_NUMBER } from "@/constants/config";



export function HeroCard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl bg-emerald-950 min-h-[300px]" />;

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                boxShadow: "0 0 32px rgba(6, 78, 59, 0.4)",
                y: -3,
                transition: { duration: 0.2 },
            }}
            className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-zinc-950 p-8 flex flex-col justify-between min-h-[300px] lg:min-h-[340px]"
        >
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-800/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-center gap-2 mb-6"
                >
                    <div className="w-10 h-10 relative shrink-0">
                        <Image
                            src="/images/logo catering.png"
                            alt="Shanti Catering Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
                        Shanti Catering
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                >
                    Catering Surabaya
                    <br />
                    <span className="text-emerald-400">Terbaik & Premium</span>
                    <br />
                    Untuk Anda
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    className="mt-4 text-emerald-200/70 text-base font-medium max-w-xs leading-relaxed"
                >
                    Menghadirkan kelezatan bintang 5 untuk pernikahan, acara kantor, dan momen spesial Anda dengan pelayanan profesional.
                </motion.p>

                {/* Certification badges */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.4 }}
                    className="flex flex-wrap gap-2 mt-4"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                        🌙 Halal MUI
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                        ✅ Berizin Dinkes
                    </span>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="relative z-10 flex flex-col sm:flex-row gap-3 mt-6"
            >
                <motion.a
                    href={`https://wa.me/${WA_NUMBER}?text=Halo%20Shanti%20Catering%2C%20saya%20ingin%20memesan%20catering!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-900/50 transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    Pesan via WhatsApp
                </motion.a>
                <motion.a
                    href="/menu"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/20 transition-colors"
                >
                    Lihat Menu
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
