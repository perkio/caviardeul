import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";

import Game from "@caviardeul/components/game";
import { getEncodedArticle } from "@caviardeul/hooks/article";
import { EncodedArticle } from "@caviardeul/types";
import { decodeArticle } from "@caviardeul/utils/encryption";

const CustomGame: NextPage<{
  encodedArticle: EncodedArticle;
}> = ({ encodedArticle }) => {
  const article = decodeArticle(encodedArticle);
  const title = "רדקטעל - פענח משחק מותאם אישית";
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="og:title" property="og:title" content={title} />
        <meta key="twitter:title" name="twitter:title" content={title} />
      </Head>
      <Game article={article} />
    </>
  );
};

export default CustomGame;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const articleId = (params?.articleId || "") as string;
  try {
    const data = await getEncodedArticle(articleId, true);
    return { props: { encodedArticle: data } };
  } catch (error) {
    return { notFound: true };
  }
};
