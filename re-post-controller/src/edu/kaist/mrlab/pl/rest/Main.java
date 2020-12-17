package edu.kaist.mrlab.pl.rest;

import java.io.BufferedReader;
import java.io.IOException;
import java.net.InetAddress;
import java.net.URI;
import java.net.UnknownHostException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

import javax.ws.rs.core.UriBuilder;

import org.glassfish.grizzly.http.server.HttpServer;

import com.sun.jersey.api.container.grizzly2.GrizzlyServerFactory;
import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.api.core.ResourceConfig;
import edu.kaist.mrlab.pl.script.DomainRangeChecker;


public class Main {
	
	public static HashMap<String, String> entityMap = new HashMap<>();
	public static DomainRangeChecker drc;
	public static HashMap<String, Set<String>> tripleMap = new HashMap<>();

	private static URI getBaseURI() {

		InetAddress Address;
		String IP = null;
		try {
			Address = InetAddress.getLocalHost();
			IP = Address.getHostAddress();
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return UriBuilder.fromUri("http://wisekb.kaist.ac.kr/").port(2452).build();
	}

	public static final URI BASE_URI = getBaseURI();

	protected static HttpServer startServer() throws IOException {
		System.out.println("Starting grizzly...");
		ResourceConfig rc = new PackagesResourceConfig("edu.kaist.mrlab.pl.rest");
		return GrizzlyServerFactory.createHttpServer(BASE_URI, rc);
	}
	
	public void readEntityMap() throws Exception {
		
		BufferedReader br = Files.newBufferedReader(Paths.get("prepro/data/ko_en_mapping"));
		String input = null;
		while((input = br.readLine()) != null){
			
			StringTokenizer st = new StringTokenizer(input, "\t");
			String koe = st.nextToken();
			String ene = st.nextToken();
			entityMap.put(koe, ene);
			
		}
		br = Files.newBufferedReader(Paths.get("data/init.tsv")); // init_cat.tsv
		while ((input = br.readLine()) != null) {
			
			StringTokenizer st = new StringTokenizer(input, "\t");
			String sbj = st.nextToken();
			String prd = st.nextToken();
			String obj = st.nextToken();
			String value = prd + "\t" + obj;
			if(tripleMap.containsKey(sbj)) {
				Set<String> valueSet = tripleMap.get(sbj);
				valueSet.add(value);
				tripleMap.put(sbj, valueSet);
			} else {
				Set<String> valueSet = new HashSet<>();
				valueSet.add(value);
				tripleMap.put(sbj, valueSet);
			}
		}
	}

	public static void main(String[] args) throws Exception {
		
		Main m = new Main();
		m.readEntityMap();
		drc = new DomainRangeChecker();
		System.out.println("EntityMap loaded!");
		
		HttpServer httpServer = startServer();

		System.out.println(String.format(
				"Jersey app started with WADL available at "
						+ "%sapplication.wadl\nTry out %s/pl-all\nHit enter to stop it...",
				BASE_URI, BASE_URI));

		while (true) {

			int a = System.in.read();
			if(a == 120)
				break;
		}

		httpServer.stop();
	}
}
