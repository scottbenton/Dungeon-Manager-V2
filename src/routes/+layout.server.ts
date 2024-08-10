import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (evt) => {
	const session = await evt.locals.auth();

	return {
		session
	};
};
