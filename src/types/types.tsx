export interface Language {
  code: string;
  name: string;
}

export interface Country {
  name: string;
  code: string;
  emoji: string;
  emojiU: string;
  capital: string;
  currency: string;
  continent: {
    code: string;
    name: string;
  };
  languages: Language[];
}
