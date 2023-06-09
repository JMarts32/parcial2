import './extras/Custom.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FormattedMessage } from 'react-intl';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleLogin() {
        if (!email || !password) {
            setError("X");
            return;
        }

        console.log("email: " + email);
        console.log("password: " + password);

        setError('');

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    login: email,
                    password: password,
                    })
                }).then(res => res.json()).then(data => {
                    if (data.status === 'success') {
                        navigate('/cafes');
                    }
                    if (data.status === 'error') {
                        setError(data.message);
                    }
                });
    }

    function handleCancel() {
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <div className='body-container-login'>
                <p><FormattedMessage id="title_log"/></p>
                <div className="card">
                    <div className="form-container">
                        <form>
                            <div className="form-group">
                                <label for="email" className="form-label"><FormattedMessage id="username"/></label>
                                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <label for="password" className="form-label"><FormattedMessage id="password"/></label>
                                <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            {error && <div className='error'>{error}</div>}
                            <div>
                                <button type="button" className="btn1" onClick={handleLogin}><FormattedMessage id="logIn"/></button>
                                <button type="button" className="btn2" onClick={handleCancel}><FormattedMessage id="cancel"/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;