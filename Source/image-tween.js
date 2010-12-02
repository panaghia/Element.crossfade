/*
---
description: Image Tween - A simple class for a quick image tween

license: MIT-style

authors:
- Sergio Panagia (http://panaghia.it)

requires:
- Element.Event
- Fx.Tween
- Element.Style
- String
- Array

provides: [ImageTween]

...
*/

var ImageTween = new Class(
{
	Implements: [Options, Events],
	options:
	{
		startImg: null,
		endImg: null,
		el: null,
		duration: 400,
		href: null,
		transition: Fx.Transitions.Sine.easeOut
	},
	initialize: function(options)
	{
		this.setOptions(options);	
		this.start();
	},
	start: function()
	{
		if(this.options.el)
		{
			var el = this.options.el;
			
			el.setStyle('background-repeat','no-repeat');
			
			if(this.options.href==null)
			{
				var endImg = new Element('img',
				{
					src: this.options.endImg,
					styles:{
						opacity: 0
					}
				});
			}
			else
			{
				var endImg = new Element('a',
				{
					href:this.options.href,
					html:'<img src="'+this.options.endImg+'"></img>',
					styles:{
						opacity: 0
					}
				});
			}
				
			endImg.inject(el);
			el.getLast().set('tween', {
				duration: this.options.duration,
				transition: this.options.transition
			});
		
			
			el.setStyle('backgroundImage', 'url('+this.options.startImg+')');
			
			//el.getLast().setStyle('opacity',1);
			el.addEvent('mouseenter', function()
			{
				el.getLast().tween('opacity', 1);
			});
			el.addEvent('mouseleave', function()
			{
				el.getLast().tween('opacity', 0);
			});
			
		}
		
	}
	
	
});