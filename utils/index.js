export const storeLocalStorage = (key, data) => {
    if(typeof window !== 'undefined'){
        localStorage.setItem(key, data)
    }
}

export const getLocalStorage = (key) => {
    if(typeof window !== 'undefined'){
        return localStorage.getItem(key)
    }
}