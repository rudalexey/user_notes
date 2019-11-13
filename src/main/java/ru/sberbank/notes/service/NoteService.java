package ru.sberbank.notes.service;

import org.springframework.stereotype.Service;
import ru.sberbank.notes.entity.Note;
import ru.sberbank.notes.repository.NoteRepository;
import ru.sberbank.notes.utils.Importance;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * @author Aleksey Rud
 */
@Service
public class NoteService {
	private final NoteRepository noteRepository;

	public NoteService(NoteRepository noteRepository) {
		this.noteRepository = noteRepository;
	}

	public Note addOrEditNote(Note note) {
		return noteRepository.save(note);
	}

	public List<Note> findNotesByFilterAndImportance(String filter, Importance importance) {
		if (Objects.isNull(importance) && Objects.isNull(filter)) {
			return (List<Note>) noteRepository.findAll();
		} else if (Objects.isNull(importance)) {
			return noteRepository.getAllByTextContainsIgnoreCase(filter);
		} else if (Objects.isNull(filter)) {
			return noteRepository.getAllByImportance(importance);
		}
			return noteRepository.getAllByTextContainsIgnoreCaseAndImportance(filter, importance);
	}
}
