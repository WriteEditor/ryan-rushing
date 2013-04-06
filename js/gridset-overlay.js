// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.getElementById('gridsetoverlaywrap');
					
						if (!gw) gs.show();
						else gs.remove(gw);
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	remove: function (gw) {
	
		document.body.removeChild(gw);
		
		if(window.detachEvent) window.detachEvent('onresize', gs.width);
		else window.removeEventListener('resize', gs.width, false);
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var p = ['l','m','s'],
			c = [4,4,2],
			w = [1000,600,400],
			b = document.getElementsByTagName('body')[0],
			gw = '<div id="gridwrap"><div id="gridscreenwidthwrap"><p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p></div><div id="gridoverlay" class="wrapper">',
		
			k = 0, breaks = '',
			
			styles = '<style id="gridsetoverlaystyles" type="text/css">#gridsetoverlaywrap{position:static;}#gridwrap{display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;pointer-events:none;font-family:Helvetica, Arial, sans-serif !important;}#gridoverlay{position:relative;height:100%;overflow:hidden !important;background:none !important;}#gridoverlay div{display:block;position:static;height:100%;color:#bcbcff;}#gridoverlay .gridset{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.7;}#gridoverlay .gridset div{text-align:left;font-size:10px !important;border-right:1px solid #bcbcff;border-left:1px solid #bcbcff;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}#gridoverlay div small{width:100%;display:block;text-align:center;color:#7D80DB;font-weight:700 !important;border-bottom:1px solid #bcbcff;border-top:1px solid #bcbcff;padding-top:0 !important;background-color:rgb(240,240,255) !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;}#gridoverlay .gridset:nth-child(2) div{border-style:dashed;padding-top:23px;}#gridoverlay .gridset:nth-child(2) small{border-style:dashed;}#gridoverlay .gridset:nth-child(3) div{border-style:dotted;padding-top:45px;}#gridoverlay .gridset:nth-child(3) small{border-style:dotted;}#gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{display:block;width:100%;position:absolute;bottom:0;left:0;height:30px;border-top:1px solid #7D80DB;opacity:0.7;color:#7D80DB;background-color:rgb(240,240,255) !important;}#gridscreenwidth{display:block;width:100%;text-align:center;font-size:12px;line-height:1;padding-top:8px;}#gridscreenwidth strong{text-transform:none;}@media only screen and (max-width:599px) {#gridsetoverlaywrap [class*=s1],#gridsetoverlaywrap [class*=s2],#gridsetoverlaywrap .s-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=s1]{width:15%;margin-left:0%;}#gridsetoverlaywrap [class*=s2]{width:74.875%;margin-left:25%;}#gridsetoverlaywrap .s-hide{display:none !important;}}@media only screen and (min-width:600px) and (max-width:999px) {#gridsetoverlaywrap [class*=m1],#gridsetoverlaywrap [class*=m2],#gridsetoverlaywrap [class*=m3],#gridsetoverlaywrap [class*=m4],#gridsetoverlaywrap .m-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=m1]{width:10%;margin-left:0%;}#gridsetoverlaywrap [class*=m2]{width:27.458333333333336%;margin-left:16.66666667%;}#gridsetoverlaywrap [class*=m3]{width:27.458333333333336%;margin-left:50.791666673333%;}#gridsetoverlaywrap [class*=m4]{width:15%;margin-left:84.916666676667%;}#gridsetoverlaywrap .m-hide{display:none !important;}}@media only screen and (min-width:1000px) {#gridsetoverlaywrap [class*=l1],#gridsetoverlaywrap [class*=l2],#gridsetoverlaywrap [class*=l3],#gridsetoverlaywrap [class*=l4],#gridsetoverlaywrap .l-all{display:block;float:left;margin-right:-100%;}#gridsetoverlaywrap [class*=l1]{width:10%;margin-left:0%;}#gridsetoverlaywrap [class*=l2]{width:33.975%;margin-left:14%;}#gridsetoverlaywrap [class*=l3]{width:33.975%;margin-left:51.975%;}#gridsetoverlaywrap [class*=l4]{width:10%;margin-left:89.95%;}#gridsetoverlaywrap .l-hide{display:none !important;}}</style>';
						
		while (p[k]) {
		
			var hides = '', 
				l = 0;
		
			if (w[k] != breaks && k == 0) gw += '<div>';
			else if (w[k] != breaks) gw += '</div><div>';
		
			while (p[l]) {
		
				if (l != k && w[l] != w[k]) hides += p[l] + '-hide ';
				l++;			
		
			}
		
			gw += '<div class="gridset ' + hides + '"><div class="'+p[k]+'1"><small>'+p[k]+'1</small></div>';
		
			var i = 1;
		
			while (i++ < c[k]) gw += '<div class="'+p[k]+i+'"><small>'+p[k]+i+'</small></div>';
		
			gw += '</div>';
		
			if (k == w.length - 1) gw += '</div>';
		
			breaks = w[k];
		
			k++;
		
		}
		
		gw += '</div></div>';
		
		var newgw = document.createElement('div');
		
		newgw.id = 'gridsetoverlaywrap';
		
		newgw.innerHTML = gw + styles;
		
		b.appendChild(newgw);
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	}


};

gs.init();