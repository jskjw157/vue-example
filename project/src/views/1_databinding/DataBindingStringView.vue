<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
// 1. html 코드는 template tag 에 작성한다. 모든 tag에는 꼭 최상위 태그가 있어야된다.
// 2. style tag에 scoped 속성을 정의하면 해당 css는 해당 vue파일에만 적용된다.
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
</style>
