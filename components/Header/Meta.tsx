import React from "react";
import Head from "next/head";

export const MetaTags = ({ title, description, image, name }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="metro, reviews, bots, discord bots, Metro Reviews, Metro Bots, Discord Bots"
      />
      <meta name="msapplication-TileColor" content="#220A49" />
      <meta name="theme-color" content="#220A49" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Metro Reviews" />
      <meta name="twitter:creator" content="@TheRealToxicDev" />
      <meta property="og:site_name" content={name}></meta>
      <meta name="apple-mobile-web-app-title" content={title} />
      <link rel="apple-touch-icon" sizes="180x180" href={image} />
      <link rel="icon" type="image/png" sizes="192x192" href={image} />
      <link rel="icon" type="image/png" sizes="32x32" href={image} />
      <link rel="icon" type="image/png" sizes="96x96" href={image} />
      <link rel="icon" type="image/png" sizes="16x16" href={image} />
      <meta name="msapplication-TileImage" content={image} />
    </Head>
  );
};
