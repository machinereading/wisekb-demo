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

    public String callNoEtriKoNewEL(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource(Config.getKoNewEL_URL());

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

    public String callKoELD(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource(Config.getKoELD_URL());

            String input = "{\"content\": \"" + inputText + "\"}";
//            System.out.println(input);
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

    public String callCR(String inputText) {

        String output = null;

        try {

            Client client = Client.create();

            WebResource webResource = client.resource(Config.getCR_URL());

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

//            String input = "{\"text\":\"" + inputText + "\"}";
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

    public String callBERT(String inputText) {

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

    public static void main(String args[]) throws Exception {
        RestCaller rc = new RestCaller();
////        rc.callBERT("");
        System.out.println(rc.callKoELD("어니스트 헤밍웨이는 미국의 소설가이자 저널리스트이다. 1854년 노벨 문학상을 수상하였다. 헤밍웨이는 1899년 7월 21일 일리노이주에서 태어났다. 헤밍웨이는 풀린 파이퍼와 이혼한 뒤 마사 겔혼과 재혼하였다. 1961년 아이다호 주에서 엽총으로 62세의 나이에 자살했다.\\n" +
                "\\n" +
                "- 1926년 《해는 또다시 떠오른다》 The Sun Also Rises.\\n" +
                "- 1929년 《무기여 잘 있거라》 A Farewell to Arms.\\n" +
                "- 1940년 《누구를 위하여 종은 울리나》For Whom the Bell Tolls.\\n" +
                "- 1950년 《강 건너 숲속으로》 Across the River and Into the Trees.\\n" +
                "- 1952년 《노인과 바다》 The Old Man and the Sea."));
//        System.out.println(rc.callKoELD("《겨울왕국 2》(영어: Frozen 2)는 2019년 공개될 예정인 미국의 애니메이션 영화이다. 크리스 벅과 제니퍼 리가 감독하고 각본은 크리스벅, 제니퍼 리, 마크 E. 스미스, 크리스틴 앤더슨로페즈, 로버트 로페즈가 맡았다. 애니메이션 감독(Animation Supervisor)은 한국인 여성 이현민이 총괄한다. 2013년 영화 《겨울왕국》의 속편에 해당한다."));
    }
}
