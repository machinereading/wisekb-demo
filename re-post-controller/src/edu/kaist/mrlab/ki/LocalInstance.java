package edu.kaist.mrlab.ki;

public class LocalInstance {
	private String sbj;
	private String obj;
	private String stc;
	
	public LocalInstance(String sbj, String obj, String stc) {
		this.sbj = sbj;
		this.obj = obj;
		this.stc = stc;
	}

	public String getSbj() {
		return sbj;
	}

	public void setSbj(String sbj) {
		this.sbj = sbj;
	}

	public String getObj() {
		return obj;
	}

	public void setObj(String obj) {
		this.obj = obj;
	}

	public String getStc() {
		return stc;
	}

	public void setStc(String stc) {
		this.stc = stc;
	}

}
