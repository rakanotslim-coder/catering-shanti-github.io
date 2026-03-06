import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { MENU_ITEMS } from "@/constants/menu";

const orderSchema = z.object({
    name: z.string().min(2),
    phone: z.string().min(9),
    menuId: z.string().min(1),
    porsi: z.number().min(1),
    date: z.string().min(1),
    notes: z.string().optional(),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const parsed = orderSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Validasi gagal", details: parsed.error.flatten() },
                { status: 400 }
            );
        }

        const { name, phone, menuId, porsi, date, notes } = parsed.data;
        const menuItem = MENU_ITEMS.find((m) => String(m.id) === menuId);
        const menuName = menuItem?.name ?? "Unknown";

        // ── Option A: Log to console (default, no API key needed) ──
        console.log("📦 New Order from Shanti Catering website:", {
            name,
            phone,
            menu: menuName,
            porsi,
            date,
            notes: notes ?? "-",
            timestamp: new Date().toISOString(),
        });

        // ── Option B: Send email via Resend (uncomment when ready) ──
        // const { Resend } = await import("resend");
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: "orders@shanticatering.com",
        //   to: "owner@shanticatering.com",
        //   subject: `📦 Pesanan Baru dari ${name}`,
        //   html: `
        //     <h2>Pesanan Baru – Shanti Catering</h2>
        //     <p><strong>Nama:</strong> ${name}</p>
        //     <p><strong>WhatsApp:</strong> ${phone}</p>
        //     <p><strong>Menu:</strong> ${menuName}</p>
        //     <p><strong>Tanggal Acara:</strong> ${date}</p>
        //     <p><strong>Catatan:</strong> ${notes ?? "-"}</p>
        //   `,
        // });

        return NextResponse.json({ success: true, message: "Pesanan berhasil diterima!" });
    } catch (err) {
        console.error("Order API error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
