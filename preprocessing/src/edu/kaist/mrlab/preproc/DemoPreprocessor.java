package edu.kaist.mrlab.preproc;

import edu.kaist.mrlab.el.rest.Main;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.opencsv.CSVWriter;
import java.util.*;
import java.io.*;

/**
 * Created by Yoosung on 2017-06-15.
 */
public class DemoPreprocessor {
    private int nThreads = 1;

    public Main m = new Main();
    public JSONParser jParser = new JSONParser();
    public TextParser tp = new TextParser();
    public KoreanAnalyzer ka = new KoreanAnalyzer();
    public RestCaller rc = new RestCaller();
    public Converter converter = new Converter();
    public DirectPL dPL = new DirectPL();

    public String getJsonText(String input_js) throws ParseException {
        String output = new String();
        Object stObj = jParser.parse(input_js);
        JSONObject jsObj = (JSONObject) stObj;
        String input = (String) jsObj.get("text");
        return output;
    }

    public String getText(String input_js) throws Exception {
        String filename = Config.getFilename();
        String filepath = Config.getFilepath();
        boolean usingFSL2K = Config.getFSConfig("L2K");
        boolean usingFSCNN = Config.getFSConfig("CNN");
        boolean hasTitle = false;

        BufferedWriter bw1 = null;
        BufferedWriter bw4 = null;
        BufferedWriter bw5 = null;
        BufferedWriter bw8 = null;

        String title = new String();
        String title_uri = new String();
        String result = "";
        String result_EL = "";
        String result_PL = "";
        try {
            Object stObj = jParser.parse(input_js);
            JSONObject jsObj = (JSONObject) stObj;
            String input = (String) jsObj.get("text");
            JSONArray EWD_arr_all = new JSONArray();
            JSONArray EWD_arr1 = new JSONArray();
            JSONArray EWD_arr2 = new JSONArray();
            JSONObject etri_jsonObj = new JSONObject();
            String etri_output = new String();
            List<JSONObject> jsonObjects = null;
            String tagged_sen = new String();

            // elu item object
            JSONObject lobj;
            JSONObject dobj;
            JSONObject cobj;
            JSONObject pobj;
            JSONObject robj;

            // elu list arrary
            JSONArray larr = new JSONArray();
            JSONArray darr = new JSONArray();
            JSONArray carr = new JSONArray();
            JSONArray parr = new JSONArray();
            JSONArray rarr = new JSONArray();

            // using text list
            ArrayList<String> l2k_arr = new ArrayList<>();
            ArrayList<String> cnn_arr = new ArrayList<>();
            ArrayList<String> bkp_arr = new ArrayList<>();
            ArrayList<String> rl_arr = new ArrayList<>();

            String sub_plus_text = new String();
            String sub_minus_text = new String();
            String sub_uri_plus = new String();
            String mln_plus_text = new String();

            // file path and name
            bw1 = new BufferedWriter(new FileWriter(filepath + filename + "_PL1" + ".txt"));
            bw4 = new BufferedWriter(new FileWriter(filepath + filename + "_PL4" + ".txt"));
            bw5 = new BufferedWriter(new FileWriter(filepath + filename + "_PL5" + ".txt"));
            bw8 = new BufferedWriter(new FileWriter(filepath + filename + "_PL8" + ".txt"));
            if (dPL.input_Verifier(input) == 1) {
                // using hand made ELU
                JSONArray human_ELU_result = new JSONArray();
                human_ELU_result = dPL.entity_analyzer(input);
                String untagged_stc = human_ELU_result.get(0).toString(); // untagged_stc를 이후 ETRI에 던져서 시작하면 됨.
                JSONArray hand_made_ELU = (JSONArray) human_ELU_result.get(1); // tag 된 정보를 기반으로 생성한 ELU 결과
                EWD_arr_all = hand_made_ELU;
                EWD_arr_all = tp.elu_item_remove(EWD_arr_all);
                //etri call
                etri_output = ka.getResult(untagged_stc);
                // modify etri NE index
                String modify_etri = tp.index_modify(etri_output);
                etri_jsonObj = (JSONObject) jParser.parse(modify_etri);
                // entity linking arr and etri obj  --> ELU sentence result
                List<JSONObject> splitBySent = converter.splitKoELUbySent(EWD_arr_all, etri_jsonObj);
                jsonObjects = splitBySent;
//                System.out.println(jsonObjects);
                jsonObjects = tp.entity_classify(jsonObjects);
//                System.out.println(jsonObjects);
            } else {
                // using entity linking (koEL)
                // etri call
                etri_output = ka.getResult(input);
//                etri_output = ka.callETRI(input);
//                System.out.println(etri_output);
                // modify etri for entity linking
                String etri_elu = tp.etri_elu(etri_output);
                String etri_sen = tp.etri_sen(etri_output);

                String ELU_output;
                // entity linking-1 call (no etri)
//                ELU_output = rc.callNoEtriKoEL(etri_elu);
//                EWD_arr1 = (JSONArray) jParser.parse(ELU_output);
                EWD_arr1 = tp.elu_item_remove(EWD_arr1);

                // entity linking-2 call (no etri)
                ELU_output = rc.callNoEtriKoNewEL(etri_sen);
                JSONObject EWD_obj = (JSONObject) ((JSONArray) jParser.parse(ELU_output)).get(0);
                String test_text = (String) EWD_obj.get("text");
                EWD_arr2 = (JSONArray) EWD_obj.get("entities");
//                System.out.println(EWD_arr2.toString());

                // Entity Linking & Discovery (use etri?)
                input = input.replace("\n", "\\n");
//                System.out.println(input);
                String ELD_output = rc.callKoELD(input);
//                System.out.println(ELD_output);
                JSONObject ELD_Obj = (JSONObject) jParser.parse(ELD_output);
                JSONArray ELD_entity = (JSONArray) ELD_Obj.get("entities");
                JSONArray ELD_d_entity = (JSONArray) ELD_Obj.get("dark_entity");
//                System.out.println(ELD_entity.toString());
//                System.out.println(ELD_d_entity.toString());
                String merged_ELU = (tp.ELU_merge(ELD_d_entity.toString(), ELD_entity.toString()));
                EWD_arr_all = (JSONArray) jParser.parse(merged_ELU);
                EWD_arr_all = typeAdd(EWD_arr_all);
//                System.out.println(EWD_arr_all);
                EWD_arr_all = tp.ELD_classify(EWD_arr_all);
//                System.out.println(EWD_arr_all);

                // merge ELU list --> entities
//                System.out.println(EWD_arr1.toString());
//                System.out.println(EWD_arr2.toString());
//                String merged_ELU = (tp.ELU_merge(EWD_arr1.toString(), EWD_arr2.toString()));
//                EWD_arr_all = (JSONArray) jParser.parse(merged_ELU);
//                EWD_arr_all = typeAdd(EWD_arr_all);
//                System.out.println(EWD_arr_all);

                String CR_output;
                // make JSON4CR
                String json4CR = tp.json4CR(etri_output, EWD_arr_all.toString());
//                System.out.println(json4CR);
                // CR call
                CR_output = rc.callCR(json4CR);
//                System.out.println(CR_output);
//                JSONObject CRObj = (JSONObject) jParser.parse(CR_output);

                JSONObject CRObj = (JSONObject) jParser.parse(CR_output);
                String mod_text = (String) CRObj.get("plainText");
                JSONArray mod_entity_list = (JSONArray) CRObj.get("entities");

                EWD_arr_all = mod_entity_list;
                etri_output = ka.getResult(mod_text);
                input = mod_text;
//                System.out.println(EWD_arr_all);

                // modify ELU index by CR
//                String modifed_ELU = tp.ELU_index_modify(jscrObj.toString(), EWD_arr_all.toString());

                // modify etri NE index
                String modify_etri = tp.index_modify(etri_output);
                etri_jsonObj = (JSONObject) jParser.parse(modify_etri);

                // entity linking arr and etri obj  --> ELU sentence result
                List<JSONObject> splitBySent = converter.splitKoELUbySent(EWD_arr_all, etri_jsonObj);
                // ELU entity, NER entity   merge
                jsonObjects = tp.entity_merge(splitBySent, modify_etri);
//                System.out.println(jsonObjects.toString());
                // entity classify (NER, DE)
                jsonObjects = tp.entity_classify(jsonObjects);
//                System.out.println(jsonObjects.toString());
            }
            // push en_entity
            jsonObjects = en_entityAdd(jsonObjects);
            // ELU obj copy (b2k, l2k-rule, web, cnn, b2k+, mln, rl)
            for (int i = 0; i < jsonObjects.size(); i++) {
                String elu_str = jsonObjects.get(i).toString();

                lobj = (JSONObject) jParser.parse(elu_str);
                larr.add(lobj);
                dobj = (JSONObject) jParser.parse(elu_str);
                darr.add(dobj);
                cobj = (JSONObject) jParser.parse(elu_str);
                carr.add(cobj);
                pobj = (JSONObject) jParser.parse(elu_str);
                parr.add(pobj);
                robj = (JSONObject) jParser.parse(elu_str);
                rarr.add(robj);
            }

            JSONArray sArr = (JSONArray) etri_jsonObj.get("sentence");
            String titsub = null;
            for (int i = 0; i < sArr.size(); i++) {
                JSONObject one_elu = jsonObjects.get(i);
                JSONObject senObj = (JSONObject) sArr.get(i);
                JSONArray depArr = (JSONArray) senObj.get("dependency");

                String text = (String) senObj.get("text");
                text = text.trim();
                boolean isSubAdd;
                String l2k_text = new String();
                String b2k_text = new String();
                String cnn_text = new String();
                String mln_text = new String();
                String rl_text = new String();

                if (i == 0) {
                    // subject find (title + josa)
                    titsub = tp.subjectFind(depArr);
//                    System.out.println(titsub);
                    title = tp.getTitle(titsub);
//                    System.out.println(title);
                    title_uri = tp.getTitleUri(title, text, one_elu);
//                    System.out.println(title_uri);
                    if (title.length() > 0 && title_uri.length() > 0) {
                        hasTitle = true;
                    }
                }

                lobj = (JSONObject) larr.get(i);
                JSONObject re_l2k = tp.l2kParser(depArr, lobj, title, text);
                lobj = (JSONObject) re_l2k.get("ELU_obj");
                if (usingFSL2K && hasTitle) {
                    l2k_text = (String) re_l2k.get("re_text");
                } else {
                    l2k_text = text;
                }
                sub_plus_text += l2k_text + " ";
                l2k_arr.add(l2k_text);

                cobj = (JSONObject) carr.get(i);
                if (usingFSCNN && hasTitle) {
                    JSONObject re_cnn = tp.cnnParser(depArr, cobj, title_uri, text);
                    cobj = (JSONObject) re_cnn.get("ELU_obj");
                    cnn_text = (String) re_cnn.get("re_text");
                } else {
                    cnn_text = text;
                }
                sub_uri_plus += cnn_text + " ";
                cnn_arr.add(cnn_text);

                bkp_arr.add(text);
                rl_arr.add(text);
            }
//            System.out.println(sub_plus_text);

            // entity + etri call for changed l2k text
            String l2k_text = tp.l2kWrite(larr, sub_plus_text);
            bw1.write(l2k_text);

            // cnn output making
            String PL4_text = tp.cnnWrite(carr, cnn_arr);
            if (usingFSCNN && hasTitle) {
                String taggedTitleSub = " << " + titsub.substring(0, titsub.length() - 1) + " >> " + titsub.substring(titsub.length() - 1);
                PL4_text = PL4_text.replace(titsub, taggedTitleSub);
            }
            bw4.write(PL4_text);

            // b2k_plus output making
            String PL5_text = new String();
            tagged_sen = tp.bkpWrite(parr, bkp_arr);

            String tagged_list[] = tagged_sen.split("\n");
            String paragraphs[] = input.split("\n\n");
            String replace = new String();
            for (int i = 0; i < paragraphs.length; i++) {
                for (int j = 0; j < tagged_list.length; j++) {
//                    System.out.println(paragraphs[i]);
//                    System.out.println(bkp_arr.get(j));
                    if (paragraphs[i].contains(bkp_arr.get(j))) {
                        replace = replace + tagged_list[j] + "\n";
                    }
                }
                replace += "\n";
            }
            PL5_text = replace;
            bw5.write(PL5_text);

            // rl_plus output making
            String PL8_text = new String();
            tagged_sen = tp.rlWrite(rarr, rl_arr);
            String tagged_list2[] = tagged_sen.split("\n");
            String paragraphs2[] = input.split("\n\n");
            String replace2 = new String();
            for (int i = 0; i < paragraphs2.length; i++) {
                for (int j = 0; j < tagged_list2.length; j++) {
                    if (paragraphs2[i].contains(rl_arr.get(j))) {
                        replace2 = replace2 + tagged_list2[j] + "\n";
                    }
                }
                replace2 += "\n";
            }
            PL8_text = replace2;
            bw8.write(PL8_text);

            // web return String
            JSONObject res_obj = new JSONObject();
            JSONArray res_arr = new JSONArray();
            for (int i = 0; i < sArr.size(); i++) {
                JSONObject senObj = (JSONObject) sArr.get(i);
                JSONObject D_elu = (JSONObject) darr.get(i);
                String spentStr = senObj.toString();
                JSONObject webObj = (JSONObject) jParser.parse(spentStr);
                String tagged = (String) tagged_list[i];
                webObj.put("tagged", tagged);
                JSONObject entityObj = new JSONObject();
                entityObj.put("entities", D_elu.get("entities"));
                entityObj.put("d_entities", D_elu.get("d_entities"));
                entityObj.put("merge", D_elu.get("merge"));
                webObj.put("ELU", entityObj);
                webObj.remove("entities");
                webObj.remove("d_entities");
                webObj.remove("merge");

                res_arr.add(webObj);
            }
            res_obj.put("sentence", res_arr);
            res_obj.put("text", input);
            result_EL = res_obj.toString();
            result = result_EL;

            saveDE(result);

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            bw1.close();
            bw4.close();
            bw5.close();
            bw8.close();
        }

        return result;
    }

    public String getTriple(String result_EL, String input) throws ParseException {
        String result = "";
        String result_PL = "";
        JSONObject output_obj = new JSONObject();
        JSONObject input_obj = new JSONObject();

        JSONObject ELObj = (JSONObject) jParser.parse(result_EL);
        JSONObject InObj = (JSONObject) jParser.parse(input);
        boolean isKV = (boolean) InObj.get("KV");
        output_obj.put("EL", ELObj);
        output_obj.put("KV",isKV);
        try {
            result_PL = rc.callPL(output_obj.toString());
//            System.out.println(output_obj.toString());
        } catch (Exception e) {
            result_PL = "";
            System.out.println("PL error");
        }

        JSONObject PLObj = (JSONObject) jParser.parse(result_PL);

        output_obj.put("PL", PLObj);
        result = output_obj.toString();
//        System.out.println(result);

        return result;
    }

    public String getApi(String result_EL_PL) throws ParseException {
        String result = "";
        JSONObject output_obj = new JSONObject();
        JSONObject EL_PLObj = (JSONObject) jParser.parse(result_EL_PL);
        JSONObject ELObj = (JSONObject) EL_PLObj.get("EL");
        JSONArray senArr = (JSONArray) ELObj.get("sentence");
        JSONArray outArr = new JSONArray();
        for (int i = 0; i < senArr.size(); i++) {
            JSONObject senObj = (JSONObject) senArr.get(i);
            JSONObject ELUObj = (JSONObject) senObj.get("ELU");
            String text = (String) senObj.get("text");
            JSONObject outObj = new JSONObject();
            outObj.put("text", text);
            outObj.put("ELU", ELUObj);
//            System.out.println(ELUObj.toString());
//            System.out.println(text);
            outArr.add(outObj);
        }
//        System.out.println(outArr.toString());
        ELObj.put("sentence", outArr);
        output_obj.put("EL", ELObj);

        JSONObject PLObj = (JSONObject) EL_PLObj.get("PL");
        output_obj.put("PL", PLObj);

//        System.out.println(output_obj.toString());
        result = output_obj.toString();

        return result;
    }

    public List<JSONObject> en_entityAdd(List<JSONObject> arr_ko) {
        List<JSONObject> arr_en;
        for (int sen = 0; sen < arr_ko.size(); sen++) {
            JSONObject one_item = arr_ko.get(sen);
            JSONArray entities = (JSONArray) one_item.get("entities");
            for (int idx = 0; idx < entities.size(); idx++) {
                JSONObject entity = (JSONObject) entities.get(idx);
                String ko_uri = (String) entity.get("uri");
                String[] ko_uri_arr = ko_uri.split("/");
                String ko_entity = ko_uri_arr[ko_uri_arr.length - 1];
                entity.put("en_entity", m.ko_enMap.get(ko_entity));
            }
            entities = (JSONArray) one_item.get("merge");
            for (int idx = 0; idx < entities.size(); idx++) {
                JSONObject entity = (JSONObject) entities.get(idx);
                String ko_uri = (String) entity.get("uri");
                String[] ko_uri_arr = ko_uri.split("/");
                String ko_entity = ko_uri_arr[ko_uri_arr.length - 1];
                entity.put("en_entity", m.ko_enMap.get(ko_entity));
            }
        }
        arr_en = arr_ko;
        return arr_en;
    }

    public JSONArray typeAdd(JSONArray arr) {
        JSONArray result;
        for (int i = 0; i < arr.size(); i++) {
            JSONObject item = (JSONObject) arr.get(i);
            String uri = (String) item.get("uri");
            JSONArray type = (JSONArray) item.get("type");
            ArrayList<String> new_type;
            if (type.isEmpty()) {
                new_type = m.typeMap.get(uri);
                if (new_type == null) {
                    new_type = new ArrayList<String>();
                }
                item.put("type", new_type);
            }
        }
        result = arr;
        return result;
    }

    public void saveDE(String el_result_str) throws ParseException, IOException {
        JSONObject ELObj = (JSONObject) jParser.parse(el_result_str);
        String temp_file = Config.getLocalCacheDE();
        CSVWriter cw = new CSVWriter(new FileWriter(temp_file,true));

        JSONArray sentences = (JSONArray) ELObj.get("sentence");
        String prefix = "http://kbox.kaist.ac.kr/resource/";
        List<String[]> output = new ArrayList<>();
        for (int i = 0; i < sentences.size(); i++) {
            JSONObject sen_obj = (JSONObject) sentences.get(i);
            JSONObject ELU = (JSONObject) sen_obj.get("ELU");
            JSONArray entity_list = (JSONArray) ELU.get("merge");
            String text = (String) sen_obj.get("text");
            text = text.trim();
            for (int j = 0; j < entity_list.size(); j++) {
                JSONObject item = (JSONObject) entity_list.get(j);
                String uri = (String) item.get("uri");
                if (uri.contains(prefix)) {
                    String entity_name = uri.replace(prefix, "");
                    if (entity_name.charAt(0) == '_') {
                        String form = (String) item.get("text");
//                        System.out.println(text + "\t" + uri + "\t" + form);
                        Double score = (Double) item.get("score");
                        Double confidence = (Double) item.get("confidence");
                        JSONArray types = (JSONArray) item.get("type");
                        StringBuilder type_str = new StringBuilder();
                        for (int k = 0; k < types.size(); k++) {
                            if (k == types.size() - 1) {
                                type_str.append(types.get(k));
                                break;
                            }
                            type_str.append(types.get(k)).append("###");
                        }
                        if (type_str.length() == 0) {
                            type_str.append("NULL");
                        }
                        output.add(new String[]{entity_name, form, String.valueOf(score), String.valueOf(confidence), String.valueOf(type_str), text});
                    }
                }
            }
        }
        Iterator<String[]> it = output.iterator();
        try {
            try {
                while (it.hasNext()) {
                    String[] s = (String[]) it.next();
                    cw.writeNext(s);
                }
            } finally {
                cw.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String args[]) throws Exception {
        DemoPreprocessor dp = new DemoPreprocessor();
        String input = new String();
        String text = "";
        text = "어니스트 헤밍웨이는 미국의 소설가이자 저널리스트이다. 1854년 노벨 문학상을 수상하였다. 헤밍웨이는 1899년 7월 21일 일리노이주에서 태어났다. 헤밍웨이는 풀린 파이퍼와 이혼한 뒤 마사 겔혼과 재혼하였다. 1961년 아이다호 주에서 엽총으로 62세의 나이에 자살했다.\\n" +
                "\\n" +
                "- 1926년 《해는 또다시 떠오른다》 The Sun Also Rises.\\n" +
                "- 1929년 《무기여 잘 있거라》 A Farewell to Arms.\\n" +
                "- 1940년 《누구를 위하여 종은 울리나》For Whom the Bell Tolls.\\n" +
                "- 1950년 《강 건너 숲속으로》 Across the River and Into the Trees.\\n" +
                "- 1952년 《노인과 바다》 The Old Man and the Sea.";
//        text = "애플은 12일 오전 10시(현지시간) 샌프란시스코 쿠퍼티노에 위치한 새 보금자리 애플 파크 (Apple Park) 캠퍼스에 있는 1000석 규모의 스티브잡스 극장에서 10주년을 기념하는 신형 아이폰을 공개 할 예정이다.";
        input = "{\"text\":\"" + text + "\"}";
        System.out.println(text);
        String output = dp.getText(input);
        System.out.println(output);
    }
}