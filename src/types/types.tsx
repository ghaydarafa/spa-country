export interface Language {
  code: string;
  name: string;
}

export interface Country {
  name: string;
  code: string;
  emoji: string;
  emojiU: string;
  native: string;
  capital: string;
  currency: string;
  phone: string;
  continent: {
    code: string;
    name: string;
  };
  languages: Language[];
}
