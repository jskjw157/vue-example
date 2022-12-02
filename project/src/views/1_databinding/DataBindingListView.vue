<template>
    <div>
        <div>
            <select name="" id="">
                <option :key="city.code" v-for="city in cities" :value="city.code">{{ city.title }}</option>
            </select>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>제품번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>주문수량</th>
                        <th>합계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="drink.drinkId" v-for="drink in drinkList">
                        <td>{{drink.drinkId}}</td>
                        <td>{{drink.drinkName}}</td>
                        <td>{{drink.price}}</td>
                        <td><input type="number" v-model="drink.qty"></td>
                        <td>{{drink.drinkId}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            cities: [
                { title: '서울', code: '82' },
                { title: '부산', code: '851' },
                { title: '제주', code: '864' }
            ],
            drinkList: [
                {
                    drinkId: '1',
                    drinkName: '코카콜라',
                    price: 700,
                    qty: 1
                },
                {
                    drinkId: '2',
                    drinkName: '오렌지주스',
                    price: 1000,
                    qty: 1
                }
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
