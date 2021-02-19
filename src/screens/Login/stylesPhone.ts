import {
    StyleSheet,
    Dimensions
  } from 'react-native'
  
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen'
import {IStyle} from '../../models/stylesModels'

 const stylesPhone = StyleSheet.create<IStyle>({
    container: {
        width: wp('90%'),
        height: hp('53%'),
        backgroundColor: '#FAF5FF',
        alignSelf: 'center',
        marginTop: hp('25%'),
        borderRadius: wp('2%'),
        paddingHorizontal: wp('7%')
    },
    hello:{
        fontSize:wp('8%'),
        width: wp('50%'),
        color: '#383E71',
        fontFamily: 'Montserrat_400Regular',
        alignSelf:'center',
        textAlign:'center',
        marginTop: hp('3%')
    },
    descText:{
        fontSize:wp('3.5%'),
        color: '#989FDB',
        fontFamily: 'Montserrat_600SemiBold',
        textAlign:'center',
        alignSelf:'center',
        marginTop:hp('2%')
    },
    inputComponent:{
        marginTop: hp('2%')
    },
    emailError:{
        color: '#FF377F',
        fontFamily: 'Montserrat_400Regular',
        fontSize: wp('3%'),
        marginLeft: wp('4%')
    },
    txtLabel:{
        fontSize:wp('3%'),
        width: wp('50%'),
        color: '#383E71',
        fontFamily: 'Montserrat_400Regular',
        marginLeft: wp('2%')
    },
    bottomContainer:{
        marginTop: hp('5%'),
        alignItems:'center' 
    },
    bottomText:{
        color:'white',
        fontFamily: 'Montserrat_400Regular',
        fontSize: wp('4%')
    },
    bottomClickContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: hp('1%')
    },
    butonContainer:{ 
        width: wp('50%'), 
        marginTop: -hp('2%'), 
        alignSelf: 'center'
    }
})

export default stylesPhone