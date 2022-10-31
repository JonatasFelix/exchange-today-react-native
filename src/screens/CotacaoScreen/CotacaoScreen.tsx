import { MOEDAS } from "../../assets/utils/moedas";
import Card from "../../components/Card/Card";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { Currency } from "../../@types/Currency";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { goToConvesao } from "../../Routers/Coordinators";

const CotacaoScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header title="Cotação" />
            <View>
                {MOEDAS.map((moeda: Currency): JSX.Element => (
                    <Card
                        key={moeda.code}
                        currency={moeda.code}
                        name={moeda.name}
                        amount={moeda.bid}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={() => goToConvesao(navigation)}>
                <Text>Converção</Text>
            </TouchableOpacity>
            

        </View>
    );
};

export default CotacaoScreen;