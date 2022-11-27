<template>
    <div>
        <input type="text" v-bind:value="userId" readonly/>
        <input type="text" :value="userId" readonly/>
        <br />
        <img :src="imgSrc" alt="" style="width:100px; height:auto;"/>
        <input type="search" v-model="txt1">
        <button :disabled="txt1 === ''">조회</button>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
           userId: 'haaha',
           imgSrc: 'https://assets.stickpng.com/images/62a74f71223343fbc2207d04.png',
           txt1: ''
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
