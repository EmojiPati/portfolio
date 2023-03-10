import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface Props {
  themeColor: string;
  title: string;
  description: string;
  image: string;
  noindex: boolean;
  nofollow: boolean;
  revisitAfter: string;
  type: 'website' | 'article';
}

export default function Meta(iprops: Partial<Props>) {
  const { pathname } = useLocation();
  const props: Partial<Props> = {};

  props.themeColor = iprops.themeColor || '#00ffff';

  props.title = iprops.title ? `${iprops.title} | EmojiPati` : 'EmojiPati';

  props.description =
    iprops.description ??
    'Making Integrated WebApplications, Bots, Software! #OpenSource💖. はじめまして!!';

  props.image = iprops.image ?? 'banner.png';
  props.revisitAfter = iprops.revisitAfter ?? '7 days';

  const robots = `${iprops.noindex ? 'noindex' : 'index'}, ${
    iprops.nofollow ? 'nofollow' : 'follow'
  }`;

  const type = iprops.type ?? 'website';

  document.title = props.title;

  return (
    <Helmet>
      <meta property="theme-color" content={props.themeColor} />
      <meta name="title" content={props.title} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={pathname} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:url" content={pathname} />
      <meta name="robots" content={robots} />
      <meta name="revisit-after" content={props.revisitAfter} />
    </Helmet>
  );
}
