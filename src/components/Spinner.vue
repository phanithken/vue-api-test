<!-- template -->
<template>
    <div class="spinner-container">
        <div class="loadingspinner"></div>
        <b>Loading...</b>
    </div>
</template>
<!-- end template -->


<!-- script -->
<script>
export default {
    name: 'spinner',
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
.loadingspinner {
	pointer-events: none;
	width: 2.5em;
	height: 2.5em;
	border: 0.4em solid transparent;
	border-color: #eee;
	border-top-color: #3E67EC;
	border-radius: 50%;
	animation: loadingspin 1s linear infinite;
}

.spinner-container {
    position: absolute;
    left: 50%;
    top: 50%;
}

@keyframes loadingspin {
	100% {
		transform: rotate(360deg)
	}
}
</style>
<!-- end style -->