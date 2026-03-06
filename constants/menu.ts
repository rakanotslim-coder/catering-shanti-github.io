export interface MenuItem {
    id: number;
    name: string;
    price: string;
    tag: string;
    image: string;
    description: string;
    category: string;
}

// Placeholder image for new items — replace later with real photos
const PH = "/images/rawon.jpg";

export const MENU_ITEMS: MenuItem[] = [
    // ── Existing items (with real images) ──────────────────────
    {
        id: 1,
        name: "Rawon Surabaya",
        price: "Rp 45.000",
        tag: "Best Seller",
        image: "/images/rawon.jpg",
        description: "Sup daging sapi hitam khas Surabaya dengan kuah kluwek gurih, disajikan dengan nasi, tauge, dan telur asin.",
        category: "Masakan Jawa",
    },
    {
        id: 2,
        name: "Nasi Jagung Babat",
        price: "Rp 40.000",
        tag: "Khas Jatim",
        image: "/images/nasi-jagung.jpg",
        description: "Nasi jagung khas Jawa Timur dengan babat sapi yang dimasak empuk berbumbu, disajikan dengan sambal dan lalapan.",
        category: "Masakan Jawa Timur",
    },
    {
        id: 3,
        name: "Pecel Madiun",
        price: "Rp 30.000",
        tag: "Favorit",
        image: "/images/pecel.jpg",
        description: "Sayuran segar rebus disiram bumbu kacang Madiun yang gurih dan pedas, disajikan dengan lontong dan rempeyek.",
        category: "Masakan Jawa",
    },
    {
        id: 4,
        name: "Gado-gado",
        price: "Rp 32.000",
        tag: "Healthy",
        image: "/images/gado-gado.jpg",
        description: "Sayuran rebus, tahu, tempe, dan telur dengan saus kacang khas Betawi yang kental dan gurih.",
        category: "Masakan Betawi",
    },
    {
        id: 5,
        name: "Nasi Goreng Spesial",
        price: "Rp 38.000",
        tag: "Oriental",
        image: "/images/nasi-goreng.jpg",
        description: "Nasi goreng wok dengan udang, ayam, dan sayuran pilihan, topping telur mata sapi dan kerupuk renyah.",
        category: "Oriental",
    },
    {
        id: 6,
        name: "Soto Ayam Lamongan",
        price: "Rp 38.000",
        tag: "Chef Choice",
        image: "/images/soto.jpg",
        description: "Kuah bening kuning kunyit dengan ayam suwir, bihun, telur rebus, dan taburan bawang goreng khas Lamongan.",
        category: "Masakan Jawa",
    },

    // ── Masakan Jawa ────────────────────────────────────────────
    {
        id: 7,
        name: "Gudeg Jogja",
        price: "Rp 40.000",
        tag: "Baru",
        image: PH,
        description: "Gudeg nangka muda masak santan khas Yogyakarta, manis gurih, disajikan dengan krecek, ayam, dan telur.",
        category: "Masakan Jawa",
    },
    {
        id: 9,
        name: "Nasi Liwet Solo",
        price: "Rp 38.000",
        tag: "Baru",
        image: PH,
        description: "Nasi gurih dimasak santan khas Solo, disajikan dengan sayur labu, suwiran ayam, dan telur pindang.",
        category: "Masakan Jawa",
    },

    // ── Masakan Jawa Timur ──────────────────────────────────────
    {
        id: 10,
        name: "Bebek Goreng Bumbu",
        price: "Rp 50.000",
        tag: "Baru",
        image: PH,
        description: "Bebek kampung diungkep rempah khas Jawa Timur lalu digoreng crispy, disajikan dengan sambal korek dan lalapan.",
        category: "Masakan Jawa Timur",
    },
    {
        id: 11,
        name: "Lontong Balap Surabaya",
        price: "Rp 32.000",
        tag: "Khas Jatim",
        image: PH,
        description: "Lontong dengan tauge, tahu goreng, lento, dan disiram kuah kaldu sapi gurih, ditaburi bawang goreng.",
        category: "Masakan Jawa Timur",
    },
    {
        id: 12,
        name: "Tahu Campur",
        price: "Rp 30.000",
        tag: "Baru",
        image: PH,
        description: "Kuah petis sapi khas Lamongan dengan tahu goreng, perkedel singkong, tauge, dan mie kuning.",
        category: "Masakan Jawa Timur",
    },
    {
        id: 15,
        name: "Tahu Tek Surabaya",
        price: "Rp 28.000",
        tag: "Baru",
        image: PH,
        description: "Tahu goreng setengah matang dan lontong disiram bumbu kacang petis khas Surabaya yang kental dan kaya rasa.",
        category: "Masakan Jawa Timur",
    },

    // ── Masakan Betawi & Peranakan ──────────────────────────────
    {
        id: 8,
        name: "Soto Betawi",
        price: "Rp 42.000",
        tag: "Baru",
        image: PH,
        description: "Soto berkuah santan putih kental khas Betawi dengan daging sapi, jeroan pilihan, tomat, dan emping.",
        category: "Masakan Betawi",
    },
    {
        id: 13,
        name: "Lontong Cap Go Meh",
        price: "Rp 35.000",
        tag: "Peranakan",
        image: PH,
        description: "Lontong khas perayaan Cap Go Meh dengan opor ayam, sambal goreng ati, acar, dan telur pindang.",
        category: "Peranakan",
    },

    // ── Oriental ────────────────────────────────────────────────
    {
        id: 14,
        name: "Ayam Canton",
        price: "Rp 55.000",
        tag: "Oriental",
        image: PH,
        description: "Ayam bumbu Canton masak saus tiram dengan sayuran segar, jamur, dan saus wok smoky khas oriental.",
        category: "Oriental",
    },

    // ── Kue & Snack ─────────────────────────────────────────────
    {
        id: 16,
        name: "Kue & Cake",
        price: "Rp 35.000",
        tag: "Dessert",
        image: PH,
        description: "Pilihan kue ulang tahun, layer cake, brownies, dan pastry custom untuk acara perusahaan dan perayaan.",
        category: "Kue & Dessert",
    },
    {
        id: 17,
        name: "Gorengan",
        price: "Rp 20.000",
        tag: "Snack",
        image: PH,
        description: "Paket gorengan hangat: bakwan, risoles, tahu isi, dan pastel crispy — cocok untuk coffee break dan snack box.",
        category: "Snack & Gorengan",
    },
    {
        id: 18,
        name: "Jajan Pasar",
        price: "Rp 25.000",
        tag: "Tradisional",
        image: PH,
        description: "Aneka kue tradisional: klepon, onde-onde, lemper, putu ayu, dan nagasari. Cocok untuk acara adat dan pengajian.",
        category: "Kue Tradisional",
    },
];
