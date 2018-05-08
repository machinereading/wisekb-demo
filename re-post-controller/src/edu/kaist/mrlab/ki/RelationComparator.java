package edu.kaist.mrlab.ki;

import java.util.Comparator;

public class RelationComparator implements Comparator<Relation> {

	@Override
	public int compare(Relation o1, Relation o2) {
		// TODO Auto-generated method stub
		double score1 = Double.parseDouble(o1.getScore());
		double score2 = Double.parseDouble(o2.getScore());
		if (score2 > score1) {
			return 1;
		} else if (score1 > score2) {
			return -1;
		} else {
			return 0;
		}
	}

}
