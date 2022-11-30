<template>
    <div>
        <select name="" id="">
            <option :key="city.code" v-for="city in cities" :value="city.title"></option>
        </select>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            cities: [
                { title: '서울', code: '82'},
                { title: '부산', code: '851'},
                { title: '제주', code: '864'}
            ]
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
