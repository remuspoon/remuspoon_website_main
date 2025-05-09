// Top-level server component
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import BlogPageClient from './clientPage'
import { BlogPageType } from './clientPage'

async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == '${slug}']{
        "currentSlug": slug.current,
        title,
        publishedAt,
        body,
        mainImage
    }[0]`
    const data = await client.fetch(query)
    return data
}

export default async function BlogPage({params}: {params: {slug: string}}) {
    const data = await getData(params.slug)
    
    // Process the data before passing to client component
    const processedData: BlogPageType = {
        ...data,
        mainImage: urlFor(data.mainImage).url()
    }
    
    return <BlogPageClient data={processedData} />
}