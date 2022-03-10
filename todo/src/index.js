import { Pages } from "./controllers/pages";
import { Task } from "./controllers/task";

const pages = Pages();
const tasks = Task();

pages.initLogic();
tasks.addForm();
