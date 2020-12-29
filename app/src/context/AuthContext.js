import React, { useState, useContext, useEffect } from "react";
import configValue from '../utils/configValue'
import axios from 'axios'

const Context = React.createContext();
// main component
const AuthContext = ({ children }) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const getUser = localStorage.getItem('user')
        if (getUser) {
            return setUser(JSON.parse(getUser))
        }
    }, [])


    const login = async (values) => {
        try {
            const { data } = await axios.post('/api/users/login', values, configValue('config',user))
            localStorage.setItem('user', JSON.stringify(data))
            setUser(data)
            return {
                complete: true,
                message: "Login Sucsses"
            }
        }
        catch (error) {
            const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            return {
                complete: false,
                message
            }
        }
    }
    const logout = async () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('cart')
        localStorage.removeItem('shippingAddress')
        localStorage.removeItem('paymentMethod')
        setUser()
        return {
            complete: true,
            message: "Logout Sucsses"
        }
    }
    const register = async (values) => {
        try {
            const { data } = await axios.post('/api/users/register', values, configValue('config',user))
            localStorage.setItem('user', JSON.stringify(data))
            setUser(data)
            return {
                complete: true,
                message: "Register Sucsses"
            }
        }
        catch (error) {
            const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            return {
                complete: false,
                message
            }
        }
    }

    const getUserDetails = async (id) => {
        try {
            const { data } = await axios.get(`/api/users/${id}`, configValue('authConfigNoContentType',user))
            return {
                complete: true,
                message: 'Get User Details Sucsses',
                data
            }
        }
        catch (error) {
            const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            if (message === 'Not authorized, token failed') {
                logout()
            }
            return {
                complete: false,
                message
            }
        }
    }

    const updateUserProfile = async (values) => {
        try {
            const { data } = await axios.put(`/api/users/profile`, values, configValue('authConfig',user))
            setUser(data)
            localStorage.setItem('user', JSON.stringify(data))
            return {
                complete: true,
                message: 'Update Sucsses',
                data
            }
        }
        catch (error) {
            const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            if (message === 'Not authorized, token failed') {
                logout()
            }
            return {
                complete: false,
                message
            }
        }
    }

    const listUsers = async () => {
        try {
            const { data } = await axios.get(`/api/users`, configValue('authConfigNoContentType',user))
            return {
                data,
                complete: true
            }
        }
        catch (error) {
            const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            if (message === 'Not authorized, token failed') {
                logout()
            }
            return {
                complete: false,
                message
            }
        }
    }

    const deleteUser = async (id) => {
        try {
            const data = await axios.delete(`/api/users/${id}`, configValue('authConfigNoContentType',user))
            return {
                data,
                complete: true
            }
        }
        catch (error) {
            const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            if (message === 'Not authorized, token failed') {
                logout()
            }
            return {
                complete: false,
                message
            }
        }
    }

    const updateUser = async () => {
        try {
            const { data } = await axios.put(`/api/users/${user._id}`, user, configValue('authConfig',user))
            return {
                data,
                complete: true
            }
        }
        catch (error) {
            const message = error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            if (message === 'Not authorized, token failed') {
                logout()
            }
            return {
                complete: false,
                message
            }
        }
    }

    return (
        <Context.Provider value={{
            user,
            login,
            logout,
            register,
            getUserDetails,
            updateUserProfile,
            listUsers,
            deleteUser,
            updateUser
        }}>
            {children}
        </Context.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Check AuthContext 🔥");
    }

    return context;
};

export default AuthContext;
