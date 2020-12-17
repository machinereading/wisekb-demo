package edu.kaist.mrlab.srdf.pattern;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class GenarateInput {

	public void run() throws Exception {

		BufferedReader br = Files.newBufferedReader(Paths.get("prepro/data/wiki_ex_PL3.txt"));
		BufferedWriter bw = Files.newBufferedWriter(Paths.get("prepro/data/for_srdf.txt"));

		String input = null;
		while ((input = br.readLine()) != null) {

			ArrayList<JSONObject> entitiesArr = new ArrayList<>();

			JSONParser parser = new JSONParser();
			JSONObject parsed = (JSONObject) parser.parse(input);
			
			JSONArray sentenceArr = (JSONArray) parsed.get("sentence");
			JSONObject sentence = (JSONObject) sentenceArr.get(0);
			
			JSONArray entities = (JSONArray) sentence.get("entities");
			String text = sentence.get("text").toString();

			Iterator<?> enIt = entities.iterator();
			while (enIt.hasNext()) {
				entitiesArr.add((JSONObject) enIt.next());
			}

			for (int i = 0; i < entitiesArr.size(); i++) {

				for (int j = i + 1; j < entitiesArr.size() - i; j++) {

					String uri1 = entitiesArr.get(i).get("uri").toString();
					String uri2 = entitiesArr.get(j).get("uri").toString();

					bw.write(uri1 + "\t" + uri2 + "\t" + text + "\t" + sentence + "\t" + "data/index/corpus/0/0" + "\t" + 0
							+ "\t" + uri1 + "\t" + uri2 + "\n");

				}

			}

		}
		bw.close();
	}

	public static void main(String[] ar) throws Exception {

		GenarateInput gi = new GenarateInput();
		gi.run();

	}
}
