export interface Category {
  id: number;
  name: string;
}

export interface TemplateData {
  id: number;
  title: string;
  slug: string;
  image: string;
}

export interface Template {
  id: number;
  title: string;
  link: string;
  image: string;
}

export interface TemplateMap {
  [key: number]: Template[];
} 