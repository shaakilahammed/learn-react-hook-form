import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList';

function App() {
    const [users, setUsers] = useState([
        {
            id: 1,
            fullName: 'Shakil Ahammed',
            age: 25,
            email: 'shakil@gmail.com',
            password: '12345678',
            socials: [],
            picture: '',
        },
    ]);
    console.log(users);
    const handleRegister = (user) => {
        setUsers([...users, { id: users[users.length - 1].id + 1, ...user }]);
        return { success: true, message: 'Register successfully!' };
    };
    const handleLogin = (user) => {
        const existedUser = users.find((item) => item.email === user.email);
        if (existedUser) {
            if (user.password === existedUser.password) {
                return {
                    success: true,
                    message: 'Login successfully!',
                    user: existedUser,
                };
            } else {
                return { success: false, message: 'incorrect password!' };
            }
        } else {
            return { success: false, message: 'email is not exist!' };
        }
    };
    return (
        <div className="md:flex">
            <RegistrationForm onRegister={handleRegister} />
            <UserList users={users} />
            <LoginForm onLogin={handleLogin} />
        </div>
    );
}

export default App;
