export const loginUser = (userLogin) => {

    //return (username === 'admin' && password === '12345') ? true: false;
    return (userLogin.username === 'admin' && userLogin.password === '12345');
}