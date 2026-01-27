package dashboard.backend.service;

import dashboard.backend.model.user.User;
import dashboard.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User sign(User user) {
        String senhaCriptografada = passwordEncoder.encode(user.getPasswordHash());
        user.setPasswordHash(senhaCriptografada);
        return userRepository.save(user);
    }
}



