package dashboard.backend.repository;

import dashboard.backend.model.movement.Movement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovementRepository extends JpaRepository<Movement, Integer> {
}
