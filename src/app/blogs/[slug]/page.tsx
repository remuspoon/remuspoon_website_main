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

const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
}

export default async function BlogPage({params}: {params: {slug: string}}) {
    const data: BlogPageType = await getData(params.slug)
    return (
        <div className='bg-white pt-56'>
            <div className='grid grid-cols-12'>
                <div className='col-start-4 col-span-6 flex flex-col gap-y-10 border-b-1 border-lightGray'>
                    <div className='flex flex-col justify-center gap-y-5'>
                        <h1 className='text-xl font-cabin font-bold tracking-tight leading-tight    '>{data.title}</h1>
                        <p className='text-md text-gray-500 font-cabin'>{formatDate(data.publishedAt)}</p>
                        <div className='flex flex-row w-1/5 border-b-2 border-accent pt-5'></div>
                    </div>
                    <div className='flex flex-col prose prose-a:text-accent font-cabin text-base min-w-full'>
                    <PortableText value={data.body}/>
                    </div>
                    <div className='grid grid-row w-full justify-center pb-10'>
                        <Image 
                            src={urlFor(data.mainImage).url()} 
                            alt={data.title} 
                            width={500}
                            height={500}
                            className='object-cover '
                        />
                    </div>
                </div>
                <div>
                    
                </div>
            </div>  
        </div>
    )
}