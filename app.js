const taskForm = document.getElementById("task-form"); // Seleccionamos el elemento form
const taskList = document.getElementById("task-list"); // Seleccionamos contenedor de la lista de tareas
taskForm.addEventListener("submit", (event) => {
  // Le agregamos el evento submit cuando envia la información
  event.preventDefault(); // Prevenimos el comportamiento habitual del formulario, ya no va a refrescar la pagina cuando hagamos submit
  const taskInput = document.getElementById("task-input"); // Seleccionamos el input donde se escribe la tarea a agregar
  const task = taskInput.value; // Obtenemos el valor del input de la tarea a agregar
  console.log(task); // Imprimimos por consola la tarea
  if (task) {
    // Si la tarea es true o existe
    taskList.append(createTaskElement(task)); // Llamamos la función para crear el elemento li y lo insertamos como elemento hijo dentro del taskList
    taskInput.value = ""; // Limpiamos el input donde estaba escribimos el valor para insertar uno nuevo
  }
});

function createTaskElement(task) {
  const li = document.createElement("li"); // Creamos un elemento li
  li.textContent = task; // Agregamos el valor de la tarea al contenido del li
  li.append(createButton(" ❌ ", "delete-btn"), createButton("✏️", "edit-btn")); // Insertamos el elemento li al elemento padre que es la lista de tareas y llamamos el metodo createButton para agregar el boton de eliminar y editar la tarea
  return li; // Retornamos el elemento li
} // Función para crear el elemento para agregar la tarea

function createButton(text, className) {
  const btn = document.createElement("span"); // Creamos el botón de tipo span
  btn.textContent = text; // Agregamos el texto al botón
  btn.className = className; // Agregamos la clase al botón
  return btn; // Retornamos el botón
} // Función para crear botónes
taskList.addEventListener("click", (event) => {
  console.log(event.target); // Imprime el eleento seleccionado
  if (event.target.classList.contains("delete-btn")) {
    // Condicion para saber contiene algun elemento la clase delete-btn
    deleteTask(event.target.parentElement); // En caso de contener la clase delete-btn elimina el elemento hijo del elemento padre
  } else if (event.target.classList.contains("edit-btn")) {
    editTask(event.target.parentElement); // En caso de que se de clic en editar llamamos al método editTask para editar la tarea
  }
}); // Utilizamos delegacion de eventos para que el padre sepa a quien le di clic para agregar la funcionalidad del evento

function deleteTask(taskItem) {
  if (confirm("Seguro que deseas eliminar esta tarea")) {
    // Pregunta si esta seguro de eliminar
    taskItem.remove(); // Si la respuesta es afirmativa remueve ese elemento
  }
} // Función para eliminar tarea
function editTask(taskItem) {
  const newTask = prompt("Edita la tarea: ", taskItem.firstChild.textContent); // Prompt que presenta el texto de contenido de la tarea para editarlo
  if (newTask !== null) {
    // validamos que el textContent de la tarea no sea null
    taskItem.firstChild.textContent = newTask; // Reescribimos el contenido anterior de la tarea con el nuevo contenido
  }
} // Función para editar tarea
