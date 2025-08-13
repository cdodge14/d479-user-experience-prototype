// src/hooks/useStyleMap.js
import { styleMap } from '../utils/styleMap';
import { useTheme } from '../context/ThemeContext';

export const useStyleMap = () => {
  return styleMap;
};
