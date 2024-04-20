import { Metadata } from 'next';

import { getClientConfig } from '@/config/client';
import { getServerConfig } from '@/config/server';
import { OFFICIAL_URL } from '@/const/url';

import pkg from '../../package.json';

const title = 'OpenGPT';
const { description, homepage } = pkg;

const { SITE_URL = OFFICIAL_URL } = getServerConfig();
const { BASE_PATH } = getClientConfig();

// if there is a base path, then we don't need the manifest
const noManifest = !!BASE_PATH;

const metadata: Metadata = {
  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title,
  },
  description,
  icons: {
    apple:
      'https://nullik.com/ai/apple-touch-icon.png',
    icon: 'https://nullik.com/ai/favicon-32x32.png',
    shortcut:
      'https://nullik.com/ai/favicon.ico',
  },
  manifest: noManifest ? undefined : '/manifest.json',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description: description,
    images: [
      {
        alt: title,
        height: 360,
        url: 'https://nullik.com/ai/og-480x270.png',
        width: 480,
      },
      {
        alt: title,
        height: 720,
        url: 'https://nullik.com/ai/og-960x540.png',
        width: 960,
      },
    ],
    locale: 'en-US',
    siteName: title,
    title: title,
    type: 'website',
    url: homepage,
  },

  title: {
    default: title,
    template: '%s · LobeChat',
  },
  twitter: {
    card: 'summary_large_image',
    description,
    images: [
      'https://nullik.com/ai/og-960x540.png',
    ],
    site: '@lobehub',
    title,
  },
};

export default metadata;
