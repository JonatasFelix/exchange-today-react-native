import { View, Text } from 'react-native';
import { CurrencyLocation, CurrencySimbol as Simbol } from '../../@types/Currency';
import { styles } from './styles';

const currencySimbol = (input: string): string => {
    switch (input) {
        case CurrencyLocation.USD:
            return Simbol.USD;
        case CurrencyLocation.EUR:
            return Simbol.EUR;
        case CurrencyLocation.GBP:
            return Simbol.GBP;
        case CurrencyLocation.BTC:
            return Simbol.BTC;
        case CurrencyLocation.BRL:
            return Simbol.BRL;
        default:
            return "";
    }
};

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
                    <Text>{currencySimbol(currency)}</Text>
                </View>

                <View>
                    <Text style={styles.fontColor}>{name.split('/')[0]}</Text>
                    <Text style={styles.fontColor}>{currencySimbol(currency)} 1,00</Text>
                </View>

            </View>



            <Text style={styles.actualValue}>R$: {amountFormatted}</Text>


        </View>
    );
}

export default Card;

