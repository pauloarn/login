import {StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen'
import {IBackgroundImageStyle} from '../../../../models/stylesModels'

const styles = StyleSheet.create<IBackgroundImageStyle>({
    bgImage:{
        width: wp('43%'),
        height: hp('100%'), 
        position: 'absolute', 
        top: 0 
    },
    gradient:{
        width: wp('43%'), 
        height: hp('100%'), 
    },
})

export default styles