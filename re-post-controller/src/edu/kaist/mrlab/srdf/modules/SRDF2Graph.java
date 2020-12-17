package edu.kaist.mrlab.srdf.modules;

import java.util.ArrayList;

import edu.kaist.mrlab.srdf.data.Chunk;
import edu.kaist.mrlab.srdf.data.Triple;
import edu.kaist.mrlab.srdf.graph.Graph;
import edu.kaist.mrlab.srdf.graph.Vertex;

public class SRDF2Graph {

	public Graph generateGraph(ArrayList<Triple> qTriples) {

		Graph graph = new Graph();

		for (Triple triple : qTriples) {

			Chunk sbj = triple.getSbj();
			Chunk pred = triple.getPred();
			Chunk obj = triple.getObj();

			Vertex sbjV;
			Vertex predV;
			Vertex objV;

			graph.addVertex((sbjV = new Vertex(sbj.getChunk(), sbj.getStartOffset(), sbj.getEndOffset())), true);
			graph.addVertex((predV = new Vertex(pred.getChunk(), pred.getStartOffset(), pred.getEndOffset())), true);
			graph.addVertex((objV = new Vertex(obj.getChunk(), obj.getStartOffset(), obj.getEndOffset())), true);

			graph.addEdge(sbjV, predV);
			graph.addEdge(predV, objV);
			
			graph.addEdge(predV, sbjV);
			graph.addEdge(objV, predV);

		}

		return graph;

	}

}
