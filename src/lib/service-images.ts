import homeRemovals from "@/assets/services/home-removals.jpg";
import packaging from "@/assets/services/packaging.jpg";
import assembly from "@/assets/services/assembly-disassembly.jpg";
import storage from "@/assets/services/storage-services.jpg";
import international from "@/assets/services/international-removals.jpg";
import manVan from "@/assets/services/man-and-van.jpg";
import domestic from "@/assets/services/domestic-removals.jpg";
import business from "@/assets/services/business-removals.jpg";
import special from "@/assets/services/special-furniture.jpg";
import packing from "@/assets/services/packing-services.jpg";

export const SERVICE_IMAGES: Record<string, string> = {
  "home-removals": homeRemovals,
  packaging,
  "assembly-disassembly": assembly,
  "storage-services": storage,
  "international-removals": international,
  "man-and-van": manVan,
  "domestic-removals": domestic,
  "business-removals": business,
  "special-furniture": special,
  "packing-services": packing,
};

export const GALLERY_IMAGES: { src: string; alt: string; slug: string }[] = [
  { src: homeRemovals, alt: "Aspire crew carrying boxes into a UK home", slug: "home-removals" },
  { src: domestic, alt: "Removal truck loading outside a British terraced house", slug: "domestic-removals" },
  { src: packing, alt: "Professional packers wrapping kitchenware", slug: "packing-services" },
  { src: special, alt: "Movers wrapping a grand piano for transport", slug: "special-furniture" },
  { src: storage, alt: "Bright modern self-storage facility interior", slug: "storage-services" },
  { src: international, alt: "Shipping containers being loaded at port", slug: "international-removals" },
  { src: manVan, alt: "Man and van loading a sofa on a residential street", slug: "man-and-van" },
  { src: assembly, alt: "Mover assembling a flat-pack wardrobe", slug: "assembly-disassembly" },
  { src: business, alt: "Office relocation with crates and monitors", slug: "business-removals" },
  { src: packaging, alt: "Hands wrapping a fragile ceramic in bubble wrap", slug: "packaging" },
];
