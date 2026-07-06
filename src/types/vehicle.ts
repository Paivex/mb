export interface Vehicle {
  id: number;
  title: string;
  price: number;
  year: number;
  kms: number;
  fuel: string;
  transmission: string;
  horsepower: number;
  image: string;
  featured?: boolean;
}