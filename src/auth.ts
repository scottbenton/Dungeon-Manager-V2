import { SvelteKitAuth } from '@auth/sveltekit';
import google from '@auth/sveltekit/providers/google';

export const { handle, signIn, signOut } = SvelteKitAuth({
	trustHost: true,
	providers: [google]
});
