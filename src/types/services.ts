export type TServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type TServicesContent = {
  title: string;
  subtitle: string;
  items: TServiceItem[];
};
