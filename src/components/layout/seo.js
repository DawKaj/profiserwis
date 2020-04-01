import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../data/website-config';

const SEO = () => {
  return (
    <>
      <Helmet>
        <html lang={config.lang} dir={config.ltr} />
        <title>{config.title}</title>
        <meta charset="utf-8" />
        {/* OpenGRaph meta tags */}
        <meta name="description" content={config.description} />
        <meta property="site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        {config.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={config.googleSiteVerification}
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
    </>
  );
};

export default SEO;
