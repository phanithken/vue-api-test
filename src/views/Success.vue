<!-- template -->
<template>
    <div class="container">
        <h1>success</h1>
        <button v-stream:click="home$">Home</button>
    </div>
</template>
<!-- end template -->


<!-- script -->
<script>
import { Subject } from 'rxjs'
export default {
    name: 'success',
    subscriptions: function () {
        this.home$ = new Subject()
        this.home$.subscribe(() => this.$router.push({name: 'home', params: {}}))
    },
    data () {
        return {
        }
    },
    methods: {
    },
    created () {
    }
}
</script>
<!-- end script -->


<!-- style -->
<style scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
}

button {
    padding: 10px;
}
</style>
<!-- end style -->