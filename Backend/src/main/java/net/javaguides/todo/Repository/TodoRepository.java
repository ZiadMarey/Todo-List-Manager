package net.javaguides.todo.Repository;

import net.javaguides.todo.Entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}
