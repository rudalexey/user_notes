package ru.sberbank.notes.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Aleksey Rud
 */
@Controller
public class HomeController {

	@GetMapping(value = "/")
	public String index() {
		return "index";
	}

}
