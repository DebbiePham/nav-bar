import React, {useContext} from 'react';

import UserContext from '../contexts/UserContext';


export default () => {
    const {name} = useContext(UserContext);

    return (
        <fieldset>
            <legend>NavBar.jsx</legend>
            <div className='nav-bar'>Hello, {name}</div>
        </fieldset>
    );
}