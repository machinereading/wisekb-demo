package edu.kaist.mrlab.srdf.pattern;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.StringTokenizer;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import edu.kaist.mrlab.srdf.KoSeCT;
import edu.kaist.mrlab.srdf.SRDF;
import edu.kaist.mrlab.srdf.data.Triple;
import edu.kaist.mrlab.srdf.graph.Dijkstra;
import edu.kaist.mrlab.srdf.graph.Graph;
import edu.kaist.mrlab.srdf.graph.Vertex;
import edu.kaist.mrlab.srdf.modules.Preprocessor;
import edu.kaist.mrlab.srdf.modules.SRDF2Graph;
import edu.kaist.mrlab.srdf.modules.SentenceSplitter;

public class PatternGenerator {

	public void generate() throws Exception {

		KoSeCT kosect = new KoSeCT();
		Preprocessor p = new Preprocessor();
		SentenceSplitter ss = new SentenceSplitter();
		SRDF srdf = new SRDF();

		BufferedReader br = Files.newBufferedReader(Paths.get("prepro/data/for_srdf.txt"));
		BufferedWriter bw = Files.newBufferedWriter(Paths.get("DB2XB/data/pl_out/pl3-out"));

		String input = null;
		while ((input = br.readLine()) != null) {
			if (input.length() != 0) {

				StringTokenizer st = new StringTokenizer(input, "\t");
				String subject = st.nextToken();
				String object = st.nextToken();
				st.nextToken(); // sentence
				String parsed = st.nextToken();
				String corpus = st.nextToken();
				int lineNumber = Integer.parseInt(st.nextToken());
				String sType = st.nextToken();
				String oType = st.nextToken();

				String[] title = corpus.split("/");
				String titleNumber = title[title.length - 1];

				JSONParser jp = new JSONParser();
				JSONObject parsedObject = (JSONObject) jp.parse(parsed);

				ArrayList<Triple> srdfTriples = srdf.parse(kosect, p, ss, parsedObject.toJSONString(), titleNumber,
						lineNumber);
				SRDF2Graph sg = new SRDF2Graph();
				Graph srdfGraph = sg.generateGraph(srdfTriples);

				JSONArray eluArray = (JSONArray) parsedObject.get("entities");
				Iterator<?> eluIt = eluArray.iterator();

				// String sbjText = null;
				// String objText = null;

				int sbjStartOffset = -1;
				int objStartOffset = -1;

				int sbjEndOffset = -1;
				int objEndOffset = -1;

				while (eluIt.hasNext()) {
					JSONObject eluElement = (JSONObject) eluIt.next();
					String uri = String.valueOf(eluElement.get("uri"));
					if (subject.equals(uri)) {

						// sbjText = String.valueOf(eluElement.get("text"));
						sbjStartOffset = Integer.parseInt(String.valueOf(eluElement.get("start_offset")));
						sbjEndOffset = Integer.parseInt(String.valueOf(eluElement.get("end_offset")));
						continue;

					}
					if (object.equals(uri)) {

						// objText = String.valueOf(eluElement.get("text"));
						objStartOffset = Integer.parseInt(String.valueOf(eluElement.get("start_offset")));
						objEndOffset = Integer.parseInt(String.valueOf(eluElement.get("end_offset")));
						continue;

					}

				}

				List<Vertex> verties = srdfGraph.getVertexes();
				for (Vertex vertex : verties) {

					int startOffset = vertex.getStartOffset();
					int endOffset = vertex.getEndOffset();

					if (endOffset > 0) {
						if (startOffset >= 0 && startOffset <= sbjStartOffset && endOffset >= sbjEndOffset) {
							vertex.setSubject(true);
						}

						if (startOffset >= 0 && startOffset <= objStartOffset && endOffset >= objEndOffset) {
							vertex.setObject(true);
						}

					}

				}

				Vertex sbjV = srdfGraph.getSubjectVertex();
				Vertex objV = srdfGraph.getObjectVertex();

				if (sbjV != null && objV != null) {

					if (sbjV.equals(objV)) {

//						String label = sbjV.getLabel();
//
//						int pivot = sbjV.getStartOffset();
//
//						if (sbjStartOffset < objStartOffset) {
//
//							String t1 = label.substring(0, sbjStartOffset - pivot);
//							String t2 = label.substring(sbjEndOffset - pivot, objStartOffset - pivot);
//							String t3 = label.substring(objEndOffset - pivot, label.length());
//
//							String predicate = t1 + sType + t2 + oType + t3;
//
//							predicate = predicate.replace(subject, "e1");
//							predicate = predicate.replace(object, "e2");
//
//							bw.write(subject.replace("http://ko.dbpedia.org/resource/", "") + "\t" + predicate + "\t"
//									+ object.replace("http://ko.dbpedia.org/resource/", "") + "\n");
//
//						}
//
//						if (objStartOffset < sbjStartOffset) {
//
//							String t1 = label.substring(0, objStartOffset - pivot);
//							String t2 = label.substring(objEndOffset - pivot, sbjStartOffset - pivot);
//							String t3 = label.substring(sbjEndOffset - pivot, label.length());
//
//							String predicate = t1 + t2 + t3;
//
//							predicate = predicate.replace(subject, "e1");
//							predicate = predicate.replace(object, "e2");
//							bw.write(subject.replace("http://ko.dbpedia.org/resource/", "") + "\t" + predicate + "\t"
//									+ object.replace("http://ko.dbpedia.org/resource/", "") + "\n");
//
//						}

					} else {
						Dijkstra di = new Dijkstra(srdfGraph);
						di.execute(sbjV);
						LinkedList<Vertex> path = di.getPath(objV);

						String predicate = "";

						int pivot = sbjV.getStartOffset();

						String sbjLabel = sbjV.getLabel();
						String t1 = sbjLabel.substring(0, sbjStartOffset - pivot);
						String t2 = sbjLabel.substring(sbjEndOffset - pivot, sbjLabel.length());

						sbjV.setLabel(t1 + sType + t2);

						pivot = objV.getStartOffset();
						String objLabel = objV.getLabel();
						String t3 = objLabel.substring(0, objStartOffset - pivot);
						String t4 = objLabel.substring(objEndOffset - pivot, objLabel.length());

						objV.setLabel(t3 + oType + t4);

//						for (Vertex vertex : path) {
//							predicate += vertex.getLabel() + " - ";
//						}
						
						for(int i = 1; i < path.size() - 1; i++){
							if(!path.get(i).getLabel().equals("JOSA") && !path.get(i).getLabel().equals(",") && !path.get(i).getLabel().equals("NIL")){
								predicate += path.get(i).getLabel() + "-";
							}
							
							
						}
						
//						predicate = predicate.replace(subject, "e1");
//						predicate = predicate.replace(object, "e2");
						if(!predicate.equals("이-")){
							bw.write(subject.replace("http://ko.dbpedia.org/resource/", "") + "\t"
									+ predicate.substring(0, predicate.length() - 1) + "\t"
									+ object.replace("http://ko.dbpedia.org/resource/", "") + "\n");
						}
					}
				}
			}
		}
		br.close();
		bw.close();

	}

	public static void main(String[] ar) throws Exception {

		PatternGenerator pg = new PatternGenerator();
		pg.generate();

	}
}
