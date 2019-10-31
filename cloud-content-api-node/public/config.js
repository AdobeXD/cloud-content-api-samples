/* Replace "YOUR_ADOBE_API_KEY" with your Api key 
and "YOUR_ADOBE_API_SECRET" with your API Secret */

const apiKey = "YOUR-API-KEY";
const accessToken = "USER-ACCESS-TOKEN"

try {
        if (module) {
                module.exports = {
                        apiKey,
                        accessToken
                }
        }
}
catch (err) { }
