<script>
	import Header from './Header.svelte';
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/playfair-display';
	import { themeStore } from '../store/theme.store';
	import { onMount } from 'svelte';

	onMount(() => {
		themeStore.subscribe((store) => {
			const themeMode = store.mode;
			// add or remove class "dark" from the html element
			document.documentElement.classList.toggle('dark', themeMode === 'dark');
		});
	});
</script>

<div class="app">
	<Header></Header>

	<main class="container">
		<slot></slot>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
