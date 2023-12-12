export type Car = {
  model: string;
  brand: string;
  fuel: string;
  drive: string;
  mpg: string;
  gears: string;
  description: string;
};

export type Renting = {
  _id: string;
  pickUpLocation: string;
  pickUpDateTime: Date;
  dropOffLocation: string;
  dropOffDateTime: Date;
  brand: string;
  model: string;
  userId: string | undefined;
};
