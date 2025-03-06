#!/bin/bash

coin_ids=("bitcoin" "ethereum" "ripple" "tether" "binancecoin" "solana" "cardano" "dogecoin" "tron" "worldcoin" "usd-coin")

for coin_id in "${coin_ids[@]}"; do
  url="https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=usd&days=365"
  output_file="${coin_id}_market_chart.json"

  echo "Descargando datos para ${coin_id}..."
  curl -s "${url}" > "${output_file}"

  if [ $? -eq 0 ]; then
    echo "Datos de ${coin_id} guardados en ${output_file}"
  else
    echo "Error al descargar datos de ${coin_id}"
  fi
done

echo "Proceso completado."
