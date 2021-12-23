/*export function createToDo (title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    console.log('I work');
} */

export const createToDo = (project, title, description, dueDate, priority, notes) => {
    project = project;
    title = title;
    description = description;
    dueDate = dueDate;
    priority = priority;
    notes = notes;
    return{project, title, description, dueDate, priority, notes};
};