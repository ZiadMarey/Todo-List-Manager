package net.javaguides.todo.Util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class PasswordEncoderImpl {
    public static void main(String[] args) {
        PasswordEncoder encoder = new BCryptPasswordEncoder();

        System.out.println(encoder.encode("password"));

        System.out.println(encoder.encode("admin"));
    }
}
