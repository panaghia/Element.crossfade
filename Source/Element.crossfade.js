 /*
---
description: easy function to make a fade effect between two images

license: MIT-style

authors:
- Sergio Panagia (http://panaghia.it)

requires: Fx.CSS

provides: [Element.crossfade]

...
*/  


Element.implement({
	crossfade: function(to)
	{
		var cover = new Element('div', {   		
			styles:{
				position:'absolute',
		 		top:'0px',
		 		left:'0px',
		 		right:'0px',
		 		bottom:'0px',
				width: this.getSize().x, //because of IE bug
				height: this.getSize().y,//same
		 		'background-image': 'url( '+to+')',
				'opacity': 0,
				'z-index':1
			}                                        	   
		}); 			
		cover.inject(this); 
		   	
		var fx = new Fx.Tween(cover, this.get('tween').options);
		fx.addEvent('onComplete', function()
		{
		   	this.setStyle('background-image', 'url('+to+')');
			cover.destroy(); 
		}.bind(this)); 
		fx.start('opacity', 1);		  
	}	
});

