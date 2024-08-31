import { StaticImageData } from "next/image";

export interface Product {
  href: string;
  github: boolean;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  stack: string[];
  slug: string;
  content: JSX.Element;
}
