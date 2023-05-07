export default function Users({ users }) {
    return (
        <>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}

export async function getStaticProps() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await resp.json();

    return {
        props: {
            users,
        },
    };
}
