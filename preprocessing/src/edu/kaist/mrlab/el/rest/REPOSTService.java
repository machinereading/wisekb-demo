package edu.kaist.mrlab.el.rest;

import edu.kaist.mrlab.preproc.ReParser;

import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/revision")
public class REPOSTService {

	@POST
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	// @Produces("text/plain; charset=UTF-8")
	public Response getPostForRevision(String input) throws Exception {
		long startTime = System.currentTimeMillis();
//		System.out.println(input);
		ReParser rp = new ReParser();
		String output = rp.getText(input);
		String result = "{\"message\":\"revision process "+output+"\"}";
		System.out.println(result);
		long endTime = System.currentTimeMillis();
		System.out.println("time spent : " + (endTime - startTime) / 1000.0f);
		return Response.ok().entity(result)
				.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept").build();
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
