package edu.kaist.mrlab.srdf.data;

import java.util.ArrayList;

public class Chunk {
	private String label;
	private String chunk;
	private String postposition;
	private int ID;
	private ArrayList<Integer> APID;
	private String type;
	private ArrayList<Integer> mod;
	private String provenance;
	private String wsd;
	private int startOffset;
	private int endOffset;

	public Chunk(String chunk) {
		this.label = chunk;
		this.chunk = chunk;
	}
	
	public Chunk(String chunk, String postposition) {
		this.label = chunk;
		this.chunk = chunk;
		this.postposition = postposition;
	}

	public Chunk(String chunk, String postposition, int ID) {
		this.label = chunk;
		this.chunk = chunk;
		this.postposition = postposition;
		this.ID = ID;
	}

	public Chunk(String chunk, String postposition, int ID, String type) {
		this.label = chunk;
		this.chunk = chunk;
		this.postposition = postposition;
		this.ID = ID;
		this.type = type;
	}
	
	public Chunk(String chunk, String postposition, int ID, String type, int startOffset, int endOffset) {
		this.label = chunk;
		this.chunk = chunk;
		this.postposition = postposition;
		this.ID = ID;
		this.type = type;
		this.startOffset = startOffset;
		this.endOffset = endOffset;
	}

	public Chunk(String chunk, String postposition, ArrayList<Integer> mod) {
		this.label = chunk;
		this.chunk = chunk;
		this.postposition = postposition;
		this.mod = mod;
	}

	public Chunk(String chunk, String postposition, int ID, ArrayList<Integer> mod) {
		this.label = chunk;
		this.chunk = chunk;
		this.postposition = postposition;
		this.ID = ID;
		this.mod = mod;
	}

	public Chunk(String chunk, String postposition, int ID, String type, ArrayList<Integer> mod) {
		this.label = chunk;
		this.chunk = chunk;
		this.postposition = postposition;
		this.ID = ID;
		this.type = type;
		this.mod = mod;
	}

	public Chunk(String chunk, String postposition, int ID, String type, ArrayList<Integer> mod, String wsd) {
		this.label = chunk;
		this.chunk = chunk;
		this.postposition = postposition;
		this.ID = ID;
		this.type = type;
		this.mod = mod;
		this.wsd = wsd;
	}
	
	public String getLabel() {
		return label;
	}
	
	public void setLabel(String label) {
		this.label = label;
	}

	public String getChunk() {
		return chunk;
	}

	public void setChunk(String chunk) {
		this.chunk = chunk;
	}

	public String getPostposition() {
		return postposition;
	}

	public void setPostposition(String postposition) {
		this.postposition = postposition;
	}

	public int getID() {
		return ID;
	}

	public void setID(int ID) {
		this.ID = ID;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public ArrayList<Integer> getMod() {
		return mod;
	}

	public void setMod(ArrayList<Integer> mod) {
		this.mod = mod;
	}

	public ArrayList<Integer> getAPID() {
		return APID;
	}

	public void setAPID(ArrayList<Integer> aPID) {
		this.APID = aPID;
	}

	public String getProvenance() {
		return provenance;
	}

	public void setProvenance(String provenance) {
		this.provenance = provenance;
	}

	public String getWsd() {
		return wsd;
	}

	public void setWsd(String wsd) {
		this.wsd = wsd;
	}

	public int getStartOffset() {
		return startOffset;
	}

	public void setStartOffset(int startOffset) {
		this.startOffset = startOffset;
	}

	public int getEndOffset() {
		return endOffset;
	}

	public void setEndOffset(int endOffset) {
		this.endOffset = endOffset;
	}

	public String print() {
		String result = chunk + " / " + postposition;
		return result;
	}

}
