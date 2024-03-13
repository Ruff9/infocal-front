<template>
    <main class="main-container">
        <div class="content-container">
            <LocationError
                v-if="locationErrorMessage != ''"
                :content="locationErrorMessage"
            />
            <p v-if="loading">Recherche ...</p>
            <LaunchButton
                v-if="displayButton"
                @launchFinder="localizeMe"
            />
            <Dashboard
                v-if="displayDashboard"
                :data=dashboardData
            />
        </div>
    </main>
</template>

<script setup>
    import LaunchButton from '../components/LaunchButton.vue'
    import LocationError from '../components/LocationError.vue'
    import Dashboard from '../components/Dashboard.vue'

    import { getCity, getInseeCode } from '@/api'
    import { ref } from 'vue'

    const displayButton = ref(true)
    const loading = ref(false)
    const displayDashboard = ref(false)
    const locationErrorMessage = ref("")

    let dashboardData = {}

    async function localizeMe() {
        async function success(position) {
            collectData(position.coords.latitude, position.coords.longitude)
        };

        function error() {
            locationErrorMessage.value = "Impossible de vous trouver :(";
        };

        const options = { enableHighAccuracy: true };

        if (!navigator.geolocation) {
            locationErrorMessage.value = "La géolocalisation ne fonctionne pas dans votre navigateur :(";
        } else {
            displayButton.value = false;
            loading.value = true;
            navigator.geolocation.getCurrentPosition(success, error, options);
        }
    }

    async function collectData(latitude, longitude) {
        const cityData = await getCity(latitude, longitude);
        const geoData = await getInseeCode(cityData['cityName'], cityData['postcode']);

        dashboardData = {
            city: cityData['cityName'],
            postcode: cityData['postcode'],
            insee_code: geoData['insee_code'],
            population: geoData['population']
        }

        loading.value = false;
        displayDashboard.value = true;
    }
</script>