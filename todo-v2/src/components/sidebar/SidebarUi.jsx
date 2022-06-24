import { MdToday } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsInbox } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SidebarUi = (props) => {
    const navigate = useNavigate();

    return (
        <div className="w-72 h-screen flex flex-col bg-[#FAFAFA] pl-10">
            <div className="flex flex-col items-left mt-12 gap-4">
                <div
                    className="flex items-center gap-2"
                    id="inbox"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <span>
                        <BsInbox />
                    </span>
                    Inbox
                </div>
                <div
                    className="flex items-center gap-2"
                    id="today"
                    onClick={() => {
                        navigate("/today");
                    }}
                >
                    <span>
                        <MdToday />
                    </span>
                    Today
                </div>
                <div
                    className="flex items-center gap-2"
                    id="upcoming"
                    onClick={() => {
                        navigate("/upcoming");
                    }}
                >
                    <span>
                        <AiOutlineCalendar />
                    </span>
                    Upcoming
                </div>
                <div
                    className="flex items-center gap-2"
                    onClick={() => {
                        navigate("/done");
                    }}
                >
                    <span>
                        <GrProjects />
                    </span>
                    Done
                </div>
            </div>
        </div>
    );
};

export default SidebarUi;
