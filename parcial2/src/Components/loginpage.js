import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function loginCb(data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        console.log(`User ${data.username} logged in successfully`);
        console.log(data);
        window.location.href = '/';
    }

    function handleLogin() {
        if (!email || !password) {
            setError("All fields are required");
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
            <header className='hola'>
                <h3>El aroma mágico</h3>
                <hr></hr>
                <img src='https://cdn.discordapp.com/attachments/1023419960363581492/1111644735304638556/image.png' alt='libro'></img>
            </header>
            <div className='body-container-login'>
                <p>Inicio de Sesión</p>
                <div className="card">
                    <div className="form-container">
                        <form>
                            <div className="form-group">
                                <label for="email" className="form-label">Nombre de usuario</label>
                                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <label for="password" className="form-label">Contraseña</label>
                                <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            {error && <div className='error'>{error}</div>}
                            <div>
                                <button type="button" className="btn1" onClick={handleLogin}>Iniciar sesión</button>
                                <button type="button" className="btn2" onClick={handleCancel}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;