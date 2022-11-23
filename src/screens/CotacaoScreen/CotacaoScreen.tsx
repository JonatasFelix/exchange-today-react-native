import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./styles";
import { Currency } from "../../@types/Currency";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { goToConvesao } from "../../Routers/Coordinators";

import { getCotacao } from "../../services/getCotacao";
import Card from "../../components/Card/Card";

const CotacaoScreen = () => {

    const navigation = useNavigation();

    const [moedas, setMoedas] = useState<Currency[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        getCotacao(setLoading, setMoedas, setError);
    }, []);

    return (
        <View style={styles.container}>
            <Header title="Cotação" />
            <View>

                {loading ? (
                    <Text>Carregando...</Text>
                ) : error ? (
                    <Text>Erro ao carregar</Text>
                ) : (
                    moedas.map((moeda) => (
                        <Card 
                            key={moeda.code}
                            currency={moeda.code}
                            name={moeda.name}
                            amount={moeda.bid}
                        />
                    ))  
                )}

            </View>

            <TouchableOpacity style={styles.button} onPress={() => goToConvesao(navigation)}>
                <Text>Converção</Text>
            </TouchableOpacity>


        </View>
    );
};

export default CotacaoScreen;