export type TLabel = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type TPlaceholder = TLabel;

export type TServiceOption = { value: string; label: string };
export type TContactInfo = {
  contactDetails: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
};

export type TContactForm = {
  title: string;
  heroText: string;
  heroDescription: string;
  labels: TLabel;
  placeholders: TPlaceholder;
  serviceOptions: TServiceOption[];
  infoContent: TContactInfo;
  submitButton: string;
  submitting: string;
  successTitle: string;
  successMessage: string;
};

export type TContactContent = {
  address: string;
  phone: string;
  email: string;
  hours: string;
  contactForm: TContactForm;
};
