package edu.kaist.mrlab.pl.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import edu.kaist.mrlab.ki.Ensemble;
import edu.kaist.mrlab.pl.script.PL1Caller;
import edu.kaist.mrlab.pl.script.PL4Caller;
import edu.kaist.mrlab.pl.script.ReadTriples;
import edu.kaist.mrlab.pl.script.ScriptRunner;

@Path("/pl-all")
public class PLPOSTService {

	private void RERun() throws Exception {
		
		PL1Caller pl1 = new PL1Caller();
		pl1.run();

		PL4Caller pl4 = new PL4Caller();
		pl4.run();

		ScriptRunner sr = new ScriptRunner();
		sr.run();
		
		Ensemble e = new Ensemble();
		e.run();
		
	}

	@POST
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	// @Produces("text/plain; charset=UTF-8")
	public Response getPost(String input) throws Exception {
		
		JSONParser parser = new JSONParser();
		JSONObject inputJSON = (JSONObject) parser.parse(input);
		String usedTag = String.valueOf(inputJSON.get("usedTag"));
		
		System.out.println(usedTag);
		
		RERun();

		ReadTriples rt = new ReadTriples();
		String result = rt.readAll(usedTag.toUpperCase());

		return Response.ok().entity(result).header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
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
