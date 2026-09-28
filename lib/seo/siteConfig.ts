export const siteConfig = {
  name: 'Digital Palika',
  legalName: 'Ninja Infosys Pvt. Ltd.',
  url: 'https://digitalpalika.com',
  defaultTitle: 'Digital Palika — Digital Municipality Management System',
  defaultDescription:
    'Digital Palika is a digital municipality management system that helps local bodies in Nepal deliver technology-enabled services to citizens.',
  defaultOgImage: '/herosection.png',
  locale: 'en_US',
  twitterHandle: undefined as string | undefined,
} as const;

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();
