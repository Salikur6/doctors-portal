import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;

        const currentUser = { email: email };
        if (email) {
            fetch(`https://ancient-ravine-10764.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Data is Inside the token', data)
                    // setToken(data)
                    const token = data.token;
                    localStorage.setItem('access-token', token)
                    setToken(token)

                })
        }

    }, [user])




    return [token];
};

export default useToken;
