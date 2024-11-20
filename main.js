const container = document.createElement("div");
const containerDivs = document.createElement("div");
const todoDiv = document.createElement("div");
const todoText = document.createTextNode("To-Do");
const listTasksDiv = document.createElement("div");
const listDiv = document.createElement("div");
const listText = document.createTextNode("LIST");
const title_listTasksDiv = document.createElement("h1");
const enterTasks = document.createElement("input");
const addButton = document.createElement("button");
const icon = document.createElement("i");
const allTaskListContainer = document.createElement("div");
icon.className = "fa-solid fa-xmark";
icon.style.cssText = `
    color:red;
    font-size:20px;
    display:none;
    cursor: pointer;

`;
container.style.cssText = `
    width: 100%;
    height: 100vh;
    background-color:#2f363e ;
    position:relative;
`;

containerDivs.style.cssText = `
    width:95%;
    height:80%;
    position:absolute;
    top:10%;
    left:2.5%;
    // background-color:#6e7986 ;
    display:flex;

`;
todoDiv.style.cssText = `
    width:30%;
    height:100%;
    // background-color:black;
    font-size:140px;
    color:white;
    padding:190px 10px;
    font-family: "Protest Guerrilla", sans-serif;
    letter-spacing:5px;

`;
listTasksDiv.style.cssText = `
    width:40%;
    height:100%;
    background-color:#2f363e;
    border-radius:20px;
    box-shadow: 0px 0px 30px black;
    padding:15px;
    overflow: hidden;
`;
listDiv.style.cssText = `
    width:30%;
    height:100%;
    // background-color:black;
    font-size:140px;
    color:white;
    padding:180px 50px;
    font-family: "Protest Guerrilla", sans-serif;
    letter-spacing:5px;
`;
title_listTasksDiv.textContent = "Tasks";
title_listTasksDiv.style.cssText = `
    color:white;
    text-align:center;
    margin-bottom:10px;
    font-family: "Protest Guerrilla", sans-serif;
    letter-spacing: 5px;

`;
enterTasks.setAttribute("placeholder", "Enter your Task");
enterTasks.style.cssText = `
    background-color: white;
    width: 70%;
    height: 50px;
    border-radius: 20px;
    font-size:20px;
    border:none;
    padding:5px;
    outline:none;
`;
addButton.textContent = "Add";
addButton.style.cssText = `
    border: none;
    background-color: rgb(219, 219, 23);
    width: 20%;
    height: 50px;
    font-size: 25px;
    color: white;
    border-radius:10px;
    text-align:center;
    margin:5px 15px;
    font-weight:bold;
    cursor: pointer;

`;
allTaskListContainer.style.cssText = `
    max-height: 60vh;
    overflow-y: auto; 
    scrollbar-face-color: #888;
    scrollbar-track-color: #2f363e; 
    `;
window.onload = () => {
    enterTasks.focus();
};

enterTasks.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addButton.click();
        e.preventDefault();
    }
});
// Function Start

addButton.addEventListener("click", () => {
    const taskContainer = document.createElement("div");
    const taskContent = document.createElement("div");
    const checkTask = document.createElement("input");
    const theTask = document.createTextNode(enterTasks.value);
    const spanOfTheTask = document.createElement("span");
    const deleteTask = document.createElement("span");
    if (enterTasks.value.trim() === "") return;
    taskContainer.style.cssText = `
    margin-top:30px;
    display:flex;
`;
    checkTask.setAttribute("type", "checkbox");
    taskContent.style.cssText = `
    background-color: #1D7FEE;
    width: 80%;
    height: 47px;
    border-radius: 20px;
    font-size:20px;
    border:none;
    padding:5px;
    position:relative;
    // box-shadow: 0px 0px 10px gray;

`;
    taskContainer.addEventListener("mouseover", function () {
        taskContainer.style.transform = "translateY(-10px)";
        taskContainer.style.transition = "0.3s";
    });

    taskContainer.addEventListener("mouseout", function () {
        taskContainer.style.transform = "translateY(0)";
        taskContainer.style.transition = "0.3s";
    });
    checkTask.style.cssText = `
    width: 30px;
    height: 20px;
    position: absolute;
    top: 12px;
    border-radius: 20px;
    background-color: #2f363e;
    cursor: pointer;
    // border:none;
`;
    checkTask.addEventListener("click", () => {
        if (checkTask.checked) {
            taskContent.style.backgroundColor = "rgb(73, 70, 70)";
            spanOfTheTask.style.textDecoration = "line-through";
        } else {
            taskContent.style.backgroundColor = "#1D7FEE";
            spanOfTheTask.style.textDecoration = "none";
        }
    });
    spanOfTheTask.style.cssText = `
    margin:10px 0px 0px 35px;
    font-size:30px;
    color:white;
    
`;
    deleteTask.textContent = "x";
    deleteTask.style.cssText = `
    width:30px;
    height:30px;
    border-radius:15px;
    text-align:center;
    color:white;
    background-color:red;
    font-size:25px;
    // font-weight:bold;
    margin:8px 0px 0px 15px;
    cursor: pointer;

`;

    deleteTask.addEventListener("click", () => {
        const answer = confirm("Are you sure ,you want to delete this ?");
        if (answer) taskContainer.style.display = "none";
        else taskContainer.style.display = "visible";
    });
    icon.addEventListener("click", () => {
        taskContainer.style.display = "none";
        icon.style.display = "none";
    });
    if (allTaskListContainer == "") icon.style.display = "none";
    enterTasks.value = "";

    icon.style.display = "inline-block";
    enterTasks.focus();

    taskContainer.append(taskContent, deleteTask);
    taskContent.append(checkTask, spanOfTheTask);
    spanOfTheTask.append(theTask);
    listTasksDiv.append(taskContainer);
    allTaskListContainer.append(taskContainer);
}); // Function End

document.body.append(container);
container.append(containerDivs);
containerDivs.append(todoDiv);
todoDiv.appendChild(todoText);
listDiv.appendChild(listText);
containerDivs.append(listTasksDiv, listDiv);
listTasksDiv.append(
    title_listTasksDiv,
    enterTasks,
    addButton,
    icon,
    allTaskListContainer
);
