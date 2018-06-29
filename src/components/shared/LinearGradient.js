import React from 'react';
import { ART } from 'react-native';
const { Surface, Shape, LinearGradient } = ART;

/**
 * Components
 */
import { ScaledWidth, ScaledHeight, width, height } from '@components';


export default FullScreenLinearGradient = () => {
    linearGradient = new LinearGradient(['#4CC0C7', '#6842BA'], 500, 0, 100, 600);
    return (
        <Surface width={width} height={height} style={{ position: 'absolute', top: 0, left: 0 }}  >
            <Shape d={`M288,${ScaledHeight}H0.5V0.5H${ScaledWidth}V${ScaledWidth}z`} fill={linearGradient} />
        </Surface >
    );
}