package dashboard.backend.repository;

import dashboard.backend.model.material.event_material.EventMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventMaterialRepository extends JpaRepository<EventMaterial, Integer> {
}
