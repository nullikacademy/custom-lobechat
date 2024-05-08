import { Earth, Instagram, ShoppingCart } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

[]
import Item from '../features/SettingList/Item';
import { useStyles } from './style';

const AboutList = memo(() => {
  const { t } = useTranslation('setting');
  const { styles } = useStyles();
  const items = [
    {
      icon: Earth,
      label: 'Nullik Academy Website',
      onClick: () => window.open('https://nullikacademy.ir', '__blank'),
      value: 'feedback',
    },
    {
      icon: Instagram,
      label: 'Nullik Academy Instagram',
      onClick: () => window.open('https://instagram.com/nullikacademy', '__blank'),
      value: 'changelog',
    },
    {
      icon: ShoppingCart,
      label: 'Subscribe',
      onClick: () => window.open('http://opengpt.ir/', '__blank'),
      value: 'about',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Flexbox className={styles.container} gap={24} padding={16}>
        <Flexbox className={styles.title} gap={8} horizontal>
          {t('about.title')}
        </Flexbox>
        <Flexbox width={'100%'}>
          {items.map(({ value, icon, label, onClick }) => (
            <div key={value} onClick={onClick}>
              <Item active={false} icon={icon} label={label} />
            </div>
          ))}
        </Flexbox>
      </Flexbox>
    </div>
  );
});

export default AboutList;
