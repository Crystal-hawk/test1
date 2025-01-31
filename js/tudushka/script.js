        let selectedTask = null; // Переменная для хранения выбранной задачи

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Пожалуйста, введите задачу!');
                return;
            }

            const categorySelect = document.getElementById('categorySelect');
            const selectedCategory = categorySelect.value;

            const taskList = document.getElementById(selectedCategory);
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.onclick = function() {
                taskList.removeChild(li);
            };

            li.appendChild(deleteButton);
            taskList.appendChild(li);

            // Добавляем обработчик клика для выбора задачи
            li.addEventListener('click', function() {
                if (selectedTask) {
                    selectedTask.classList.remove('selected'); // Убираем выделение у предыдущей задачи
                }
                selectedTask = li;
                selectedTask.classList.add('selected'); // Выделяем текущую задачу
            });

            taskInput.value = '';
        }

        // Обработчик события нажатия клавиши для добавления задачи по Enter
        document.getElementById('taskInput').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        // Обработчик события нажатия клавиши для удаления задачи по Backspace
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Backspace' && selectedTask) {
                selectedTask.remove(); // Удаляем выбранную задачу
                selectedTask = null; // Сбрасываем выбранную задачу
            }
        });