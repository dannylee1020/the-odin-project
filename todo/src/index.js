import { Pages } from "./controllers/pages";
import { Task } from "./controllers/task";
import { Project } from "./controllers/project";

const pages = Pages();
const tasks = Task();
const project = Project();

pages.initPageLogic();
project.initProjectLogic();
tasks.addTaskForm();
