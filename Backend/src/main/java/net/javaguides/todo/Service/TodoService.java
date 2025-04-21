package net.javaguides.todo.Service;

import net.javaguides.todo.Dto.TodoDto;

import java.util.List;

public interface TodoService {
    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long Id);

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(TodoDto todoDto,Long id);

    void deleteTodo(Long id);

    TodoDto completeTodo(Long id);

    TodoDto inCompleteTodo(Long id);
}
