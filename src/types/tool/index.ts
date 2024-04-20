import { OpenGPTPluginManifest, LobePluginType } from '@lobehub/chat-plugin-sdk';

import { CustomPluginParams } from './plugin';
import { LobeToolType } from './tool';

export interface LobeTool {
  customParams?: CustomPluginParams;
  identifier: string;
  manifest?: OpenGPTPluginManifest;
  settings?: any;
  type: LobeToolType;
}

export type LobeToolRenderType = LobePluginType | 'builtin';

export * from './builtin';
