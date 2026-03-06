"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MENU_ITEMS } from "@/constants/menu";
import { CheckCircle, XCircle, Loader2, ClipboardList, ChevronDown, MessageCircle } from "lucide-react";
import { itemVariants } from "./BentoGrid";
import { WA_NUMBER } from "@/constants/config";

const orderSchema = z.object({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    phone: z
        .string()
        .min(9, "Nomor HP tidak valid")
        .regex(/^[0-9+\-\s]+$/, "Format nomor tidak valid"),
    menuId: z.string({ message: "Silahkan pilih menu terlebih dahulu" }).min(1, "Silahkan pilih menu terlebih dahulu"),
    porsi: z.number({ message: "Masukkan jumlah porsi" }).min(20, "Minimal 20 porsi"),
    date: z.string().min(1, "Tanggal wajib diisi"),
    notes: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

export function QuickOrderForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [menuOpen, setMenuOpen] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<OrderFormData>({ resolver: zodResolver(orderSchema) });

    const selectedMenuId = watch("menuId");
    const selectedMenu = MENU_ITEMS.find((m) => String(m.id) === selectedMenuId);

    const onSubmit = async (data: OrderFormData) => {
        setStatus("loading");
        try {
            // 1. Kirim ke API internal (untuk log/record)
            const res = await fetch("/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Server error");

            // 2. Susun pesan WhatsApp
            const message = `*HALO SHANTI CATERING, SAYA MAU PESAN!*
---
*Nama:* ${data.name}
*No. WA:* ${data.phone}
*Menu:* ${selectedMenu?.name ?? "Custom"}
*Porsi:* ${data.porsi} porsi
*Tanggal:* ${data.date}
*Catatan:* ${data.notes || "-"}
---
_Mohon segera dikonfirmasi ya, terima kasih!_`;

            const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

            // 3. Redirect ke WhatsApp (buka tab baru)
            window.open(waUrl, "_blank");

            setStatus("success");
            reset();
            setTimeout(() => setStatus("idle"), 4000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                boxShadow: "0 0 24px rgba(6, 78, 59, 0.25)",
                y: -2,
                transition: { duration: 0.2 },
            }}
            className="sm:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden bg-card border border-border p-6"
        >
            <div className="flex items-center gap-2 mb-2">
                <ClipboardList className="w-5 h-5 text-emerald-500" />
                <h2 className="font-bold text-lg tracking-tight">Formulir Pemesanan Cepat</h2>
            </div>
            <p className="text-muted-foreground text-sm font-medium mb-6">
                Lengkapi data di bawah ini untuk mendapatkan layanan catering terbaik kami.
            </p>

            <AnimatePresence mode="wait">
                {status === "success" && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4"
                    >
                        <CheckCircle className="w-4 h-4 shrink-0" />
                        Pesanan berhasil dikirim! Kami akan segera menghubungi Anda.
                    </motion.div>
                )}
                {status === "error" && (
                    <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4"
                    >
                        <XCircle className="w-4 h-4 shrink-0" />
                        Terjadi kesalahan. Silakan coba lagi atau hubungi via WA.
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                {/* Row 1: Nama + No. WA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground">
                            Nama Lengkap
                        </Label>
                        <Input id="name" placeholder="Budi Santoso" {...register("name")} className="rounded-xl" />
                        {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="phone" className="text-xs font-semibold text-muted-foreground">
                            No. WhatsApp
                        </Label>
                        <Input id="phone" placeholder="08123456789" {...register("phone")} className="rounded-xl" />
                        {errors.phone && <p className="text-xs text-red-400">{errors.phone.message}</p>}
                    </div>
                </div>


                <div className="space-y-1">
                    <Label className="text-xs font-semibold text-muted-foreground">Pilih Menu</Label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setMenuOpen((v) => !v)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border text-sm text-left transition-colors ${menuOpen
                                ? "border-emerald-500 ring-2 ring-emerald-500/20 bg-background"
                                : "border-input bg-background hover:border-emerald-500/50"
                                }`}
                        >
                            <span className={selectedMenu ? "text-foreground font-medium" : "text-muted-foreground"}>
                                {selectedMenu ? `${selectedMenu.name} – ${selectedMenu.price}` : "Pilih menu..."}
                            </span>
                            <ChevronDown
                                className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ${menuOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        <AnimatePresence>
                            {menuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute z-50 w-full mt-1 rounded-2xl border border-border bg-popover shadow-xl overflow-hidden max-h-72 overflow-y-auto"
                                >
                                    {/* Tanya Admin — buka WA langsung */}
                                    <a
                                        href={`https://wa.me/${WA_NUMBER}?text=Halo%20Shanti%20Catering,%20saya%20ingin%20konsultasi%20menu%20custom%20untuk%20acara%20saya.%0A%0A*Estimasi%20jumlah%20tamu:*%20[isi%20di%20sini]%0A*Tanggal%20acara:*%20[isi%20di%20sini]%0A*Budget%20per%20orang:*%20[isi%20di%20sini]%0A*Catatan:*%20[isi%20di%20sini]%0A%0AMohon%20info%20ketersediaannya%20ya,%20terima%20kasih!`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMenuOpen(false)}
                                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border-b border-border transition-colors"
                                    >
                                        <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">Tanya Admin via WA</span>
                                        <span className="ml-auto text-xs text-emerald-500/70">Gratis konsultasi</span>
                                    </a>

                                    {/* Menu Items */}
                                    {MENU_ITEMS.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => {
                                                setValue("menuId", String(item.id), { shouldValidate: true });
                                                setMenuOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950/40 ${selectedMenuId === String(item.id)
                                                ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold"
                                                : "text-foreground"
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold tabular-nums text-xs">
                                                {item.price}
                                            </span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    {errors.menuId && <p className="text-xs text-red-400">{errors.menuId.message}</p>}
                </div>

                {/* Row 3: Jumlah Porsi + Tanggal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <Label htmlFor="porsi" className="text-xs font-semibold text-muted-foreground">
                            Jumlah Porsi <span className="text-red-400">*</span>
                        </Label>
                        <Controller
                            name="porsi"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    id="porsi"
                                    type="number"
                                    min={1}
                                    placeholder="Contoh: 50"
                                    className="rounded-xl"
                                    value={field.value ?? ""}
                                    onChange={(e) =>
                                        field.onChange(e.target.value === "" ? undefined : Number(e.target.value))
                                    }
                                />
                            )}
                        />
                        {errors.porsi && <p className="text-xs text-red-400">{errors.porsi.message}</p>}
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="date" className="text-xs font-semibold text-muted-foreground">
                            Tanggal Acara
                        </Label>
                        <Input id="date" type="date" {...register("date")} className="rounded-xl" />
                        {errors.date && <p className="text-xs text-red-400">{errors.date.message}</p>}
                    </div>
                </div>

                {/* Row 4: Catatan */}
                <div className="space-y-1">
                    <Label htmlFor="notes" className="text-xs font-semibold text-muted-foreground">
                        Catatan (opsional)
                    </Label>
                    <Input
                        id="notes"
                        placeholder="Alergi, permintaan khusus, dll..."
                        {...register("notes")}
                        className="rounded-xl"
                    />
                </div>

                <motion.div whileTap={{ scale: 0.97 }}>
                    <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold h-11 mt-1"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin mr-2" /> Mengirim...
                            </>
                        ) : (
                            "Kirim Pesanan"
                        )}
                    </Button>
                </motion.div>

                <div className="pt-2 text-center">
                    <a
                        href={`https://wa.me/${WA_NUMBER}?text=Halo%20Shanti%20Catering,%20saya%20ingin%20tanya-tanya%20dulu%20mengenai%20pesanan%20katering.%0A%0A*Kebutuhan:*%20[Pernikahan/Kantor/Lainnya]%0A*Rencana%20Tanggal:*%20[isi%20di%20sini]%0A*Estimasi%20Porsi:*%20[isi%20di%20sini]%0A%0AMohon%20infonya%20ya,%20terima%20kasih!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-muted-foreground hover:text-emerald-500 transition-colors flex items-center justify-center gap-1.5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Atau tanya admin via WA
                    </a>
                </div>
            </form>
        </motion.div>
    );
}
