package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.nio.file.Files;
import java.nio.file.Paths;

import javax.ws.rs.core.MediaType;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class RestCaller {

	public String callKV() throws Exception {

		StringBuilder str = new StringBuilder();

		File f = new File("DB2XB/data/ensemble/before_KV.json");
		char[] c = new char[(int) f.length()];

		BufferedReader br = new BufferedReader(new FileReader(f));
		br.read(c);
		str.append(c);

		String output = null;

                // System.out.println("*** start KV ***");
		// System.out.println(str);
		
		Client client = Client.create();
		WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:2848/validate");
		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, str.toString().trim());

		if (response.getStatus() == 500) {
			return "ERROR_500";
		}

		if (response.getStatus() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
		}

		// System.out.println("Output from Server .... \n");
		output = response.getEntity(String.class);
		// System.out.println("*** end KV ***");
		// System.out.println(output);
		br.close();
		return output;

	}

	public String callPL1(String inputText) {

		String output = null;

		Client client = Client.create();
		WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:4444/extract");
		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, inputText);

		if (response.getStatus() == 500) {
			return "ERROR_500";
		}

		if (response.getStatus() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
		}

		// System.out.println("Output from Server .... \n");
		output = response.getEntity(String.class);
		// System.out.println(output);

		return output;

	}

	public String callPL4() {

		String output = null;

		Client client = Client.create();
		WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:30002/re-pcnn");
		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, "");

		if (response.getStatus() == 500) {
			return "ERROR_500";
		}

		if (response.getStatus() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
		}

		// System.out.println("Output from Server .... \n");
		output = response.getEntity(String.class);
		// System.out.println(output);

		return output;

	}

	public String callPL8() throws Exception {

		StringBuilder str = new StringBuilder();

		File f = new File("prepro/data/wiki_ex_PL8.txt");
		char[] c = new char[(int) f.length()];

		BufferedReader br = new BufferedReader(new FileReader(f));
		br.read(c);
		str.append(c);

		String output = null;

		Client client = Client.create();
		WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:1325");

		JSONObject inputJSON = new JSONObject();
		inputJSON.put("text", str.toString().trim());
		// System.out.println(inputJSON);

		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class,
				inputJSON.toString());

		if (response.getStatus() == 500) {
			return "ERROR_500";
		}

		if (response.getStatus() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
		}

		// System.out.println("Output from Server .... \n");
		output = response.getEntity(String.class);
		// System.out.println(unicodeConvert(output));

		BufferedWriter bw = Files.newBufferedWriter(Paths.get("DB2XB/data/pl_out/pl8-out"));
		JSONParser parser = new JSONParser();
		JSONObject result = (JSONObject) parser.parse(unicodeConvert(output));
		String triples = result.get("result").toString();
		bw.write(triples);
//		StringTokenizer st = new StringTokenizer(triples, "\n");
//		while(st.hasMoreTokens()) {
//			String triple = st.nextToken();
//			bw.write(triple + "\n");
//		}
		br.close();
		bw.close();
		f = null;
		return output.toString();
	}

	public String callPL9() throws Exception {

		StringBuilder str = new StringBuilder();

		File f = new File("prepro/data/wiki_ex_PL8.txt");
		char[] c = new char[(int) f.length()];

		BufferedReader br = new BufferedReader(new FileReader(f));
		br.read(c);
		str.append(c);

		String output = null;

		Client client = Client.create();
		WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:1326");

		JSONObject inputJSON = new JSONObject();
		inputJSON.put("text", str.toString().trim());
		// System.out.println(inputJSON);

		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class,
				inputJSON.toString());

		if (response.getStatus() == 500) {
			return "ERROR_500";
		}

		if (response.getStatus() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
		}

		// System.out.println("Output from Server .... \n");
		output = response.getEntity(String.class);
		// System.out.println(unicodeConvert(output));

		BufferedWriter bw = Files.newBufferedWriter(Paths.get("DB2XB/data/pl_out/pl9-out"));
		JSONParser parser = new JSONParser();
		JSONObject result = (JSONObject) parser.parse(unicodeConvert(output));
		String triples = result.get("result").toString();
		bw.write(triples);
//              StringTokenizer st = new StringTokenizer(triples, "\n");
//              while(st.hasMoreTokens()) {
//                      String triple = st.nextToken();
//                      bw.write(triple + "\n");
//              }
		br.close();
		bw.close();
		f = null;
		return output.toString();
	}
	
	public String callPL10() {

		String output = null;

		Client client = Client.create();
		// WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:55544/bert");
		WebResource webResource = client.resource("http://143.248.135.188:55544/bert");
		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, "");

		if (response.getStatus() == 500) {
			return "ERROR_500";
		}
		
		if (response.getStatus() == 308) {
			return "308";
		}

		if (response.getStatus() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
		}

		// System.out.println("Output from Server .... \n");
		output = response.getEntity(String.class);
		// System.out.println(output);

		return output;

	}

	public String callSTFL() {

		String output = null;

		Client client = Client.create();
		//WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:55533/stfl");
		WebResource webResource = client.resource("http://143.248.135.188:55533/stfl");
		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, "");

		if (response.getStatus() == 500) {
				return "ERROR_500";
		}

		if (response.getStatus() == 308) {
				return "308";
		}

		if (response.getStatus() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
		}

		// System.out.println("Output from Server .... \n");
		output = response.getEntity(String.class);
		// System.out.println(output);

		return output;

	}

	public String callDataSend() {

			String output = null;

			Client client = Client.create();
			WebResource webResource = client.resource("http://143.248.135.188:5000/data_prepro");
			ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, "");

			if (response.getStatus() == 500) {
					return "ERROR_500";
			}

			if (response.getStatus() == 308) {
					return "308";
			}

			if (response.getStatus() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
			}

			// System.out.println("Output from Server .... \n");
			output = response.getEntity(String.class);
			// System.out.println(output);

			return output;

	}

	public String callFakeNaFilter() {

                        String output = null;

                        Client client = Client.create();
                        WebResource webResource = client.resource("http://143.248.135.188:5000/fake_na_filter");
                        ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, "");

                        if (response.getStatus() == 500) {
                                        return "ERROR_500";
                        }

                        if (response.getStatus() == 308) {
                                        return "308";
                        }

                        if (response.getStatus() != 200) {
                                        throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
                        }

                        // System.out.println("Output from Server .... \n");
                        output = response.getEntity(String.class);
                        // System.out.println(output);

                        return output;

        }

	public String callDataReceive() {

			String output = null;

			Client client = Client.create();
			WebResource webResource = client.resource("http://143.248.135.188:5000/data_pl-out");
			ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, "");

			if (response.getStatus() == 500) {
					return "ERROR_500";
			}

			if (response.getStatus() == 308) {
					return "308";
			}

			if (response.getStatus() != 200) {
					throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
			}

			// System.out.println("Output from Server .... \n");
			output = response.getEntity(String.class);
			// System.out.println(output);

			return output;

	}	

	public String callNLG(JSONObject inputJSON) {

                String output = null;

                Client client = Client.create();
//                WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:4886/generation");
                WebResource webResource = client.resource("http://143.248.135.188:4000/generation");
		
//                System.out.println(inputJSON);

                ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class,
                                inputJSON.toString().trim());
		
                if (response.getStatus() == 500) {
                        return "ERROR_500";
                }

                if (response.getStatus() == 308) {
                        return "308";
                }

                if (response.getStatus() != 200) {
                        throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
                }

		output = response.getEntity(String.class);
//                System.out.println(unicodeConvert(output));

                return output.toString();

        }

	public static String unicodeConvert(String str) {
		StringBuilder sb = new StringBuilder();
		char ch;
		int len = str.length();
		for (int i = 0; i < len; i++) {
			ch = str.charAt(i);
			if (ch == '\\' && str.charAt(i + 1) == 'u') {
				sb.append((char) Integer.parseInt(str.substring(i + 2, i + 6), 16));
				i += 5;
				continue;
			}
			sb.append(ch);
		}
		return sb.toString();
	}

	public String callWSD(String inputText) {

		String output = null;

		Client client = Client.create();
		WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:23000/disambiguate_re");
		ClientResponse response = webResource.type(MediaType.APPLICATION_JSON).post(ClientResponse.class, inputText);

		if (response.getStatus() == 500) {
			return "ERROR_500";
		}

		if (response.getStatus() != 200) {
			throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
		}

		// System.out.println("Output from Server .... \n");
		output = response.getEntity(String.class);
		// System.out.println(output);

		return output;

	}

}
