import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setError, setUser } from "store/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function LoginForAll() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    dispatch(setError(null))

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
        .catch(error => dispatch(setError(error)))

    }

    return (
        <Form title="Войти" handleClick={handleLogin} />
    );
}