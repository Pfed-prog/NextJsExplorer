import Head from "next/head";
import { useRouter } from "next/router";

import siteMetadata from "./siteMetadata";

type WebSEO = {
  title?: string;
  description?: string;
};

const CommonSEO = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  ogImage = siteMetadata.ogImageUrl,
}) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={siteMetadata.title} />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={siteMetadata.ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content={siteMetadata.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  );
};

export const PageSEO = ({ title, description }: WebSEO) => {
  return <CommonSEO title={title} description={description} />;
};
