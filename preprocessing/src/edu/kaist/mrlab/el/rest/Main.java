package edu.kaist.mrlab.el.rest;

import com.sun.jersey.api.container.grizzly2.GrizzlyServerFactory;
import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.api.core.ResourceConfig;
import org.glassfish.grizzly.http.server.HttpServer;

import javax.ws.rs.core.UriBuilder;
import java.io.BufferedReader;
import java.io.IOException;
import java.net.InetAddress;
import java.net.URI;
import java.net.UnknownHostException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

public class Main {

	public static HashMap<String, String> ko_enMap = new HashMap<>();
	public static HashMap<String, String> id_titleMap = new HashMap<>();
	public static HashMap<String, ArrayList<String>> typeMap = new HashMap<>();


	public void readTypeMap() throws IOException {
		BufferedReader br = Files.newBufferedReader(Paths.get("data/type"));
		String input = null;
		while((input = br.readLine()) != null){
			StringTokenizer st = new StringTokenizer(input, "\t");
			String uri = st.nextToken();
			String type = st.nextToken();
            ArrayList<String> text;
            Set<String> items = new HashSet<String>();
            if (typeMap.get(uri) != null) {
                text = typeMap.get(uri);
                for (int i = 0; i< text.size(); i++){
                    items.add(text.get(i));
                }
                items.add(type);
                typeMap.put(uri, new ArrayList<String>(items));
            } else {
                items.add(type);
                typeMap.put(uri, new ArrayList<String>(items));
            }
        }

	}
	public void readKo_EnMap() throws Exception {

		BufferedReader br = Files.newBufferedReader(Paths.get("data/ko_en_mapping"));
		String input = null;
		while((input = br.readLine()) != null){
			StringTokenizer st = new StringTokenizer(input, "\t");
			String koe = st.nextToken();
			String ene = st.nextToken();
			ko_enMap.put(koe, ene);
		}
	}

	public void readId_TitleMap() throws Exception {

		BufferedReader br = Files.newBufferedReader(Paths.get("data/id-title-map"));
		String input = null;
		while((input = br.readLine()) != null){
			StringTokenizer st = new StringTokenizer(input, "\t");
			String id = st.nextToken();
			String title = st.nextToken();
			id_titleMap.put(title,id);
		}
	}

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
		return UriBuilder.fromUri("http://" + IP).port(2451).build();
//		return UriBuilder.fromUri("http://" + "143.248.135.20").port(2451).build();
	}

	public static final URI BASE_URI = getBaseURI();

	protected static HttpServer startServer() throws IOException {
		System.out.println("Starting grizzly...");
		ResourceConfig rc = new PackagesResourceConfig("edu.kaist.mrlab.el.rest");
		return GrizzlyServerFactory.createHttpServer(BASE_URI, rc);
	}

	public static void main(String[] args) throws Exception {
		HttpServer httpServer = startServer();
        Main m = new Main();
        m.readKo_EnMap();
        System.out.println("Ko-En Map loaded!");
        m.readId_TitleMap();
        System.out.println("Id-Title Map loaded!");
        m.readTypeMap();
        System.out.println("type Map loaded!");

		System.out.println(String.format(
				"Jersey app started with WADL available at "
						+ "%s/application.wadl\nTry out %s/preproc-el\nTry out %s/revision\nHit enter to stop it...",
				BASE_URI, BASE_URI,BASE_URI));

		while (true) {

			int a = System.in.read();
			if(a == 120)
				break;
		}

		httpServer.stop();
	}
}
