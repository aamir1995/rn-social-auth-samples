import { Dimensions } from 'react-native';

export const { scale, width, height } = Dimensions.get('window');

// export const scaleWithParam = (a) => a * scale;

export const ScaledWidth = width * scale;
export const ScaledHeight = height * scale;
