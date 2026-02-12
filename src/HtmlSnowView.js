import {create as _createClass} from './classes.js';
import DomSnowView from './DomSnowView.js';

var _proto = DomSnowView.prototype;
export default _createClass({
	parent: DomSnowView,
	props: {
		createFlakeEl: function(_flake){
			if(!_flake.el){
				_flake.el = document.createElement('i');
				_flake.el.className = 'snowFlake';
				var tmp = Math.ceil(_flake.size + Math.random() * _flake.size);
				_flake.el.style.height = tmp + 'px';
				_flake.el.style.width = tmp + 'px';
				_proto.createFlakeEl.apply(this, arguments);
			}
		},
	},
});
