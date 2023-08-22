import * as api from '../api';

export const signup = async (form_data, navigate) => {
    try {
        const { data } = await api.signup(form_data);

        console.log(data);

        navigate('/products')
    } catch (error) {
        console.log(error);
    }
}

export const signin = async (form_data, navigate) => {
    try {
        const { data } = await api.signin(form_data);

        console.log(data);

        navigate('/products')

    } catch (error) {
        console.log(error);
    }
}