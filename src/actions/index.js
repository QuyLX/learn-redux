export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const isLogged = () => {
    return {
        type: 'SIGN_IN'
    }
}