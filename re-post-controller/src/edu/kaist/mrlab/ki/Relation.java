package edu.kaist.mrlab.ki;

public class Relation {
	private String relation;
	private String score;

	public Relation(String relation, String score) {
		this.relation = relation;
		this.score = score;
	}

	public String getRelation() {
		return relation;
	}

	public void setRelation(String relation) {
		this.relation = relation;
	}

	public String getScore() {
		return score;
	}

	public void setScore(String score) {
		this.score = score;
	}

}
