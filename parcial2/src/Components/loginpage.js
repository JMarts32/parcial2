import './login.css';
// import { postData } from "../utils/requests";
import { useState } from "react";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if ((email.includes('@') === false) && (email.includes('.com') === false)) {
            setError("Email must be valid");
            return;
        }

        console.log("email: " + email);
        console.log("password: " + password);

        setError('');
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

/**
 * function handleRegister(username_prop, password_prop, confirmPassword_prop){
        if (!username_prop || !password_prop || !confirmPassword_prop) {
            console.log("All fields are required");
            return;
        }

        if (password_prop !== confirmPassword_prop) {
            console.log("Passwords don't match");
            return;
        }

        postData(registerCb, "users/",{
            username: username_prop,
            password: password_prop,
            role: "user",

        }).then(() => {
            handleLogin(username_prop, password_prop);
        })
    }

    <div className="container" style={{justifyContent: "center"}}>
            <h1>Inicio de sesión</h1>
            <hr/>
            <Tabs defaultActiveKey="login" id="auth-tab" className="mb-3" style={{justifyContent: "center"}}>
                <Tab>
                    <LoginCard />
                </Tab>
            </Tabs>
        </div>

    <Tabs defaultActiveKey="login" id="auth-tab" className="mb-3" style={{justifyContent: "center"}}>
                <Tab eventKey="login" title="Iniciar sesión">
                    <LoginCard loginCb={handleLogin}/>
                </Tab>
            </Tabs>



    postData(loginCb, "login/", {
            username: email,
            password: password
        })
            
 */

export default LoginPage;