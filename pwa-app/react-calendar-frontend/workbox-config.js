module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,js,css}'
	],
	swDest: 'build/sw.js',
	swSrc: 'src/sw-template.js',
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ]
};