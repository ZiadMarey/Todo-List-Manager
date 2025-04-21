package net.javaguides.todo.Service.Impl;

import lombok.AllArgsConstructor;
import net.javaguides.todo.Dto.TodoDto;
import net.javaguides.todo.Entity.Todo;
import net.javaguides.todo.Exception.ResourceNotFoundException;
import net.javaguides.todo.Mapper.TodoMapper;
import net.javaguides.todo.Repository.TodoRepository;
import net.javaguides.todo.Service.TodoService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {
    private TodoRepository todoRepository;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        Todo todo = new Todo();

        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todoDto.isCompleted());

        Todo savedTodo = todoRepository.save(todo);

        return TodoMapper.mapToDto(savedTodo);
    }

    @Override
    public TodoDto getTodo(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found with id:" + id)
        );

        return TodoMapper.mapToDto(todo);


    }

    @Override
    public List<TodoDto> getAllTodos() {
        List<Todo> todos = todoRepository.findAll(Sort.by(Sort.Direction.ASC, "completed"));

        return todos.stream().map((todo) -> TodoMapper.mapToDto(todo))
                .collect(Collectors.toList());
    }

    @Override
    public TodoDto updateTodo(TodoDto todoDto, Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found witht he id: " +id)
        );

        todo.setDescription(todoDto.getDescription());
        todo.setTitle(todoDto.getTitle());
        todo.setCompleted(todo.isCompleted());

        Todo updatedTodo = todoRepository.save(todo);

        return TodoMapper.mapToDto(updatedTodo);
    }

    @Override
    public void deleteTodo(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found witht he id: " +id)
        );

        todoRepository.deleteById(id);
    }

    @Override
    public TodoDto completeTodo(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found witht he id: " +id)
        );

        todo.setCompleted(Boolean.TRUE);

        Todo updatedTodo = todoRepository.save(todo);

        return TodoMapper.mapToDto(updatedTodo);
    }

    @Override
    public TodoDto inCompleteTodo(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Todo not found witht he id: " +id)
        );

        todo.setCompleted(Boolean.FALSE);

        Todo updatedTodo = todoRepository.save(todo);

        return TodoMapper.mapToDto(updatedTodo);
    }


}
