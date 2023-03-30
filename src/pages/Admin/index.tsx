import { Navigate, useParams } from 'react-router-dom';

export default function Admin() {
    const { user } = useParams();
    if(user !== 'dilon') return <Navigate to="/" />;

    return (
        <div>
            <h2>Admin: faça login</h2>
            <input type="text" />
        </div>
    );
}
