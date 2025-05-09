package net.javaguides.todo.Controller;

import lombok.AllArgsConstructor;
import net.javaguides.todo.Dto.JwtAuthResponse;
import net.javaguides.todo.Dto.LoginDto;
import net.javaguides.todo.Dto.RegisterDto;
import net.javaguides.todo.Service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;

    //Build Register Rest API
    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        String response = authService.register(registerDto);

        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    //Build Login Rest API
    @PostMapping("login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDto loginDto) {
        String token = authService.login(loginDto);

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setAccessToken(token);

        return new ResponseEntity<>(jwtAuthResponse,HttpStatus.ACCEPTED);
    }
}
