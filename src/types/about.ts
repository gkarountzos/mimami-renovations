export type TAboutValue = {
  title: string;
  description: string;
};

export type TAboutValues = {
  subtitle: string;
  heading: string;
  values: TAboutValue[];
};

export type TAboutStats = {
  value: string;
  label: string;
};

export type TAboutContent = {
  title: string;
  subtitle: string;
  description: string;
  valuesSection: TAboutValues;
  stats: TAboutStats[];
};
