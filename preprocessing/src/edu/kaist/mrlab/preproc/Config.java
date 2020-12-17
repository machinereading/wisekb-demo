package edu.kaist.mrlab.preproc;
//package main.java.preproc;

public class Config {

    private static String koEL_URL = "http://143.248.135.60:2229/entity_linking";
//    private static String koNewEL_URL = "http://kbox.kaist.ac.kr:6120/entity_linking/";
    private static String koNewEL_URL = "http://wisekb.kaist.ac.kr:6120/entity_linking/";
//    private static String koELD_URL = "http://wisekb.kaist.ac.kr:6121/eld/";
    private static String koELD_URL = "http://wisekb.kaist.ac.kr:6122/eld/";
    private static String CR_URL = "http://wisekb.kaist.ac.kr:5560/coreference";
    private static String PL_URL = "http://143.248.135.20:2452/pl-all";
    private static String BERT_URL = "http://wisekb.kaist.ac.kr:55544/bert";
    private static String KA_IP = "143.248.135.20";
    private static int KA_PORT = 15763;

    // demo server
//    public static String filepath = "../PL-Web-Demo/prepro/data/";
    //local
//    private static String filepath = "";
    // integral server
    private static String filepath = "./data/";

    private static String filename = "wiki_ex";

    private static String lboxFilePathNeme = filepath+"LBOX/infoForLbox.tsv";
    private static boolean savingLBOX = false;

    private static String localCacheDE = filepath+"localDE/tempDE.csv";

    private static Double nert_confidence = 0.5;
    private static Double dbot_confidence = 0.2;

    private static boolean usingFSinL2K = false;
    private static boolean usingFSinB2K = false;
    private static boolean usingFSinCNN = false;
    private static boolean usingFSinMLN = false;

    public static boolean isSavingLBOX(){return savingLBOX;}
    public static void setSavingLBOX(boolean i){savingLBOX = i;}
    public static String getLboxFilePathNeme(){return lboxFilePathNeme;}
    public static Double getNert_confidence(){return nert_confidence;}
    public static Double getDbot_confidence(){return dbot_confidence;}
    public static String getKoEL_URL(){return koEL_URL;}
    public static String getKoNewEL_URL(){return koNewEL_URL;}
    public static String getKoELD_URL(){return koELD_URL;}
    public static String getCR_URL(){return CR_URL;}
    public static String getPL_URL(){return PL_URL;}
    public static String getBERT_URL(){return BERT_URL;}
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

    public static String getLocalCacheDE() {
        return localCacheDE;
    }

    public static void setLocalCacheDE(String localCacheDE) {
        Config.localCacheDE = localCacheDE;
    }
}
