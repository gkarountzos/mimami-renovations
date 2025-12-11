export type TPricingPackage = {
  name: string;
  ideal: string;
  includes: string;
  featured: boolean;
};

export type TPricingContent = {
  title: string;
  subtitle: string;
  packages: TPricingPackage[];
  featured: string;
  disclaimer: string;
};
