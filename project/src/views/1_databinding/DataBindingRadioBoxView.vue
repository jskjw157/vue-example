<template>
    <div>
        <input id="HTML" type="radio"  value="HTML" v-model="favoriteLang">
        <label for="HTML">HTML</label>
        <input id="CSS" type="radio"  value="CSS" v-model="favoriteLang">
        <label for="CSS">CSS</label>
        <input id="JS" type="radio"  value="JS" v-model="favoriteLang">
        <label for="JS">JS</label>
        <div>선택한 지역 {{favoriteLang}}</div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            favoriteLang: ''
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
