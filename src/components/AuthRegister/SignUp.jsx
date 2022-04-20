import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setError, setUser } from "store/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                dispatch(setError(null))
                navigate('/admin-panel')
            })
            .catch(error => dispatch(setError(error)))

    }

    return (
        <Form title="Зарегистрироваться" handleClick={handleRegister} />
    );
}