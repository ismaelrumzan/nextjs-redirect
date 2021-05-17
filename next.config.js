module.exports = {
    async redirects() {
        return [
            {
                source: '/staticredirect',
                destination: '/',
                permanent: true,
            },
            {
                source: '/redirectslug/:slug',
                destination: '/newslugroute/:slug', // Matched parameters can be used in the destination
                permanent: true,
            },
        ]
    },
}