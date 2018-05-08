package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

public class SameAsTriples {

	private Path inputPath;
	@SuppressWarnings("unused")
	private ArrayList<String> fileList;
	private ArrayList<Path> filePathList;

	public void run() throws Exception {

		this.fileList = new ArrayList<>();
		this.filePathList = Files.walk(this.inputPath).filter(p -> Files.isRegularFile(p))
				.collect(Collectors.toCollection(ArrayList::new));

		BufferedWriter bw = Files.newBufferedWriter(Paths.get("data/ko_en_mapping"));

		while ((inputPath = SameAsTriples.this.extractInputPath()) != null) {
			BufferedReader br = Files.newBufferedReader(inputPath);

			System.out.println(inputPath);

			String input = null;
			while ((input = br.readLine()) != null) {
				
				if(input.startsWith("#")){
					continue;
				}

				StringTokenizer st = new StringTokenizer(input, " ");
				String subject = st.nextToken();
				String property = st.nextToken();
				String object = st.nextToken();

				if (property.contains("sameAs")) {
					if (object.startsWith("<http://dbpedia.org")) {
						subject = subject.replace("<http://ko.dbpedia.org/resource/", "");
						subject = subject.replace(">", "");
						object = object.replace("<http://dbpedia.org/resource/", "");
						object = object.replace(">", "");
						
						bw.write(subject + "\t" + object + "\n");
						System.out.println(subject + "\t" + object + "\n");
					}
				}

			}
			br.close();
		}
		bw.close();
	}

	private synchronized Path extractInputPath() {
		if (this.filePathList.isEmpty()) {
			return null;
		} else {
			return this.filePathList.remove(this.filePathList.size() - 1);
		}

	}

	public SameAsTriples setInputPath(Path inputPath) {
		this.inputPath = inputPath;
		return this;
	}

	public static void main(String[] ar) throws Exception {

		SameAsTriples sat = new SameAsTriples();
		sat.setInputPath(Paths.get("data/ko2016-10")).run();

	}
}
