package edu.kaist.mrlab.preproc;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.util.ArrayList;

public class FakeSubject {
    public static JSONParser jParser = new JSONParser();
    public static TextParser tp = new TextParser();
    public static KoreanAnalyzer ka = new KoreanAnalyzer();

    public static boolean usingTitle = true;
    public static boolean addingSbj = true;

    public String getText(String input) throws Exception {
        String result = "";
        String etri_out = ka.getResult(input);
        JSONObject etri_jsonObj = (JSONObject) jParser.parse(etri_out);
        JSONArray sArr = (JSONArray) etri_jsonObj.get("sentence");
        String title_josa = new String();
        String title = new String();
        String temp = new String();

        for (int i = 0; i < sArr.size(); i++) {
            JSONObject senObj = (JSONObject) sArr.get(i);
            String text_sentence = (String) senObj.get("text");
            text_sentence = text_sentence.trim();
            JSONArray depArr = (JSONArray) senObj.get("dependency");
            String sbj = tp.subFindInSenObj(senObj);
//            String sbj = tp.subjectFind(depArr);
            if (i == 0) {
                title_josa = sbj;
                title = tp.getTitle(title_josa);
            }
            if (sbj.length() > 0) {
                temp = sbj;
            } else {
                sbj = temp;
            }

            if(usingTitle){
                sbj = title_josa;
                if (sbjAdd(depArr) && addingSbj) {
                    result += sbj + " " + text_sentence + '\n';
                } else {
                    result += text_sentence + '\n';
                }
            }else {
                if (sbjAdd(depArr) && addingSbj) {
                    result += sbj + " " + text_sentence + '\n';
                } else {
                    result += text_sentence + '\n';
                }
            }
        }
//        System.out.println(title);
        return result.trim();
    }

    /**
     * @param depArr    etri dependency array
     * @return
     *  true adding / false not
     */
    public Boolean sbjAdd(JSONArray depArr) {
        ArrayList<Boolean> bool_list = tp.hasSbj(depArr);
        boolean bool_NP_S = bool_list.get(0);
        boolean bool_V = bool_list.get(1);
        if (!bool_NP_S) {
            if (!bool_V) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    public static void main(String args[]) throws Exception {
        FakeSubject fs = new FakeSubject();
//        String text = "월트 디즈니 컴퍼니는 미국의 거대한 대중 매체 산업 관련 그룹 집단이며, 오늘날까지 가장 큰 할리우드 스튜디오 중의 하나로 손꼽히게 되었다. 본사와 주요 제작 시설은 캘리포니아 주 버뱅크의 월트 디즈니 스튜디오에 위치하고 있다. 1991년 5월 6일부터 다우 존스 산업평균지수에 포함되었고 마블 엔터테인먼트, 루카스필름, 월트 디즈니 애니메이션 스튜디오, 픽사, 월트 디즈니 픽처스, 터치스톤 픽처스, 할리우드 픽처스, 미라맥스, 디멘션 필름스 등의 영화 제작 및 배급 사업과 디즈니 채널, ABC, ESPN, 디즈니 주니어에서 방송된 프로그램을 제작 및 송출하는 방송 사업, 디즈니랜드를 비롯한 11개의 테마 파크 사업 등을 소유, 운영하고 있다.";
        System.out.println("input text");
        String text = "마리 퀴리는 폴란드 출신의 프랑스 과학자이다. 본명은 마리아 살로메아 스크워도프스카이고, 프랑스식 이름은 마리 퀴리이다.방사능 분야의 선구자이며 노벨상 수상자이다. 여성 최초의 노벨상 수상자로, 물리학상과 화학상을 동시에 받은 유일한 인물이다. 라이너스 폴링과 함께 노벨상 2관왕에 등극한 인물로 유명하다.";
        System.out.println(text);
        usingTitle = false;
        System.out.println("not using title");
        String output = fs.getText(text);
        System.out.println(output);
        usingTitle = true;
        System.out.println("using title");
        output = fs.getText(text);
        System.out.println(output);
    }
}

