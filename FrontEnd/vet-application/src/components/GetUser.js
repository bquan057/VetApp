    const getUser = () => {
        const token = sessionStorage.getItem('token')
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        
        const userInfo = JSON.parse(window.atob(base64));
      return userInfo
    };
    export default getUser