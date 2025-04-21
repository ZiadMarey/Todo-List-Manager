package net.javaguides.todo.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name= "todos")
public class Todo {

    @Id@GeneratedValue(strategy = GenerationType.IDENTITY) //this is what fills the primary key automatically when user registers for example
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    private boolean completed;
}
