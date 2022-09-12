export type ChildrenProp = { children: React.ReactNode };
export type CountriesProps = {
  countries: Country[];
};
export type CountryProps = {
  country: Country | void;
};
export type CurrencieType = { name: string; symbol: string }[];
export type LanguagesType = string[];
export type BordersType = { borders: string[] };

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
  borders: string[];
}

export interface CountryContextType {
  countryList: Country[] | [];
  filteredList: Country[] | [];
  filterByRegion: ((value: string) => void) | (() => void);
  getSingleCountry: ((text: string | undefined) => Country) | (() => void);
  setContryList: ((list: Country[]) => void) | (() => void);
  searchCountry: ((list: string) => void) | (() => void);
}

export interface Theme {
  theme: string;
  switchTheme: () => void;
  setThemeHandler: (text: string) => void;
}
