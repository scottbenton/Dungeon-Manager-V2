<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import SettingsIcon from 'svelte-radix/Gear.svelte';
	import { ThemeMode, themeStore } from '../store/theme.store';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import SignInButton from '$lib/components/SignInButton.svelte';

	$: isLoggedIn = !!$page.data.session?.user;
</script>

<header class="border-t-4 border-primary py-2">
	<div class="container flex items-center justify-between">
		<nav class="flex items-center">
			<span class="font-title text-3xl font-black">DM</span>
			<ul>
				<!-- <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<a href="/sverdle">Sverdle</a>
				</li> -->
			</ul>
		</nav>
		<div class={'flex items-center space-x-1'}>
			{#if !isLoggedIn}
				<SignInButton provider="google" />
			{/if}

			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Button variant={'ghost'} size={'icon'} aria-label={'settings'}>
						<SettingsIcon />
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>Settings</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item
							class="cursor-pointer"
							on:click={() =>
								($themeStore.mode =
									$themeStore.mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light)}
						>
							{#if $themeStore.mode === ThemeMode.Light}
								Dark Theme
							{:else}
								Light Theme
							{/if}
						</DropdownMenu.Item>
						{#if isLoggedIn}
							<SignOut>
								<svelte:fragment slot="submitButton">
									<DropdownMenu.Item class="w-full cursor-pointer">Log Out</DropdownMenu.Item>
								</svelte:fragment>
							</SignOut>
						{/if}
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>

<style>
	:global(.signOutButton) {
		width: 100%;
	}
	:global(.signOutButton button) {
		width: 100%;
	}
</style>
