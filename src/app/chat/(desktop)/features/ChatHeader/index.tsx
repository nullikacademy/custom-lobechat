import { ChatHeader } from 'nullikaiui';
import { memo } from 'react';

import HeaderAction from './HeaderAction';
import Main from './Main';

const Header = memo(() => <ChatHeader left={<Main />} right={<HeaderAction />} />);

export default Header;
