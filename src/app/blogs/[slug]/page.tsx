export default function BlogPage({params}: {params: {slug: string}}) {
    return (
        <div>
            <h1 className="text-light">{params.slug}</h1>
        </div>
    )
}