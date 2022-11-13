import { createContext } from "react";

import { Fonts, Settings, SettingsState } from "@caviardeul/types";
import SaveManagement from "@caviardeul/utils/save";

export const defaultSettings: Settings = {
  lightMode: false,
  displayWordLength: true,
  withCloseAlternatives: true,
  decorateRedacted: false,
  articleFont: Fonts.default,
};

export const getInitialSettings = (): Settings => {
  let settings;
  try {
    settings = SaveManagement.getSettings();
  } catch (e) {
    return defaultSettings;
  }
  return {
    lightMode: settings?.lightMode ?? defaultSettings.lightMode,
    displayWordLength:
      settings?.displayWordLength ?? defaultSettings.displayWordLength,
    withCloseAlternatives:
      settings?.withCloseAlternatives ?? defaultSettings.withCloseAlternatives,
    decorateRedacted:
      settings?.decorateRedacted ?? defaultSettings.decorateRedacted,
    articleFont:
      settings?.articleFont ?? defaultSettings.articleFont,
  };
};

export const SettingsContext = createContext<SettingsState>({
  settings: defaultSettings,
  onChangeSettings: () => {},
});
