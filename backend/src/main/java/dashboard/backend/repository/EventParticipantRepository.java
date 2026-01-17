package dashboard.backend.repository;

import dashboard.backend.model.event.event_participant.EventParticipant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventParticipantRepository extends JpaRepository<EventParticipant, Integer> {
}
