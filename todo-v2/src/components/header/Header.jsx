import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";

import { useState } from "react";

// TODO: add drop down for profile

const Header = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const signIn = async () => {
        let provider = new GoogleAuthProvider();
        await signInWithPopup(getAuth(), provider);
        setIsSignedIn(true);
    };

    const signOutUser = () => {
        signOut(getAuth());
        setIsSignedIn(false);
    };

    const getProfilePic = () => {
        let userUrl = new URL(getAuth().currentUser.photoURL, import.meta.url)
            .href;
        let placeHolder = new URL(
            "../../../assets/profile_placeholder.png",
            import.meta.url
        ).href;

        return userUrl || placeHolder;
    };

    return (
        <div className="navbar bg-[#DB4C3F]">
            <div className="flex-1">
                <div className="text-lg font-bold text-white ml-10">
                    Todo App
                </div>
            </div>
            {isSignedIn ? (
                <div className="flex-none">
                    <div className="flex gap-5 items-center">
                        <img
                            src={getProfilePic()}
                            width="40"
                            className="rounded-full"
                        ></img>
                        <div className="text-md text-white">
                            {getAuth().currentUser.displayName}
                        </div>
                        <div
                            className="btn-ghost text-md text-white mr-10"
                            onClick={signOutUser}
                        >
                            SIGN-OUT
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex-none">
                    <div className="flex gap-5 items-center">
                        <div
                            className="btn-ghost text-md text-white mr-10"
                            onClick={signIn}
                        >
                            SIGN-IN
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
