import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "nprogress/nprogress.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Analytics } from '@vercel/analytics/react';
import { Alef, Arimo, Roboto, Rubik, Miriam_Libre, Noto_Sans_Hebrew } from "@next/font/google"

// const roboto = Roboto({
//   weight: '400',
// })

import Layout from "@caviardeul/components/layout";
import "../styles/style.scss";

const font = Noto_Sans_Hebrew({
  variable: '--article-font',
  weight: "400",
  subsets: ["hebrew"]
})

console.log('aa', font.variable)


const queryClient = new QueryClient();

const TopProgressBar = dynamic(
  () => {
    return import("../components/topProgressBar");
  },
  { ssr: false }
);

const Caviardeul = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TopProgressBar />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <div className={font.variable}>
            <Component {...pageProps} />
          </div>
        </Layout>
      </QueryClientProvider>
      <Analytics />
    </>
  );
};

export default Caviardeul;
