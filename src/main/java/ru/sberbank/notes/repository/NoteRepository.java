package ru.sberbank.notes.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.sberbank.notes.entity.Note;
import ru.sberbank.notes.utils.Importance;

import java.util.List;
import java.util.UUID;

/**
 * @author Aleksey Rud
 */
@Repository
public interface NoteRepository extends CrudRepository<Note, UUID> {

	List<Note> getAllByTextContainsIgnoreCase(String filter);

	List<Note> getAllByImportance(Importance importance);

	List<Note> getAllByTextContainsIgnoreCaseAndImportance(String filter, Importance importance);
}
