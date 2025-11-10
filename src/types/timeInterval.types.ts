export interface IInfo {
  title: string;
  description: string;
}

export interface ITimeInterval {
  id: number;
  firstYear: string;
  secondYear: string;
  headers: string;
  info: IInfo[];
}
