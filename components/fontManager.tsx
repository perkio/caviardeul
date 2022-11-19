import { Fonts } from '@caviardeul/types';
import localFont from '@next/font/local';

import { 
  Cousine,
} from "@next/font/google";

import { NextFont } from '@next/font/dist/types';

const freeMono = localFont({ 
  src: [
    {
      path: '../fonts/FreeMono.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FreeMonoBold.woff',
      weight: '700',
      style: 'normal',
    }
  ],
  fallback: ["monospace"] 
});

// const liberationMono = localFont({ 
//   src: [
//     {
//       path: '../fonts/LiberationMono-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/LiberationMono-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   fallback: ["monospace"] 
// });

// const eversonMono = localFont({ 
//   src: [
//     {
//       path: '../fonts/Everson Mono.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/Everson Mono Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   fallback: ["monospace"] 
// });

const cousine = Cousine({
  weight: ['400', '700'],
  subsets: ["hebrew", "latin"]
});

export const FontMap: Record<Fonts, Pick<NextFont, 'style' > & { label: string }> = {
  [Fonts.default]: {
    label: "ברירת מחדל",
    style: { fontFamily: "monospace" },
  },

  [Fonts.FreeMono]: {
    ...freeMono,
    label: "GNU FreeMono",
  },

  [Fonts.Cousine]: {
    ...cousine,
    label: "Cousine",
  },

  // [Fonts.LiberationMono]: {
  //   ...liberationMono,
  //   label: "LiberationMono",
  // },

  // [Fonts.EversonMono]: {
  //   ...eversonMono,
  //   label: "EversonMono",
  // },
}