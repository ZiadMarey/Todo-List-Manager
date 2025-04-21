package net.javaguides.todo.Mapper;

import net.javaguides.todo.Dto.TodoDto;
import net.javaguides.todo.Entity.Todo;

public class TodoMapper {

    public static TodoDto mapToDto(Todo todo){
        return new TodoDto(
                todo.getId(),
                todo.getTitle(),
                todo.getDescription(),
                todo.isCompleted()
        );
    }

    public static Todo mapToTodo(TodoDto todoDto){
        return new Todo(
                todoDto.getId(),
                todoDto.getTitle(),
                todoDto.getDescription(),
                todoDto.isCompleted()
        );
    }
}
