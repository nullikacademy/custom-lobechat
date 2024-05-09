'use client';

import { useTheme } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';


const Footer = memo(() => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        ©{new Date().getFullYear()} LobeHub
      </span>
      <Flexbox horizontal>

      </Flexbox>
    </Flexbox>
  );
});

export default Footer;
