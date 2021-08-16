import Router from "next/router"

export const storeLocalStorage = (key, data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, data)
    }
}

export const getLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key)
    }
}

export const protectedRoute = (Component) => {
    return (props) => {
        if (typeof window !== "undefined") {
            if (getLocalStorage('token')) {
                return <Component {...props} />;
            } else {
                Router.replace('/login');
                return null
            }
        }
        return null
    }
}

export const unprotectedRoute = (Component) => {
    return (props) => {
        if (typeof window !== "undefined") {
            if (getLocalStorage('token')) {
                Router.replace('/');
                return null
            } else {
                return <Component {...props} />;
            }
        }
        return null
    }
}