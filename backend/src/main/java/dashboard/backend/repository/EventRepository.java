package dashboard.backend.repository;

import dashboard.backend.model.event.Event;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EventRepository extends JpaRepository<Event, Integer> {
}
