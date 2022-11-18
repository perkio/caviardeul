import { FontModule } from 'next/font';
import { Fonts } from '@caviardeul/types';

import { 
  Alef,
  Arimo,
  Roboto,
  Rubik,
  Miriam_Libre,
  Noto_Sans_Hebrew,
  Cousine,
  Open_Sans,
  IBM_Plex_Sans_Hebrew,
  Assistant,
  Heebo,
  Fredoka,
} from "@next/font/google"

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

const cousineLoader = Cousine({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});


const rubikLoader = Rubik({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

const arimoLoader = Arimo({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

const robotoLoader = Roboto({
  variable: '--article-font',
  weight: "400",
});


const openSansLoader = Open_Sans({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

const ibmPlexSansLoader = IBM_Plex_Sans_Hebrew({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

const assistantLoader = Assistant({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

const heeboLoader = Heebo({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

const fredokaLoader = Fredoka({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
});

export const FontMap: Record<Fonts, Pick<FontModule, 'variable'|'style' > & { label: string }> = {
  [Fonts.default]: {
    label: "מונוספייס (ברירת מחדל)",
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

  [Fonts.Cousine]: {
    ...cousineLoader,
    label: "קוזין",
  },

  [Fonts.Rubik]: {
    ...rubikLoader,
    label: "רוביק",
  },

  [Fonts.Roboto]: {
    ...robotoLoader,
    label: "רובוטו",
  },

  [Fonts.Arimo]: {
    ...arimoLoader,
    label: "ארימו",
  },

  [Fonts.Open_Sans]: {
    ...openSansLoader,
    label: "אופן סאנס",
  },

  [Fonts.IBM_Plex_Sans_Hebrew]: {
    ...ibmPlexSansLoader,
    label: "IBM Plex Sans",
  },

  [Fonts.Assistant]: {
    ...assistantLoader,
    label: "אסיסטנט",
  },

  [Fonts.Heebo]: {
    ...heeboLoader,
    label: "היבו",
  },

  [Fonts.Fredoka]: {
    ...fredokaLoader,
    label: "פרדוקה",
  },
}