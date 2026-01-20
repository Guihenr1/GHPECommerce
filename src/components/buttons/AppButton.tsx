import { StyleSheet, TouchableOpacity, TouchableOpacityProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { vs, s } from 'react-native-size-matters';
import AppText from '../texts/AppText';
import { Colors } from '../../styles/colors';
import { FC } from 'react';

interface AppButtonProps extends TouchableOpacityProps {
    title: string;
    onPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    style?: StyleProp<ViewStyle>;
    styleTitle?: StyleProp<TextStyle>;
    disabled?: boolean;
}

const AppButton: FC<AppButtonProps> = ({
                                           onPress,
                                           title,
                                           backgroundColor = Colors.primary,
                                           textColor = Colors.white,
                                           style,
                                           styleTitle,
                                           disabled = false,
                                           ...rest
                                       }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[
                styles.button,
                { backgroundColor: disabled ? Colors.disabledGrey : backgroundColor },
                style,
            ]}
            disabled={disabled}
            {...rest}
        >
            <AppText
                style={StyleSheet.flatten([
                    styles.textTitle,
                    { color: textColor },
                    styleTitle
                ])}
                variant="bold"
            >
                {title}
            </AppText>
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: vs(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vs(25),
        alignSelf: 'center',
    },
    textTitle: {
        fontSize: s(16),
    },
});