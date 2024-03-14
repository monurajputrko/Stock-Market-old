export const formatStockData = (stockData) => {

    const formattedData = []

    if (stockData['Weekly Adjusted Time Series']) {
        Object.entries(
            stockData['Weekly Adjusted Time Series']
        ).map(
            ([key, value]) => {
                formattedData.push({
                    x: key,
                    y: [
                        value['1. open'],
                        value['2. high'],
                        value['3. low'],
                        value['4. close'],
                    ]
                })
            }
        )
    }
    return formattedData
}