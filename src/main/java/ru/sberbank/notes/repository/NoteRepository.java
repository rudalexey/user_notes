package ru.sberbank.notes.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.notes.entity.Note;

import java.util.UUID;

/**
 * @author Aleksey Rud
 */
@Repository
public interface NoteRepository extends CrudRepository<Note, UUID> {
}
