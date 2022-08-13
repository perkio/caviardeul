import "../styles/style.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/layout";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
import LocalStorageMigrator from "../components/localStorageMigrator";

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
        <LocalStorageMigrator />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default Caviardeul;
