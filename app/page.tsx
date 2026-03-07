import { BentoGrid } from "@/components/BentoGrid";
import { HeroCard } from "@/components/HeroCard";
import { MenuCard } from "@/components/MenuCard";
import { StatsCard } from "@/components/StatsCard";
import { TestimoniCard } from "@/components/TestimoniCard";
import { QuickOrderForm } from "@/components/QuickOrderForm";
import { MapSection } from "@/components/MapSection";
import { MENU_ITEMS } from "@/constants/menu";
import { TESTIMONIALS } from "@/constants/testimonials";
import { WA_NUMBER } from "@/constants/config";
import { WhatsAppBrandIcon } from "@/components/icons/WhatsAppIcon";

export default function HomePage() {
  const featuredMenus = MENU_ITEMS.slice(0, 4);

  return (
    <main className="min-h-screen bg-background">
      {/* ── Bento Grid ─────────────────────────────────────────
       *
       * Desktop (lg, 4-col):
       * ┌──────────────────┬──────────────┬──────────────┐
       * │                  │  Testimoni   │  Testimoni   │
       * │    HeroCard      │    Irma      │    Dwi       │
       * │    (2 × 2)       ├──────────────┴──────────────┤
       * │                  │    StatsCard (col-span-2)   │
       * ├──────────────────┴──────────────┬──────────────┼──────────────┐
       * │    QuickOrderForm (col-span-2)  │ MenuCard[0] │ MenuCard[1]  │
       * └─────────────────────────────────┴─────────────┴──────────────┘
       ─────────────────────────────────────────────────────── */}
      <section className="px-4 pt-8 pb-4 max-w-6xl mx-auto">
        <BentoGrid>
          {/* Row 1–2 col 1–2 (desktop): Hero */}
          <HeroCard />

          {/* Row 1 col 3–4 (desktop): 2 Testimonials */}
          {TESTIMONIALS.map((t) => (
            <TestimoniCard key={t.id} item={t} />
          ))}

          {/* Row 2 col 3–4 (desktop): StatsCard spans both cols */}
          <StatsCard />

          {/* Row 3 col 1–2 (desktop): Quick Order Form */}
          <QuickOrderForm />

          {/* Row 3 col 3–4 (desktop): Featured Menu Cards */}
          {featuredMenus.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </BentoGrid>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-4 py-4 max-w-6xl mx-auto">
        <div className="rounded-3xl bg-emerald-950 border border-emerald-900/40 p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Siap untuk acara Anda berikutnya?
            </h2>
            <p className="text-emerald-300/70 mt-1 font-medium">
              Kami melayani corporate, pernikahan, ulang tahun, dan gathering.
            </p>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Halo%20Shanti%20Catering,%20saya%20ingin%20konsultasi%20menu%20custom%20untuk%20acara%20saya.%0A%0A*Estimasi%20jumlah%20tamu:*%20[isi%20di%20sini]%0A*Tanggal%20acara:*%20[isi%20di%20sini]%0A*Budget%20per%20orang:*%20[isi%20di%20sini]%0A*Catatan:*%20[isi%20di%20sini]%0A%0AMohon%20info%20ketersediaannya%20ya,%20terima%20kasih!`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-2xl transition-colors whitespace-nowrap"
          >
            <WhatsAppBrandIcon className="w-5 h-5 fill-white border-white" />
            Konsultasi via WA
          </a>
        </div>
      </section>

      {/* ── Google Maps & Lokasi ── */}
      <MapSection />

      {/* Bottom padding for floating navbar */}
      <div className="h-24" />
    </main>
  );
}
