import { BASE_URL } from "../constants/BASE_URL";

export const getCotacao = async (setLoader: any, setMoedas: any, setError:any) => {

    setError(false);
    setLoader(true);

    await fetch(
        `${BASE_URL}/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL`
    )
        .then((response) => response.json())
        .then((data) => {
            setMoedas(Object.values(data));
            setLoader(false);
        })
        .catch((error) => {
            setError(true);
        });

    setLoader(false); 
};
