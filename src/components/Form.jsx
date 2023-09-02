import React, { useContext } from 'react';

import UserContext from '../contexts/UserContext';

export default () => {
    const {name, setName} = useContext(UserContext);

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <div className='form'>
                <label>UserName: </label>{""}
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        </fieldset>
    )

}

