import SnowView from './CanvasSnowView.js';

var snow = {};
if(
	document.querySelector
	&& window.requestAnimationFrame
	&& (window.CSS && CSS.supports && CSS.supports('pointer-events:none'))
	&& !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
){
	snow = new SnowView();
}
export default snow;
