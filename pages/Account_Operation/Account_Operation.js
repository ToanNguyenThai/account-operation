import React, { useState } from 'react'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { AccountContext } from '../Context/Context';

export default function Account_Operation() {

    const [active, setActive] = useState("signin")
    const switchToSignUp = () => {
        console.log("yes");
        setActive("signup")
    }

    const switchToSignIn = () => {
        setActive("signin")
    }


    const contextValue = { switchToSignIn, switchToSignUp }
    return (
        <AccountContext.Provider value={contextValue}>
            <div className="overlay-container">
                {active === 'signin' && <SignIn />}
                {active === 'signup' && <SignUp />}
            </div>
        </AccountContext.Provider>
    );


}

