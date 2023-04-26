import React from 'react'
import { useState } from 'react'
import axios from "axios"

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handeleLogin = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/api/user/login`,
            withCredentials: true,
            data: {
                email,
                password
            },
        })
            .then((res) => {
                console.log(res)
                window.location = "/home";

            }).catch((err) => {
                console.log(err);
            })
    }
    return (
        <form action='' onSubmit={handeleLogin} id="btnsubmit">
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}
                value={email} />
            <br />
            <label htmlFor='password'>Mot de passe</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}
                value={password} />
            <input type="submit" value="Se Connecter" />
        </form>


    )
}

export default SignInForm