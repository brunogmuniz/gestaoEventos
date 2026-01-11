package dashboard.backend.model.event;

import dashboard.backend.model.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;



@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @NotBlank
    @Column(nullable = false)
    private String location;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(
            name = "uuid",
            nullable = false
    )
    private User responsible;

    @NotBlank
    @Column(nullable = false)
    private Date start_at;

    @NotBlank
    @Column(nullable = false)
    private Date end_at;

    @Column(nullable = false)
    @NotBlank
    private Boolean active;
}
