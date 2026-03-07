"use client";

import { useState } from "react";
import { BentoGrid } from "@/components/BentoGrid";
import { MenuCard } from "@/components/MenuCard";
import { MENU_ITEMS } from "@/constants/menu";
import { Info, Utensils, Coffee, Pizza, LayoutGrid } from "lucide-react";
import Image from "next/image";
import { WA_NUMBER } from "@/constants/config";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
    { id: "semua", label: "Semua", icon: LayoutGrid },
    { id: "makanan", label: "Makanan", icon: Pizza },
    { id: "minuman", label: "Minuman", icon: Coffee },
    { id: "jajanan", label: "Jajanan", icon: Utensils },
] as const;

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]["id"]>("semua");

    const filteredItems = activeCategory === "semua"
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.filterCategory === activeCategory);

    return (
        <main className="min-h-screen bg-background">
            <section className="px-4 pt-10 pb-4 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 relative shrink-0">
                            <Image
                                src="/images/logo catering.png"
                                alt="Shanti Catering Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-widest">
                            Shanti Catering
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">Daftar Menu Pilihan</h1>
                    <p className="mt-2 text-muted-foreground font-medium max-w-md">
                        Pilihan hidangan terbaik untuk momen istimewa Anda, diolah dengan bahan baku segar dan standar higienitas tinggi.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all border ${isActive
                                        ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-900/20"
                                        : "bg-card border-border text-muted-foreground hover:border-emerald-500/50 hover:text-emerald-500"
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Disclaimer */}
                <div className="flex items-start gap-2 mb-8 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/30">
                    <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 dark:text-amber-400 italic">
                        Harga yang tertera bersifat estimasi dan dapat berubah sewaktu-waktu. Hubungi kami via WhatsApp untuk konfirmasi harga terbaru.
                    </p>
                </div>

                {/* Grid */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {filteredItems.length > 0 ? (
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <BentoGrid className="lg:!grid-cols-3 md:!grid-cols-2">
                                    {filteredItems.map((item) => (
                                        <MenuCard key={item.id} item={item} />
                                    ))}
                                </BentoGrid>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center py-20 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                                    <Utensils className="w-8 h-8 text-muted-foreground/50" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">Belum ada menu</h3>
                                <p className="text-muted-foreground text-sm max-w-xs mx-auto mt-1">
                                    Maaf, menu untuk kategori ini sedang dalam tahap penyusunan. Silakan cek kategori lainnya!
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="px-4 py-10 pb-6 max-w-6xl mx-auto">
                <div className="rounded-3xl bg-emerald-950 border border-emerald-900/40 p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                        <h2 className="text-xl font-bold text-white tracking-tight">
                            Tidak menemukan yang kamu cari?
                        </h2>
                        <p className="text-emerald-300/70 mt-1 text-sm font-medium">
                            Hubungi kami — kami siap membuat menu custom sesuai permintaan Anda.
                        </p>
                    </div>
                    <a
                        href={`https://wa.me/${WA_NUMBER}?text=Halo%20Shanti%20Catering,%20saya%20ingin%20konsultasi%20menu%20custom%20untuk%20acara%20saya.%0A%0A*Estimasi%20jumlah%20tamu:*%20[isi%20di%20sini]%0A*Tanggal%20acara:*%20[isi%20di%20sini]%0A*Budget%20per%20orang:*%20[isi%20di%20sini]%0A*Catatan:*%20[isi%20di%20sini]%0A%0AMohon%20info%20ketersediaannya%20ya,%20terima%20kasih!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-2xl transition-colors whitespace-nowrap"
                    >
                        💬 Konsultasi via WA
                    </a>
                </div>
            </section>

            {/* Bottom padding for floating navbar */}
            <div className="h-28" />
        </main>
    );
}
