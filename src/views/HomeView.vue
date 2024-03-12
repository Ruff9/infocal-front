<template>
    <main class="main-container">
        <div class="content-container">
            <Status 
                v-if="statusContent != ''"
                :content="statusContent"
            />
            <LaunchButton
                v-if="displayButton"
                @launchFinder="localizeMe"
            />
            <Dashboard 
                v-if="displayDashboard"
                :data=cityData
            />
        </div>
    </main>
</template>

<script setup>
    import LaunchButton from '../components/LaunchButton.vue'
    import Status from '../components/Status.vue'
    import Dashboard from '../components/Dashboard.vue'

    import axios from 'axios';
    import { ref } from 'vue'

    const displayButton = ref(true)
    const displayDashboard = ref(false)
    const statusContent = ref("")

    const cityData = {
        city: '',
        postcode: '',
        insee_code: '',
        population: ''
    }

    async function localizeMe() {
        async function success(position) {
            await localizeCity(position.coords.latitude, position.coords.longitude);
        }

        function error() {
            statusContent.value = "Impossible de vous trouver :(";
        }

        const options = {
            enableHighAccuracy: true,
        };

        if (!navigator.geolocation) {
            statusContent.value = "La géolocalisation ne fonctionne pas dans votre navigateur :(";
        } else {
            statusContent.value = "Recherche ...";
            displayButton.value = false;
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    }

    async function localizeCity(latitude, longitude) {
        const base = "https://nominatim.openstreetmap.org/reverse?";
        const params = "&format=geocodejson&accept-language=fr"
        const url = base + "lat=" + latitude + "&lon=" + longitude + params;

        const response = await fetch(url)
        const result = await response.json()

        const data = result["features"][0]["properties"]["geocoding"]

        cityData['city'] = data["city"]
        cityData['postcode'] = data["postcode"]

        await collectData({ name: data["city"], postcode: data["postcode"] })
    }

    async function collectData(city) {
        const geo_base = "https://geo.api.gouv.fr/communes?";
        const geo_url = geo_base + "codePostal=" + city["postcode"] + "&name=" + city["name"];

        axios.get(geo_url)
            .then(function (response) {
                cityData['insee_code'] = response["data"][0]["code"]
                cityData['population'] = response["data"][0]["population"]

                statusContent.value = "";
                displayDashboard.value = true;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
</script>