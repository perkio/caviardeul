import React, { useCallback, useEffect, useState } from "react";

import { Fonts, Settings } from "@caviardeul/types";
import SaveManagement from "@caviardeul/utils/save";
import {
  SettingsContext,
  getInitialSettings,
} from "@caviardeul/utils/settings";

import { FontMap } from "./fontManager";

const getColorScheme = (lightMode: boolean): [string, string] => {
  return lightMode ? ["#eee", "#202020"] : ["#101010", "#999999"];
};

const SettingsManager: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<Settings>(getInitialSettings());

  const toggleLightMode = useCallback((lightMode: boolean) => {
    const [backgroundColor, textColor] = getColorScheme(lightMode);
    document.documentElement.style.setProperty("--color-text", textColor);
    document.documentElement.style.setProperty(
      "--color-background",
      backgroundColor
    );
  }, []);

  const setFont = useCallback((font: Fonts) => {
    const fontVar = FontMap[font].style.fontFamily ?? "monospace";
    document.documentElement.style.setProperty("--article-font", fontVar);
  }, []);

  const handleChangeSettings = useCallback(
    (newSettings: Partial<Settings>) => {
      const updatedSettings = { ...settings, ...newSettings };
      setSettings(updatedSettings);
      SaveManagement.saveSettings(updatedSettings);
    },
    [settings]
  );

  useEffect(() => {
    toggleLightMode(settings.lightMode);
    setFont(settings.articleFont);
  }, [settings, toggleLightMode, setFont]);

  return (
    <SettingsContext.Provider
      value={{ settings, onChangeSettings: handleChangeSettings }}
    >
        {children}
    </SettingsContext.Provider>
  );
};

export default SettingsManager;
