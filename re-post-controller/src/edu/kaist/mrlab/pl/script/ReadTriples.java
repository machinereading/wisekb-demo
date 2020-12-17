package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

import javax.ws.rs.GET;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import edu.kaist.mrlab.pl.data.Instance;
import edu.kaist.mrlab.pl.data.InstanceComparator;
import edu.kaist.mrlab.pl.rest.Main;

public class ReadTriples {

	@SuppressWarnings("unchecked")
	public String readAll(String usedTag, String entityOutput, boolean isKV) throws Exception {

		BufferedWriter belief = new BufferedWriter(new FileWriter("DB2XB/data/pl_out/belief"));
		List<Instance> insList = new ArrayList<Instance>();
		List<Instance> sumzList = new ArrayList<Instance>();

		JSONObject resultObj = new JSONObject();
		JSONArray resultSet = new JSONArray();

		String input = null;

//		BufferedReader br2 = Files.newBufferedReader(Paths.get("DB2XB/data/pl_out/pl1-out"));
//
//		if (usedTag.equals("FALSE")) {
//			System.out.println("Read PL1 Triples");
//			while ((input = br2.readLine()) != null) {
//
//				StringTokenizer st = new StringTokenizer(input, "\t");
//				String subject = st.nextToken().replaceAll(" ", "_");
//				subject = subject.replaceAll("http://ko.dbpedia.org/resource/", "dbr:");
//				subject = subject.replaceAll("http://mrlab.kaist.ac.kr/resource/", "mrr:");
//				String property = st.nextToken();
//				String object = st.nextToken().replaceAll(" ", "_");
//				object = object.replaceAll("http://ko.dbpedia.org/resource/", "dbr:");
//				object = object.replaceAll("http://mrlab.kaist.ac.kr/resource/", "mrr:");
//				st.nextToken(); // dot
//				String score = st.nextToken();
//				String stc = st.nextToken();
//
//				if (property.startsWith("adams-")) {
//					continue;
//				}
//
//				if (property.startsWith("dbpedia-")) {
//					property = property.replaceAll("dbpedia-", "");
//				}
//
//				Set<String> postFixSet = new HashSet<String>();
//				postFixSet.add("OGG");
//				postFixSet.add("AF");
//				postFixSet.add("CV");
//				postFixSet.add("EV");
//				postFixSet.add("LCG");
//
//				for (String postFix : postFixSet) {
//					if (property.endsWith(postFix)) {
//						property = property.replace(postFix, "");
//					}
//				}
//
//				String sbj = null;
//				String obj = null;
//
//				if (subject.startsWith("mrr:")) {
//					sbj = "http://mrlab.kaist.ac.kr/resource/" + subject.replace("mrr:", "");
//
//				} else if (subject.startsWith("dbr:")) {
//					subject = subject.replace("dbr:", "");
//					sbj = subject + "/" + Main.entityMap.get(subject);
//					sbj = sbj.replace("/null", "");
//
//				}
//
//				if (object.startsWith("mrr:")) {
//					obj = "http://mrlab.kaist.ac.kr/resource/" + object.replace("mrr:", "");
//				} else if (object.startsWith("dbr:")) {
//					object = object.replace("dbr:", "");
//					obj = object + "/" + Main.entityMap.get(object);
//					obj = obj.replace("/null", "");
//				}
//
//				insList.add(new Instance(sbj, property, obj, score, "Rule", stc));
//
//			}
//		}
/*
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

			insList.add(new Instance(sbj, property, obj, score, "JCNN", stc));

		}

		BufferedReader br8 = Files.newBufferedReader(Paths.get("DB2XB/data/pl_out/pl8-out"));

		while ((input = br8.readLine()) != null) {

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

			insList.add(new Instance(sbj, property, obj, score, "pyCNN", stc));

		}

		BufferedReader br9 = Files.newBufferedReader(Paths.get("DB2XB/data/pl_out/pl9-out"));
		while ((input = br9.readLine()) != null) {

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

			insList.add(new Instance(sbj, property, obj, score, "RL", stc));

		}
		
*/		
		BufferedReader br10 = Files.newBufferedReader(Paths.get("DB2XB/data/pl_out/pl10-out"));
		while ((input = br10.readLine()) != null) {

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

			insList.add(new Instance(sbj, property, obj, score, "BERT", stc));

		}

		//insList = Main.drc.filter(insList);

		for (Instance ins : insList) {

			String sbj = ins.getSbj();
			String obj = ins.getObj();

			String[] sbjArr = sbj.split("/");
			String[] objArr = obj.split("/");

			belief.write(sbjArr[0] + "\t" + ins.getPred() + "\t" + objArr[0] + "\t.\t" + ins.getScore() + "\t"
					+ ins.getStc() + "\n");
		}
		//belief.close();
		
		JSONArray genTriples = new JSONArray();
		
		if (insList.size() > 5) {

			ScriptRunner srs = new ScriptRunner();
			srs.run_sumz();

			String sumzFile = getCentrailEntity(insList).replace(" ", "_") + "_top5.nt";
			System.out.println("sumzFile : " + sumzFile);
			BufferedReader sumz = Files.newBufferedReader(Paths.get("/home/kekeeo/kafca/KAFCA_result/" + sumzFile));

			while ((input = sumz.readLine()) != null) {

				StringTokenizer st = new StringTokenizer(input, "\t");

				String subject = st.nextToken();
				String property = st.nextToken();
				String object = st.nextToken();

				JSONObject temp = new JSONObject();
				temp.put("s", subject);
				temp.put("o", object);
				temp.put("p", property);

				genTriples.add(temp);

				String sbj = subject + "/" + Main.entityMap.get(subject);

				String obj = object + "/" + Main.entityMap.get(object);

				sumzList.add(new Instance(sbj, property, obj));

			}
			sumz.close();
		}

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

		JSONObject graphJSON = getGraphJSON(insList, sumzList);
		//System.out.println("graphJSON: " + graphJSON);

		String exSumzText = getSummarizedText(insList, sumzList);
		System.out.println("BEFORE KV");
		BufferedWriter bw = Files.newBufferedWriter(Paths.get("DB2XB/data/ensemble/before_KV.json"));
		JSONObject triples = new JSONObject();
		triples.put("triples", resultSet);
		JSONObject beforeKV = new JSONObject();
		beforeKV.put("PL", triples);
		bw.write(beforeKV.toJSONString());
		bw.close();

		RestCaller rc = new RestCaller();
		JSONParser parser = new JSONParser();

		if (isKV){
			String kvOut = rc.callKV();
			JSONObject kvOutObject = (JSONObject) parser.parse(kvOut);
			JSONObject PL = (JSONObject) kvOutObject.get("PL");
			resultSet = (JSONArray) PL.get("triples");
		}
		// String kvOut = rc.callKV();
		// JSONObject kvOutObject = (JSONObject) parser.parse(kvOut);
		// JSONObject PL = (JSONObject) kvOutObject.get("PL");
		// resultSet = (JSONArray) PL.get("triples");


		resultObj.put("triples", resultSet);
		resultObj.put("graph", graphJSON);
		System.out.println("AFTER KV");
		//System.out.println("entityOutput : " + entityOutput + "\n");
		
		JSONArray totalEntities = new JSONArray();
		JSONObject entityOut = (JSONObject) parser.parse(entityOutput);
		JSONObject EL = (JSONObject) entityOut.get("EL");
		JSONArray stcArr = (JSONArray) EL.get("sentence");
		Iterator<JSONObject> it = stcArr.iterator();
		while(it.hasNext()) {
			JSONObject stc = it.next();
			JSONObject ELU = (JSONObject) stc.get("ELU");
			JSONArray entities = (JSONArray) ELU.get("entities");
			
			Iterator<JSONObject> it2 = entities.iterator();
			while(it2.hasNext()) {
				JSONObject entity = it2.next();
				totalEntities.add(entity);
			}
		}
		//System.out.println("insList size");
		//System.out.println(insList.size());
		if (insList.size() <= 5) {
			genTriples = resultSet;
		}
		//System.out.println("genTri");
		//System.out.println(genTriples);
		JSONArray genTriples_out = new JSONArray();
		Iterator<JSONObject> tri_it = genTriples.iterator();
		while(tri_it.hasNext()){
			JSONObject one_triple = tri_it.next();
			String s = (String) one_triple.get("s");
			String o = (String) one_triple.get("o");
			// System.out.println(one_triple);
			Iterator<JSONObject> ent_it = totalEntities.iterator();
			while(ent_it.hasNext()){
				JSONObject one_entity = ent_it.next();
				String uri = (String) one_entity.get("uri");
				String entity_name = uri.substring(uri.lastIndexOf("/")+1);
				boolean s_flag = false;
				boolean o_flag = false;
				// System.out.println(entity_name);
				if (s.equals(entity_name)){
					s_flag = true;
				}
				if (o.equals(entity_name)){
					o_flag = true;
				}
				if (s_flag && o_flag){
					genTriples_out.add(one_triple);
					s_flag = false;
					o_flag = false;
				}
			}
		}
                //System.out.println("genTri in");
                //System.out.println(genTriples);
		
		// genTriples = genTriples_out;
                
		//System.out.println("genTri out");
                //System.out.println(genTriples);
		JSONObject genInput = new JSONObject();
		genInput.put("triples", genTriples);
		genInput.put("entities", totalEntities);
		//System.out.println("genInput : " + genInput);
		// String genOut = rc.callNLG(genInput);
		// JSONObject genOutJSON  = (JSONObject) parser.parse(genOut);
		String generatedText = new String();
		// generatedText = genOutJSON.get("generated_text").toString();

		// System.out.println("genOut: " + generatedText);
		generatedText = "";
		exSumzText = "";
		resultObj.put("ABS_NLG", generatedText);
		resultObj.put("EXT_NLG", exSumzText);

//		br2.close();
//		br4.close();
//		br5.close();
//		br8.close();
		// br9.close();
		br10.close();

		//System.out.println("return: " + resultObj.toJSONString());

		return resultObj.toJSONString();
	}

	private String getCentrailEntity(List<Instance> insList) {

		Map<String, Integer> entityCount = new HashMap<>();

		for (Instance ins : insList) {
			String sbj = ins.getSbj();
			String obj = ins.getObj();
			if (entityCount.containsKey(sbj)) {
				int count = entityCount.get(sbj);
				count++;
				entityCount.put(sbj, count);
			} else {
				entityCount.put(sbj, 1);
			}

//			if (entityCount.containsKey(obj)) {
//				int count = entityCount.get(obj);
//				count++;
//				entityCount.put(obj, count);
//			} else {
//				entityCount.put(obj, 1);
//			}

		}

		int maxCount = -1;
		String centralEntity = "";
		for (String entity : entityCount.keySet()) {
			if (entityCount.get(entity) > maxCount) {
				centralEntity = entity;
				maxCount = entityCount.get(entity);
			}
		}

		System.out.println("centralEntity: " + centralEntity);

		int idx = centralEntity.lastIndexOf("/");

		if (idx == -1) {
			return centralEntity;
		}

		return centralEntity.substring(0, idx);
	}

	private boolean isEqualInstance(Instance i1, Instance i2) {

		if (i1.getSbj().equals(i2.getSbj()) && i1.getObj().equals(i2.getObj()) && i1.getPred().equals(i2.getPred())) {
			return true;
		} else {
			return false;
		}

	}

	public String getSummarizedText(List<Instance> insList, List<Instance> sumzList) {
		String summarizedText = "";
		Set<String> plainSet = new HashSet<>();
		for (Instance sumz : sumzList) {
			for (Instance ins : insList) {
				if (isEqualInstance(ins, sumz)) {
					System.out.println("Summarized Text!!");
					String stc = ins.getStc();
					System.out.println("before:" + stc);
					stc = stc.replace(" ", "");
					stc = stc.replace("[", "");
					stc = stc.replace("]", "");
					stc = stc.replace("<<", "");
					stc = stc.replace(">>", "");
					stc = stc.replace("<e1>", "");
					stc = stc.replace("<e2>", "");
					stc = stc.replace("</e1>", "");
					stc = stc.replace("</e2>", "");
					System.out.println("after: " + stc);
					if (plainSet.contains(stc)){
						continue;	
					} else {
						summarizedText += ins.getStc() + "\n";
						plainSet.add(stc);
					}
				}
			}
		}
		summarizedText = summarizedText.replace("  [", " ");
		summarizedText = summarizedText.replace("] ", " ");
		summarizedText = summarizedText.replace(" << ", " ");
		summarizedText = summarizedText.replace(" >> ", " ");
		summarizedText = summarizedText.replace(" [", " ");
		return summarizedText;
	}

	public JSONObject getGraphJSON(List<Instance> insList, List<Instance> sumzList) {

		JSONObject result = new JSONObject();
		JSONArray nodes = new JSONArray();
		JSONArray links = new JSONArray();

		Map<String, Integer> nodeMap = new HashMap<>();
		Set<String> nodeSet = new HashSet<>();

		int id = 1;
		int linkID = 1;

		for (Instance ins : insList) {

			boolean isSumz = false;
			Instance sumzIns = null;

			for (Instance sumz : sumzList) {
				if (isEqualInstance(ins, sumz)) {

					System.out.println("This Triple is Summarized Triple!!!!!!!");
					isSumz = true;
					sumzIns = sumz;
					System.out.println(sumzIns.getSbj() + "\t" + sumzIns.getPred() + "\t" + sumzIns.getObj());
					break;
				}
			}

			JSONObject node = new JSONObject();
			JSONObject link = new JSONObject();

			String sbj = ins.getSbj();
			String prd = ins.getPred();
			String obj = ins.getObj();
			double sco = Double.parseDouble(String.format("%.2f", ins.getScore()));

			int sbjID = -1;
			int objID = -1;

			String kos = null;
			String koo = null;

			if (nodeMap.containsKey(sbj)) {
				sbjID = nodeMap.get(sbj);
			} else {
				sbjID = id;
				id++;
				nodeMap.put(sbj, sbjID);

				if (sbj.contains("/")) {
					String[] ar = sbj.split("/");
					node.put("name", (kos = ar[0]));
					System.out.println("name1" + kos);
					node.put("label", ar[1]);
				} else {
					node.put("name", (kos = sbj));
					System.out.println("name2" + kos);
					node.put("label", "");
				}
				node.put("id", sbjID);
				nodes.add(node);
			}

			node = new JSONObject();

			if (nodeMap.containsKey(obj)) {
				objID = nodeMap.get(obj);
			} else {
				objID = id;
				id++;
				nodeMap.put(obj, objID);

				if (obj.contains("/")) {
					String[] ar = obj.split("/");
					node.put("name", (koo = ar[0]));
					System.out.println("name3" + koo);
					node.put("label", ar[1]);
				} else {
					node.put("name", (koo = obj));
					System.out.println("name4" + koo);
					node.put("label", "");
				}
				node.put("id", objID);
				nodes.add(node);
			}

			if (Main.tripleMap.containsKey(kos)) {

				Set<String> poSet = Main.tripleMap.get(kos);
				for (String po : poSet) {

					node = new JSONObject();
					link = new JSONObject();

					String[] ar = po.split("\t");
					String prd1 = ar[0];
					String obj1 = ar[1];

					int obj1ID = -1;

					String obj1e = obj1 + "/" + Main.entityMap.get(obj1);
					String sbj1e = kos + "/" + Main.entityMap.get(kos);

					if (nodeMap.containsKey(obj1e)) {
						obj1ID = nodeMap.get(obj1e);
					} else {
						obj1ID = id;
						id++;
						nodeMap.put(obj1e, obj1ID);
						node.put("name", obj1);
						System.out.println("name5" + obj1);
						node.put("label", (Main.entityMap.containsKey(obj1)) ? Main.entityMap.get(obj1) : "");
						node.put("id", obj1ID);
						nodes.add(node);
					}

					link.put("type", prd1 + ":kbox");
					link.put("rel", linkID + "_" + prd1);
					link.put("source", sbjID);
					link.put("target", obj1ID);

//					if (isSumz) {
//						link.put("sumz", true);
//					} else {
					link.put("sumz", false);
//					}

//					if(sumzIns != null) {
//						
//						System.out.println("kos" + sbj1e + "\t" + sumzIns.getSbj());
//						links.add(link);
//					}
				}
			}

			if (Main.tripleMap.containsKey(koo)) {

				Set<String> poSet = Main.tripleMap.get(koo);
				for (String po : poSet) {

					node = new JSONObject();
					link = new JSONObject();

					String[] ar = po.split("\t");
					String prd1 = ar[0];
					String obj1 = ar[1];

					int obj1ID = -1;

					String obj1e = obj1 + "/" + Main.entityMap.get(obj1);
					String sbj1e = koo + "/" + Main.entityMap.get(koo);

					if (nodeMap.containsKey(obj1e)) {
						obj1ID = nodeMap.get(obj1e);
					} else {
						obj1ID = id;
						id++;
						nodeMap.put(obj1e, obj1ID);
						node.put("name", obj1);
						System.out.println("name6" + obj1);
						node.put("label", (Main.entityMap.containsKey(obj1)) ? Main.entityMap.get(obj1) : "");
						node.put("id", obj1ID);
						nodes.add(node);
					}

					link.put("type", prd1 + ":kbox");
					link.put("rel", linkID + "_" + prd1);
					link.put("source", objID);
					link.put("target", obj1ID);

//					if (isSumz) {
//						link.put("sumz", true);
//					} else {
					link.put("sumz", false);
//					}

//					if(sumzIns != null) {
//						
//						System.out.println("koo" + sbj1e + "\t" + sumzIns.getSbj());
//						System.out.println("koo" + obj1e + "\t" + sumzIns.getObj());
//						System.out.println("koo" + prd1 + "\t" + sumzIns.getPred());
//						
//						if(sumzIns.getObj().equals(obj1e) && sumzIns.getPred().equals(prd1) && sumzIns.getSbj().equals(sbj1e)) {
//							link.put("sumz", true);
//						} else { 
//							link.put("sumz", false);
//						}
//					} else {
//						link.put("sumz", false);
//					}

					linkID++;

					boolean isWritable = true;
					Iterator<JSONObject> linkIter = links.iterator();
					while (linkIter.hasNext()) {
						JSONObject linkT = linkIter.next();
						if (linkT.get("rel").equals(prd1) && linkT.get("source").equals(objID)
								&& linkT.get("target").equals(obj1ID)) {
							isWritable = false;
							break;
						}
					}

					if (isWritable) {
						links.add(link);
					}

				}
			}

			nodeSet.add(kos);
			nodeSet.add(koo);

			link = new JSONObject();

			link.put("type", prd + ":" + sco);
			link.put("rel", linkID + "_" + prd);
			link.put("source", sbjID);
			link.put("target", objID);
			if (isSumz) {
				link.put("sumz", true);
			} else {
				link.put("sumz", false);
			}

			linkID++;

			boolean isWritable = true;
			Iterator<JSONObject> linkIter = links.iterator();
			while (linkIter.hasNext()) {
				JSONObject linkT = linkIter.next();
				String linkTPrd = linkT.get("rel").toString();
				linkTPrd = linkTPrd.substring(linkTPrd.indexOf("_") + 1, linkTPrd.length());
//				System.out.println(linkTPrd);
				if (linkTPrd.equals(prd) && linkT.get("source").equals(sbjID) && linkT.get("target").equals(objID)) {
					if (isSumz) {
						linkT.put("sumz", true);
					}
					isWritable = false;
					break;
				}
			}

			if (isWritable) {
				links.add(link);
			}

		}

		result.put("nodes", nodes);
		result.put("links", links);

		return result;
	}

	public static void main(String[] ar) throws Exception {

		// ReadTriples rt = new ReadTriples();
		// String result = rt.readAll("FALSE", "");
		// System.out.println(result);

	}
}
