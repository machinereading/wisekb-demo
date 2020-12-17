package edu.kaist.mrlab.srdf;

import java.util.ArrayList;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import edu.kaist.mrlab.srdf.data.Triple;
import edu.kaist.mrlab.srdf.modules.Chunker;
import edu.kaist.mrlab.srdf.modules.Identifier;
import edu.kaist.mrlab.srdf.modules.Preprocessor;
import edu.kaist.mrlab.srdf.modules.SentenceSplitter;
import edu.kaist.mrlab.srdf.modules.TripleGenerator;
import edu.kaist.mrlab.srdf.tools.KoreanAnalyzer;

public class SRDF {

	private Identifier iden = new Identifier();

	@SuppressWarnings("unused")
	public ArrayList<Triple> parse(KoSeCT kosect, Preprocessor p, SentenceSplitter ss, String input, String fileName,
			int lineNumber) {
		ArrayList<Triple> reusltSet = new ArrayList<Triple>();
		String qTriples = "";
		try {

			// input = p.changeSymbol(input);
			// input = kosect.removeUTF8BOM(input);
			// input = p.removeBracket(input);

			JSONParser jsonParser = new JSONParser();

			JSONObject jsonObject = (JSONObject) jsonParser.parse(input);
			String text = String.valueOf(jsonObject.get("text"));

			// qTriples += "STC: " + text + "\n";
			// System.out.println("STC: " + text);

			ArrayList<Chunker> chunkers = kosect.getChunksWithoutSplitting(input);

			if (!p.isValidChunk(chunkers) || chunkers.isEmpty()) {
				return reusltSet;
			}

			for (Chunker c : chunkers) {
				iden.identifyVP(c.getVPChunks());
				TripleGenerator tg = new TripleGenerator(c.getNPChunks(), c.getVPChunks());
				tg.generate(fileName, lineNumber);
				// System.out.println();
				reusltSet = tg.getTriples();

				// System.out.println();
				// System.out.println("STC: " + input);

				for (int k = 0; k < reusltSet.size(); k++) {
					Triple t = reusltSet.get(k);

//					 System.out.print(t.getSubject() + "\t" + t.getPredicate()
//					 + "\t" + t.getObject() + "\n");
					qTriples += t.getSbj().getLabel() + "/" + t.getSbj().getStartOffset() + "/"
							+ t.getSbj().getEndOffset() + "\t" + t.getPred().getLabel() + "/"
							+ t.getPred().getStartOffset() + "/" + t.getPred().getEndOffset() + "\t"
							+ t.getObj().getLabel() + "/" + t.getObj().getStartOffset() + "/"
							+ t.getObj().getEndOffset() + "\n";
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		// System.out.println(qTriples);
		return reusltSet;
	}

	public static void main(String[] ar) throws Exception {

		KoreanAnalyzer ka = new KoreanAnalyzer();

		KoSeCT kosect = new KoSeCT();
		Preprocessor p = new Preprocessor();
		SentenceSplitter ss = new SentenceSplitter();
		SRDF srdf = new SRDF();

		JSONParser jp = new JSONParser();
		String output = ka.getResult(
				"비욘세는 2008년 4월에 제이-지와 자신이 비밀스럽게 치른 결혼식 중 대중들은 그저 제이-지와의 결혼식에만 관심을 가지며 화제가 된 것에서 영감을 얻어 ‘Single Ladies’를 작곡했다.");

		JSONObject object = (JSONObject) jp.parse(output);
		JSONArray sentence = (JSONArray) object.get("sentence");
		
		// Constants.fileName = "noDoc";
		ArrayList<Triple> results = srdf.parse(kosect, p, ss, sentence.get(0).toString(), "noDoc", 0);
		for(Triple t : results){
			
			System.out.println(t.getSbj().getLabel() + "\t" + t.getPred().getLabel() + "\t" + t.getObj().getLabel());
			
			
		}

	}
}
