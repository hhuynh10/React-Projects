import {useContext, useState} from "react";
import {UserContext} from "../UserContext.jsx";

const ProfilePage = () => {
    const [redirect,setRedirect] = useState(null);
    const {ready,user,setUser} = useContext(UserContext);

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }
    
    if (redirect) {
    return <Navigate to={redirect} />
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    return (
        <div>account page for {user.name}</div>
    )
}

export default ProfilePage