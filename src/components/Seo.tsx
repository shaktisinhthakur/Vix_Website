import React from 'react';
import { Helmet } from 'react-helmet-async';
import { company } from '../data/company';

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
};

export function Seo({
  title,
  description = company.description,
  path = '/',
  image = company.ogImage,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
}: SeoProps) {
  const fullTitle = title ? `${title} | ${company.name}` : `${company.name} — ${company.tagline}`;
  const url = `${company.url}${path}`;
  const imageUrl = `${company.url}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={company.name} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {authors?.map((author, i) => <meta key={i} property="article:author" content={author} />)}
      {section && <meta property="article:section" content={section} />}
      {tags?.map((tag, i) => <meta key={i} property="article:tag" content={tag} />)}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional meta */}
      <meta name="theme-color" content="#030617" />
    </Helmet>
  );
}