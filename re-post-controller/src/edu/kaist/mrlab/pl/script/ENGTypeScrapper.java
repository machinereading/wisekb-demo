package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class ENGTypeScrapper {
	
	private Map<String, ArrayList<String>> enEntityTypeMap = new HashMap<>();

	public void scrapTypes() throws Exception{
		
		BufferedReader en = Files.newBufferedReader(Paths.get("data/instance_types_en.ttl"));
		
		String input = null;
		while((input = en.readLine()) != null){
			if(input.startsWith("#")){
				continue;
			}
			StringTokenizer st  = new StringTokenizer(input, " ");
			String subject = st.nextToken().replace("<http://dbpedia.org/resource/", "").replace(">", "");
			st.nextToken(); // property
			String object = st.nextToken();
			
			if(enEntityTypeMap.containsKey(subject)){
				
				ArrayList<String> tempArr = enEntityTypeMap.get(subject);
				tempArr.add(object);
				enEntityTypeMap.remove(subject);
				enEntityTypeMap.put(subject, tempArr);
				
			} else{
				
				ArrayList<String> tempArr = new ArrayList<>();
				tempArr.add(object);
				enEntityTypeMap.put(subject, tempArr);
				
			}
			
		}
		
		System.out.println("HashMap Loaded");
		
		
		BufferedReader br = Files.newBufferedReader(Paths.get("data/ko_en_mapping"));
		BufferedWriter bw = Files.newBufferedWriter(Paths.get("data/types"));
		
		int entityCount = 0;
		int typeCount = 0;
		
		while((input = br.readLine()) != null){
			entityCount++;
			StringTokenizer st  = new StringTokenizer(input, "\t");
			String koEntity = st.nextToken();
			String enEntity = st.nextToken();
			
			if(enEntityTypeMap.containsKey(enEntity)){
				typeCount++;
				ArrayList<String> tempArr = enEntityTypeMap.get(enEntity);
				for(String type : tempArr){
					bw.write("<http://ko.dbpedia.org/resource/" + koEntity + "> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> " + type + " .\n");
				}
			}
			
		}
		bw.close();
		br.close();
		
		System.out.println("EntityCount: " + entityCount);
		System.out.println("TypeCount: " + typeCount);
		
	}
	
	public static void main(String[] ar) throws Exception{
		
		ENGTypeScrapper ets = new ENGTypeScrapper();
		ets.scrapTypes();
		
	}
}
