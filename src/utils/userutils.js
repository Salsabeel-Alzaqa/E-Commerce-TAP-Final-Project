export const getToken = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
};

export const logOut = () => {
    const sortedtoken = localStorage.getItem('token');
    if (sortedtoken) {
        localStorage.removeItem('token');
    }
    else {
        sessionStorage.removeItem('token');
    }
    window.location.href = '/login';
}