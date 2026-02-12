import {create as _createClass} from './classes.js';
import SnowView from './SnowView.js';

var _proto = SnowView.prototype;
export default _createClass({
	parent: SnowView,
	props: {
		//==config
		elAttr: {},
		nodeName: 'div',

		//==class
		activate: function(){
			if(!this.el){
				this.el = document.createElement(this.nodeName);
			}
			for(var _key in this.elAttr){
				if(this.elAttr.hasOwnProperty(_key)){
					this.el.setAttribute(_key, this.elAttr[_key]);
				}
			}
			this.container.appendChild(this.el);
			_proto.activate.apply(this, arguments);
			return true;
		},
		addFlake: function(){
			var _flake = _proto.addFlake.apply(this, arguments);
			if(!_flake.el){
				this.createFlakeEl(_flake);
				this.el.appendChild(_flake.el);
			}
			return _flake;
		},
		createFlakeEl: function(_flake){
			this.positionFlakeEl(_flake);
		},
		removeFlake: function(){
			var _flake = _proto.removeFlake.apply(this, arguments);
			if(_flake.el){
				this.el.removeChild(_flake.el);
			}
			return _flake;
		},
		positionFlakeEl: function(_flake){},
		step: function(){
			_proto.step.apply(this, arguments);
			for(var _i = 0; _i < this.flakes.length; ++_i){
				var _flake = this.flakes[_i];
				this.positionFlakeEl(_flake);
			}
		},
	},
});
