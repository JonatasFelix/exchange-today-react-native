import { View, Image, Text } from 'react-native';
import { styles } from './styles';
// import Logo from '../../assets/imgs/logo.png';

interface Props {
    title: string;
}

const Header = ({title}: Props) => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/logo.png')} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );

};

export default Header;
