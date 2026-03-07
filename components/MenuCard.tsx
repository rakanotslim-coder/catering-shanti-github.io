"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { itemVariants } from "./BentoGrid";
import { MenuItem } from "@/constants/menu";
import { WA_NUMBER } from "@/constants/config";

interface MenuCardProps {
    item: MenuItem;
}

const tagColors: Record<string, string> = {
    "Best Seller": "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "Chef Choice": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Favorit": "bg-rose-500/20 text-rose-300 border-rose-500/30",
    "New": "bg-sky-500/20 text-sky-300 border-sky-500/30",
    "Healthy": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

export function MenuCard({ item }: MenuCardProps) {
    const tagClass = tagColors[item.tag] ?? "bg-zinc-500/20 text-zinc-300 border-zinc-500/30";

    const message = `*HALO SHANTI CATERING, SAYA MAU PESAN!*
---
*Menu:* ${item.name} (${item.price}/porsi)
*Nama:* [isi nama kamu]
*No. WA:* [isi nomor WA]
*Porsi:* [isi jumlah porsi]
*Tanggal Acara:* [isi tanggal]
*Catatan:* [isi catatan / -]
---
_Mohon segera dikonfirmasi ya, terima kasih!_`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                boxShadow: "0 0 24px rgba(6, 78, 59, 0.35)",
                y: -3,
                transition: { duration: 0.2 },
            }}
            className="rounded-3xl overflow-hidden bg-card border border-border flex flex-col group"
        >
            {/* Image */}
            <div className="relative h-36 overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 left-3">
                    <span
                        className={`inline-flex px-3 py-1 text-[10px] font-semibold rounded-full border backdrop-blur-sm ${tagClass}`}
                    >
                        {item.tag}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-3.5 flex flex-col gap-0.5 flex-1">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
                    {item.category}
                </span>
                <h3 className="font-bold text-foreground tracking-tight leading-snug">{item.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                <div className="mt-auto pt-3 flex items-center justify-between">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-base">{item.price}</span>
                    <motion.a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.93 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                        Pesan
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
