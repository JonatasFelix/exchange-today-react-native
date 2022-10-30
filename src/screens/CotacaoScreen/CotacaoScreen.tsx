import { MOEDAS } from "../../assets/utils/moedas";
import Card from "../../components/Card/Card";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";

const CotacaoScreen = () => {

    return (
        <View style={styles.container}>
            <Header title="Cotação" />
            <View>
                {MOEDAS.map((moeda: any) => (
                    <Card
                        key={moeda.code}
                        currency={moeda.code}
                        name={moeda.name}
                        amount={moeda.bid}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.button}>
                <Text>Converção</Text>
            </TouchableOpacity>
            

        </View>
    );
};

export default CotacaoScreen;