package edu.kaist.mrlab.el.rest;

import com.sun.jersey.api.container.grizzly2.GrizzlyServerFactory;
import com.sun.jersey.api.core.PackagesResourceConfig;
import com.sun.jersey.api.core.ResourceConfig;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.grizzly.http.server.NetworkListener;
import org.glassfish.grizzly.threadpool.GrizzlyExecutorService;
import org.glassfish.grizzly.threadpool.ThreadPoolConfig;

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

	public static int doc_id;
	public static int par_id;
	public static int sen_id;
	public static int sen_max_id;
	public static HashSet<String> humanAnnotatorSet = new HashSet<>();
	public static HashMap<String, ArrayList<String>> DET_Map = new HashMap<>();
	public static HashMap<String, String> sen_idMap = new HashMap<>();
	public static HashMap<String, String> entity_max_idMap = new HashMap<>();
	public static HashMap<ArrayList<String>, ArrayList<String>> entity_idMap = new HashMap<>();
	public static HashMap<String, String> ko_enMap = new HashMap<>();
	public static HashMap<String, String> id_titleMap = new HashMap<>();
	public static HashMap<String, ArrayList<String>> typeMap = new HashMap<>();
	public static HashMap<String, ArrayList<String>> ner_dbo_Map = new HashMap<>();


	public void readNER_DBO_Map() throws IOException {
		BufferedReader br = Files.newBufferedReader(Paths.get("NET-DBOT-Mapping-table"));
		String input = null;
		while ((input = br.readLine()) != null){
			StringTokenizer st = new StringTokenizer(input, "\t");
			String net = st.nextToken();
			String dbot = st.nextToken();
			String scr = st.nextToken();
//			ArrayList<String> types = null;
			String types = null;
			if (ner_dbo_Map.get(net) != null){
				ArrayList<String> temp = ner_dbo_Map.get(net);
				String tmp_type = temp.get(0);
				float tmp_scr = Float.parseFloat(temp.get(1));
				tmp_type = tmp_type + ',' + dbot;
				StringTokenizer s = new StringTokenizer(tmp_type, ",");
				int count = s.countTokens();
				tmp_scr = (tmp_scr * (count + 1)+ Float.parseFloat(scr)) / (count);
				ArrayList<String> item = new ArrayList<>();
				String str_tmp_scr = String.valueOf(tmp_scr);
				item.add(tmp_type);
				item.add(str_tmp_scr);
				ner_dbo_Map.put(net,item);
			}else {
//				types.add(dbot);
				ArrayList<String> temp = new ArrayList<>();
				temp.add(dbot);
				temp.add(scr);
				ner_dbo_Map.put(net,temp);
			}
		}
	}
	public void readTypeMap() throws IOException {
		BufferedReader br = Files.newBufferedReader(Paths.get("type"));
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

		BufferedReader br = Files.newBufferedReader(Paths.get("ko_en_mapping"));
		String input = null;
		while((input = br.readLine()) != null){

			StringTokenizer st = new StringTokenizer(input, "\t");
			String koe = st.nextToken();
			String ene = st.nextToken();
			ko_enMap.put(koe, ene);
		}
	}
	public void readId_TitleMap() throws Exception {

//		BufferedReader br = Files.newBufferedReader(Paths.get("id-title-map.txt"));
		BufferedReader br = Files.newBufferedReader(Paths.get("entity_set"));
		String input = null;
		while((input = br.readLine()) != null){

			StringTokenizer st = new StringTokenizer(input, "\t");
//			String id = st.nextToken();
			String title = st.nextToken();
			id_titleMap.put(title,"");
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
//		return UriBuilder.fromUri("http://" + IP).port(2451).build();
		return UriBuilder.fromUri("http://" + "143.248.135.20").port(2451).build();
//		return UriBuilder.fromUri("http://" + "143.248.135.146").port(2451).build();
	}

	public static final URI BASE_URI = getBaseURI();

	protected static HttpServer startServer() throws IOException {
		System.out.println("Starting grizzly...");
		ResourceConfig rc = new PackagesResourceConfig("edu.kaist.mrlab.el.rest");
		return GrizzlyServerFactory.createHttpServer(BASE_URI, rc);
	}

	public static void main(String[] args) throws Exception {
		HttpServer httpServer = startServer();
        ThreadPoolConfig config =  ThreadPoolConfig.defaultConfig().
                setQueueLimit(-1).
                setPoolName("mypool").
                setCorePoolSize(5).
                setMaxPoolSize(1);
        NetworkListener listener = httpServer.getListeners().iterator().next();
        GrizzlyExecutorService threadPool = (GrizzlyExecutorService) listener.getTransport().getWorkerThreadPool();
        threadPool.reconfigure(config);
        Main m = new Main();
        m.readKo_EnMap();
        System.out.println("Ko-En Map loaded!");
        m.readId_TitleMap();
        System.out.println("Id-Title Map loaded!");
        m.readTypeMap();
        System.out.println("type Map loaded!");
		m.readNER_DBO_Map();
		System.out.println("NER-DBO type Map loaded!");

		System.out.println(String.format(
				"Jersey app started with WADL available at "
						+ "%s/application.wadl\n" +
						"Try out %s/preproc-el\n" +
						"Try out %s/preprocessor-iterative\n" +
						"Try out %s/revision\n" +
						"Try out %s/open-api\n" +
						"Hit enter to stop it...",
				BASE_URI, BASE_URI,BASE_URI,BASE_URI,BASE_URI));

		while (true) {

			int a = System.in.read();
			if(a == 120)
				break;
		}

		httpServer.stop();
	}
}
