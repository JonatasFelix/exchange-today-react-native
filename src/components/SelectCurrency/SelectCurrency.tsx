import { styles } from "./styles";
import React from "react";
import SelectDropdown from 'react-native-select-dropdown'

interface Props {
    Currency: string[];
    setSelect: (value: string) => void;
    select: string;
}

const SelectCurrency = ({ Currency, setSelect, select }: Props) => {

    return (
        <SelectDropdown
        buttonStyle={styles.sdButtonStyle}
        data={Currency.filter((item) => item !== select)}
        onSelect={(selectedItem) => {
            setSelect(selectedItem)
        }}
        defaultButtonText="Selecione a moeda"
        buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
        }}
    />
    );

};

export default SelectCurrency;