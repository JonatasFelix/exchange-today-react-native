import { View, Text } from 'react-native';
import { currencySymbol } from '../../@types/Currency';
import { styles } from './styles';

interface Props {
    currency: string;
    name: string;
    amount: string;
}

const Card = ({ currency, amount, name }: Props): JSX.Element => {

    const amountFormatted = parseFloat(amount).toFixed(2).toString().replace(".", ",");

    return (
        <View style={styles.container}>

            <View style={styles.PrimaryBox}>

                <View style={styles.currencySimbol}>
                    <Text>{currencySymbol(currency)}</Text>
                </View>

                <View>
                    <Text style={styles.fontColor}>{name.split('/')[0]}</Text>
                    <Text style={styles.fontColor}>{currencySymbol(currency)} 1,00</Text>
                </View>

            </View>



            <Text style={styles.actualValue}>R$: {amountFormatted}</Text>


        </View>
    );
}

export default Card;

