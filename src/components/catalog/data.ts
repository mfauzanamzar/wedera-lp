import templateData from '@/data/templates.json';
import type { Category, TemplateData, TemplateMap } from './types';

// Constants
export const BASE_URL = 'https://invitation.wedera.id';
export const IMAGE_BASE_PATH = '/images/catalog';

export const CATEGORIES: Category[] = templateData.categories;

// Transform template data to include full URLs
export const TEMPLATES: TemplateMap = Object.entries(templateData.templates).reduce((acc, [categoryId, templates]) => {
  acc[parseInt(categoryId)] = templates.map((template: TemplateData) => ({
    id: template.id,
    title: template.title,
    link: `${BASE_URL}/${template.slug}/`,
    image: `${IMAGE_BASE_PATH}/${template.image}`,
  }));
  return acc;
}, {} as TemplateMap); 