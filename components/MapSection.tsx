"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";

const MAPS_URL = "https://maps.app.goo.gl/L1ep6K4oL1X7Kffv5";
const ADDRESS = "Jl. Bhaskara III No.38, Kalisari, Kec. Mulyorejo, Surabaya, Jawa Timur 60112";

const JAM_BUKA = [
    { hari: "Senin – Jumat", jam: "08.00 – 21.00" },
    { hari: "Sabtu & Minggu", jam: "08.00 – 21.00" },
];

export function MapSection() {
    return (
        <section className="px-4 pb-8 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl overflow-hidden border border-border bg-card grid grid-cols-1 md:grid-cols-2"
            >
                {/* LEFT: Info */}
                <div className="p-7 flex flex-col gap-5 justify-center">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                                Lokasi Kami
                            </span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-foreground mt-1">
                            Shanti Catering Surabaya
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            Kami berlokasi di kawasan Mulyorejo, Surabaya Timur — mudah diakses dan siap melayani
                            pesanan untuk seluruh wilayah Surabaya dan sekitarnya.
                        </p>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground/80 leading-relaxed">{ADDRESS}</p>
                    </div>

                    {/* Jam Buka */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-semibold text-foreground">Jam Operasional</span>
                        </div>
                        <div className="ml-6 flex flex-col gap-1">
                            {JAM_BUKA.map(({ hari, jam }) => (
                                <div key={hari} className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground">{hari}</span>
                                    <span className="font-semibold text-foreground tabular-nums">{jam}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex items-center gap-2 self-start px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Buka di Google Maps
                    </motion.a>
                </div>

                {/* RIGHT: Maps Embed */}
                <div className="relative h-64 md:h-auto min-h-[280px]">
                    <iframe
                        title="Lokasi Shanti Catering"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed&hl=id&z=16`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </motion.div>
        </section>
    );
}
