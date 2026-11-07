import fragileTape from "@/assets/products/fragile-tape.jpg";
import brownTape from "@/assets/products/brown-tape.jpg";

const largeBox = "/Large%20Boxes.jpeg";
const smallBox = "/Small%20Boxes.jpeg";
const bubbleWrap = "/Bubble%20Wraps.jpeg";
const shrinkWrap = "/Shrink%20Wrap.jpeg";
const kitchenPaper = "/Kitchen%20Paper.jpeg";
const wardrobeBox = "/Wardrobe%20Moving%20Box.jpeg";
const shoesProtector = "/shoes%20protector.jpeg";

export interface ProductItem {
  id: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "large-boxes",
    title: "Large Boxes",
    desc: "Spacious double-wall cartons for bedding, cushions and lightweight bulky items.",
    img: largeBox,
    alt: "Aspire Removals large double-wall cardboard packing box for house removals",
  },
  {
    id: "small-boxes",
    title: "Small Boxes",
    desc: "Heavy-duty small boxes ideal for books, kitchenware and dense items.",
    img: smallBox,
    alt: "Aspire Removals small heavy-duty packing box for books and fragile items",
  },
  {
    id: "fragile-tape",
    title: "Fragile Tape",
    desc: "Bold red 'Fragile' printed tape to clearly mark delicate cartons.",
    img: fragileTape,
    alt: "Red Fragile printed packing tape roll for marking delicate removal cartons",
  },
  {
    id: "brown-tape",
    title: "Brown Tape",
    desc: "Strong low-noise brown parcel tape for fast, secure box sealing.",
    img: brownTape,
    alt: "Heavy-duty low-noise brown packaging tape for sealing removal cartons",
  },
  {
    id: "bubble-wraps",
    title: "Bubble Wraps",
    desc: "Premium cushioned bubble wrap rolls for glassware, screens and artwork.",
    img: bubbleWrap,
    alt: "Protective cushioning bubble wrap roll for packing glassware and mirrors",
  },
  {
    id: "shrink-wrap",
    title: "Shrink Wrap",
    desc: "Clear stretch film to protect sofas, mattresses and drawers during transit.",
    img: shrinkWrap,
    alt: "Clear heavy-duty pallet stretch shrink wrap for protecting furniture",
  },
  {
    id: "kitchen-paper",
    title: "Kitchen Paper",
    desc: "Soft, clean packing paper for wrapping china, glassware and fragile items.",
    img: kitchenPaper,
    alt: "Clean white acid-free newsprint packing paper sheets for crockery and glassware",
  },
  {
    id: "wardrobe-box",
    title: "Wardrobe Moving Box",
    desc: "Tall boxes with a built-in hanging rail so clothes move on their hangers.",
    img: wardrobeBox,
    alt: "Tall wardrobe cardboard moving box with integrated clothes rail",
  },
  {
    id: "shoes-protector",
    title: "Shoes Protector",
    desc: "Clear protective bags to keep pairs of shoes clean, dry and together.",
    img: shoesProtector,
    alt: "Clear protective dust and moisture bags for shoes and footwear packing",
  },
];
