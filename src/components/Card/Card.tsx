import { View, Text } from 'react-native';
import { styles } from './styles';


export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    BTC = 'BTC',
    BRL = 'BRL',
};


const currencySimbol = (input: Currency): string => {
    switch (input) {
        case Currency.USD:
            return '$';
        case Currency.EUR:
            return '€';
        case Currency.GBP:
            return '£';
        case Currency.BTC:
            return '₿';
        case Currency.BRL:
            return 'R$';
        default:
            return '';
    }
};

interface Props {
    currency: Currency;
    name: string;
    amount: string;
}

const Card = ({ currency, amount, name }: Props): JSX.Element => {

    const amountFormatted = parseFloat(amount).toFixed(2).toString().replace(".", ",");

    return (
        <View style={styles.container}>

            <View style={styles.PrimaryBox}>

                <View style={styles.currencySimbol}>
                    <Text>{currencySimbol(currency)}</Text>

                </View>

                <View>
                    <Text>{name.split('/')[0]}</Text>
                    <Text>{currencySimbol(currency)} 1,00</Text>
                </View>

            </View>



            <Text style={styles.actualValue}>R$: {amountFormatted}</Text>


        </View>
    );
}

export default Card;

