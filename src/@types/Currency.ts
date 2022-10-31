export interface ICurrencyNames {
    name: string;
    value: string;
}

export const CurrencysNames: ICurrencyNames[] = [
    { name: 'Dólar Americano', value: 'USD' },
    { name: 'Real', value: 'BRL' },
    { name: 'Euro', value: 'EUR' },
    { name: 'Libra Esterlina', value: 'GBP' },
    { name: 'Bitcoin', value: 'BTC' },
]

export interface Currency {
    code: string;  // Código da moeda
    codein: string;  // Código da moeda de conversão
    name: string;  // Nome da moeda
    high: string;  // Maior preço de compra
    low: string;  // Menor preço de venda
    varBid: string;  // Variação do dia
    pctChange: string;  // Variação do dia em porcentagem
    bid: string;  // Preço de compra
    ask: string;  // Preço de venda
    timestamp: string;  // Data e hora da cotação
    create_date: string;  // Data e hora da cotação
}


export enum CurrencyLocation {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    BTC = 'BTC',
    BRL = 'BRL',
};

export enum CurrencySymbol {
    USD = '$',
    EUR = '€',
    GBP = '£',
    BTC = '₿',
    BRL = 'R$',
};

export const currencySymbol = (input: string): string => {
    switch (input) {
        case CurrencyLocation.USD:
            return CurrencySymbol.USD;
        case CurrencyLocation.EUR:
            return CurrencySymbol.EUR;
        case CurrencyLocation.GBP:
            return CurrencySymbol.GBP;
        case CurrencyLocation.BTC:
            return CurrencySymbol.BTC;
        case CurrencyLocation.BRL:
            return CurrencySymbol.BRL;
        default:
            return "";
    }
}