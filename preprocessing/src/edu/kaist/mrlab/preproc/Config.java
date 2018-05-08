package edu.kaist.mrlab.preproc;
//package main.java.preproc;

public class Config {

    private static String koEL_URL = "http://143.248.135.60:2229/entity_linking";
    private static String PL_URL = "http://143.248.135.20:2452/pl-all";
    private static String KA_IP = "143.248.135.20";
    private static int KA_PORT = 15763;

    private static String filename = "wiki_ex";


    // demo server
//    public static String filepath = "../PL-Web-Demo/prepro/data/";
    //local
//    private static String filepath = "";
    // integral server
    private static String filepath = "./data/output/";

    private static boolean usingFSinL2K = false;
    private static boolean usingFSinB2K = false;
    private static boolean usingFSinCNN = false;
    private static boolean usingFSinMLN = false;

    public static String getKoEL_URL(){return koEL_URL;}
    public static String getPL_URL(){return PL_URL;}
    public static String getKA_IP(){return KA_IP;}
    public static int getKA_PORT(){return KA_PORT;}

    public static String getFilename(){
        return filename;
    }
    public static void setFilename(String name) {filename = name;}
    public static String getFilepath(){
        return filepath;
    }
    public static void setFilepath(String path) {filepath = path;}

    public static boolean getFSConfig (String module){
        if(module.equals("L2K")){
            return usingFSinL2K;
        }else if(module.equals("CNN")){
            return usingFSinCNN;
        }else if(module.equals("MLN")){
            return usingFSinMLN;
        }else if(module.equals("B2K")){
            return usingFSinB2K;
        }else {
            return false;
        }
    }
}
