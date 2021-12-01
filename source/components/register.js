import React from 'react';

const API_REGISTER = `https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT/users/register`;

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`User Name is ${username}`);
        console.log(`Password is: ${password}`);
        try{
            const response = await fetch(API_REGISTER,
                )


        }catch(error){
            console.error(`Error registering a user. ${error}`);
        }
    };
    return (
    <>
        <h4>Register</h4>
        <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button type="submit">Register</button>
        </form>
    </>
    );
};

export default Register;