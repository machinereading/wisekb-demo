package edu.kaist.mrlab.pl.script;

public class PL4Caller {

	public void run() throws Exception {

		RestCaller rc = new RestCaller();
		rc.callPL4();

	}

	public static void main(String[] ar) throws Exception {

		PL4Caller pl4c = new PL4Caller();
		pl4c.run();

	}

}
