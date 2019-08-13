const App = require('./App.svelte');

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

module.export = app;