
import React, { useState, useCallback, useContext } from 'react';
import Modal from 'react-modal';
import { Redirect, withRouter } from 'react-router';
// import Main from './Main';
import app from '../context/base';
import { AuthContext } from '../context/Auth';

const SignIn = ({ history }) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [usuario, setUsuario] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
                cierraMS();

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



    function cierraMS() {

        setModalIsOpen(false);
        return <Redirect to="/" />;
    }

    return (
        <div className="bg-warning">
            <p>...</p>
            <p>...</p>

            <h1>Log in</h1>
            {<Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            // backgroundColor: 'white'
                            position: 'fixed',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundColor: 'lightyellow',
                            zindex: 999
                        },
                        content: {
                            position: 'absolute',
                            width: '40%',
                            height: '45%',
                            left: '30%',
                            top: '30%',
                            overflow: 'auto',
                            backgroundcolor: '#fff',
                            WebkitTransform: 'translate(-10,-10%)',
                            transform: 'translate(-1"0,-10%)'
                        }
                    }
                }
            >
                <div className="modal-header">
                    <h5 className="modal-title">Login</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        onClick={cierraMS}  ></button>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="col-sm-8 offset-sm-2" >

                        <input type="text" placeholder="email" name="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            className="form-control" />

                        <input type="password" placeholder="password" name="password"
                            // onChange={(e) => setPassword(e.target.value)}
                            className="form-control" />


                    </div>
                    <div className="col-sm-2 offset-sm-5">
                        <button type="submit">Sign In</button>
                        {/* <button onClick={login} className="btn btn-primary ">Log in</button> */}
                    </div>
                </form>
            </Modal>}
        </div>
    )
}

export default withRouter(SignIn);