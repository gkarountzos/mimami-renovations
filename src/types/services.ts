export type TServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type TServiceItemDetailed = { [key: string]: string[] };

export type TService = {
  short: TServiceItem[];
  detailed?: TServiceItemDetailed;
};

export type TServicesContent = {
  heading: string;
  title: string;
  subtitle: string;
  services: TService;
};
