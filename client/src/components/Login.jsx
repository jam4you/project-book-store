import { useState } from "react";
import { Link } from 'react-router-dom';
import { signin } from "../actions";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [form_data, set_form_data] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const onChange = (e) => {
        set_form_data({ ...form_data, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = form_data;

        if (email === '' || password === '') return;

        signin(form_data, navigate);
    }

    return (
        <div className="login_wrapper">
            <div className="login">
                <div className="title">
                    <h2>LogIn</h2>
                </div>
                    <form onSubmit={onSubmit}>
                    <div className="email">
                            <input type="email" value={form_data.email} name="email" onChange={onChange}  placeholder="Enter Email........" />
                        </div>
                        <div className="password">
                            <input type="password" value={form_data.password} name="password" onChange={onChange}  placeholder="Enter Password........." />
                        </div>
                        <div className="submit_handler">
                            <button type="submit">LogIn</button>
                            <p>Do not have an account? <Link to="/">signup</Link></p>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Login;