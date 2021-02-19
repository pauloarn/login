import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import stylesPhone from './stylesPhone'
import stylesTablet from './stylesTablet'
import { useSelector } from 'react-redux'
import { IBackgroundImageStyle } from '../../../../models/stylesModels'
import { rootState } from "../../../../store";

const Background = () => {

    const [styles, setStyles] = useState<IBackgroundImageStyle>(stylesPhone)
    const { isBig } = useSelector(
        (state: rootState) => state.users
    )

    useEffect(() => {
        if (isBig) {
            setStyles(stylesTablet)
        } else {
            setStyles(stylesPhone)
        }
    }, [isBig])

    return (
        <View style={{ position: 'absolute' }}>
            <Image source={require('../../../../../assets/bgImage.png')} style={styles.bgImage} />
            <LinearGradient colors={['rgba(105,57,153,0)', 'rgba(19,5,37,1)']} style={styles.gradient}>
            </LinearGradient>
            <View style={isBig ? (null) : styles.bottomBox} />
        </View>
    )
}

export default Background