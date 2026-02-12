import {create as _createClass} from './classes.js';
import HtmlSnowView from './HtmlSnowView.js';

export default _createClass({
	parent: HtmlSnowView,
	props: {
		positionFlakeEl: function(_flake){
			_flake.el.style.transform = 'translate(' + _flake.x + 'px, ' + _flake.y + 'px)';
		},
	},
});
