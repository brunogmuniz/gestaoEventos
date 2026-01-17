package dashboard.backend.controller.Auth;


import dashboard.backend.model.user.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth")
@RestController
public class AuthController {

    @PostMapping("/login")
    public void login(@RequestBody User user) {

    }
}
