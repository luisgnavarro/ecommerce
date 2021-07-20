
import React, { useCallback, useContext , useState} from 'react';
import { Redirect, withRouter } from 'react-router';
import app from '../context/base';
import { AuthContext } from '../context/Auth';
// import Modal from 'react-modal';


const SignIn = ({ history }) => {

    // const [modalIsOpen, setModalIsOpen] = useState(true);


    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
                
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

   



        return (
            <div className="bg-warning">
                <p>...</p>
                <p>...</p>

                <h1>Log in</h1>
                <form onSubmit={handleLogin}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                     <label>
                        Password
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Sign In</button>

                </form>
            </div>
        );
    };

    export default withRouter(SignIn);