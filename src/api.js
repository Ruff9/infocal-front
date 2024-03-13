import axios from 'axios'

export async function getCity(latitude, longitude) {
    const base = "https://nominatim.openstreetmap.org/reverse?";
    const params = "&format=geocodejson&accept-language=fr"
    const url = base + "lat=" + latitude + "&lon=" + longitude + params;

    try {
        const response = await axios.get(url);
        const data = response.data["features"][0]["properties"]["geocoding"]

        return { cityName: data["city"], postcode: data["postcode"]}
    } catch (error) {
        console.error(error);
    }
}

export async function getInseeCode(cityName, postcode) {
    const base = "https://geo.api.gouv.fr/communes?";
    const url = base + "codePostal=" + postcode + "&name=" + cityName;

    try {
        const response = await axios.get(url);
        const data = response.data[0]

        return { insee_code: data["code"], population: data["population"]}
    } catch (error) {
        console.error(error);
    }
}
