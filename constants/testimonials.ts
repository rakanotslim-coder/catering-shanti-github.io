export interface Testimonial {
    id: number;
    name: string;
    role: string;
    initials: string;
    quote: string;
    rating: number;
    avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Irma Widyastuti",
        role: "Karyawan ITS",
        initials: "IW",
        avatar: "from-emerald-500 to-teal-600",
        rating: 5,
        quote:
            "Makanannya enak banget, rasanya homemade tapi tampilannya profesional. Kami langganan untuk makan siang di kantor — porsinya pas dan pengirimannya selalu tepat waktu!",
    },
    {
        id: 2,
        name: "Dwi Prasetyo",
        role: "TNI AL",
        initials: "DP",
        avatar: "from-blue-600 to-indigo-700",
        rating: 5,
        quote:
            "Sudah beberapa kali pesan untuk acara dinas. Pelayanannya sangat responsif, harga terjangkau, dan kualitas makanan tidak pernah mengecewakan. Sangat direkomendasikan!",
    },
];
