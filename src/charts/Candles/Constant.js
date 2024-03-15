export const candleStickOptions = {
    chart: {
        type: "candlestick",
    },
    title: {
        text: "CandleStick Chart",
        align: "left",
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
export const randomString = generateRandomString(16);