<!-- template -->
<template>
  <button v-stream:click="makeRequest$">Make Request</button>
</template>
<!-- end template -->


<!-- script -->
<script>
import { Subject, of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import APIClient from '@/API/APIClient'
export default {
  name: 'home',
  subscriptions: function () {
    this.makeRequest$ = new Subject()
    this.makeRequest$.pipe(
      tap(() => this.$store.dispatch('navigate', { scene: 'loading' })),
      switchMap(() => APIClient.request())
    ).subscribe(() => this.$store.dispatch('navigate', { scene: 'success' })),
    err => this.$store.dispatch('navigate', { scene: 'error' })
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
button {
  padding: 10px;
  position: absolute;
  top: 50%;
}
</style>
<!-- end style -->