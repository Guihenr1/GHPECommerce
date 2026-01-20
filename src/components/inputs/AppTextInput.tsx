import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {Colors} from '../../styles/colors';
import {FC} from 'react';

interface AppTextInputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    keyboardType?: TextInputProps['keyboardType'];
    style?: TextInputProps['style'];
}

const AppTextInput: FC<AppTextInputProps> = ({
                                                 value,
                                                 onChangeText,
                                                 placeholder,
                                                 secureTextEntry = false,
                                                 keyboardType,
                                                 style,
                                                 ...rest
                                             }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={[styles.input, style]}
            {...rest}
        />
    );
};

export default AppTextInput;

const styles = StyleSheet.create({
    input: {
        height: vs(40),
        borderRadius: s(25),
        borderWidth: 1,
        borderColor: Colors.borderColor,
        paddingHorizontal: s(15),
        fontSize: s(16),
        backgroundColor: Colors.white,
        width: '100%',
        marginBottom: vs(10),
    },
});