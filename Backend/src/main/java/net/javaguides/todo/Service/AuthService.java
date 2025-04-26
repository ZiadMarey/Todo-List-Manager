package net.javaguides.todo.Service;

import net.javaguides.todo.Dto.LoginDto;
import net.javaguides.todo.Dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    String login(LoginDto loginDto);
}
