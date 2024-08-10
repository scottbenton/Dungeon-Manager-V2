<script>
	import { enhance } from '$app/forms';
	import Button from './ui/button/button.svelte';

	export let provider = '';
	export let signInPage = 'signin';
</script>

<form method="POST" action={`/${signInPage}`} use:enhance class={`signInButton`}>
	<input type="hidden" name="providerId" value={provider} />
	<Button type="submit">Sign In</Button>
</form>
