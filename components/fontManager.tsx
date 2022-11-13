import { FontModule } from 'next/font';
import { Alef, Arimo, Roboto, Rubik, Miriam_Libre, Noto_Sans_Hebrew } from "@next/font/google"
import { Fonts } from '@caviardeul/types';

const miriamLoader = Miriam_Libre({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

const alefLoader = Alef({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

const notoLoader = Noto_Sans_Hebrew({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

export const FontMap: Record<Fonts, Pick<FontModule, 'variable'|'style' > & { label: string }> = {
  [Fonts.default]: {
    label: "מונוספייס",
    style: { fontFamily: "monospace" },
  },
  
  [Fonts.MiriamLibre]: {
    ...miriamLoader,
    label: "מרים ליברה",
  },

  [Fonts.Alef]: {
    ...alefLoader,
    label: "אלף",
  },

  [Fonts.NotoSansHebrew]: {
    ...notoLoader,
    label: "נוטו סנס",
  },
}