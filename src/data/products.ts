export interface Product {
  id: number;
  name: string;
  price: string;      // formatted
  image: string;      // path dari /public
  badge?: "new" | "hot" | "sale";
  desc?: string;
  ingredients?: string[]; // komposisi/jenis bunga
  rating?: number;        // 0 - 5
  reviews?: number;       // jumlah ulasan
  oldPrice?: string;      // harga coret
}

export const featured: Product[] = [
  {
    id: 1,
    name: "Sunflower Bouquet",
    price: "$85.00",
    oldPrice: "$96.00",
    image: "/sunflower-buket.jpeg",
    badge: "new",
    desc: "Buket cerah bernuansa kuning keemasan untuk momen spesial.",
    ingredients: ["Sunflower", "Eucalyptus", "Baby's breath"],
    rating: 4.6,
    reviews: 18,
  },
  {
    id: 2,
    name: "Pink Tulip Bouquet",
    price: "$72.00",
    image: "/pinktulip-buket.jpeg",
    desc: "Tulip pink elegan dengan sentuhan wrapping lembut.",
    ingredients: ["Pink Tulip", "Greens"],
    rating: 4.8,
    reviews: 25,
  },
  {
    id: 3,
    name: "Special Bouquet",
    price: "$99.00",
    image: "/special-buket.jpeg",
    badge: "hot",
    desc: "Mix premium pilihan florist—hadiah mewah untuk siapa saja.",
    ingredients: ["Roses", "Lisianthus", "Chrysanthemum"],
    rating: 4.9,
    reviews: 40,
  },
  {
    id: 4,
    name: "Pink Bouquet",
    price: "$65.00",
    image: "/pink-buket.jpeg",
    desc: "Nuansa pink lembut yang manis dan feminin.",
    ingredients: ["Roses", "Carnation", "Greens"],
    rating: 4.5,
    reviews: 12,
  },
  {
    id: 5,
    name: "Gerbera Bouquet",
    price: "$58.00",
    image: "/garbera-buket.jpeg",
    desc: "Gerbera segar dengan warna ceria untuk menyemangati hari.",
    ingredients: ["Gerbera", "Greens"],
    rating: 4.7,
    reviews: 19,
  },
];
