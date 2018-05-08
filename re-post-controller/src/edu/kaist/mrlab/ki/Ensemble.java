package edu.kaist.mrlab.ki;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

import edu.kaist.mrlab.pl.data.Instance;
import edu.kaist.mrlab.pl.script.DomainRangeChecker;

public class Ensemble {

	Map<String, String> stcMap = new HashMap<>();

	Set<String> allIns = new HashSet<>();

	Map<String, Set<Relation>> relB2KMap = new HashMap<>();
	Map<String, Set<Relation>> relCNNMap = new HashMap<>();

	private static final double cnnW = 0.5;
	private static final double b2kW = 0.5;
	private static final int topN = 5;
	private static final double threshold = 0.75;

	public void loadInstances(Path cnnInputPath, Path b2kInputPath) throws Exception {

		BufferedReader b2k = Files.newBufferedReader(b2kInputPath);
		BufferedReader cnn = Files.newBufferedReader(cnnInputPath);

		String input = null;
		while ((input = b2k.readLine()) != null) {
			StringTokenizer st = new StringTokenizer(input, "\t");
			if (st.countTokens() != 5) {
				continue;
			}
			String sbj = st.nextToken();
			String prd = st.nextToken();
			String obj = st.nextToken();
			st.nextToken(); // dot
			String scr = st.nextToken();
			String stc = st.nextToken();
			String origStc = stc;

			stc = stc.replace("]", "");
			stc = stc.replace("[", "");
			stc = stc.replace(" ", "");

			String ins = sbj + "\t" + obj + "\t" + stc;
			stcMap.put(stc, origStc);
			Relation rel = new Relation(prd, scr);

			Set<Relation> relSet;
			if (relB2KMap.containsKey(ins)) {
				relSet = relB2KMap.get(ins);
			} else {
				relSet = new HashSet<>();
			}
			relSet.add(rel);
			relB2KMap.put(ins, relSet);

			allIns.add(ins);

		}

		while ((input = cnn.readLine()) != null) {
			StringTokenizer st = new StringTokenizer(input, "\t");
			if (st.countTokens() != 6) {
				continue;
			}
			String sbj = st.nextToken();
			String prd = st.nextToken();
			String obj = st.nextToken();
			st.nextToken(); // dot
			String scr = st.nextToken();
			String stc = st.nextToken();
			String origStc = stc;

			stc = stc.replace(" << ", "");
			stc = stc.replace(" >> ", "");
			stc = stc.replace(" ", "");

			String ins = sbj + "\t" + obj + "\t" + stc;
			stcMap.put(stc, origStc);
			Relation rel = new Relation(prd, scr);

			Set<Relation> relSet;
			if (relCNNMap.containsKey(ins)) {
				relSet = relCNNMap.get(ins);
			} else {
				relSet = new HashSet<>();
			}
			relSet.add(rel);
			relCNNMap.put(ins, relSet);

			allIns.add(ins);

		}

		b2k.close();
		cnn.close();
	}

	public void showTopN(int N) {
		Iterator<String> it = allIns.iterator();
		while (it.hasNext()) {
			String ins = it.next();

			Set<Relation> b2kRelSet = relB2KMap.get(ins);
			Set<Relation> cnnRelSet = relCNNMap.get(ins);

			if (b2kRelSet == null || cnnRelSet == null) {
				continue;
			}

			StringTokenizer st = new StringTokenizer(ins, "\t");
			String sbj = st.nextToken();
			String obj = st.nextToken();
			String stc = st.nextToken();
			List<Relation> b2kRel = new ArrayList<>(b2kRelSet);
			List<Relation> cnnRel = new ArrayList<>(cnnRelSet);

			RelationComparator rc = new RelationComparator();
			Collections.sort(b2kRel, rc);
			Collections.sort(cnnRel, rc);

			System.out.println(sbj + "\t" + obj + "\t" + stcMap.get(stc));
			System.out.println("===== CNN out =====");
			for (int i = 0; i < N; i++) {
				System.out.println(cnnRel.get(i).getRelation() + "\t" + cnnRel.get(i).getScore());
			}
			System.out.println("===== B2K out =====");
			for (int i = 0; i < N; i++) {
				System.out.println(b2kRel.get(i).getRelation() + "\t" + b2kRel.get(i).getScore());
			}
			System.out.println("=====\n\n");
		}
	}

	public List<Instance> getBestScoredTriple(int topN, double threshold) {
		List<Instance> insList = new ArrayList<Instance>();
		Iterator<String> it = allIns.iterator();
		while (it.hasNext()) {
			String ins = it.next();

			Set<Relation> b2kRelSet = relB2KMap.get(ins);
			Set<Relation> cnnRelSet = relCNNMap.get(ins);

			if (b2kRelSet == null || cnnRelSet == null) {
				continue;
			}

			StringTokenizer st = new StringTokenizer(ins, "\t");
			String sbj = st.nextToken();
			String obj = st.nextToken();
			String stc = st.nextToken();
			List<Relation> b2kRel = new ArrayList<>(b2kRelSet);
			List<Relation> cnnRel = new ArrayList<>(cnnRelSet);

			RelationComparator rc = new RelationComparator();
			Collections.sort(b2kRel, rc);
			Collections.sort(cnnRel, rc);

			List<Relation> comRel = new ArrayList<>();

			double comS = Double.NaN;
			for (int i = 0; i < topN; i++) {
				Relation comR;
				Relation cnnR = cnnRel.get(i);

				for (int j = 0; j < topN; j++) {

					Relation b2kR = b2kRel.get(j);
					if (cnnR.getRelation().equals(b2kR.getRelation())) {
						comS = Double.parseDouble(cnnR.getScore()) * cnnW + Double.parseDouble(b2kR.getScore()) * b2kW;
						comR = new Relation(cnnR.getRelation(), "" + comS);
						comRel.add(comR);
					}

				}

			}

			for (Relation r : comRel) {
				double score = Double.parseDouble(r.getScore());
				if (score >= threshold) {
					// System.out.println(
					// sbj + "\t" + r.getRelation() + "\t" + obj + "\t.\t" + score + "\t" +
					// stcMap.get(stc));
					insList.add(new Instance(sbj, r.getRelation(), obj, "" + score, "common", stcMap.get(stc)));
				}
			}

			comRel.clear();
			relB2KMap.clear();
			relCNNMap.clear();

		}

		return insList;
	}

	private static Path CNNInputPath = Paths.get("DB2XB/data/pl_out/pl4-out");
	private static Path B2KInputPath = Paths.get("DB2XB/data/pl_out/pl5-out");
	
	public void run() throws Exception {
		BufferedWriter bw = Files.newBufferedWriter(Paths.get("data/belifes.tsv"));

		Ensemble m = new Ensemble();
		DomainRangeChecker drc = new DomainRangeChecker();

		m.loadInstances(CNNInputPath, B2KInputPath);
		// m.showTopN(5);
		List<Instance> commIns = m.getBestScoredTriple(topN, threshold);
		commIns = drc.filter(commIns);

		for (Instance i : commIns) {
			bw.write(i.getSbj() + "\t" + i.getPred() + "\t" + i.getObj() + "\t" + i.getScore() + "\t" + i.getStc()
					+ "\n");
		}

		bw.close();
	}

	public static void main(String[] ar) throws Exception {

		Ensemble e = new Ensemble();
		e.run();

	}
}
