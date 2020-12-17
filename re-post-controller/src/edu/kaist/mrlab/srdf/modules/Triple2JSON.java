package edu.kaist.mrlab.srdf.modules;

import java.util.ArrayList;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import edu.kaist.mrlab.srdf.KoSeCT;
import edu.kaist.mrlab.srdf.SRDF;
import edu.kaist.mrlab.srdf.data.Triple;
import edu.kaist.mrlab.srdf.tools.KoreanAnalyzer;

public class Triple2JSON {
	
	@SuppressWarnings("unchecked")
	public String change(ArrayList<Triple> triples){
		
		JSONObject result = new JSONObject();
		JSONArray relations = new JSONArray();
		JSONObject element = new JSONObject();
		
		for(Triple t : triples){
			
			String sbjLabel = t.getSbj().getLabel();
			String predLabel = t.getPred().getLabel();
			String objLabel = t.getObj().getLabel();
			
			element = new JSONObject();
			element.put("to", sbjLabel);
			element.put("from", predLabel);
			element.put("type", "link");
			relations.add(element);
			
			element = new JSONObject();
			element.put("to", predLabel);
			element.put("from", objLabel);
			element.put("type", "link");
			relations.add(element);
			
		}
		
		result.put("relations", relations);
		
		return result.toJSONString().toString();
	}
	
	public static void main(String[] ar) throws Exception{
		
		KoSeCT kosect = new KoSeCT();
		Preprocessor p = new Preprocessor();
		SentenceSplitter ss = new SentenceSplitter();
		Triple2JSON tj = new Triple2JSON();
		KoreanAnalyzer ka = new KoreanAnalyzer();
		JSONParser jp = new JSONParser();
		SRDF srdf = new SRDF();
		String parsedInput = ka.getResult("김연아는 2009년 세계 선수권 대회에서 총점 207.71을 기록해 여자 싱글 부문에서 사상 최초로 200점을 돌파하였다.");
		
		JSONObject object = (JSONObject) jp.parse(parsedInput);
		JSONArray sentence = (JSONArray) object.get("sentence");

		Iterator<?> sentenceItr = sentence.iterator();
		while (sentenceItr.hasNext()) {

			parsedInput = String.valueOf(sentenceItr.next());

		}
		
		ArrayList<Triple> result = srdf.parse(kosect, p, ss, parsedInput, "", 0);
		
		String results = tj.change(result);
		System.out.println(results);
		
	}
	
}
