<template>
    <div>
        <p class="sanity-check">{{ msg }}</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Ping',
        data() {
            return {
            msg: '',
            };
        },
        methods: {
            getMessage() {
            const path = import.meta.env.VITE_BACKEND_URL + '/ping';
            axios.get(path)
                .then((res) => {
                    this.msg = res.data;
                })
                .catch((error) => {
                    console.error(error);
                });
            },
        },
        created() {
            this.getMessage();
        },
    };
</script>

<style scoped>
.sanity-check {
    margin-top: 15px;
    text-align: center;
}
</style>