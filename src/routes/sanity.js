import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'sqighi7u',
    dataset: 'production',
    apiVersion: '2021-12-26',
    token: '',
    useCdn: true
})

export default client