let url = 'https://ktogdziekiedy.scuroguardiano.net/';

class Connection {
    constructor() {
        this.authToken = localStorage.getItem("token");
    }

    async login(login, password) {
        const response = await fetch(url + "login", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({login, password})
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const json = await response.json();
        this.authToken = json.token;
        localStorage.setItem("token", this.authToken);
    }

    async me() {
        const response = await fetch(url + "me", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const user = await response.json();
        return user;
    }

    async addTask(category, name) {
        const response = await fetch(url + "tasks", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
            body: JSON.stringify({category, name})
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const json = await response.json();
        return json;
    }

    async getTasksToAdd() {
        const response = await fetch(`${url}tasks`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const tasks = await response.json();
        return tasks;
    }

    async runningTasks() {
        const response = await fetch(url + "running-tasks", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const tasks = await response.json();
        return tasks;
    }

    async changeTaskStatus(id) {
        const response = await fetch(`${url}running-tasks/${id}/change-status`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const task = await response.json();
        return task;
    }

    async getDoneTasksFromCurrentUser() {
        const response = await fetch(`${url}tasks/me/done`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const tasks = await response.json();
        return tasks;
    }

    async getDoneTasksFromCurrentUserHierarchy() {
        const response = await fetch(`${url}tasks/me/done/hierarchy`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const tasks = await response.json();
        return tasks;
    }

    async getDoneTasksFromAllUsers() {
        const response = await fetch(`${url}tasks/done`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const tasks = await response.json();
        return tasks;
    }

    async getAllDoneFromOneTask(category, name) {
        const response = await fetch(`${url}tasks/done/${category}/${name}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const tasks = await response.json();
        return tasks;
    }

    async getMeanFromTask(category, name) {
        const response = await fetch(`${url}tasks/done/${category}/${name}/mean`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const mean = await response.json();
        return mean;
    }

    async getBestTimeEnded(category, name) {
        const response = await fetch(`${url}tasks/done/${category}/${name}/best`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${this.authToken}`
            },
        })
        if(!response.ok){
            throw Error((await response.json()).error);
        }
        const best = await response.json();
        return best;
    }

    logout(){
        this.authToken = "";
        localStorage.removeItem("token");
    }
}

export const connection = new Connection();

/**
 * Examples of using our connection:
 * 
const login = await connection.login("abc", "1234");

const me = await connection.me();
console.log(me);

const addTask = await connection.addTask("Phone", "CPU");
console.log(addTask);

const runningTasks = await connection.runningTasks();
console.log(runningTasks);

const changeTaskStatus = await connection.changeTaskStatus(46);
console.log(changeTaskStatus);

const getDoneTasksFromCurrentUser = await connection.getDoneTasksFromCurrentUser();
console.log(getDoneTasksFromCurrentUser);

const getDoneTasksFromCurrentUserHierarchy = await connection.getDoneTasksFromCurrentUserHierarchy();
console.log(getDoneTasksFromCurrentUserHierarchy)

const getDoneTasksFromAllUsers = await connection.getDoneTasksFromAllUsers();
console.log(getDoneTasksFromAllUsers)

const getAllDoneFromOneTask = await connection.getAllDoneFromOneTask("Computer", "Software");
console.log(getAllDoneFromOneTask)

const getMeanFromTask = await connection.getMeanFromTask("Computer", "Software");
console.log(getMeanFromTask)

const getBestTimeEnded = await connection.getBestTimeEnded("Computer", "Software");
console.log(getBestTimeEnded)
 */