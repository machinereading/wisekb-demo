package edu.kaist.mrlab.preproc;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class Converter {

	public void convert(String text) {
		
//		try  {
//			JSONParser parser = new JSONParser();
//
//			// 문단 전체에 대한 ETRI API 결과 OBJ
//			String etriResultStr = (new KoreanAnalyzer()).getResult(text);
//			JSONObject etriResultObj = (JSONObject) parser.parse(etriResultStr);
//
//			// 문단 전체에 대한 KOELU API 결과 OBJ
//			String koEluResultStr = (new EntityLinker()).callKoELforWD(text);
//			JSONObject koEluResultObj = (JSONObject) parser.parse(koEluResultStr);
//
//			List<JSONObject> eluObjofSent = this.splitKoELUbySent(koEluResultObj, etriResultObj);
//
//		} catch(Exception e) {
//
//		}

    }
	
	/*
	 * 입력인자 : KOELU 문단 날린거 JSON Object, ETRI 문단 날린거 JSON Object
	 * Output : KOELU 형태의 JSON Object 문장 단위로 짜른 거 ( offset바꿔서 ) 
	 * @param koEluObj
	 * @param etriOBj
	 * @return
	 */
	
	public List<JSONObject> splitKoELUbySent(JSONArray koEluObj, JSONObject etriObj) {
		List<JSONObject> result = new ArrayList<JSONObject>();
		
		JSONArray sentAry= (JSONArray)etriObj.get("sentence");
		List<Integer> startIdx = new ArrayList<Integer>();
        List<String> sents = new ArrayList<String>();

		int idx_sum = 0;
		for (Object obj : sentAry) {
			JSONObject newObj = new JSONObject();
			newObj.put("entities", new JSONArray());
			result.add(newObj);
			
			startIdx.add(idx_sum);
			
			JSONObject jObj = (JSONObject) obj;
			String text = (String) jObj.get("text");
            sents.add(text);
			idx_sum += text.length();
		}
		startIdx.add(Integer.MAX_VALUE);
		
		JSONArray entityAry = koEluObj;
		int curr_sent_idx = 0;
		
		for (Object obj : entityAry) {
			JSONObject entity = (JSONObject) obj;
			int start_offset = ((Long)entity.get("start_offset")).intValue();
			int end_offset = ((Long)entity.get("end_offset")).intValue();
			
			// start_offset이 현재 문장의 끝보다 크면, 현재 문장 IDX +1
			while ( startIdx.get(curr_sent_idx+1) <= start_offset ) {
				curr_sent_idx += 1;
			}
            int minus_space_count = 0;
            String sent = sents.get(curr_sent_idx);
            for (int i = 0; i<sent.length(); i++) {
                if(sent.charAt(i) == ' ') {
                    minus_space_count++;
                } else {
                    break;
                }
            }
            start_offset -= startIdx.get(curr_sent_idx) + minus_space_count;
            end_offset -= startIdx.get(curr_sent_idx) + minus_space_count;
			entity.put("start_offset", start_offset);
			entity.put("end_offset", end_offset);
			
			JSONObject currObj = (JSONObject) result.get(curr_sent_idx);
			JSONArray entityList = (JSONArray)currObj.get("entities");
			entityList.add(entity);
		}
//
//		for(Object obj : result) {
//
//			System.out.println(((JSONObject)obj).toString());
//			System.out.println("");
//		}
//
		return result;
	}
	
}
