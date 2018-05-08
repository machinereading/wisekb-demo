package edu.kaist.mrlab.pl.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

@Path("/example/service")
public class PLGETService {

	@GET
	public Response getTriple(@PathParam("text") String input) throws Exception {
		
		return Response.ok().entity(input).header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
				.header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Headers", "*").build();

	}

}
