const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				//raleway: ['Raleway']
				//opensans: ['Open+Sans']
			}
		}
	},

	plugins: [require('@tailwindcss/line-clamp')]
};

module.exports = config;
