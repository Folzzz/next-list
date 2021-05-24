import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        // set timer for 3secs after which redirect user
        setTimeout(() => {
            router.push('/')
        }, 3000)
        // return () => {
        //     cleanup
        // }
    }, [])

    return (  
        <div className="not-found">
            <h1>Ooops....</h1>
            <h2>This page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;