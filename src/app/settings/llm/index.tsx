'use client';

import { memo } from 'react';
import PageTitle from '@/components/PageTitle';
import { useTranslation } from 'react-i18next';
import Footer from '../features/Footer';
import Anthropic from './Anthropic';
import Azure from './Azure';
import Bedrock from './Bedrock';
import Google from './Google';
import Groq from './Groq';
import Mistral from './Mistral';
import Moonshot from './Moonshot';
import Ollama from './Ollama';
import OpenAI from './OpenAI';
import OpenRouter from './OpenRouter';
import Perplexity from './Perplexity';
import TogetherAI from './TogetherAI';
import ZeroOne from './ZeroOne';
import Zhipu from './Zhipu';
import { CURRENT_VERSION } from '@/const/version';

export default memo<{ showOllama: boolean }>(({ showOllama }) => {
  const { t } = useTranslation('setting');

  return (
    <>
      <PageTitle title={t('tab.llm')} />
      <OpenAI />
      <Azure />
      {showOllama && <Ollama />}
      <Google />
      <Anthropic />
      <Bedrock />
      <OpenRouter />
      <TogetherAI />
      <Groq />
      <Perplexity />
      <Mistral />
      <Moonshot />
      <Zhipu />
      <ZeroOne />
      <Footer>OpenGPT v{CURRENT_VERSION}</Footer>
    </>
  );
});
