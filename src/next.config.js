const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	exportPathMap: async function (defaultPathMap) {
		return {
			'/blog': { page: '/Index' },
			'/blog/data-science-internship-applied-to-design-2019': { page: '/DataScienceInternship' },
			'/blog/understanding-the-web-parsing-web-pages-semantically': { page: '/UnderstandingTheWeb' },
			'/blog/we-believe-in-AI-powered-code-generation': { page: '/WeBelieveInAi' },
			'/blog/journey-part-1': { page: '/JourneyPart1' },
			'/blog/journey-part-2': { page: '/JourneyPart2' },
			'/blog/journey-part-3': { page: '/JourneyPart3' },
			'/blog/journey-part-4': { page: '/JourneyPart4' },
			'/blog/journey-part-5': { page: '/JourneyPart5' },
			'/blog/journey-part-6': { page: '/JourneyPart6' },
			'/blog/journey-part-7': { page: '/JourneyPart7' },
			'/blog/journey-part-8': { page: '/JourneyPart8' },
			'/blog/journey-part-9': { page: '/JourneyPart9' },
			'/blog/journey-part-10': { page: '/JourneyPart10'},
		}
	},
	// You may only need to add assetPrefix in the production.
	assetPrefix: isProd ? 'https://teleporthq.io/blog' : ''
}