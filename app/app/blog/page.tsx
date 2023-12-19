import Link from 'next/link'

const postsData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                {
                    id: 1,
                    title: 'one item',
                    slug: '-one'
                },
                {
                    id: 2,
                    title: 'two item',
                    slug: '-two'
                }
            ]);
        }, 1000);
    });
};

export default async function PostList() {
    const pullData: any = await postsData();
    return (
        <ul>
            {pullData.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}

