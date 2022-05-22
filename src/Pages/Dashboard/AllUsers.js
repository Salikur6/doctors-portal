import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(users)
    const handleAdmin = (email, refetch) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 403) {
                    return toast.error('Failed to Make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount === 1) {
                    refetch()
                    toast.success('Successfully made an admin')
                    console.log(data)
                }
            })
    }
    return (
        <div>
            <h1>Totle Users : {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map(user =>

                            <tr key={user?._id}>
                                <th>1</th>
                                <td>{user?.email}</td>
                                <td>

                                    {user?.role !== 'admin' ? <button onClick={() => handleAdmin(user.email, refetch)} className='btn btn-xl'>Make Admin</button> : <p className='font-bold'>Already an Admin</p>}

                                </td>
                                <td><button className='btn btn-xl'>X</button></td>

                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;