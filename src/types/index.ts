export type ChildrenProp = { children: React.ReactNode };

export interface CountryElement {
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion: string;
  population: number;
  tld: string[];
  flags: {
    svg: string;
  };
  currencies: any;
  languages: any;
  capital: string[];
  borders: string[];
}

export interface Country {
  name: string;
  officialName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string[];
  topLevel: string[];
  currencie: any;
  languages: any;
  flag: string;
}
