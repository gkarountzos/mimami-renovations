export type TProcessStep = {
  number: string;
  title: string;
  description: string;
  highlight: string | null;
};

export type TProcessContent = {
  heading: string;
  title: string;
  subtitle: string;
  steps: TProcessStep[];
  promise: string;
};
