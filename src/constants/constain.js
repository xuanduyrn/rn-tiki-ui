import {PixelRatio} from 'react-native';

export const screenNames = {
  Screen1: 'Screen1',
  FlashScreen: 'FlashScreen',
};

export function getFont(bold, light, italic) {
  if (bold && italic) {
    return fontName.boldItalic;
  }
  if (light && italic) {
    return fontName.lightItalic;
  }
  if (bold) {
    return fontName.bold;
  }
  if (light) {
    return fontName.light;
  }
  if (italic) {
    return fontName.italic;
  }

  return fontName.regular;
}

const fontName = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  boldItalic: 'Roboto-BoldItalic',
  italic: 'Roboto-Italic',
  light: 'Roboto-Light',
  lightItalic: 'Roboto-LightItalic',
};

export const validateEmail = text => {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(text) !== false;
};

const Ratio = PixelRatio.get();

/**
 * @return {number}
 */
export function Scale(size: number) {
  if (Ratio < 2) {
    return size * 0.9;
  } else if (Ratio >= 2 && Ratio < 3) {
    return size;
  } else if (Ratio === 3) {
    return size * 1.2;
  } else {
    return size * 1.3;
  }
}
