import { Pages } from "./controllers/pages";
import { Task } from "./controllers/task";

const pages = Pages();
const tasks = Task();

pages.initTab();
tasks.addForm();

// TODO add logic for adding tasks and projects
