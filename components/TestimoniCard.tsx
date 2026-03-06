"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./BentoGrid";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/constants/testimonials";

interface TestimoniCardProps {
    item: Testimonial;
}

export function TestimoniCard({ item }: TestimoniCardProps) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                boxShadow: "0 0 24px rgba(6, 78, 59, 0.28)",
                y: -3,
                transition: { duration: 0.2 },
            }}
            className="rounded-3xl overflow-hidden bg-card border border-border p-5 flex flex-col gap-4"
        >
            {/* Quote icon */}
            <Quote className="w-6 h-6 text-emerald-500/50 shrink-0" />

            {/* Stars */}
            <div className="flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
            </div>

            {/* Quote text */}
            <p className="text-sm text-foreground/80 leading-relaxed flex-1 italic">
                &ldquo;{item.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatar} flex items-center justify-center shrink-0`}
                >
                    <span className="text-xs font-bold text-white">{item.initials}</span>
                </div>
                <div>
                    <p className="font-bold text-sm text-foreground tracking-tight">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
            </div>
        </motion.div>
    );
}
