import ready from './ready.js';
import {BaseClass, create as _createClass} from './classes.js';

export default _createClass({
	init: function(){
		this.flakes = [];
		BaseClass.prototype.init.apply(this, arguments);
		if(!this.container){
			this.container = document.body;
		}
		if(this.auto){
			this.activate();
		}
	},
	props: {
		//==config
		auto: true,
		className: 'snow',
		frameRate: 12,
		maxFlakeSize: 2,

		//==class
		container: undefined,
		el: undefined,
		flakeCount: 1,
		flakes: undefined,
		activate: function(){
			var _self = this;
			window.addEventListener('resize', function(){
				_self.onResize();
			});
			var _lastDraw = 0;
			var _frameDuration = 1000 / this.frameRate;
			if(this.className && this.el){
				this.el.classList.add(this.className);
			}
			var _go = function(_time){
				if(_time - _lastDraw >= _frameDuration){
					_self.step();
					_lastDraw = _time;
				}
				window.requestAnimationFrame(_go);
			};
			ready(function(){
				_self.determineFlakeCount();
				_go();
			});
		},
		addFlake: function(){
			var _dim = this.getElDimensions();
			var _flake = {
				size: Math.ceil(Math.random() * this.maxFlakeSize),
				x: Math.floor(Math.random() * _dim.width),
				y: -1 * Math.floor(Math.random() * _dim.height)
			};
			this.flakes.push(_flake);
			return _flake;
		},
		determineFlakeCount: function(){
			var _dim = this.getElDimensions();
			//-# random divisor between 10 and 30
			this.flakeCount = Math.ceil((_dim.width + _dim.height) / (10 + (20 * Math.random())));

			if(this.flakeCount > this.flakes.length){
				for(var _i = 0, _end = this.flakeCount - this.flakes.length; _i < _end; ++_i){
					this.addFlake();
				}
			}else if(this.flakeCount < this.flakes.length){
				for(var _i = 0, _end = this.flakes.length - this.flakeCount; _i < _end; ++_i){
					this.removeFlake();
				}
			}
			return this;
		},
		getElDimensions: function(){
			return {
				width: this.el.offsetWidth,
				height: this.el.offsetHeight
			};
		},
		onResize: function(){
			this.determineFlakeCount();
		},
		removeFlake: function(){
			return this.flakes.pop();
		},
		step: function(){
			for(var _i = 0; _i < this.flakes.length; ++_i){
				var _flake = this.flakes[_i];
				this.stepFlake(_flake);
			}
			return this;
		},
		stepFlake: function(_flake){
			var _dim = this.getElDimensions();
			var _xMove = Math.floor(Math.random() * (5 * 2) - 5 + 0.5);
			var _yMove = Math.floor(Math.random() * (10 * 2) - 10) + 10;
			_flake.x += _xMove;
			_flake.y += _yMove;
			if(_flake.x < 0 || _flake.x > _dim.width){
				_flake.x += _xMove * -2;
			}
			if(_flake.y > _dim.height){
				_flake.y = 0;
			}
			return this;
		},
	},
});
