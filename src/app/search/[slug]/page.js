export default async function Page({ params }) {
    const slug = (await params).slug

    return (

        <div>Search: {slug}</div>
    );
}
