package edu.kaist.mrlab.preproc;
//package main.java.preproc;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.util.Iterator;

/**
 * input : 문장, 문장에 대한 entity_linking JSON to string
 * output : 태그된 문장.
 */
public class EntityTagger {

    /**
     * // '<link>TEXT|URI</link>'
     * @param string_input sentence
     * @param json_input   ELU obj
     * @return tagged string
     * @throws ParseException
     */
    public String callTaggedOutForB2K(String string_input, String json_input) {

        String returnString = string_input;

        try {

            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObject = (JSONObject) jsonParser.parse(json_input);

            JSONArray jsonArray = (JSONArray) jsonObject.get("entities");

            int indexCounter = 0;
            int headerLength = "http://ko.dbpedia.org/resource/".length();
            Iterator<JSONObject> iterator = jsonArray.iterator();

            while (iterator.hasNext()) {
                JSONObject entity = iterator.next();
                String source = (String) entity.get("source");
                if(source.equals("DE")){
                    continue;
                }
                int start_offset = Integer.parseInt(entity.get("start_offset").toString());
                int end_offset = Integer.parseInt(entity.get("end_offset").toString());
                String uri = entity.get("uri").toString();
                String text = entity.get("text").toString();
                String insertString = "<link>" + text + "|" + uri.substring(headerLength) + "</link>";
                String someString = returnString.substring(0, start_offset + indexCounter) + insertString + returnString.substring(end_offset + indexCounter);
                returnString = someString;
                indexCounter += insertString.length() - end_offset + start_offset;
            }

        } catch (Exception e) {
            System.out.println("error string");
            System.out.println(returnString);
            e.printStackTrace();
        }
        return returnString;
    }

    /**
     * // ' << URI >> '
     * @param string_input sentence
     * @param json_input   ELU Obj
     * @return tagged string
     */
    public String callTaggedOutForCNN(String string_input, String json_input) {

        String returnString = string_input;

        try {

            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObject = (JSONObject) jsonParser.parse(json_input);

            JSONArray jsonArray = (JSONArray) jsonObject.get("entities");

            int indexCounter = 0;
            int headerLength = "http://ko.dbpedia.org/resource/".length();
            Iterator<JSONObject> iterator = jsonArray.iterator();

            while (iterator.hasNext()) {
                JSONObject entity = iterator.next();
                String source = (String) entity.get("source");
                if(source.equals("DE")){
                    continue;
                }
                int start_offset = Integer.parseInt(entity.get("start_offset").toString());
                int end_offset = Integer.parseInt(entity.get("end_offset").toString());
                String uri = entity.get("uri").toString();
                String text = entity.get("text").toString();
                String insertString = " << " + uri.substring(headerLength) + " >> ";
                String someString = returnString.substring(0, start_offset + indexCounter) + insertString + returnString.substring(end_offset + indexCounter);
                returnString = someString;
                indexCounter += insertString.length() - end_offset + start_offset;
            }

        } catch (Exception e) {
            System.out.println("error string");
            System.out.println(returnString);
            e.printStackTrace();
        }
        return returnString;
    }

    /**
     * // '[URI] '
     * @param string_input  sentence
     * @param json_input    ELU Obj
     * @return tagged string
     */
    public String callTaggedOutForB2KP(String string_input, String json_input) {

        String returnString = string_input;

        try {

            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObject = (JSONObject) jsonParser.parse(json_input);

            JSONArray jsonArray = (JSONArray) jsonObject.get("entities");

            int indexCounter = 0;
            int headerLength = "http://ko.dbpedia.org/resource/".length();
            Iterator<JSONObject> iterator = jsonArray.iterator();

            while (iterator.hasNext()) {
                JSONObject entity = iterator.next();
                String source = (String) entity.get("source");
                if(source.equals("DE")){
                    continue;
                }
                int start_offset = Integer.parseInt(entity.get("start_offset").toString());
                int end_offset = Integer.parseInt(entity.get("end_offset").toString());
                String uri = entity.get("uri").toString();
                String text = entity.get("text").toString();
                String insertString = "[" + uri.substring(headerLength) + "] ";
                String someString = returnString.substring(0, start_offset + indexCounter) + insertString + returnString.substring(end_offset + indexCounter);
                returnString = someString;
                indexCounter += insertString.length() - end_offset + start_offset;
            }

        } catch (Exception e) {
            System.out.println("error string");
            System.out.println(returnString);
            e.printStackTrace();
        }
        return returnString;
    }

    /**
     * // 'URI'
     * @param string_input  sentence
     * @param json_input    ELU Obj
     * @return tagged string
     */
    public String callTaggedOutForMLN(String string_input, String json_input) {
        String returnString = string_input;

        try {

            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObject = (JSONObject) jsonParser.parse(json_input);

            JSONArray jsonArray = (JSONArray) jsonObject.get("entities");

            int indexCounter = 0;
            int headerLength = "http://ko.dbpedia.org/resource/".length();
            Iterator<JSONObject> iterator = jsonArray.iterator();

            while (iterator.hasNext()) {
                JSONObject entity = iterator.next();
                String source = (String) entity.get("source");
                if(source.equals("DE")){
                    continue;
                }
                int start_offset = Integer.parseInt(entity.get("start_offset").toString());
                int end_offset = Integer.parseInt(entity.get("end_offset").toString());
                String uri = entity.get("uri").toString();
                String text = entity.get("text").toString();
                String insertString =  uri.substring(headerLength);
                String someString = returnString.substring(0, start_offset + indexCounter) + insertString + returnString.substring(end_offset + indexCounter);
                returnString = someString;
                indexCounter += insertString.length() - end_offset + start_offset;
            }

        } catch (Exception e) {
            System.out.println("error string");
            System.out.println(returnString);
            e.printStackTrace();
        }
        return returnString;
    }
}