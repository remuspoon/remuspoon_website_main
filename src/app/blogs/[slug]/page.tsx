import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export interface BlogPageType {
    currentSlug: string;
    title: string;
    publishedAt: string;
    body: any;
    mainImage: any;
}

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
    const data: BlogPageType = await getData(params.slug)
    return (
        <div className='bg-light pt-20'>
            <div className='prose prose-violet font-cabin '>
                {data.title}
                <PortableText value={data.body}/>
                <Image src={urlFor(data.mainImage).url()} className='w-full h-full object-cover' alt={data.title} width={500} height={500}/>
            </div>
        </div>
    )
}