import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export interface IStyle {
    container: ViewStyle;
    hello: TextStyle;
    descText: TextStyle;
    input?: TextStyle;
    inputComponent?: TextStyle;
    emailError: TextStyle;
    txtLabel: TextStyle;
    bottomContainer: TextStyle;
    bottomClickContainer: ViewStyle;
    butonContainer?: ViewStyle;
    bottomText: TextStyle;
    bottomTextClick?: TextStyle;
    bottomTextContainer?: ViewStyle;
}

export interface IBackgroundImageStyle{
    bgImage: ImageStyle;
    gradient: ViewStyle;
    bottomBox?: ViewStyle;

}