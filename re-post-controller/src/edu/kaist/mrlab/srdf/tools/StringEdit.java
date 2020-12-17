package edu.kaist.mrlab.srdf.tools;

public class StringEdit {
	public static String replaceFirst(String text, String regex,
			String replacement) {
		if(regex.contains(")")){
			regex = regex.replace(")", "\\)");
		}
		
		if(regex.contains("(")){
			regex = regex.replace("(", "\\(");
		}
		
		if(regex.contains("?")){
			regex = regex.replace("?", "");
		}
		
		return text.replaceFirst("(?s)" + regex + "(?!.*?" + regex + ")",
				replacement);
	}
}
