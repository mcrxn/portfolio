export interface User {
  name: string;
  lastName: string;
  title: string;
  description: string;
  about: string;
  skills: {
    languages: string[];
    frameworks: string[];
    other: string[];
  };
}
