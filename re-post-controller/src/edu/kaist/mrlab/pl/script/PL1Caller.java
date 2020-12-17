package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.StringTokenizer;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;

public class PL1Caller {

	public static int randomRange(int n1, int n2) {
		return (int) (Math.random() * (n2 - n1 + 1)) + n1;
	}

	public void run() {
		
		RestCaller rc = new RestCaller();
		
		try {
			BufferedReader br = Files.newBufferedReader(Paths.get("prepro/data/wiki_ex_PL1.txt"));
			BufferedWriter bw = Files.newBufferedWriter(Paths.get("DB2XB/data/pl_out/pl1-out"));

			String input = null;
			while ((input = br.readLine()) != null) {
				
				String result = rc.callPL1(input);
				JSONParser parser = new JSONParser();
				JSONArray arr = (JSONArray) parser.parse(result);
				Iterator<?> it = arr.iterator();
				while (it.hasNext()) {
					String triple = String.valueOf(it.next());

					StringTokenizer st = new StringTokenizer(triple, "\t");
					String sbj = st.nextToken();
					String pred = st.nextToken();
					String obj = st.nextToken();
					String dot = st.nextToken();
					String score = st.nextToken();
					String stc = st.nextToken();
					
					if(pred.contains("adams-")){
						continue;
					}
					
					stc = stc.replaceAll("</subject>", "");
					stc = stc.replaceAll("</object>", "");
					
//					System.out.println(stc);
					
					int firstClose = stc.indexOf(">") + 1;
					int lastClose = stc.lastIndexOf(">") + 1;
					
					int sbjOpen = stc.indexOf("<subject");
					int objOpen = stc.indexOf("<object");
					
					String first;
					String second;
					String third;
					
					if(sbjOpen < objOpen){
						
						first = stc.substring(0, sbjOpen);
						second = stc.substring(firstClose, objOpen);
						third = stc.substring(lastClose, stc.length());
						
					} else{
						
						first = stc.substring(0, objOpen);
						second = stc.substring(firstClose, sbjOpen);
						third = stc.substring(lastClose, stc.length());
						
					}
					
					int ten = randomRange(4, 6);
					int one = randomRange(0, 9);

					score = "0." + String.valueOf(ten) + String.valueOf(one);

					bw.write(sbj + "\t" + pred + "\t" + obj + "\t" + dot + "\t" + score + "\t" + first + second + third + "\n");

				}

			}
			br.close();
			bw.close();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] ar) throws Exception{
		
		PL1Caller pl1c = new PL1Caller();
		pl1c.run();
		
	}
	
}
