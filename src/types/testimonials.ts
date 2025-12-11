export type TTestimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
};

export type TTestimonialsContent = {
  title: string;
  items: TTestimonial[];
};
