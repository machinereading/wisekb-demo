package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class PL4Caller {

	public void run() throws Exception {

		RestCaller rc = new RestCaller();

		//BufferedReader br = Files.newBufferedReader(Paths.get("prepro/data/wiki_ex_PL4.txt"));
		//BufferedWriter bw = Files.newBufferedWriter(Paths.get("prepro/data/wiki_ex_PL4_wsd.txt"));

		//String input = null;
		//while ((input = br.readLine()) != null) {

			// call WSD
			//String wsdInput = "{\"text\":\"" + input + "\"}";
			//String wsdResult = rc.callWSD(wsdInput);

			//JSONParser parser = new JSONParser();
			//JSONObject reader = (JSONObject) parser.parse(wsdResult);
			//String wsdTaggedStc = reader.get("result").toString();

			//bw.write(wsdTaggedStc + "\n");

		//}
		//bw.close();
		
		
		rc.callPL4();

	}

	public static void main(String[] ar) throws Exception {

		PL4Caller pl4c = new PL4Caller();
		pl4c.run();

	}

}
