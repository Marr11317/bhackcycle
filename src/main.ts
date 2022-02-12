/// <reference types="svelte" />

import LoginGuard from './ui/LoginGuard.svelte';

const app = new LoginGuard({
	target: document.body
});

export default app;
