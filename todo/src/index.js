import { buildHeader } from "./components/buildHeader";
import { buildSideBar } from "./components/buildSideBar";

const header = buildHeader();
const sideBar = buildSideBar();

document.body.append(header, sideBar);
