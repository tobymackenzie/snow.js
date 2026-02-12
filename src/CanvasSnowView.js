import {create as _createClass} from './classes.js';
import SnowView from './SnowView.js';

var _proto = SnowView.prototype;
export default _createClass({
	parent: SnowView,
	init: function(){
		_proto.init.apply(this, arguments);
		if(typeof this.darkMode === 'undefined'){
			this.darkMode = (window.matchMedia && window.matchMedia('prefers-color-scheme: dark'));
		}
	},
	props: {
		canvContext: undefined,
		darkMode: undefined,
		offscreenCanvasEl: undefined,
		offscreenContext: undefined,
		activate: function(){
			if(!this.el){
				this.el = document.createElement('canvas');
			}
			if(this.el.getContext){
				this.offscreenCanvasEl = document.createElement('canvas');
				this.offscreenContext = this.offscreenCanvasEl.getContext('2d');
				this.canvContext = this.el.getContext('2d');
				this.container.appendChild(this.el);

				this.fixCanvDimensions();
				_proto.activate.apply(this, arguments);
				return true;
			}else{
				return false;
			}
		},
		clearRect: function(){
			this.offscreenContext.clearRect(0, 0, this.el.width, this.el.height)
		},
		onResize: function(){
			_proto.onResize.apply(this, arguments);
			this.fixCanvDimensions();
		},
		step: function(){
			_proto.step.apply(this, arguments);
			this.clearRect();
			this.offscreenContext.fillStyle = 'white';
			if(this.darkMode){
				this.offscreenContext.globalAlpha = 0.65;
			}
			this.offscreenContext.beginPath();
			for(var _i = 0; _i < this.flakes.length; ++_i){
				var _flake = this.flakes[_i];
				this.offscreenContext.moveTo(_flake.x, _flake.y);
				this.offscreenContext.arc(_flake.x, _flake.y, _flake.size, 0, Math.PI * 2, true);
			}
			this.offscreenContext.fill();
			this.canvContext.putImageData(this.offscreenContext.getImageData(0, 0, this.el.width, this.el.height), 0, 0);
		},
		fixCanvDimensions: function(){
			this.el.width = this.offscreenCanvasEl.width = Math.max(window.innerWidth, document.documentElement.clientWidth);
			this.el.height = this.offscreenCanvasEl.height = Math.max(window.innerHeight, document.documentElement.clientHeight);
		},
	},
});
