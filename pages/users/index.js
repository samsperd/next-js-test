import Link from 'next/link';
import userStyles from '../../styles/Users.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {
        method: "GET",
        headers: {
          // update with your user-agent
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
          Accept: "application/json; charset=UTF-8",
        },
      }
    );

    const data = await res.json();

    return {
        props: {
            users: data
        }
    }
}

const Users = ({ users  }) => {
    return ( 
        <div>
            <h1>All Users</h1>
            {
                users.map((user) => (
                    <Link href={`/users/${user.id}`}  key={user.id}>
                        <a className={userStyles.single}>
                            <h3>{ user.name }</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
     );
}
 
export default Users;