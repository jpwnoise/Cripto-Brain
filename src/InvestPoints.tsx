
export interface InvestPoint {
    title: string,
    point: string
};

const InvestPoints: InvestPoint[] = [{
    title: 'Plataformas de intercambio (Exchanges)',
    point: `
            Elige una plataforma confiable: Investiga y compara diferentes exchanges como Coinbase, Binance o Kraken. Considera factores como seguridad, comisiones y criptomonedas disponibles.
            Crea una cuenta y verifica tu identidad: La mayoría de los exchanges requieren verificación de identidad (KYC) para cumplir con regulaciones.
            Deposita fondos: Puedes depositar dinero fiduciario (como dólares o euros) o transferir otras criptomonedas.
            `},
{
    title: 'Estrategias de inversión',
    point: `
            Inversión a largo plazo (Hodling): Comprar y mantener criptomonedas con la expectativa de que aumenten de valor con el tiempo.
            Trading: Comprar y vender criptomonedas a corto plazo para obtener ganancias de las fluctuaciones de precios.
            Diversificación: No pongas todos tus fondos en una sola criptomoneda. Invierte en diferentes activos para reducir el riesgo.
             `},
{
    title: 'Almacenamiento seguro(Wallets)',
    point: `
        Elige un tipo de wallet:
        Hot wallets(en línea): Convenientes pero menos seguras.
        Cold wallets(fuera de línea): Más seguras pero menos convenientes.
        Protege tus claves privadas: Nunca compartas tus claves privadas con nadie.Son la única forma de acceder a tus criptomonedas.
        `},
{
    title: 'Consideraciones adicionales',
    point: `
                Gestión de riesgos: Invierte solo lo que puedas permitirte perder.
                Impuestos: Infórmate sobre las implicaciones fiscales de invertir en criptomonedas en tu país.
                Seguridad: Mantén tu software actualizado y utiliza contraseñas seguras.`
}
]

export default InvestPoints; 