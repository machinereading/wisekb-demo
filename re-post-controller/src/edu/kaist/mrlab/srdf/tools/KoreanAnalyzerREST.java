package edu.kaist.mrlab.srdf.tools;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class KoreanAnalyzerREST {

	public String callETRI(String inputText) {

		String output = null;

		try {

			Client client = Client.create();

			WebResource webResource = client.resource("http://wisekb.kaist.ac.kr:31235/etri_parser");

			String input = "{\"text\": \"" + inputText + "\"}";

			ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);

			if (response.getStatus() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + response.getStatus());
			}

			// System.out.println("Output from Server .... \n");
			output = response.getEntity(String.class);
			System.out.println(output);

		} catch (Exception e) {

			e.printStackTrace();

		}
		return output;

	}

	public static void main(String[] ar) {

		KoreanAnalyzerREST karest = new KoreanAnalyzerREST();
		String etriOutput = karest.callETRI("정약용은 화성을 쌓기 위해 기기도설이란 책을 참고하였다.");
		System.out.println(etriOutput);
	}

}
