import type { Metadata } from "next";
import { BentoGrid } from "@/components/BentoGrid";
import { MenuCard } from "@/components/MenuCard";
import { MENU_ITEMS } from "@/constants/menu";
import { UtensilsCrossed, Info } from "lucide-react";
import Image from "next/image";
import { WA_NUMBER } from "@/constants/config";

export const metadata: Metadata = {
    title: "Menu Lengkap – Shanti Catering",
    description: "Menu Masakan Indonesia & Oriental pilihan Shanti Catering — Rawon, Pecel, Nasi Jagung Babat, Gado-gado, Nasi Goreng, dan Soto Ayam.",
};

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-background">
            <section className="px-4 pt-10 pb-4 max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-6">
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

                {/* Disclaimer */}
                <div className="flex items-start gap-2 mb-6 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/30">
                    <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 dark:text-amber-400 italic">
                        Harga yang tertera bersifat estimasi dan dapat berubah sewaktu-waktu. Hubungi kami via WhatsApp untuk konfirmasi harga terbaru.
                    </p>
                </div>

                {/* Grid — 3 cols (reuse lg: breakpoint from BentoGrid) */}
                <BentoGrid className="lg:!grid-cols-3 md:!grid-cols-2">
                    {MENU_ITEMS.map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </BentoGrid>
            </section>

            {/* ── CTA Banner ── */}
            <section className="px-4 py-4 pb-6 max-w-6xl mx-auto">
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
