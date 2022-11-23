import { BASE_URL } from "../constants/BASE_URL";

export const getConversao = async (setResult: any, de: any, para: any) => {
    await fetch(
        `${BASE_URL}/${de}-${para}`
    )
        .then((response) => response.json())
        .then((data) => {
            setResult(data[0].ask);
        })

};
