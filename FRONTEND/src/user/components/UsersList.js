import React from 'react';


import './UsersList.css';
import UsersItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

const UsersList = props => {
    if (props.items.length === 0) {
        return (
        <div className='center'>
            <Card>
            <h2>No users found.</h2>
            </Card>
        </div>
        )
    }

    return <ul className='users-list'>
        {props.items.map(user => (
             <UsersItem 
             key={user.id} 
             id={user.id} 
             image={user.image} 
             name={user.name} 
             placesCount={user.places.length}
             />
        ))}
    </ul>
}

export default UsersList