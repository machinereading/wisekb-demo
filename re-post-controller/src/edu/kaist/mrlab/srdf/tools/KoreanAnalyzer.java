package edu.kaist.mrlab.srdf.tools;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Paths;

public class KoreanAnalyzer {
	private Socket soc;
	
	public String getResult(String input) throws Exception {
		StringBuffer sb = new StringBuffer();

		InetAddress ia = null;

		String serverIp = "143.248.135.20";

		try {
			ia = InetAddress.getByName(serverIp);
			soc = new Socket(ia, 44417);

			OutputStream os = soc.getOutputStream();
			BufferedOutputStream bos = new BufferedOutputStream(os);

			bos.write((input).getBytes()); 
			bos.flush();
			soc.shutdownOutput();
			
			InputStream is = soc.getInputStream();
			InputStreamReader isr = new InputStreamReader(is);
			BufferedReader br = new BufferedReader(isr);

			String line = null;
			while (true) {
				line = br.readLine();
				if (line == null)
					break;
				line = line.trim();
				if (line.equals(""))
					continue;

				sb.append(line);
//				sb.append("\n");
			}
			bos.close();
			br.close();

		} catch (Exception e) {
			// e.printStackTrace();
			System.out.println(input.length());
			throw e;
		}

		return sb.toString();
	}

	public static void main(String[] args) throws Exception {
		
		KoreanAnalyzer ex = new KoreanAnalyzer();
		
		BufferedReader br = Files.newBufferedReader(Paths.get("data/wiki_ex.txt"));
		
		String input = null;
		
		while((input = br.readLine()) != null){
			
			String output = ex.getResult(input);
			System.out.println(output);
			
			
		}
		
//		try {
//			String output = ex.getResult("애플 주식회사(영어: Apple Inc.)은 컴퓨터, 휴대전화 등의 전자제품을 생산하는 미국의 기업이다. 이전 명칭은 애플 컴퓨터 주식회사(영어: Apple Computer, Inc.)였다.");
//			System.out.println(output);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
	}
}