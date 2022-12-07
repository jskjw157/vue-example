<template>
    <div>
        <div style="color:red; font-size:30px">스타일 바인딩</div>
        <div :style="style1">스타일 바인딩</div>
        <button @click="style1.color='blue'">색상바꾸기</button>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            style1: {
                color: 'red',
                fontSize: '30px'
            }
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
<style scoped>
.active {
    background-color: greenyellow;
    font-weight: bold;
}
.text-red {
    color: red;
}
</style>
