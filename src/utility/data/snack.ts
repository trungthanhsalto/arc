interface Snack {
  category: string;
  sale: string;
  image: string;
  imageTwo: string;
  newPrice: number;
  oldPrice: number;
  href: string;
  title: string;
  rating: any;
  status: string;
  location: string;
  brand: string;
  sku: number;
  quantity: number;
  id : number
}

const snack: Snack[] = [
  {
    title: "Crunchy Triangle Chips Snacks",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/1_2.jpg",
    category: "chips & fries",
    newPrice: 59.0,
    oldPrice: 87.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 1611,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Dates Value Fresh Pouch",
    sale: "Sale",
    rating: 3,
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/2_2.jpg",
    category: "Dried Fruits",
    newPrice: 78.0,
    oldPrice: 85.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 54,
    quantity: 1,
    status: "Available",
  },
  {
    title: "Californian Almonds Value Pack",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/3_1.jpg",
    category: "Dried Fruits",
    newPrice: 58.0,
    oldPrice: 65.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 16411,
    quantity: 1,
    rating: 2,
    status: "Available",
  },
  {
    title: "Natural Hub Cherry Karonda",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/4_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/4_2.jpg",
    category: "Fresh Fruit",
    newPrice: 49.0,
    oldPrice: 65.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 56,
    quantity: 1,
    rating: 1,
    status: "Available",
  },

  {
    title: "Berry & Graps",
    sale: "New",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/5_2.jpg",
    category: "Mix Snack",
    newPrice: 45.0,
    oldPrice: 50.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 16141,
    quantity: 1,
    rating: 5,
    status: "Out Of Stock",
  },
  {
    title: "Mixed Nuts Seeds & Berries Pack",
    sale: "Sale",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/6_1.jpg",
    category: "Dried Fruits",
    newPrice: 45.0,
    oldPrice: 56.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 161341,
    quantity: 1,
    rating: 3,
    status: "Available",
  },
  {
    title: "Mixed Nuts & Almonds Dry Fruits",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/7_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/7_2.jpg",
    category: "Foods",
    newPrice: 49.0,
    oldPrice: 65.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 161431,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Smoked Honey Spiced Nuts",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/8_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/8_1.jpg",
    category: "Snacks",
    newPrice: 32.0,
    oldPrice: 45.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 166511,
    quantity: 1,
    rating: 2,
    status: "Out Of Stock",
  },
  {
    title: "Fresh Mango juice pack",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/9_2.jpg",
    category: "Foods",
    newPrice: 46.0,
    oldPrice: 65.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 53,
    quantity: 1,
    rating: 4,
    status: "Available",
  },
  {
    title: "Healthy Nutmix, 200g Pack",
    sale: "",
    image: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/10_1.jpg",
    imageTwo: process.env.NEXT_PUBLIC_URL + "/assets/img/product-images/10_2.jpg",
    category: "Foods",
    newPrice: 28.0,
    oldPrice: 30.0,
    href: "",
    location: "Online",
    brand: "Bhisma Organice",
    sku: 23456,
    id: 1664511,
    quantity: 1,
    rating: 5,
    status: "Available",
  },
];

export default snack;
