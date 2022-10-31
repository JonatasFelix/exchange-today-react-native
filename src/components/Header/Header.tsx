import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
    title: string;
}

const Header = ({title}: Props) => {

    const navigation = useNavigation();

    const ShowBackButton = () => {
        return (
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/imgs/back-icon.png')} />
            </TouchableOpacity>
    
        );
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} />
            <Text style={styles.text}>{title}</Text>
            {title !== 'Cotação' && <ShowBackButton />}
        </View>
    );

};

export default Header;
