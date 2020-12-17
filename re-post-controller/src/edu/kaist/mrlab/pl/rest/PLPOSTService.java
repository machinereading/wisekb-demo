package edu.kaist.mrlab.pl.rest;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import edu.kaist.mrlab.pl.script.PL4Caller;
import edu.kaist.mrlab.pl.script.ReadTriples;
import edu.kaist.mrlab.pl.script.RestCaller;
import edu.kaist.mrlab.pl.script.ScriptRunner;

@Path("/pl-all")
public class PLPOSTService {

//	private int nThreads = 5;
        private int nThreads = 1;

	private void RERun() throws Exception {

		ExecutorService threadPoolLoad = Executors.newFixedThreadPool(this.nThreads);
		Set<Callable<Object>> callables = new HashSet<Callable<Object>>();
/*
		callables.add(new Callable<Object>() {
			public String call() throws Exception {
				PL4Caller pl4 = new PL4Caller();
				pl4.run();
				return "jCNN";
			}
		});

		callables.add(new Callable<Object>() {
			public String call() throws Exception {
				RestCaller rc = new RestCaller();
				rc.callPL8();
				return "pyCNN";
			}
		});

		callables.add(new Callable<Object>() {
			public String call() throws Exception {
				RestCaller rc = new RestCaller();
				rc.callPL9();
				return "RL";
			}
		});
*/
		callables.add(new Callable<Object>() {
			public String call() throws Exception {
				RestCaller rc = new RestCaller();
				rc.callDataSend();
				rc.callFakeNaFilter();
				//rc.callSTFL();
				rc.callPL10();
				rc.callDataReceive();
				return "BERT";
			}
		});

/*		callables.add(new Callable<Object>() {
			public String call() throws Exception {
				ScriptRunner sr = new ScriptRunner();
				sr.run();
				return "Script";
			}
		});
*/
		List<Future<Object>> futures = threadPoolLoad.invokeAll(callables);

		for (Future<Object> future : futures) {
			System.out.println("future set = " + future.get());
		}
//		Ensemble e = new Ensemble();
//		e.run();

		threadPoolLoad.shutdown();

	}

	@POST
	@Consumes("application/json; charset=UTF-8")
	@Produces("application/json; charset=UTF-8")
	// @Produces("text/plain; charset=UTF-8")
	public Response getPost(String input) throws Exception {


		// System.out.println(input);
		JSONParser parser = new JSONParser();
		JSONObject inputJSON = (JSONObject) parser.parse(input);

		boolean isKV = (boolean) inputJSON.get("KV");
		//String usedTag = String.valueOf(inputJSON.get("usedTag"));

		//System.out.println(usedTag);
		// System.out.println(isKV);

		// @FormParam("text")

		RERun();

		// GenarateInput gi = new GenarateInput();
		// gi.run();

		// PatternGenerator pg = new PatternGenerator();
		// pg.generate();

		ReadTriples rt = new ReadTriples();
		String result = rt.readAll("", input, isKV);

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
