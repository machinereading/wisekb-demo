package edu.kaist.mrlab.srdf.graph;

import java.util.ArrayList;

public class Vertex {

	private ArrayList<Edge> neighborhood;
	private String label;
	private int startOffset;
	private int endOffset;

	boolean isSubject;
	boolean isObject;

	/**
	 *
	 * @param label
	 *            The unique label associated with this Vertex
	 */
	
	public Vertex(String label) {
		this.label = label;
		this.neighborhood = new ArrayList<Edge>();
	}

	
	public Vertex(String label, int startOffset, int endOffset) {
		this.label = label;
		this.startOffset = startOffset;
		this.endOffset = endOffset;
		this.neighborhood = new ArrayList<Edge>();
	}


	/**
	 * This method adds an Edge to the incidence neighborhood of this graph iff
	 * the edge is not already present.
	 *
	 * @param edge
	 *            The edge to add
	 */

	public void addNeighbor(Edge edge) {
		if (this.neighborhood.contains(edge)) {
			return;
		}

		this.neighborhood.add(edge);
	}

	/**
	 *
	 * @param other
	 *            The edge for which to search
	 * @return true iff other is contained in this.neighborhood
	 */

	public boolean containsNeighbor(Edge other) {
		return this.neighborhood.contains(other);
	}

	/**
	 *
	 * @param index
	 *            The index of the Edge to retrieve
	 * @return Edge The Edge at the specified index in this.neighborhood
	 */
	public Edge getNeighbor(int index) {
		return this.neighborhood.get(index);
	}

	/**
	 *
	 * @param index
	 *            The index of the edge to remove from this.neighborhood
	 * @return Edge The removed Edge
	 */
	Edge removeNeighbor(int index) {
		return this.neighborhood.remove(index);
	}

	/**
	 *
	 * @param e
	 *            The Edge to remove from this.neighborhood
	 */
	public void removeNeighbor(Edge e) {
		this.neighborhood.remove(e);
	}

	/**
	 *
	 * @return int The number of neighbors of this Vertex
	 */
	public int getNeighborCount() {
		return this.neighborhood.size();
	}

	/**
	 *
	 * @return String The label of this Vertex
	 */
	public String getLabel() {
		return this.label;
	}

	/**
	 *
	 * @return String A String representation of this Vertex
	 */
	public String toString() {
		return "Vertex " + label;
	}

	/**
	 *
	 * @return The hash code of this Vertex's label
	 */
//	public int hashCode() {
//		return this.label.hashCode();
//	}

	/**
	 *
	 * @param other
	 *            The object to compare
	 * @return true iff other instanceof Vertex and the two Vertex objects have
	 *         the same label and offsets
	 */
	public boolean equals(Object other) {
		if (!(other instanceof Vertex)) {
			return false;
		}

		Vertex v = (Vertex) other;
		
		
		
		return (this.label.equals(v.label) && this.startOffset == v.startOffset && this.endOffset == v.endOffset);
		
		
	}

	/**
	 *
	 * @return ArrayList<Edge> A copy of this.neighborhood. Modifying the
	 *         returned ArrayList will not affect the neighborhood of this
	 *         Vertex
	 */
	public ArrayList<Edge> getNeighbors() {
		return new ArrayList<Edge>(this.neighborhood);
	}

	public int getStartOffset() {
		return startOffset;
	}

	public int getEndOffset() {
		return endOffset;
	}

	public boolean isSubject() {
		return isSubject;
	}

	public void setSubject(boolean isSubject) {
		this.isSubject = isSubject;
	}

	public boolean isObject() {
		return isObject;
	}

	public void setObject(boolean isObject) {
		this.isObject = isObject;
	}
	
	public void setLabel(String label){
		this.label = label;
	}

}
