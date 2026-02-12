import {create as _createClass} from './classes.js';
import DomSnowView from './DomSnowView.js';

var _proto = DomSnowView.prototype;
var _ns = 'http://www.w3.org/2000/svg';
export default _createClass({
	parent: DomSnowView,
	props: {
		//==config
		elAttr: {
			'aria-hidden': 'aria-hidden',
			viewbox: '0 0 100 100',
			xmlns: _ns
		},

		//==class
		activate: function(){
			if(!this.el){
				this.el = document.createElementNS(_ns, 'svg');
			}
			this.fixCanvDimensions();
			_proto.activate.apply(this, arguments);
		},
		createFlakeEl: function(_flake){
			if(!_flake.el){
				_flake.el = document.createElementNS(_ns, 'circle');
				_flake.el.classList.add('snowFlake');
				_flake.el.r.baseVal.value = _flake.size;
				_proto.createFlakeEl.apply(this, arguments);
			}
		},
		fixCanvDimensions: function(){
			var _dim = this.getElDimensions();
			this.el.setAttribute('viewbox', '0 0 ' + _dim.width + ' ' + _dim.height);
		},
		getElDimensions: function(){
			return this.el.getBoundingClientRect();
		},
		onResize: function(){
			_proto.onResize.apply(this, arguments);
			this.fixCanvDimensions();
		},
		positionFlakeEl: function(_flake){
			_flake.el.cx.baseVal.value = parseFloat(_flake.x);
			_flake.el.cy.baseVal.value = parseFloat(_flake.y);
		},
	},
});
