import {
  StyleSheet
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),
    width:'100%',
    alignSelf: 'center',
  },
  accessButton: {
    paddingHorizontal: hp('2%'),
    borderRadius: wp('2%'),
    width: '100%',
    alignItems:'center'
  },
  accessButtonText: {
    color: 'white',
    fontFamily: 'Montserrat_600SemiBold',
  }
})

export default styles
