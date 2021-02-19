import {StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    bgImage:{
        width: wp('100%'),
        height: hp('65%'), 
        position: 'absolute', 
        top: 0 
    },
    gradient:{
        width: wp('100%'), 
        height: hp('65%'), 
    },
    bottomBox:{
        backgroundColor: '#130525', 
        height: hp('50%'), 
        width: wp('100%'),
    },
})

export default styles