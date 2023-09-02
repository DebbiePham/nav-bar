
import React, {useState} from "react";

import UserContext from '../contexts/UserContext';


export default ({ children }) => {
    const [name, setName] = useState('');

    return (
        <fieldset>
            <legend>Wrapper.jsx</legend>
            <UserContext.Provider value={{name, setName}}>{children}</UserContext.Provider>
        </fieldset>
    );
};