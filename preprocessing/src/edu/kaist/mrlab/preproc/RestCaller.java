package edu.kaist.mrlab.preproc;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class RestCaller {

    public String callXBEL(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource("http://143.248.135.60:1359/entity_linking");

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

    public String callKoEL(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource("http://143.248.135.60:2229/entity_linking");

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

    public String callKoELforWD(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource("http://143.248.135.60:2229/entity_full");

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

    public String callWSD(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource("http://143.248.135.20:24000/disambiguate_re");

            String input = inputText;

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

    public String callNoEtriKoEL(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource(Config.getKoEL_URL());

            String input = inputText;

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

    public String callPL(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource(Config.getPL_URL());

            String input = "{\"text\":\"" + inputText + "\"}";

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
