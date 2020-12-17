package edu.kaist.mrlab.pl.script;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class ScriptRunner {

	static class StreamGobbler extends Thread {
		InputStream is;

		String type;

		StreamGobbler(InputStream is, String type) {
			this.is = is;
			this.type = type;
		}

		public void run() {
			try {
				InputStreamReader isr = new InputStreamReader(is);
				BufferedReader br = new BufferedReader(isr);
				String line = null;
				while ((line = br.readLine()) != null)
					System.out.println(type + ">" + line);
			} catch (IOException ioe) {
				ioe.printStackTrace();
			}
		}
	}

	public void run() {
		try {
//			String osName = System.getProperty("os.name");
			String[] cmd = new String[2];
			cmd[0] = "/bin/sh"; // should exist on all POSIX systems
			// cmd[1] = args[0];
			cmd[1] = "run.sh";

			Runtime rt = Runtime.getRuntime();
			System.out.println("Execing " + cmd[0] + " " + cmd[1]);
			Process proc = rt.exec(cmd);
			// any error message?
			StreamGobbler errorGobbler = new StreamGobbler(proc.getErrorStream(), "ERROR");

			// any output?
			StreamGobbler outputGobbler = new StreamGobbler(proc.getInputStream(), "OUTPUT");

			// kick them off
			errorGobbler.start();
			outputGobbler.start();

			// any error???
			int exitVal = proc.waitFor();
			System.out.println("ExitValue: " + exitVal);
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}

        public void run_sumz() {
                try {
//                      String osName = System.getProperty("os.name");
                        String[] cmd = new String[2];
                        cmd[0] = "/bin/sh"; // should exist on all POSIX systems
                        // cmd[1] = args[0];
                        cmd[1] = "/home/kekeeo/kafca/kafca_run.sh";

                        Runtime rt = Runtime.getRuntime();
                        System.out.println("Execing " + cmd[0] + " " + cmd[1]);
                        Process proc = rt.exec(cmd);
                        // any error message?
                        StreamGobbler errorGobbler = new StreamGobbler(proc.getErrorStream(), "ERROR");

                        // any output?
                        StreamGobbler outputGobbler = new StreamGobbler(proc.getInputStream(), "OUTPUT");

                        // kick them off
                        errorGobbler.start();
                        outputGobbler.start();

                        // any error???
                        int exitVal = proc.waitFor();
                        System.out.println("ExitValue: " + exitVal);
                } catch (Throwable t) {
                        t.printStackTrace();
                }
        }

	public static void main(String[] args) {

		ScriptRunner sr = new ScriptRunner();
		sr.run();

	}
}
