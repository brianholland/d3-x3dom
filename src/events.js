
/**
 * In x3dom, it is the canvas which captures onclick events, therefore defining a D3 event handler on an single x3dom element does not work.
 *
 * A workaround is to define an onclick handler which then forwards the call to the D3 'click' event handler with the event.
 * Note that x3dom event members differ from D3's, so d3.mouse() function does not work.
 *
 * @see https://bl.ocks.org/hlvoorhees/5376764
 */
import * as d3 from "d3";

export dispatch = d3.dispatch("customMouseOver", "customMouseOut", "customClick");

export function forwardClick(event) {
	let target = d3.select(event.target);
	target.on('click')(event);
}

export function forwardMouseOver(event) {
	let target = d3.select(event.target);
	target.on('mouseover')(event);
}

export function forwardMouseOut(event) {
	let target = d3.select(event.target);
	target.on('mouseout')(event);
}
