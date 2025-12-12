export type TProcessStep = {
  number: string;
  title: string;
  description: string;
  highlight: string | null;
};

export type TProcessContent = {
  title: string;
  subtitle: string;
  steps: TProcessStep[];
  promise: string;
};
