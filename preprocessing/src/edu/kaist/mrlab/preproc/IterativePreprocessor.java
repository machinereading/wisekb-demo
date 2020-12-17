package edu.kaist.mrlab.preproc;
//package main.java.preproc;

import edu.kaist.mrlab.el.rest.Main;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Yoosung on 2017-06-15.
 */
public class IterativePreprocessor {
    public Main m = new Main();
    public JSONParser jParser = new JSONParser();
    public TextParser tp = new TextParser();
    public KoreanAnalyzer ka = new KoreanAnalyzer();
    public RestCaller rc = new RestCaller();
    public Converter converter = new Converter();
    public DarkEntityProcessor dep = new DarkEntityProcessor();

    public static int par_id = 1;
    public static int sen_id = 1;

    public void getText() throws Exception {

        String filename = Config.getFilename();
        String filepath = Config.getFilepath();

        BufferedWriter bw = null;
        BufferedReader br = null;
        BufferedWriter lboxw = null;

        par_id = 1;
        sen_id = 1;
        String input;
        try {
//            filename = "unlinkedText";
            br = new BufferedReader(new FileReader(filepath + filename + ".txt"));
            bw = new BufferedWriter(new FileWriter(filepath + filename + "_" + ".tsv"));
            lboxw = new BufferedWriter(new FileWriter(Config.getLboxFilePathNeme(), true));

//            filename = "wiki";
//            br = new BufferedReader(new FileReader(filepath + filename + ".txt"));
//            bw = new BufferedWriter(new FileWriter(filepath + filename + "_" + ".txt"));
            while ((input = br.readLine()) != null) {
                if (input.length() == 0) {
                    continue;
                }
                input = input.replace("\"", "'");
                String[] strarr = input.split("\t");
                input = strarr[0];
                if (strarr.length >= 4) {
                    m.doc_id = Integer.parseInt(strarr[1]);
                    m.par_id = Integer.parseInt(strarr[2]);
                    m.sen_id = Integer.parseInt(strarr[3]);
                }
                JSONArray EWD_arr;
                JSONObject etri_jsonObj;

                // elu item object
                JSONObject eluObj = null;
                // elu - arrary
                JSONArray eluArr = new JSONArray();
                // using text - list
                ArrayList<String> outTextArr = new ArrayList<>();

//                System.out.println(input);
                // etri call
                String etri_output = ka.getResult(input);
                etri_jsonObj = (JSONObject) jParser.parse(etri_output);
//                System.out.println(etri_jsonObj.toString());

                // json_POS >> entity linking
                JSONArray etri_elu = (JSONArray) jParser.parse(tp.etri_elu(etri_output));

                // entity linking call (etri text)
                String ELU_output = rc.callNoEtriKoEL(etri_elu.toString());
                EWD_arr = (JSONArray) jParser.parse(ELU_output);
                EWD_arr = tp.elu_item_remove(EWD_arr);
                EWD_arr = typeAdd(EWD_arr);
//                System.out.println(EWD_arr.toString());

                // modify etri NE index
                String modify_etri = tp.index_modify(etri_output);
                etri_jsonObj = (JSONObject) jParser.parse(modify_etri);
                // entity linking arr and etri obj  --> ELU sentence result
                List<JSONObject> splitBySent = converter.splitKoELUbySent(EWD_arr, etri_jsonObj);

                // ELU entity, NER entity   merge
                List<JSONObject> jsonObjects = tp.entity_merge(splitBySent, modify_etri);

                // entity classify (NER, DE)
                jsonObjects = tp.entity_classify(jsonObjects);

                for (int i = 0; i < jsonObjects.size(); i++) {
                    String elu_str = jsonObjects.get(i).toString();
                    eluObj = (JSONObject) jParser.parse(elu_str);
                    eluArr.add(eluObj);
                }
//                System.out.println(eluArr.toString());
                JSONArray sArr = (JSONArray) etri_jsonObj.get("sentence");
                for (int i = 0; i < sArr.size(); i++) {
                    JSONObject senObj = (JSONObject) sArr.get(i);
                    if (Config.isSavingLBOX()) {
                        String jsonString = senObj.toString();
                        lboxw.write(m.doc_id + "\t" + par_id + "\t" + sen_id + "\t" + jsonString + '\n');
                    }

                    JSONObject entityItem = (JSONObject) eluArr.get(i);
                    JSONArray depArr = (JSONArray) senObj.get("dependency");
                    JSONArray merge = (JSONArray) entityItem.get("merge");
                    String text = (String) senObj.get("text");
                    text = text.trim();
                    outTextArr.add(text);

                    for (int j = 0; j < merge.size(); j++) {
                        JSONObject item = (JSONObject) merge.get(j);
                        String source = (String) item.get("source");
                        String term = (String) item.get("text");
                        String type = "";
                        if (source.equals("DE")) {
                            try {
                                type = (String) item.get("type");
                            } catch (Exception e) {
                                JSONArray t = (JSONArray) item.get("type");
                                for (int h = 0; h < t.size(); h++) {
                                    String ty = (String) t.get(h);
                                    type += ty.replace("http://dbpedia.org/ontology", "");
                                }
                            }
                            dep.humanAnnotatorList(text, term, type);
                        } else if (source.equals("DE+")) {
                            String de_uri = (String) item.get("uri");
                            JSONArray t = (JSONArray) item.get("type");
                            dep.forKboxList(de_uri, t);
                        } else if (source.equals("NER")){
                            String uri = (String) item.get("uri");
//                            String t = (String) item.get("type");
//                            System.out.println(uri);
//                            System.out.println(m.ner_dbo_Map.get(t));
                        }
                    }
                }
                // ouptut making
                String output_text;
                output_text = tp.outWrite(eluArr, outTextArr);
                IterativePreprocessor.par_id++;
                bw.write(output_text);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            bw.close();
            br.close();
            lboxw.close();
            if (Config.isSavingLBOX()) {m.doc_id++;}
        }
        dep.humanAnnoFileWrite();
        dep.forKboxFileWrite();
        dep.senPoolSave();
        dep.entityPoolSave();

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

    public static void main(String args[]) throws Exception {
        Main m = new Main();
        m.readId_TitleMap();
        m.readNER_DBO_Map();
        m.readTypeMap();
        System.out.println("pre process start");
        IterativePreprocessor ip = new IterativePreprocessor();
        ip.getText();
//        Config.setSavingLBOX(true);
//        ip.getText();
//        Config.setSavingLBOX(false);
//        ip.getText();
        System.out.println("pre process end");
    }
}