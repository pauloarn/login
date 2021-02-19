import {
    StyleSheet,
  } from 'react-native'
  
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen'
import{ IStyle }from '../../models/stylesModels'


const stylesTablet = StyleSheet.create<IStyle>({
    container:{
        width: wp('57%'), 
        height: hp('65%'), 
        backgroundColor: '#FAF5FF', 
        alignSelf: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: wp('5%')
    },
    hello:{
        fontSize:wp('6%'),
        width: wp('50%'),
        color: '#383E71',
        fontFamily: 'Montserrat_400Regular',
        marginTop: hp('20%')
    },    
    descText:{
        fontSize:wp('3%'),
        color: '#989FDB',
        fontFamily: 'Montserrat_600SemiBold',
        marginTop:hp('2%'),
    },
    inputComponent:{
        marginTop: hp('2%'),
        width: wp('45%')
    },
    emailError:{
        color: '#FF377F',
        fontFamily: 'Montserrat_400Regular',
        fontSize: wp('2%'),
        marginLeft: wp('4%')
    },
    txtLabel:{
        fontSize:wp('2%'),
        width: wp('50%'),
        color: '#383E71',
        fontFamily: 'Montserrat_400Regular',
        marginLeft: wp('2%')
    },
    bottomContainer:{
        backgroundColor: '#FAF5FF',         
        alignSelf: 'flex-end',
        alignItems: 'center',
        height: hp('35%'),
        width: wp('57%')
    },
    bottomTextContainer:{
        marginTop: hp('5%'),
        alignItems:'center' ,
    },
    bottomText:{
        color:'#989FDB',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: wp('2%')
    },
    bottomTextClick:{
        color:'#989FDB',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: wp('2%'),
        textDecorationLine: 'underline'
    },
    bottomClickContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: hp('1%')
    },
    butonContainer:{ 
        width: wp('50%'), 
        marginTop: -hp('3%'), 
        alignSelf: 'center'
    },

})

export default stylesTablet