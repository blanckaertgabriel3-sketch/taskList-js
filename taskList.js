let btnAddList = document.getElementById("btnAddList");
let listCards = document.getElementById("listCards");


btnAddList.addEventListener("click", () => {
	createCard();
})
function createCard() {
	const newListCard = document.createElement("div");
	newListCard.classList.add("listCard");
	
	//header
	const newCardHeader= document.createElement("div");
	newCardHeader.classList.add("cardHeader");
	const newInputListName = document.createElement("input");
	newInputListName.classList.add("listName");
	newInputListName.type = "text";
	newInputListName.value = "List Name";
	const newButtonAddTask = document.createElement("button");
	newButtonAddTask.classList.add("addTask");
	newButtonAddTask.textContent = "➕";
	const newButtonModifyListName = document.createElement("button");
	newButtonModifyListName.classList.add("modifyListName");
	newButtonModifyListName.textContent = "🖊️";
	const newButtonDeleteListCard = document.createElement("button");
	newButtonDeleteListCard.classList.add("deleteListCard");
	newButtonDeleteListCard.textContent = "❌";
	//tasks
	const newDivTasks = document.createElement("div");
	newDivTasks.classList.add("tasks");
	const newDivTask = document.createElement("div");
	newDivTask.classList.add("task");
	const newInputTaskName = document.createElement("input");
	newInputTaskName.classList.add("taskName");
	newInputTaskName.type = "text";
	newInputTaskName.value = "New Task";
	const newDivBtnTask = document.createElement("div");
	newDivBtnTask.classList.add("btnTask");
	//btn Task
	const newBtnModifyTask = document.createElement("button");
	newBtnModifyTask.classList.add("modifyTaskName");
	newBtnModifyTask.textContent = "🖊️";
	const newBtnDeleteTask = document.createElement("button");
	newBtnDeleteTask.classList.add("deleteTask");
	newBtnDeleteTask.textContent = "❌";
	
	listCards.appendChild(newListCard);
		newListCard.appendChild(newCardHeader);
			newCardHeader.appendChild(newInputListName);
			newCardHeader.appendChild(newButtonAddTask);
			newCardHeader.appendChild(newButtonModifyListName);
			newCardHeader.appendChild(newButtonDeleteListCard);
		newListCard.appendChild(newDivTasks);
			newDivTasks.appendChild(newDivTask);
				newDivTask.appendChild(newInputTaskName);
				newDivTask.appendChild(newDivBtnTask);
					newDivBtnTask.appendChild(newBtnModifyTask);
					newDivBtnTask.appendChild(newBtnDeleteTask);
}