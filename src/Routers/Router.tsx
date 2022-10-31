import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack/Stack";
import React from "react";

const Router = () => {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    );
};

export default Router;
