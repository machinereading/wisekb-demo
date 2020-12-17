package edu.kaist.mrlab.el.rest;

import edu.kaist.mrlab.preproc.DemoPreprocessor;

import javax.ws.rs.*;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.Response;
import java.text.SimpleDateFormat;
import java.util.Date;


@Path("/open-api")
public class OPENPOSTService {
    @POST
    @Consumes("application/json; charset=UTF-8")
    @Produces("application/json; charset=UTF-8")
    // @Produces("text/plain; charset=UTF-8")
    public Response getPostForOPEN(String input) throws Exception {
//		System.out.println(request.getRemoteAddr());
        long startTime = System.currentTimeMillis();
        System.out.println(input);
        DemoPreprocessor dp = new DemoPreprocessor();
        String result;
        System.out.println("EL ing...");
        String result_el = dp.getText(input);
        try {
            Thread.sleep(5000); // 5
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("PL ing...");
        String result_el_pl = dp.getTriple(result_el,input);
        System.out.println("JSON ing...");
        String result_api = dp.getApi(result_el_pl);
//		result = result_el_pl;
        result = result_api;
//		System.out.println(result);
        long endTime = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        System.out.println("complete time : " + dayTime.format(new Date(endTime)));
        System.out.println("time spent : " + (endTime - startTime) / 1000.0f);
        System.out.println("DONE");

        return Response.ok().entity(result)
                .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept").build();

    }

    private static final String[] IP_HEADER_CANDIDATES = {
            "X-Forwarded-For",
            "Proxy-Client-IP",
            "WL-Proxy-Client-IP",
            "HTTP_X_FORWARDED_FOR",
            "HTTP_X_FORWARDED",
            "HTTP_X_CLUSTER_CLIENT_IP",
            "HTTP_CLIENT_IP",
            "HTTP_FORWARDED_FOR",
            "HTTP_FORWARDED",
            "HTTP_VIA",
            "REMOTE_ADDR"};

    @POST
    public void getAddr(Request request) {
        request.getMethod();
        System.out.println("olo");
    }

    @OPTIONS
    @Consumes("application/x-www-form-urlencoded; charset=utf-8")
    @Produces("text/plain; charset=utf-8")
    public Response getOptions(@FormParam("text") String input) throws Exception {

        return Response.ok().header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept").build();

    }

}
