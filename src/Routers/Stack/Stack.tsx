import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ConversaoScreen from "../../screens/ConversaoScreen/ConversaoScreen";
import CotacaoScreen from "../../screens/CotacaoScreen/CotacaoScreen";

const { Navigator, Screen } = createNativeStackNavigator();

const Stack = () => {
    return (
        <Navigator 
            initialRouteName="Cotacao"
            screenOptions={{ headerShown: false }}
        >
            <Screen name="Conversao" component={ConversaoScreen} />
            <Screen name="Cotacao" component={CotacaoScreen} />
        </Navigator>
    );
};

export default Stack;