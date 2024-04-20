import { Icon } from 'nullikaiui';
import { Dropdown } from 'antd';
import { createStyles } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { LucideArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { ModelItemRender, ProviderItemRender } from '@/components/ModelSelect';
import { useGlobalStore } from '@/store/global';
import { modelProviderSelectors } from '@/store/global/selectors';
import { useSessionStore } from '@/store/session';
import { agentSelectors } from '@/store/session/selectors';
import { ModelProviderCard } from '@/types/llm';
import { withBasePath } from '@/utils/basePath';

const useStyles = createStyles(({ css, prefixCls }) => ({
  menu: css`
    .${prefixCls}-dropdown-menu-item {
      display: flex;
      gap: 8px;
    }
    .${prefixCls}-dropdown-menu {
      &-item-group-title {
        padding-inline: 8px;
      }

      &-item-group-list {
        margin: 0 !important;
      }
    }
  `,
  tag: css`
    cursor: pointer;
  `,
}));

const ModelSwitchPanel = memo<PropsWithChildren>(({ children }) => {
  const { t } = useTranslation('components');
  const { styles, theme } = useStyles();
  const model = useSessionStore(agentSelectors.currentAgentModel);
  const updateAgentConfig = useSessionStore((s) => s.updateAgentConfig);

  const router = useRouter();
  const enabledList = useGlobalStore(
    modelProviderSelectors.modelProviderListForModelSelect,
    isEqual,
  );

  const items = useMemo(() => {
    const getModelItems = (provider: ModelProviderCard) => {
      const items = provider.chatModels.map((model) => ({
        key: model.id,
        label: <ModelItemRender {...model} />,
        onClick: () => {
          updateAgentConfig({ model: model.id, provider: provider.id });
        },
      }));

      // if there is empty items, add a placeholder guide
      if (items.length === 0)
        return [
          {
            key: 'empty',
            label: (
              <Flexbox gap={8} horizontal style={{ color: theme.colorTextTertiary }}>
                {t('ModelSwitchPanel.emptyModel')}
                <Icon icon={LucideArrowRight} />
              </Flexbox>
            ),
            onClick: () => {
              router.push(withBasePath('/settings/llm'));
            },
          },
        ];

      return items;
    };

    // If there is only one provider, just remove the group, show model directly
    if (enabledList.length === 1) {
      const provider = enabledList[0];
      return getModelItems(provider);
    }

    // otherwise show with provider group
    return enabledList.map((provider) => ({
      children: getModelItems(provider),
      key: provider.id,
      label: <ProviderItemRender provider={provider.id} />,
      type: 'group',
    }));
  }, [enabledList]);

  return (
    <Dropdown
      menu={{
        activeKey: model,
        className: styles.menu,
        items,
        style: {
          maxHeight: 500,
          overflowY: 'scroll',
        },
      }}
      placement={'topLeft'}
      trigger={['click']}
    >
      <div className={styles.tag}>{children}</div>
    </Dropdown>
  );
});

export default ModelSwitchPanel;
