import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'sqighi7u',
    dataset: 'production',
    token: '',
    useCdn: true
})

export default client