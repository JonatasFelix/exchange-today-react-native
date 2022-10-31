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

export enum CurrencySimbol {
    USD = '$',
    EUR = '€',
    GBP = '£',
    BTC = '₿',
    BRL = 'R$',
};