package ru.sberbank.notes.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;
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
	@GeneratedValue(generator = "UUID")
	@GenericGenerator(name = "UUID",strategy = "org.hibernate.id.UUIDGenerator")
	private UUID id;
	@Column
	@Enumerated(EnumType.STRING)
	private Importance importance;
	@Column(name = "title")
	private String title;
	@Column(name = "note_text")
	private String text;
	@Column(name = "date_create")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd MMMM yyyy HH:mm",locale = "ru")
	@CreationTimestamp
	private LocalDateTime dateCreate;

	public Note() {
	}

	public Note(Importance importance, String title, String text) {
		this.id = UUID.randomUUID();
		this.importance = importance;
		this.title = title;
		this.text = text;
		this.dateCreate = LocalDateTime.now();
	}

	public Note(UUID id, Importance importance, String title, String text, LocalDateTime dateCreate) {
		this.id = id;
		this.importance = importance;
		this.title = title;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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
				Objects.equals(title, note.title) &&
				Objects.equals(text, note.text) &&
				Objects.equals(dateCreate, note.dateCreate);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, importance, title, text, dateCreate);
	}
}
