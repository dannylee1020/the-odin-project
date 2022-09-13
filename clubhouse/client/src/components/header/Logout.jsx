function Logout(props) {
    const userLogOut = async () => {
        let url = "http://localhost:3000/logout";

        await fetch(url, {
            method: "get",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <div>
            <button
                className="btn btn-primary font-bold"
                onClick={() => {
                    props.setUserAuth();
                    userLogOut();
                }}
            >
                Log out
            </button>
        </div>
    );
}

export default Logout;
