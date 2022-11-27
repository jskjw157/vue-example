<template>
    <div>
        <input id="HTML" type="checkbox"  value="HTML" v-model="favoriteLang">
        <label for="HTML">HTML</label>
        <input id="CSS" type="checkbox"  value="CSS" v-model="favoriteLang">
        <label for="CSS">CSS</label>
        <input id="JS" type="checkbox"  value="JS" v-model="favoriteLang">
        <label for="JS">JS</label>
        <div>선택한 지역 {{favoriteLang}}</div>
        <br>
        <input id="HTML2" type="checkbox"  value="HTML" v-model="favoriteLang2">
        <label for="HTML2">HTML</label>
        <input id="CSS2" type="checkbox"  value="CSS" v-model="favoriteLang2">
        <label for="CSS2">CSS</label>
        <input id="JS2" type="checkbox"  value="JS" v-model="favoriteLang2">
        <label for="JS2">JS</label>
        <div>선택한 지역 {{favoriteLang2}}</div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            favoriteLang: ['JS'],
            favoriteLang2: ''
        }
    },
    setup() {
    },
    created() {
    },
    mounted() {
    },
    unmounted() {
    },
    methods: {
    }
}
</script>
<style>

</style>
