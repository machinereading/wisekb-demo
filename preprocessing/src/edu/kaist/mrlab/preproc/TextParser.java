package edu.kaist.mrlab.preproc;
//package main.java.preproc;

import edu.kaist.mrlab.el.rest.Main;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;

/**
 * Created by Yoosung on 2017-07-24.
 */

public class TextParser {
    public Main m = new Main();
    EntityTagger et = new EntityTagger();
    KoreanAnalyzer ka = new KoreanAnalyzer();
    RestCaller rc = new RestCaller();
    public JSONParser jParser = new JSONParser();

    /**
     * '불교' remove
     *
     * @param ori_arr original ELU list
     * @return remove item ELU list
     */
    public JSONArray elu_item_remove(JSONArray ori_arr) {
        JSONArray result;
        for (int i = 0; i < ori_arr.size(); i++) {
            JSONObject item = (JSONObject) ori_arr.get(i);
            String uri = (String) item.get("uri");
            if (uri.contains("불교")) {
                ori_arr.remove(item);
                i--;
            }
        }
        result = ori_arr;
        return result;
    }

    /**
     * // remove index in list
     *
     * @param elu JSON object
     * @param ner JSON object
     * @return remove target JSON object
     */
    public JSONObject remove_check(JSONObject elu, JSONObject ner) {
        int elu_s = Integer.parseInt(elu.get("start_offset").toString());
        int elu_e = Integer.parseInt(elu.get("end_offset").toString());
        int ner_s = Integer.parseInt(ner.get("start_offset").toString());
        int ner_e = Integer.parseInt(ner.get("end_offset").toString());

        // soc_idx (start end)
        // ELU (0 4) 00000
        // NER (0 4) XXXXX
        // return remove item(ELU,NER)
        if ((elu_s > ner_s) && (elu_e < ner_e)) {
            // ELU (1 3)  000
            // NER (0 4) XXXXX
            return elu;
        } else if ((elu_s == ner_s) && (elu_e < ner_e)) {
            // ELU (0 3) 0000
            // NER (0 4) XXXXX
            return elu;
        } else if ((elu_s == ner_s) && (elu_e > ner_e)) {
            // ELU (0 4) 00000
            // NER (0 3) XXXX
            return ner;
        } else if ((elu_s < ner_s) && (elu_e == ner_e)) {
            // ELU (0 3) 0000
            // NER (1 3)  XXX
            return ner;
        } else if ((elu_s > ner_s) && (elu_e == ner_e)) {
            // ELU (1 3)  000
            // NER (0 3) XXXX
            return elu;
        } else if ((elu_s <= ner_s) && (elu_e >= ner_e)) {
            // ELU (0 4) 00000
            // NER (1 3)  XXX
            return ner;
        } else if ((elu_s <= ner_s) && (elu_e <= ner_e) && (elu_e > ner_s)) {
            // ELU (0 3) 0000
            // NER (1 4)  XXXX
            return ner;
        } else if ((elu_s >= ner_s) && (elu_e >= ner_e) && (ner_e > elu_s)) {
            // ELU (1 4)  0000
            // NER (0 3) XXXX
            return ner;
        } else {
            return null;
        }
    }

    /**
     * // ELU list + NER list --> merged list
     *
     * @param elu ELU array list
     * @param ner NE array list
     * @return merged list
     */
    public ArrayList merge_index(ArrayList<JSONObject> elu, ArrayList<JSONObject> ner) {
//        System.out.println(elu.toString());
//        System.out.println(ner.toString());
        HashSet<JSONObject> remove_x = new HashSet();
        HashSet<JSONObject> remove_y = new HashSet();

        for (JSONObject elu_item : elu) {
            for (JSONObject ner_item : ner) {
                JSONObject result = remove_check(elu_item, ner_item);
                if (result == null) {
                    continue;
                }
                if (result.get("source").equals("ELU")) {
                    remove_x.add(result);
                } else {
                    remove_y.add(result);
                }
            }
        }
        for (JSONObject rem_elu : remove_x) {
            elu.remove(rem_elu);
        }
        for (JSONObject rem_ner : remove_y) {
            ner.remove(rem_ner);
        }
        ArrayList<JSONObject> merged = new ArrayList<>();
        merged.addAll(elu);
        merged.addAll(ner);
//        System.out.println(merged);

        // merged list sort
        Collections.sort(merged, (o1, o2) -> {
            int o1_s = Integer.parseInt(o1.get("start_offset").toString());
            int o2_s = Integer.parseInt(o2.get("start_offset").toString());
            if (o1_s > o2_s) {
                return 1;
            } else if (o1_s < o2_s) {
                return -1;
            } else {
                return 0;
            }
        });
//        System.out.println(merged);
        return merged;
    }

    /**
     * // make array-list from Json-Array + source
     *
     * @param arr    target JSON array
     * @param source target name
     * @return array list
     */
    public ArrayList<JSONObject> makeList(JSONArray arr, String source) {
        ArrayList<JSONObject> index_list = new ArrayList<>();
        if (arr == null) {
            return index_list;
        }
        for (int i = 0; i < arr.size(); i++) {
            JSONObject entity = (JSONObject) arr.get(i);
            entity.put("source", source);
            index_list.add(entity);
        }
        return index_list;
    }

    /**
     * // ELU list and NER list merge
     *
     * @param ELU_str  ELU list
     * @param etri_str etri_full_string
     * @return merged entity array list
     * @throws ParseException
     */
    public ArrayList<JSONObject> entity_merge(List ELU_str, String etri_str) throws ParseException {
        JSONObject etri_obj = (JSONObject) jParser.parse(etri_str);

        ArrayList<JSONObject> result = new ArrayList<>();
        JSONArray sArr = (JSONArray) etri_obj.get("sentence");
        for (int i = 0; i < sArr.size(); i++) {
            JSONObject one_line = new JSONObject();
            JSONArray one_item = new JSONArray();
            JSONObject ELU_obj = (JSONObject) ELU_str.get(i);
            JSONArray entities = (JSONArray) ELU_obj.get("entities");
            JSONObject sObj = (JSONObject) sArr.get(i);
            JSONArray mod_list = (JSONArray) sObj.get("mod_NE");
            String text = (String) sObj.get("text");
//            System.out.println(text);
            ArrayList<JSONObject> ELU_index = makeList(entities, "ELU");
//            System.out.println(ELU_index.toString());
            ArrayList<JSONObject> mod_ne = makeList(mod_list, "mod_NE");
//            System.out.println(mod_ne.toString());

            one_item = (JSONArray) jParser.parse(merge_index(ELU_index, mod_ne).toString());
            one_line.put("candidate", one_item);
            result.add(one_line);
        }
        return result;
    }

    /**
     * // dbpedia title mapping
     *
     * @param text ne_text
     * @return exact matched uri
     * @throws IOException
     */
    public String exactMatch(String text) {
        String uri;
        String input = text.replace(" ", "_");
        String id = m.id_titleMap.get(input);
        if (id != null) {
            uri = "http://ko.dbpedia.org/resource" + "/" + input;
        } else {
            uri = "";
        }
        return uri;
    }

    /**
     * // entity classify (mod_ne --> NER, DE)
     * // NER - type (P L O) and insert uri
     * // DE - type (other) and no uri
     *
     * @param list entity candidate list
     * @return NER, DE, merge list
     * @throws IOException
     * @throws ParseException
     */
    public ArrayList<JSONObject> entity_classify(List<JSONObject> list) throws IOException, ParseException {
        ArrayList<JSONObject> result = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            JSONObject line = list.get(i);
            JSONObject temp = new JSONObject();
            JSONArray candidate = (JSONArray) line.get("candidate");
            JSONArray d_entities = new JSONArray();
            if (candidate == null) {
                JSONArray direct = (JSONArray) line.get("entities");
                temp.put("entities", direct);
                temp.put("merge", direct);
                result.add(temp);
            } else {
                for (int j = 0; j < candidate.size(); j++) {
                    JSONObject item = (JSONObject) candidate.get(j);
                    String source = (String) item.get("source");
                    String text = (String) item.get("text");
                    if (source.equals("mod_NE")) {
                        String type = (String) item.get("type");
                        if (type.contains("PS") || type.contains("LCP") || type.contains("OGG") || type.contains("AFW_DOC") || type.contains("CV_OCCUPATION")/*true*/) {
                            String uri = exactMatch(text);
//                            System.out.println(text);
                            if (!uri.equals("")) {
//                            System.out.println(uri);
                                item.put("uri", uri);
                                item.put("source", "NER");
                            } else {
//                            System.out.println(text +" no match");
                                item.put("uri", "");
                                item.put("source", "DE");
                            }
                        } else {
//                        System.out.println(text + " no P.L.O");
                            item.put("uri", "");
                            item.put("source", "DE");
                        }
                    }
                }
                JSONArray merge = (JSONArray) jParser.parse(candidate.toString());
                temp.put("merge", merge);

                for (int j = 0; j < candidate.size(); j++) {
                    JSONObject item = (JSONObject) candidate.get(j);
                    String source = (String) item.get("source");
                    if (source.equals("DE")) {
                        candidate.remove(item);
                        d_entities.add(item);
                        j--;
                    }
                }

                temp.put("entities", candidate);
                temp.put("d_entities", d_entities);
                result.add(temp);
            }
        }
        return result;
    }

    /**
     * @param etri_str etri_full_string
     * @return insert modify NE index and elu info list - mod_ne
     * @throws ParseException
     */
    public String index_modify(String etri_str) throws ParseException {
        JSONObject etri_result = (JSONObject) jParser.parse(etri_str);
        JSONArray senArr = (JSONArray) etri_result.get("sentence");
        for (int i = 0; i < senArr.size(); i++) {
            JSONObject senObj = (JSONObject) senArr.get(i);
            JSONArray neArr = (JSONArray) senObj.get("NE");
            String text = (String) senObj.get("text");
            JSONArray mod_NE_set = new JSONArray();
            int s_offset = 0;
            int e_offset = 0;
            for (int j = 0; j < neArr.size(); j++) {
                JSONObject neObj = (JSONObject) neArr.get(j);
                String NE_type = (String) neObj.get("type");
                String NE_text = (String) neObj.get("text");
                JSONObject item = new JSONObject();
//                System.out.println(NE_text);
                if (text.trim().indexOf(NE_text, e_offset) < 0) {
                    continue;
                }
//                System.out.println(NE_text);
                s_offset = text.trim().indexOf(NE_text, e_offset);
                e_offset = s_offset + NE_text.length();
                // dummy data
                item.put("indirect", 0);
                item.put("confidence", 0);
                item.put("link", 0);
                item.put("score", 0);
                item.put("relation", 0);
                // input data
                item.put("text", NE_text);
                item.put("start_offset", s_offset);
                item.put("end_offset", e_offset);
                item.put("type", NE_type);
                mod_NE_set.add(item);
            }
            senObj.put("mod_NE", mod_NE_set);
        }
        return etri_result.toString();
    }

    /**
     * // etri format using from elu (etri >> elu etri)
     *
     * @param input etri_full_string
     * @return modify etri_string
     * @throws ParseException
     */
    public String etri_elu(String input) throws ParseException {
        JSONObject etri_result = (JSONObject) jParser.parse(input);
        JSONArray senArr = (JSONArray) etri_result.get("sentence");
        for (int i = 0; i < senArr.size(); i++) {
            JSONObject senObj = (JSONObject) senArr.get(i);
            senObj.remove("WSD");
            senObj.remove("chunk");
            senObj.remove("NE");
            senObj.remove("SRL");
            senObj.remove("ZA");
            senObj.remove("dependency");
            senObj.remove("relation");
            senObj.remove("SA");
            senObj.remove("phrase_dependency");
            senObj.remove("reserve_str");
        }
        String result = senArr.toString();
        return result;
    }

    /**
     * // etri format using from wsd (etri >> wsd etri)
     *
     * @param input etri_full_string
     * @return modify etri_string
     * @throws ParseException
     */
    public String etri_wsd(String input) throws ParseException {
        JSONObject etri_result = (JSONObject) jParser.parse(input);
        etri_result.remove("category");
        etri_result.remove("category_weight");
        etri_result.remove("DCT");
        etri_result.remove("doc_id");
        etri_result.remove("metaInfo");
        etri_result.remove("title");
        etri_result.remove("entity");

        JSONArray senArr = (JSONArray) etri_result.get("sentence");
        for (int i = 0; i < senArr.size(); i++) {
            JSONObject senObj = (JSONObject) senArr.get(i);
            senObj.remove("chunk");
            senObj.remove("NE");
            senObj.remove("SRL");
            senObj.remove("ZA");
            senObj.remove("relation");
            senObj.remove("SA");
            senObj.remove("phrase_dependency");
            senObj.remove("reserve_str");
            senObj.remove("morp_eval");
        }
        String result = etri_result.toString();
        return result;
    }

    /**
     * // subject recursive function
     *
     * @param jsonarr etri_dependency array
     * @param index   mod index in dependenct item obj
     * @return concat text
     */
    public String rec(JSONArray jsonarr, int index) {
        JSONObject obj = (JSONObject) jsonarr.get(index);
        String text = (String) obj.get("text");
        JSONArray arr = (JSONArray) obj.get("mod");
        String label = (String) obj.get("label");
        if (arr.size() > 0) {
            if (!label.contains("VP") && !label.contains("VNP")) {
                index = Integer.parseInt(arr.get(arr.size() - 1).toString());
            } else {
                return "";
            }
        } else {
            return text + " ";
        }
        return rec(jsonarr, index) + text + " ";
    }

    /**
     * // first subject find
     *
     * @param depArr etri dependency array
     * @return subject + josa  string in sentence
     */
    public String subjectFind(JSONArray depArr) {
        String title_josa = new String();
        int index = 0;
        for (int j = 0; j < depArr.size(); j++) {
            JSONObject depObj = (JSONObject) depArr.get(j);
            String dep_label = (String) depObj.get("label");
            String dep_text = (String) depObj.get("text");
            if (dep_label.equals("NP_SBJ")) {
                JSONArray arr = (JSONArray) depObj.get("mod");
                if (arr.size() > 0) {
                    // last index in mod arr >> The closest index to NP_Sbj
                    index = Integer.parseInt(arr.get(arr.size() - 1).toString());
                    title_josa = rec(depArr, index) + dep_text;
                } else {
                    title_josa = dep_text;
                }
                break;
            }
        }
        return title_josa;
    }

    /**
     * // find first subject from etri dependency(JsonArray)
     *
     * @param senObj etri sentence JSON object
     * @return subject + josa
     */
    public String subFindInSenObj(JSONObject senObj) {
        String titsub = new String();
        JSONArray depArr = (JSONArray) senObj.get("dependency");
        titsub = subjectFind(depArr);
        return titsub;
    }

    /**
     * // josa drop
     *
     * @param titsub subject + josa string
     * @return subject string
     */
    public String getTitle(String titsub) {
        if (titsub.length() > 0) {
            return titsub.substring(0, titsub.length() - 1);
        } else {
            return "";
        }
    }

    /**
     * // found temp title matching entity in ELU list
     *
     * @param title title string
     * @param text  sentence
     * @param elu   ELU Object in sentence
     * @return title uri in ELU
     */
    public String getTitleUri(String title, String text, JSONObject elu) {
        String title_uri = new String();
        int s_set;
        int e_set;
        int s_offset;
        int e_offset;
        s_set = text.indexOf(title);
        e_set = s_set + title.length();

        JSONArray entities = (JSONArray) elu.get("entities");

        for (int i = 0; i < entities.size(); i++) {
            JSONObject entity = (JSONObject) entities.get(i);
            if (entity.get("end_offset").getClass().getName().equals("java.lang.Long")) {
                s_offset = ((Long) entity.get("start_offset")).intValue();
                e_offset = ((Long) entity.get("end_offset")).intValue();
            } else {
                s_offset = ((int) entity.get("start_offset"));
                e_offset = ((int) entity.get("end_offset"));
            }
            if (s_offset == s_set && e_offset == e_set) {
                title_uri = (String) entity.get("uri");
                title_uri = title_uri.replace("http://ko.dbpedia.org/resource/", "");
                break;
            } else {
                title_uri = title;
            }
        }
        return title_uri;
    }

    /**
     * // has subject using dependency JSON array
     *
     * @param depArr etri dependency array
     * @return boolen array list
     * result.[0] -- has NP_Sbj
     * result.[1] -- has VP and VNP
     */
    public ArrayList<Boolean> hasSbj(JSONArray depArr) {
        ArrayList<Boolean> result = new ArrayList<>();
        boolean bool_NP_S = false;
        boolean bool_V = false;

        for (int j = 0; j < depArr.size(); j++) {
            JSONObject depObj = (JSONObject) depArr.get(j);
            String dep_label = (String) depObj.get("label");
            if (dep_label.equals("NP_SBJ")) {
                bool_NP_S = true;
            } else if (dep_label.equals("VP") || dep_label.equals("VNP")) {
                bool_V = true;
            } else {
                continue;
            }
        }
        result.add(bool_NP_S);
        result.add(bool_V);
        return result;
    }

    /**
     * // adding temp title in sentence
     * // modify ELU index
     *
     * @param depArr etri dependency JSON array
     * @param lobj   ELU obj
     * @param title  title String
     * @param text   sentence
     * @return modify ELU obj and modify sentence
     */
    public JSONObject l2kParser(JSONArray depArr, JSONObject lobj, String title, String text) {
        JSONObject result = new JSONObject();
        ArrayList<Boolean> bool = hasSbj(depArr);
        boolean bool_NP_S = bool.get(0);
        boolean bool_V = bool.get(1);
        int len = title.length();
        String pre_text = "";

        if (!bool_NP_S) {
            bool_NP_S = false;
            if (!bool_V) {
                bool_V = false;
                pre_text = text;
            } else if (text.contains("=")) {

            } else {
                // appending Title_Subject to send text to ELU
                pre_text = title + "은" + " " + text;
//                        System.out.println(pre_text);
                JSONArray lArr = (JSONArray) lobj.get("entities");
                for (int k = 0; k < lArr.size(); k++) {
                    JSONObject lEnt = (JSONObject) lArr.get(k);
                    String lEntTxt = (String) lEnt.get("text");
                    int s_offset = ((Long) lEnt.get("start_offset")).intValue();
                    int e_offset = ((Long) lEnt.get("end_offset")).intValue();
                    lEnt.remove("start_offset");
                    lEnt.put("start_offset", s_offset + (len + 2));
                    lEnt.remove("end_offset");
                    lEnt.put("end_offset", e_offset + (len + 2));
                }
            }
        } else {
            pre_text = text;
        }
        result.put("re_text", pre_text);
        result.put("ELU_obj", lobj);
        return result;
    }

    /**
     * // adding temp title in sentence + cnn format subject
     *
     * @param depArr    etri dependence JSON array
     * @param cobj      ELU obj
     * @param title_uri title uri (no prefix)
     * @param text      sentence
     * @return modify ELU obj and modify sentence
     */
    public JSONObject cnnParser(JSONArray depArr, JSONObject cobj, String title_uri, String text) {
        JSONObject result = new JSONObject();
        ArrayList<Boolean> bool = hasSbj(depArr);
        boolean bool_NP_S = bool.get(0);
        boolean bool_V = bool.get(1);
        int len = title_uri.length();
        String pre_text = "";

        if (!bool_NP_S) {
            bool_NP_S = false;
            if (!bool_V) {
                bool_V = false;
                pre_text = text;
            } else if (text.contains("=")) {
                pre_text = text;
            } else {
                // appending Title_Subject to send text to ELU
                pre_text = " << " + title_uri.replace(" ", "_") + " >> " + "은" + " " + text;
//                        System.out.println(pre_text);
                JSONArray cArr = (JSONArray) cobj.get("entities");
                for (int k = 0; k < cArr.size(); k++) {
                    JSONObject cEnt = (JSONObject) cArr.get(k);
                    String cEntTxt = (String) cEnt.get("text");
                    int s_offset = ((Long) cEnt.get("start_offset")).intValue();
                    int e_offset = ((Long) cEnt.get("end_offset")).intValue();
                    cEnt.remove("start_offset");
                    cEnt.put("start_offset", s_offset + (len + 10));
                    cEnt.remove("end_offset");
                    cEnt.put("end_offset", e_offset + (len + 10));
                }
            }
        } else {
            pre_text = text;
        }

        result.put("re_text", pre_text);
        result.put("ELU_obj", cobj);
        return result;
    }

    /**
     * // dropping temp title in sentence
     *
     * @param depArr etri dependency JSON array
     * @param bobj   ELU obj
     * @param title  title string
     * @return modify ELU obj and modify sentence
     */
    public JSONObject b2kParser(JSONArray depArr, JSONObject bobj, String title) {
        int len = title.length();
        String w_str = "";
        JSONObject result = new JSONObject();
        for (int i = 0; i < depArr.size(); i++) {
            JSONObject depObj = (JSONObject) depArr.get(i);
            String dep_label = (String) depObj.get("label");
            String dep_text = (String) depObj.get("text");

            if (dep_label.equals("NP_SBJ")) {
                if (i == 0) {
                    // josa drop
                    String sub = dep_text.substring(0, dep_text.length() - 1);
                    if (!(sub.equals(title))) {
                        w_str += (dep_text + " ");
                    } else {
                        //drop Title_Subject
                        JSONArray bArr = (JSONArray) bobj.get("entities");
                        for (int j = 0; j < bArr.size(); j++) {
                            JSONObject bEnt = (JSONObject) bArr.get(j);
                            String bEntTxt = (String) bEnt.get("text");
                            int s_offset = ((Long) bEnt.get("start_offset")).intValue();
                            int e_offset = ((Long) bEnt.get("end_offset")).intValue();
                            if (j == 0 && title.equals(bEntTxt)) {
                                bArr.remove(bEnt);
                                j--;
                                continue;
                            }
                            bEnt.remove("start_offset");
                            bEnt.put("start_offset", s_offset - (len + 2));
                            bEnt.remove("end_offset");
                            bEnt.put("end_offset", e_offset - (len + 2));
                        }
                        continue;
                    }
                } else {
                    w_str += (dep_text + " ");
                }
            } else if (dep_label.equals("VP") || dep_label.equals("VNP")) {
                w_str += (dep_text + " ");
            } else {
                w_str += (dep_text + " ");
            }
        }
//                System.out.println(w_str);
        result.put("re_text", w_str);
        result.put("ELU_obj", bobj);
        return result;
    }

    /**
     * // adding temp title in sentence
     *
     * @param depArr etri dependency JSON array
     * @param mobj   ELU obj
     * @param title  title String
     * @param text   sentence
     * @return modify ELU obj and modify sentence and boolean using temp title
     */
    public JSONObject mlnParser(JSONArray depArr, JSONObject mobj, String title, String text) {
        JSONObject result = new JSONObject();
        ArrayList<Boolean> bool = hasSbj(depArr);
        boolean bool_NP_S = bool.get(0);
        boolean bool_V = bool.get(1);
        boolean sbjAdding = false;
        int len = title.length();
        String pre_text = "";

        if (!bool_NP_S) {
            bool_NP_S = false;
            if (!bool_V) {
                bool_V = false;
                pre_text = text;
            } else if (text.contains("=")) {
                pre_text = text;
            } else {
                // appending Title_Subject to send text to ELU
                sbjAdding = true;
//                pre_text = title_uri.replace(" ", "_") + "은" + " " + text;
                pre_text = title + "은" + " " + text;
                JSONArray mArr = (JSONArray) mobj.get("entities");
                for (int k = 0; k < mArr.size(); k++) {
                    JSONObject mEnt = (JSONObject) mArr.get(k);
                    int s_offset = ((Long) mEnt.get("start_offset")).intValue();
                    int e_offset = ((Long) mEnt.get("end_offset")).intValue();
                    mEnt.remove("start_offset");
                    mEnt.put("start_offset", s_offset + (len + 2));
                    mEnt.remove("end_offset");
                    mEnt.put("end_offset", e_offset + (len + 2));
                }
            }
        } else {
            pre_text = text;
        }
        result.put("re_text", pre_text);
        result.put("ELU_obj", mobj);
        result.put("sbjAdd", sbjAdding);
        return result;
    }

    /**
     * // format PL1 and PL3
     * // modify sentence call etri
     * // this etri obj adding sentence and ELU list
     *
     * @param larr          ELU JSON array
     * @param sub_plus_text sentence
     * @return string for write PL1 and PL3
     * @throws Exception
     */
    public String l2kWrite(JSONArray larr, String sub_plus_text) throws Exception {
        String result = new String();
        String subP_etri_output = ka.getResult(sub_plus_text);
        JSONObject sP_Obj = (JSONObject) jParser.parse(subP_etri_output);
        JSONArray sP_Arr = (JSONArray) sP_Obj.get("sentence");

        for (int i = 0; i < sP_Arr.size(); i++) {
            JSONObject sP_ent = (JSONObject) sP_Arr.get(i);
            JSONObject L_elu = (JSONObject) larr.get(i);
            sP_ent.put("entities", L_elu.get("entities"));
            JSONObject neObj = new JSONObject();
            JSONArray neArr = new JSONArray();

            neArr.add(sP_ent);
            neObj.put("sentence", neArr);
            result += neObj.toString() + '\n';
        }
        return result;
    }

    /**
     * // format PL2
     * // tagging sentence for b2k
     *
     * @param barr    ELU JSON array
     * @param b2k_arr sentences for b2k
     * @return string for write PL2
     * @throws ParseException
     */
    public String b2kWrite(JSONArray barr, List b2k_arr) throws ParseException {
        String result = new String();

        for (int i = 0; i < b2k_arr.size(); i++) {
            String PL2_text = new String();
            JSONObject bobj = (JSONObject) barr.get(i);
            String b2k_str = (String) b2k_arr.get(i);
            PL2_text = et.callTaggedOutForB2K(b2k_str, bobj.toString());
            result += PL2_text + "\n";
        }

        return result;
    }

    /**
     * // format PL4
     * // tagging sentence for cnn
     * // call wsd
     *
     * @param carr    ELU JSON array
     * @param cnn_arr sentence for cnn
     * @return string for write PL4
     * @throws Exception
     */
    public String cnnWrite(JSONArray carr, List cnn_arr) throws Exception {
        String result = new String();
        String adding_text = new String();
        for (int i = 0; i < cnn_arr.size(); i++) {
            String PL4_text = new String();
            JSONObject cobj = (JSONObject) carr.get(i);
            String cnn_str = (String) cnn_arr.get(i);
            PL4_text = et.callTaggedOutForCNN(cnn_str, cobj.toString());
            // tagged text merge
            adding_text += PL4_text + "\n";
        }

        // tagged text -->> etri call
//        String etri_text = ka.getResult(adding_text);
//        String pre_wsd_text = etri_wsd(etri_text);
//        System.out.println(pre_wsd_text);

        // tagged text etri result -->> wsd call
//        String post_wsd_text = rc.callWSD(pre_wsd_text);
//        JSONObject wsdObj = (JSONObject) jParser.parse(post_wsd_text);
//        JSONArray reArr = (JSONArray) wsdObj.get("result");
//        for (int j = 0; j < reArr.size(); j++) {
//            result += reArr.get(j) + "\n";
//        }
//
//        System.out.println(result);
        // tag remove
        result = adding_text;
        return result;
    }

    /**
     * // format PL5
     * // tagging sentence for b2k+
     *
     * @param parr    ELU JSON array
     * @param bkp_arr sentence for b2k+
     * @return string for write PL5
     * @throws ParseException
     */
    public String bkpWrite(JSONArray parr, ArrayList<String> bkp_arr) throws ParseException {
        String result = new String();

        for (int i = 0; i < bkp_arr.size(); i++) {
            String PL5_text = new String();
            JSONObject pobj = (JSONObject) parr.get(i);
            String bkp_str = bkp_arr.get(i);
            PL5_text = et.callTaggedOutForB2KP(bkp_str, pobj.toString());
            result += PL5_text + "\n";
        }
//        System.out.println(result);
        return result;
    }


    /**
     * // format PL7
     * // replace text using ELU list
     *
     * @param marr       ELU JSON array
     * @param mln_arr    sentence for mln list
     * @param mln_tf_arr boolean using temp subject list
     * @param title      title String
     * @return string for write PL7
     * @throws Exception
     */
    public String mlnWrite(JSONArray marr, ArrayList<String> mln_arr, ArrayList<Boolean> mln_tf_arr, String title) throws Exception {
        String result = new String();
        String replace = new String();
        for (int i = 0; i < mln_arr.size(); i++) {
            String tagged = new String();
            JSONObject mobj = (JSONObject) marr.get(i);
            String mln_str = mln_arr.get(i);
            tagged = et.callTaggedOutForMLN(mln_str, mobj.toString());
            tagged = tagged.replace(title, title.replace(" ", "_"));
//            System.out.println(tagged);
            replace += tagged + '\n';

        }
        /// etri call using replace
        String etri_output = ka.getResult(replace);
        JSONObject Obj = (JSONObject) jParser.parse(etri_output);
        JSONArray Arr = (JSONArray) Obj.get("sentence");

        for (int i = 0; i < Arr.size(); i++) {
            JSONObject ent = (JSONObject) Arr.get(i);
            JSONObject elu = (JSONObject) marr.get(i);
            String mln_str = mln_arr.get(i);
            boolean isFSbj = false;
//            isFSbj= mln_tf_arr.get(i);
            /// adding entities
            /// adding original text (sbj plus + no under bar(!!! sbj using under bar))
            ent.put("entities", elu.get("entities"));
            ent.put("ori_text", mln_str);
            ent.put("isAdd", isFSbj);
            JSONObject eObj = new JSONObject();
            JSONArray eArr = new JSONArray();

            eArr.add(ent);
            eObj.put("sentence", eArr);
            result += eObj.toString() + '\n';
        }
        return result;
    }
}
