package edu.kaist.mrlab.preproc;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

import java.io.*;
import java.net.InetAddress;
import java.net.Socket;

public class KoreanAnalyzer {
	private Socket soc;

	// etri full call
	// input text
	// ouput etri_text
	public String getResult(String input) throws Exception {
		StringBuffer sb = new StringBuffer();

		InetAddress ia = null;

		String serverIp = Config.getKA_IP();
		try {
			ia = InetAddress.getByName(serverIp);
			soc = new Socket(ia, Config.getKA_PORT());

			OutputStream os = soc.getOutputStream();
			BufferedOutputStream bos = new BufferedOutputStream(os);

			bos.write((input).getBytes()); 
			bos.flush();
			soc.shutdownOutput();
			
			InputStream is = soc.getInputStream();
			InputStreamReader isr = new InputStreamReader(is);
			BufferedReader br = new BufferedReader(isr);

			String line = null;
			while (true) {
				line = br.readLine();
				if (line == null)
					break;
				line = line.trim();
				if (line.equals(""))
					continue;

				sb.append(line);
//				sb.append("\n");
			}
			bos.close();
			br.close();

		} catch (Exception e) {
			// e.printStackTrace();
			System.out.println(input.length());
			throw e;
		}

		return sb.toString();
	}

	public String callETRI(String inputText){

		String output = null;

		try {

			Client client = Client.create();

			WebResource webResource = client.resource("http://143.248.135.20:31235/etri_parser");

			String input = "{\"text\": \"" + inputText + "\"}";

			ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);

			if (response.getStatus() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
			}

			// System.out.println("Output from Server .... \n");
			output = response.getEntity(String.class);

		} catch (Exception e) {

			e.printStackTrace();

		}
		return output;

	}
}