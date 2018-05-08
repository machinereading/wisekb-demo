package edu.kaist.mrlab.preproc;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.util.ArrayList;

/**
 * Created by Sung9 on 2017. 7. 19..
 */
public class DirectPL {
    public static String tag_open = "<<";
    public static String tag_close = ">>";

    //input_text Entity 태그 여부 확인
    public static int input_Verifier(String sentence) {
        if (sentence.contains(tag_open) && sentence.contains(tag_close)) {
            return 1;
        } else {
            return 0;
        }
    }

    //문장에서 entity 태그 제거, entity information arraylist 등록
    public static JSONArray entity_analyzer(String sentence) {
        ArrayList<Long> s_idx = new ArrayList<Long>();
        ArrayList<Long> e_idx = new ArrayList<Long>();
        ArrayList<String> entity = new ArrayList<String>();

        JSONArray result = new JSONArray();

        String result_stc = sentence;

        for (int i = 0; i < result_stc.length(); i++) {
            if (result_stc.indexOf(tag_open) != -1 && result_stc.indexOf(tag_close) != -1) {
                s_idx.add((long) result_stc.indexOf(tag_open));
                result_stc = result_stc.replaceFirst(tag_open , "");
                e_idx.add((long) result_stc.indexOf(tag_close));
                result_stc = result_stc.replaceFirst(tag_close , "");
                entity.add(result_stc.substring(Integer.parseInt(String.valueOf(s_idx.get(i))), Integer.parseInt(String.valueOf(e_idx.get(i)))));
            }
        }
        result.add(result_stc);
        result.add(JSON_maker(entity, s_idx, e_idx));
        return result; //Arraylist => 0 : entity tag 제거 된 순수 문장 n개, 1 : entity_linking output 만든 것.
    }

    //entity 정보를 통해 JSONobject 생성
    public static JSONArray JSON_maker(ArrayList entity, ArrayList s_idx, ArrayList e_idx) {
        String prefixed_uri = "http://ko.dbpedia.org/resource/";

        ArrayList human_ELU = new ArrayList();
        JSONObject entityObject = new JSONObject();
        JSONArray entityArr = new JSONArray();

        for (int i = 0; i < entity.size(); i++) {
            JSONObject entity_info = new JSONObject();
            entity_info.put("start_offset", s_idx.get(i));
            entity_info.put("end_offset", e_idx.get(i));
            entity_info.put("type", "");
            entity_info.put("source", "Direct");
            entity_info.put("uri", prefixed_uri + entity.get(i).toString().replace(" ", "_"));
            entity_info.put("text", entity.get(i));
            entityArr.add(entity_info);
            //human_ELU.add(entity_info);
        }
        //entityObject.put("entities", entityArr);
        //human_ELU.add(entityArr);

        //System.out.println(human_ELU);
        //System.out.println(entityObject);

        return entityArr;
    }

    public static void main(String[] args) {
        String stc = "<<애플_(기업)>>은 <<스티브_잡스>>와 <<스티브_워즈니악>>과 <<로널드_웨인>>이 1976년에 설립한 컴퓨터 회사이다. 이전 명칭은 <<애플_(기업)>> 컴퓨터였다. 최초의 개인용 컴퓨터 중 하나이며, 최초로 <<키보드>>와 <<모니터>>를 가지고 있는 <<애플_I>>을 출시하였고, <<애플_II>>는 공전의 히트작이 되어 <<개인용_컴퓨터>>의 시대를 열었다.";

        if (input_Verifier(stc) == 1) {
            JSONArray human_ELU_result = new JSONArray();
            //System.out.println(entity_analyzer(stc));
            human_ELU_result = entity_analyzer(stc);
            String untagged_stc = human_ELU_result.get(0).toString(); // untagged_stc를 이후 ETRI에 던져서 시작하면 됨.
            JSONArray hand_made_ELU = (JSONArray) human_ELU_result.get(1); // tag 된 정보를 기반으로 생성한 ELU 결과

            System.out.println(untagged_stc);
            System.out.println(hand_made_ELU);

            //etri_stc = 에트리(untagged_stc);
//            splitKoELUbySent(etri_stc, hand_made_ELU);
        }
    }
}
