const palette = {
  neutral100: '#FFFFFF',
  neutral150: '#E0E0E0',
  neutral900: '#000000',

  primary400: '#f8f7f7',
  primary500: '#4A3780',

  secondary400: '#2A2D4380',
  secondary500: '#214a82',

  teritary500: '#EAF7E0',

  angry500: '#F2385F',
  gray: '#9F9F9F',
  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',
} as const;

export const COLORS = {
  primary1: palette.primary500,
  primary2: palette.primary400,
  secondary: palette.secondary500,
  secondary50: palette.secondary400,
  gray: palette.gray,
  lightGray: '#E8E8E8',
  lightBg: '#F7F7F7',
  teritary: palette.teritary500,
  white: palette.neutral100,
  semiWhite: palette.neutral150,
  black: palette.neutral900,
  error: palette.angry500,
  overlay: '#00000099',
  redNCS: '#ff6c6c',
  pigmentGreen: '#20A53D',
  transparent: 'transparent',
  info: '#00FFFF',
};
