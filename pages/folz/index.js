import styles from '../../styles/folz.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            folz: data
        }
    }
}

const Folz = ({ folz }) => {
    return ( 
        <div>
            <h1>All my fucking fans</h1>
            {
                folz.map(fol => (
                    <Link href={`/folz/${fol.id}`} key={fol.id}>
                        <a className={styles.single}>
                            <h3>{fol.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
     );
}
 
export default Folz;