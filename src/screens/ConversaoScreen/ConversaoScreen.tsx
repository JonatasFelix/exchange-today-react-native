import React from "react";
import { MOEDAS } from "../../assets/utils/moedas";
import Card from "../../components/Card/Card";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { styles } from "./styles";
import SelectCurrency from "../../components/SelectCurrency/SelectCurrency";


const ConversaoScreen = () => {

    const Currency = ["Dolar", "Euro", "Real", "Bitcoin", "Libra"];

    const [selectDe, setSelectDe] = useState("");
    const [selectPara, setSelectPara] = useState("");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleConvert = () => {
        const moedaDe = selectDe;
        const moedaPara = selectPara;
        const valueConverted = value.toString().replace(",", ".");

        if (moedaDe && moedaPara && value) {
            let result: number | string = (parseFloat(valueConverted) * 5).toFixed(2);
            result = result.replace(".", ",");
            setResult(result);
        }
    }

    return (
        <View style={styles.container}>
            <Header title="Conversão" />

            <View style={{ flex: 1 }}>
                <View style={styles.changeBox}>
                    <Text style={styles.fontColor}>Valor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0,00"
                        keyboardType="numeric"
                        value={value.toString()}
                        onChangeText={(value) => setValue(value)}
                    />
                </View>

                <View style={styles.changeBox}>
                    <Text style={styles.fontColor}>De</Text>
                    <SelectCurrency Currency={Currency} setSelect={setSelectDe} select={selectPara} />
                </View>

                <View style={styles.changeBox}>
                    <Text style={styles.fontColor}>Para</Text>
                    <SelectCurrency Currency={Currency} setSelect={setSelectPara} select={selectDe} />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleConvert}>
                    <Text>Converter</Text>
                </TouchableOpacity>


                {result && (
                    <View style={styles.boxResult}>
                        <Text style={styles.fontColor}>Resultado</Text>
                        <Text style={styles.fontColor}>{result}</Text>
                    </View>
                )}



            </View>
        </View>
    );
};

export default ConversaoScreen;