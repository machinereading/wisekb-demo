package edu.kaist.mrlab.pl.script;

import javax.ws.rs.core.MediaType;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class RestCaller {
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
