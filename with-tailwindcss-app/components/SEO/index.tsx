import Head from "next/head";

import siteMetadata from "./siteMetadata";

type WebSEO = {
  title?: string;
  description?: string;
  path?: string;
};

const CommonSEO = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  path = "",
  ogImage = siteMetadata.ogImageUrl,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="canonical"
        href={`${siteMetadata.siteUrl}${path}`}
        key="canonical"
      />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${path}`} />
      <meta name="description" content={description} />
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

export const PageSEO = ({ title, description, path }: WebSEO) => {
  return <CommonSEO title={title} description={description} path={path} />;
};
