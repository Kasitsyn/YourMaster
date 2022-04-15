import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setUser } from "store/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function LoginForAll() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = (email, password) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }))
            navigate('/admin-panel');

        })
        .catch(() => alert('Invalid User'))

    }

    return (
        <Form title="Войти" handleClick={handleLogin} />
    );
}