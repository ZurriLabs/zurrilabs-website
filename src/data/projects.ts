export interface Project {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  liveUrl?: string;
  category: string;
}

// Safely map assets from src/assets if they exist
const assetImages = import.meta.glob<string>('../assets/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

const resolveAsset = (path: string): string => {
  const key = `..${path}`;
  if (assetImages[key]) {
    return assetImages[key];
  }
  return path;
};

export const rawProjects = [
  {
    id: 'nova-architects',
    title: 'NOVA Architects',
    description: 'Estudio de arquitectura de lujo — experiencia digital tipo exhibición.',
    screenshot: '/assets/nova-preview.png',
    liveUrl: 'https://nova-nu-six.vercel.app/',
    category: 'Architecture',
  },
  {
    id: 'mzen',
    title: 'MZEN',
    description: 'E-commerce de moda de lujo, estética editorial.',
    screenshot: '/assets/mzen-preview.png',
    liveUrl: 'https://mzen-omega.vercel.app/',
    category: 'Fashion',
  },
  {
    id: 'catalogpro',
    title: 'CatalogPro',
    description: 'Plataforma de catálogo digital.',
    screenshot: '/assets/catalogpro-preview.png',
    liveUrl: 'https://catalogpro-eight.vercel.app/',
    category: 'SaaS',
  },
  {
    id: 'localpro',
    title: 'LocalPro',
    description: 'Plataforma de servicios locales.',
    screenshot: '/assets/localpro-preview.png',
    liveUrl: 'https://localpro-delta.vercel.app/',
    category: 'SaaS',
  },
  {
    id: 'segurity',
    title: 'Segurity',
    description: 'Plataforma de seguridad.',
    screenshot: '/assets/segurity-preview.png',
    liveUrl: 'https://segurity-hub.vercel.app/',
    category: 'Security',
  },
  {
    id: 'voyager',
    title: 'Voyager',
    description: 'Plataforma de viajes.',
    screenshot: '/assets/voyager-preview.png',
    liveUrl: 'https://voyager-six-silk.vercel.app/',
    category: 'Travel',
  },
];

export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  screenshot: resolveAsset(project.screenshot),
}));
