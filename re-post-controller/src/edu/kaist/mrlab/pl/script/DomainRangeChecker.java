package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.StringTokenizer;

import edu.kaist.mrlab.pl.data.Instance;
import edu.kaist.mrlab.pl.data.PropertyDR;

public class DomainRangeChecker {

	public DomainRangeChecker() throws Exception {
		loadEntityType();
		loadPropertyDomainRange();
	}

	private Map<String, Set<String>> entityType = new HashMap<>();
	private Map<String, PropertyDR> propertySet = new HashMap<>();
	private Map<String, String> relationMap = new HashMap<>();

	public void loadRelationTable() throws Exception {
		BufferedReader br = Files.newBufferedReader(Paths.get("data/relation_table.txt"));
		String input = null;
		while ((input = br.readLine()) != null) {
			StringTokenizer st = new StringTokenizer(input, "\t");
			String sub = st.nextToken();
			String sup = st.nextToken();
			relationMap.put(sub, sup);
                }
        }

	public void loadEntityType() throws Exception {
		BufferedReader br = Files.newBufferedReader(Paths.get("data/entity_type_kbox"));
		String input = null;
		while ((input = br.readLine()) != null) {
			StringTokenizer st = new StringTokenizer(input, "\t");
			String entity = st.nextToken();
			String eType = st.nextToken();
			if (entityType.containsKey(entity)) {
				Set<String> eTypeSet = entityType.get(entity);
				eTypeSet.add(eType);
				entityType.remove(entity);
				entityType.put(entity, eTypeSet);
			} else {
				HashSet<String> eTypeSet = new HashSet<>();
				eTypeSet.add(eType);
				entityType.put(entity, eTypeSet);
			}
		}
	}

	public void loadPropertyDomainRange() throws Exception {
		BufferedReader br = Files.newBufferedReader(Paths.get("data/all_property_domain_range"));
		String input = null;
		while ((input = br.readLine()) != null) {
			StringTokenizer st = new StringTokenizer(input, "\t");
			String property = st.nextToken();
			String domain = st.nextToken();
			String range = st.nextToken();

			PropertyDR p = new PropertyDR(property);
			p.setDomain(domain);
			p.setRange(range);
			propertySet.put(property, p);
		}
	}

	public List<Instance> filter(List<Instance> insList) throws Exception {
		
		List<Instance> results = new ArrayList<Instance>();

		for (Instance instance : insList) {
			String sbj = instance.getSbj();
			String pred = instance.getPred();
			String obj = instance.getObj();
			String module = instance.getModule();
			double score = instance.getScore();
			String stc = instance.getStc();

			if (relationMap.containsKey(pred)) {
				pred = relationMap.get(pred);
			}
			
			System.out.println("orig : " + sbj + "\t" + pred + "\t" + obj);
			
			int sbjIdx = sbj.indexOf("/");
			int objIdx = obj.indexOf("/");
			
			String sbjStr = sbj;
			String objStr = obj;
			
			if(sbjIdx > 0) {
				sbjStr = sbj.substring(0, sbjIdx);
			}
			if(objIdx > 0) {
				objStr = obj.substring(0, objIdx);
			}
			
			System.out.println("repla : " + sbjStr + "\t" + pred + "\t" + objStr);

			Set<String> sbjType = entityType.get(sbjStr);
			Set<String> objType = entityType.get(objStr);

			System.out.println(pred);
			
			if(!propertySet.containsKey(pred)) {
				continue;
			}

			PropertyDR property = propertySet.get(pred);
			String domain = property.getDomain();
			String range = property.getRange();

			// if(score > 0.6) {
			// System.out.println(sbj + "\t" + pred + "\t" + obj + "\t" + dot + "\t" + score
			// + "\t" + stc);
			// }

			// sbjType == null || domain == null ||
			// objType == null || range == null ||
			
			System.out.println("d : " + domain);
			System.out.println("r : " + range);
			System.out.println("S : " + sbjType);
			System.out.println("O : " + objType);

			boolean isPassable = true;

			//if (!domain.equals("null") && (sbjType != null && !sbjType.contains(domain))) {
			//	isPassable = false;
			//}

			//if (!range.equals("null") && (objType != null && !objType.contains(range))) {
			//	isPassable = false;
			//}

			if (isPassable) {

				//if (sbjType == null) {
				//	score = score * 0.8;
				//}

				//if (objType == null) {
				//	score = score * 0.8;
				//}

				//if (domain.equals("null")) {
				//	score = score * 0.8;
				//}

				//if (range.equals("null")) {
				//	score = score * 0.8;
				//}
					
				if(score < 0.6) {
					continue;
				}
				
				results.add(new Instance(sbj, pred, obj, String.valueOf(score), module, stc));
				
			}

		}
		return results;
	}

}
