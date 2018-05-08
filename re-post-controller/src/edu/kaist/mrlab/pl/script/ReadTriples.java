package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.StringTokenizer;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import edu.kaist.mrlab.pl.data.Instance;
import edu.kaist.mrlab.pl.data.InstanceComparator;
import edu.kaist.mrlab.pl.rest.Main;

public class ReadTriples {

	@SuppressWarnings("unchecked")
	public String readAll(String usedTag) throws Exception {

		List<Instance> insList = new ArrayList<Instance>();

		JSONObject resultObj = new JSONObject();
		JSONArray resultSet = new JSONArray();

		String input = null;

		BufferedReader br2 = Files.newBufferedReader(Paths.get("DB2XB/data/pl_out/pl1-out"));

		if (usedTag.equals("FALSE")) {
			System.out.println("Read PL1 Triples");
			while ((input = br2.readLine()) != null) {

				StringTokenizer st = new StringTokenizer(input, "\t");
				String subject = st.nextToken().replaceAll(" ", "_");
				subject = subject.replaceAll("http://ko.dbpedia.org/resource/", "dbr:");
				subject = subject.replaceAll("http://mrlab.kaist.ac.kr/resource/", "mrr:");
				String property = st.nextToken();
				String object = st.nextToken().replaceAll(" ", "_");
				object = object.replaceAll("http://ko.dbpedia.org/resource/", "dbr:");
				object = object.replaceAll("http://mrlab.kaist.ac.kr/resource/", "mrr:");
				st.nextToken(); // dot
				String score = st.nextToken();
				String stc = st.nextToken();

				if (property.startsWith("adams-")) {
					continue;
				}

				if (property.startsWith("dbpedia-")) {
					property = property.replaceAll("dbpedia-", "");
				}

				Set<String> postFixSet = new HashSet<String>();
				postFixSet.add("OGG");
				postFixSet.add("AF");
				postFixSet.add("CV");
				postFixSet.add("EV");
				postFixSet.add("LCG");

				for (String postFix : postFixSet) {
					if (property.endsWith(postFix)) {
						property = property.replace(postFix, "");
					}
				}

				String sbj = null;
				String obj = null;

				if (subject.startsWith("mrr:")) {
					sbj = "http://mrlab.kaist.ac.kr/resource/" + subject.replace("mrr:", "");

				} else if (subject.startsWith("dbr:")) {
					subject = subject.replace("dbr:", "");
					sbj = subject + "/" + Main.entityMap.get(subject);
					sbj = sbj.replace("/null", "");

				}

				if (object.startsWith("mrr:")) {
					obj = "http://mrlab.kaist.ac.kr/resource/" + object.replace("mrr:", "");
				} else if (object.startsWith("dbr:")) {
					object = object.replace("dbr:", "");
					obj = object + "/" + Main.entityMap.get(object);
					obj = obj.replace("/null", "");
				}

				insList.add(new Instance(sbj, property, obj, score, "Rule", stc));

			}
		}

		BufferedReader br5 = Files.newBufferedReader(Paths.get("DB2XB/data/pl_out/pl5-out"));

		input = null;
		while ((input = br5.readLine()) != null) {

			StringTokenizer st = new StringTokenizer(input, "\t");

			String subject = st.nextToken();
			String property = st.nextToken();
			String object = st.nextToken();
			st.nextToken();
			String score = st.nextToken();
			String stc = st.nextToken();
			// String stc = "";

			String sbj = subject + "/" + Main.entityMap.get(subject);
			sbj = sbj.replace("/null", "");

			String obj = object + "/" + Main.entityMap.get(object);
			obj = obj.replace("/null", "");

			insList.add(new Instance(sbj, property, obj, score, "B2K+", stc));

		}

		BufferedReader br4 = Files.newBufferedReader(Paths.get("DB2XB/data/pl_out/pl4-out"));

		while ((input = br4.readLine()) != null) {

			StringTokenizer st = new StringTokenizer(input, "\t");

			String subject = st.nextToken();
			String property = st.nextToken();
			String object = st.nextToken();
			st.nextToken(); // dot
			String score = st.nextToken();
			String stc = st.nextToken();

			String sbj = subject + "/" + Main.entityMap.get(subject);
			sbj = sbj.replace("/null", "");

			String obj = object + "/" + Main.entityMap.get(object);
			obj = obj.replace("/null", "");

			insList.add(new Instance(sbj, property, obj, score, "CNN", stc));

		}

		insList = Main.drc.filter(insList);

		InstanceComparator comparator = new InstanceComparator();
		Collections.sort(insList, comparator);

		for (Instance ins : insList) {

			JSONObject triple = new JSONObject();
			triple.put("s", ins.getSbj());
			triple.put("p", ins.getPred());
			triple.put("o", ins.getObj());
			triple.put("sco", ins.getScore());
			triple.put("stc", ins.getStc());
			triple.put("src", ins.getModule());

			resultSet.add(triple);

		}

		br2.close();
		br4.close();
		br5.close();

		resultObj.put("triples", resultSet);
		return resultObj.toJSONString();
	}

	public static void main(String[] ar) throws Exception {

		ReadTriples rt = new ReadTriples();
		String result = rt.readAll("FALSE");
		System.out.println(result);

	}
}
