package ru.sberbank.notes.entity;

import ru.sberbank.notes.utils.Importance;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

/**
 * @author Aleksey Rud
 */
@Entity
@Table(name = "notes")
public class Note {
	@Id
	@Column
	private  UUID id;
	@Column
	@Enumerated(EnumType.STRING)
	private Importance importance;
	@Column(name = "note_text")
	private String text;
	@Column(name = "date_create")
	private LocalDateTime dateCreate;

	public Note() {
	}

	public Note(Importance importance, String text) {
		this.id=UUID.randomUUID();
		this.importance = importance;
		this.text = text;
		this.dateCreate=LocalDateTime.now();
	}

	public Note(UUID id, Importance importance, String text, LocalDateTime dateCreate) {
		this.id = id;
		this.importance = importance;
		this.text = text;
		this.dateCreate = dateCreate;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public Importance getImportance() {
		return importance;
	}

	public void setImportance(Importance importance) {
		this.importance = importance;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public LocalDateTime getDateCreate() {
		return dateCreate;
	}

	public void setDateCreate(LocalDateTime dateCreate) {
		this.dateCreate = dateCreate;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Note note = (Note) o;
		return Objects.equals(id, note.id) &&
				importance == note.importance &&
				Objects.equals(text, note.text) &&
				Objects.equals(dateCreate, note.dateCreate);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, importance, text, dateCreate);
	}
}
