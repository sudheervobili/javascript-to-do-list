const todoform = document.querySelector(".form-todo");
const todoinput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoform.addEventListener("submit", (e) => {
	e.preventDefault();
	const newToDo = todoinput.value;
	const newLi = document.createElement("li");
	const newliInnerHtml = `<span class="text">${newToDo}</span>
					<div class="todo-buttons">
						<button class="todo-btn done">Done</button>
						<button class="todo-btn remove">Remove</button>
					</div>`;
	newLi.innerHTML = newliInnerHtml;
	todoList.append(newLi);
	todoinput.value = "";
});
todoList.addEventListener("click", (e) => {
	if (e.target.classList.contains("remove")) {
		const targetLi = e.target.parentNode.parentNode;
		targetLi.remove();
	}
	if (e.target.classList.contains("done")) {
		const liSpan = e.target.parentNode.previousElementSibling;
		liSpan.style.textDecoration = "line-through";
	}
});
