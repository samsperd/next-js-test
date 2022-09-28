export const getStaticPaths = async () => {
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
    )

    const data = await res.json()

    const paths = data.map((user) => {
        return {
            params: {
                id: (user.id).toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
    {
        method: "GET",
        headers: {
          // update with your user-agent
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
          Accept: "application/json; charset=UTF-8",
        },
      }
    )

    const data = await res.json()

    return  {
        props: {
            user: data
        }
    }

}

const UserDetails = ({ user }) => {
    return ( 
        <div>
            <h1>
                User Details
            </h1>
            <h2>Name: <span style={{ fontWeight: 'lighter' }}>{ user.name }</span></h2>
            <p>Email: <span style={{ fontWeight: 'lighter' }}>{ user.email }</span></p>
            <p>Website: <span style={{ fontWeight: 'lighter' }}>{ user.website }</span></p>
            <p>City: <span style={{ fontWeight: 'lighter' }}>{ user.address.city }</span></p>
            <p>Street: <span style={{ fontWeight: 'lighter' }}>{ user.address.street }</span></p>
            <p>Address: <span style={{ fontWeight: 'lighter' }}>{ user.address.suite }</span></p>
            <p>Phone: <span style={{ fontWeight: 'lighter' }}>{ user.phone }</span></p>
        </div>
     );
}
 
export default UserDetails;