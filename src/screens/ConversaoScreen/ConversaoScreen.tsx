import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Keyboard, Alert } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header/Header";
import SelectCurrency from "../../components/SelectCurrency/SelectCurrency";
import { currencySymbol, CurrencysNames } from "../../@types/Currency";
import CustomAlert from "../../components/CustomAlert/CustomAlert";

const ConversaoScreen = () => {

    const [alert, setAlert] = useState(false);

    const [selectDe, setSelectDe] = useState("");
    const [selectPara, setSelectPara] = useState("");
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const symbolResult = currencySymbol(CurrencysNames.find((item) => item.name === selectPara)?.value || "");


    const handleConvert = () => {
        const currencyDe = selectDe;
        const currencyPara = selectPara;
        const valueConverted = value.toString().replace(",", ".");

        if (currencyDe && currencyPara && value) {
            let result: number | string = (parseFloat(valueConverted) * 5).toFixed(2);
            result = result.replace(".", ",");
            setResult(result);
        } else {
            // Alert.alert("Preencha todos os campos");
            setAlert(true);
        }

        Keyboard.dismiss()
    }

    useEffect(() => {
        setResult("");
    }, [selectDe, selectPara])

    return (
        <View style={styles.container}>
            <Header title="Conversão" />

            <CustomAlert
                showAlert={alert}
                setShowAlert={setAlert}
                title="Atenção"
                message="Preencha todos os campos"
            />

            <View style={{ flex: 1 }}>
                <View style={styles.changeBox}>
                    <Text style={styles.fontColor}>Valor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0,00"
                        keyboardType="numeric"
                        value={value.toString()}
                        onChangeText={(value) => setValue(value)}
                        onSubmitEditing={handleConvert}
                    />
                </View>

                <View style={styles.changeBox}>
                    <Text style={styles.fontColor}>De</Text>
                    <SelectCurrency Currency={CurrencysNames} setSelect={setSelectDe} select={selectPara} />
                </View>

                <View style={styles.changeBox}>
                    <Text style={styles.fontColor}>Para</Text>
                    <SelectCurrency Currency={CurrencysNames} setSelect={setSelectPara} select={selectDe} />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleConvert}>
                    <Text>Converter</Text>
                </TouchableOpacity>

                {result && (
                    <View style={styles.boxResult}>
                        <Text style={styles.fontColor}>Resultado</Text>
                        <Text style={styles.fontColor}>{symbolResult}: {result}</Text>
                    </View>
                )}

            </View>
        </View>
    );
};

export default ConversaoScreen;