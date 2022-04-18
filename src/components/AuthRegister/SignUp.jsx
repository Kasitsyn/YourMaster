import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setUser } from "store/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/admin-panel')
            })
            .catch(console.error)

    }

    return (
        <Form title="Зарегестрироваться" handleClick={handleRegister}/>
    );
}