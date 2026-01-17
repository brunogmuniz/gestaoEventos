-- EXTENSÃO PARA UUID
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ENUMS
CREATE TYPE role AS ENUM (
  'ADMIN',
  'USER_LEADER',
  'USER_COMMON'
);

CREATE TYPE participant_role AS ENUM (
  'RESPONSIBLE',
  'PARTICIPANT'
);

CREATE TYPE movement_type AS ENUM (
  'WITHDRAW',
  'REDISTRIBUTION',
  'RETURN'
);

CREATE TYPE movement_status AS ENUM (
  'PENDING',
  'CONFIRMED'
);

-- TABELA USERS
CREATE TABLE users (
                       uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                       name VARCHAR(100) NOT NULL,
                       email VARCHAR(150) UNIQUE NOT NULL,
                       password_hash VARCHAR(255) NOT NULL,
                       role role NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       is_active BOOLEAN DEFAULT TRUE
);

-- TABELA MATERIAL
CREATE TABLE material (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(100) NOT NULL,
                          description VARCHAR(500),
                          total_quantity INT NOT NULL,
                          available_quantity INT NOT NULL
);

-- TABELA EVENT
CREATE TABLE event (
                       id SERIAL PRIMARY KEY,
                       name VARCHAR(100) NOT NULL,
                       locarion VARCHAR(100) NOT NULL,
                       responsible_id UUID,
                       start_at TIMESTAMP NOT NULL,
                       end_at TIMESTAMP NOT NULL,
                       is_active BOOLEAN DEFAULT TRUE,
                       CONSTRAINT fk_event_responsible
                           FOREIGN KEY (responsible_id) REFERENCES users(uuid)
);

-- TABELA EVENT_PARTICIPANT
CREATE TABLE event_participant (
                                   id SERIAL PRIMARY KEY,
                                   event_id INT NOT NULL,
                                   user_id UUID NOT NULL,
                                   participant_role participant_role NOT NULL,
                                   CONSTRAINT fk_event_participant_event
                                       FOREIGN KEY (event_id) REFERENCES event(id),
                                   CONSTRAINT fk_event_participant_user
                                       FOREIGN KEY (user_id) REFERENCES users(uuid),
                                   CONSTRAINT uk_event_user UNIQUE (event_id, user_id)
);

-- TABELA MOVEMENT
CREATE TABLE movement (
                          id SERIAL PRIMARY KEY,

                          material_id INT NOT NULL,
                          event_id INT NOT NULL,

                          from_user_id UUID,
                          to_user_id UUID,

                          quantity INT NOT NULL,

                          type movement_type NOT NULL,
                          status movement_status NOT NULL,

                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

                          CONSTRAINT fk_movement_material
                              FOREIGN KEY (material_id) REFERENCES material(id),

                          CONSTRAINT fk_movement_event
                              FOREIGN KEY (event_id) REFERENCES event(id),

                          CONSTRAINT fk_movement_from_user
                              FOREIGN KEY (from_user_id) REFERENCES users(uuid),

                          CONSTRAINT fk_movement_to_user
                              FOREIGN KEY (to_user_id) REFERENCES users(uuid)
);

-- TABELA EVENT_MATERIAL
CREATE TABLE event_material (
                                id SERIAL PRIMARY KEY,
                                event_id INT NOT NULL,
                                material_id INT NOT NULL,
                                quantity INT NOT NULL,

                                CONSTRAINT fk_event_material_event
                                    FOREIGN KEY (event_id) REFERENCES event(id),

                                CONSTRAINT fk_event_material_material
                                    FOREIGN KEY (material_id) REFERENCES material(id),

                                CONSTRAINT uk_event_material UNIQUE (event_id, material_id)
);
