import { useState } from "react";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isloggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        if (username && password) {
            setIsLoggedIn(true)
        }

    };

    const handlelogout = () => {
        setUsername('');
        setPassword('');
        setIsLoggedIn(false);
    };

    if (isloggedIn) {
        return (
            <div>
                <h1>welcome,{username}!</h1>
                <button onClick={handlelogout}>logout</button>
            </div>
        )
    }





    return (
        <form onSubmit={handleLogin}>
            <h2>login</h2>
            <div>
                <label>

                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    password:
                    <input type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">login</button>
        </form>
    )
}

export default LoginForm;