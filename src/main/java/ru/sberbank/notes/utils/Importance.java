package ru.sberbank.notes.utils;

/**
 * @author Aleksey Rud
 * Важность(низкая средняя высокая)
 */

public enum Importance {
	low("низкая"),
	medium("средняя"),
	high("высокая");
	private String value;
	Importance(String value) {
		this.value = value;
	}
	public String getValue() {
		return value;
	}
}
