import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";

const Header = (props) => {
    return (
        <div className="flex justify-between">
            <div className="text-primary font-bold text-3xl">
                Club<span className="text-black">House</span>
            </div>
            <div></div>
            {props.userStatus ? (
                <div className="flex">
                    <Logout onClick={props.onClick}></Logout>
                </div>
            ) : (
                <div className="flex gap-3">
                    <Login></Login>
                    <Signup></Signup>
                </div>
            )}
        </div>
    );
};

export default Header;
