package edu.kaist.mrlab.preproc;

import edu.kaist.mrlab.el.rest.Main;
import org.json.simple.JSONArray;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class DarkEntityProcessor {
    public static Main m = new Main();
    public String filepath = Config.getFilepath();

    public void upSenMaxId() {
        m.sen_max_id += 1;
    }

    public void entityPoolSave() throws IOException {
        BufferedWriter bw = null;
        try {
            String filename = "entityPool";
            bw = new BufferedWriter(new FileWriter(filepath + filename + ".tsv"));
            Iterator<ArrayList<String>> iterator = m.entity_idMap.keySet().iterator();

            while (iterator.hasNext()) {
//            System.out.println(iterator.next());
                ArrayList<String> key = iterator.next();
                ArrayList<String> value = m.entity_idMap.get(key);

                bw.write(key.get(0) + "\t" + key.get(1) + "\t" + value.get(0) + "\t" + value.get(1) + "\n");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            bw.close();
        }
    }

    public void senPoolSave() throws IOException {
        BufferedWriter bw = null;
        try {
            String filename = "sentenceSet";
            bw = new BufferedWriter(new FileWriter(filepath + filename + ".tsv"));
            Iterator<String> iterator = m.sen_idMap.keySet().iterator();

            while (iterator.hasNext()) {
//            System.out.println(iterator.next());
                String key = iterator.next();
                String value = m.sen_idMap.get(key);

                bw.write(key + "\t" + value + "\n");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            bw.close();
        }
    }

    public void forKboxList(String de_uri, JSONArray types) {
        String kbr = "http://kbox.kaist.ac.kr/resource/";
        String dbo = "http://dbpedia.org/ontology/";
        String uri_name = de_uri.replace(kbr, "");
//        System.out.println(uri_name);
        ArrayList<String> type = new ArrayList<>();
        for (int i = 0; i < types.size(); i++) {
            String temp = (String) types.get(i);
            temp = temp.replace(dbo, "");
//            System.out.println(temp);
            type.add(temp);
        }
        m.DET_Map.put(uri_name, type);
//        System.out.println(m.DET_Map);
    }

    public void forKboxFileWrite() throws IOException {
        BufferedWriter bwt = null;
        BufferedWriter bwl = null;
        String kbr = "http://kbox.kaist.ac.kr/resource/";
        String dbo = "http://dbpedia.org/ontology/";
        String prefix_type = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
        String prefix_label = "http://www.w3.org/2000/01/rdf-schema#label";
        String type_template = "<input_uri>" + "\t<" + prefix_type + ">\t" + "<input_type> .";
        String label_template = "<input_uri>" + "\t<" + prefix_label + ">\t" + "input_label .";
//        System.out.println(uri);
        try {
            Iterator<String> iterator = m.DET_Map.keySet().iterator();
            bwt = new BufferedWriter(new FileWriter(filepath + "new_type" + ".nt"));
            bwl = new BufferedWriter(new FileWriter(filepath + "new_label" + ".nt"));

            while (iterator.hasNext()) {
                String key = iterator.next();
                ArrayList<String> value = m.DET_Map.get(key);
//                System.out.println(key);
//                System.out.println(value);
                String uri = kbr + key;
                String[] term = key.split("__");
                String label = term[0].replace("_", " ");
                for (int i = 0; i < value.size(); i++) {
                    String type = value.get(i);
                    type = dbo + type;
                    String output = type_template.replace("input_uri", uri).replace("input_type", type);
//                    System.out.println(output);
                    bwt.write(output + '\n');
                }
                String output = label_template.replace("input_uri", uri).replace("input_label", label);
//                System.out.println(output);
                bwl.write(output + '\n');

//
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            bwt.close();
            bwl.close();
        }

    }

    public void humanAnnoFileWrite() throws IOException {
        BufferedWriter bw = null;
        try {
            String filename = "humanAnnotatorSet";
            bw = new BufferedWriter(new FileWriter(filepath + filename + ".tsv"));

            for (Iterator iterator = m.humanAnnotatorSet.iterator(); iterator.hasNext(); ) {
//            System.out.println(iterator.next());
                bw.write(iterator.next() + "\n");
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            bw.close();
        }
    }

    public void humanAnnotatorList(String text, String term, String type) {
        String output = null;
        output = term.replace(' ', '_') + '\t' + type + '\t' + text;
//        System.out.println(text);
//        System.out.println(term);
//        System.out.println(type);
//        System.out.println(output);
        m.humanAnnotatorSet.add(output);
    }

    /**
     * @param sentence
     * @return sentence id
     */
    public int deSentenceSet(String sentence) {
//        return sen - id
//        System.out.println(m.sen_idMap);
//        System.out.println(m.sen_max_id);
        String id_str = m.sen_idMap.get(sentence);
        if (id_str != null) {
            return Integer.parseInt(id_str);
        } else {
//            m.sen_idMap.put(sentence, String.valueOf(m.sen_max_id));
            m.sen_idMap.put(sentence, String.valueOf(m.sen_id));
            upSenMaxId();
//            return m.sen_max_id;
            return m.sen_id;
        }
    }

    /**
     * @param text
     * @return dark entity max id
     */
    public String max_pool(String text) {
        String id_str = m.entity_max_idMap.get(text);
        if (id_str != null) {
            int id = Integer.parseInt(id_str);
            id += 1;
            m.entity_max_idMap.put(text, String.valueOf(id));
        } else {
            m.entity_max_idMap.put(text, "1");
            id_str = "1";
        }
        return id_str;
    }

    /**
     * 텍스트 + s-id + term-id ==> 다크 엔티티 명
     *
     * @param text
     * @param s_id
     * @param t_id
     * @return
     */
    public String pool(String text, String s_id, String t_id) {
        String entityId;
        ArrayList<String> key = new ArrayList<>();
        key.add(s_id);
        key.add(t_id);
        ArrayList<String> temp = m.entity_idMap.get(key);
        if (temp != null) {
            text = temp.get(0);
            entityId = temp.get(1);
        } else {
            entityId = max_pool(text);
            ArrayList<String> t = new ArrayList<>();
            t.add(text);
            t.add(entityId);
            m.entity_idMap.put(key, t);
        }
        String output = text + "__" + entityId;
        return output;
    }

    public static void main(String args[]) throws Exception {
        DarkEntityProcessor de = new DarkEntityProcessor();

        while (true) {
            System.out.println("start");
            Scanner sc = new Scanner(System.in);
            String input_text = sc.nextLine();
//            StringTokenizer st = new StringTokenizer(input_text, ",");
//            String text= st.nextToken();
//            String sid=st.nextToken();
//            String tid=st.nextToken();
//            System.out.println(de.pool(text,sid,tid));
//            System.out.println(m.sen_idMap);
//            System.out.println(m.entity_idMap);
        }
    }


}
