'use client';

import { Logo, MobileNavBar } from 'nullikaiui';
import { memo } from 'react';

import { mobileHeaderSticky } from '@/styles/mobileHeader';


const Header = memo(() => {
  return (
    <MobileNavBar
      center={<Logo type={'text'} />}
      style={mobileHeaderSticky}
    />
  );
});

export default Header;
