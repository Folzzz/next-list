export const getStaticPaths = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    const paths = data.map(fol => {
        return {
            params: { id: fol.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {
            singleDetail: data
        }
    }
}

const Details = ({ singleDetail}) => {
    return ( 
        <div>
            <h1>Details: {singleDetail.name}</h1>
            <p>{singleDetail.email}</p>
            <p>{singleDetail.website}</p>
            <p>{singleDetail.address.city}</p>
        </div>
     );
}
 
export default Details;