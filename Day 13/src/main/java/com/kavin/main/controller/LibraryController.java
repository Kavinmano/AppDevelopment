package com.Kavin.Main.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LibraryController {
	@RequestMapping("/home")
		public void home()
	{
		System.out.print("Hi KAVIN");
	}

}
