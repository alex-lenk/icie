$(function(){
 $('.tipbubble')
	.wrap('<div class="tip" />');

 $('.tip').each(function(){
    var	TIPBLOCK = $(this),
	TIPBUBBLE = TIPBLOCK.find('>.tipbubble'),
	EXCLUDE = TIPBLOCK.prev().hasClass('hovertip'),
	TIPTRIGGER = TIPBLOCK.find('em');

	TIPBLOCK
	.before(function(){
	 if (EXCLUDE){
	 	return '';
	 }
	 else if ( TIPTRIGGER.length != 0 ){
		return TIPTRIGGER.addClass('qtip');
	 }else{
		return '<span class="qtip"></span>';
	 }
	})
	.prev('.qtip')
	.click(showTip);

	TIPBUBBLE
	.append(function(){
	 if (!EXCLUDE){
		return '<b class="close">X</b>';
	 }else{
		return '';
	 }
	})
	.on('click', ".close", function(){
	 	$(this)
		.parent('.tipbubble')
		.fadeOut(100)
		.queue(function(next){
			$(this)
			.removeClass('left-tip-pos right-tip-pos upper-pos')
			 next();
		 });
 	})
	.click(function(e){
    		e.stopPropagation();
 	});
});

 $('.hovertip').each(function(){
   var	HOVERTRIG = $(this),
	TITLE = HOVERTRIG.attr('title'),
	TXT = HOVERTRIG.next('.tip');

	HOVERTRIG
	.removeAttr("title")
	.after(function(){
	 if (TXT.length != 0 ){
		return '';
	 }else{
		return '<div class="tip"><span class="tipbubble">' + TITLE + '</span></div>';
	 }
	})
	.hover(
		showTip,
	 function(){
		$(this)
		.next()
		.find('>.tipbubble')
		.delay(500)
		.fadeOut(100);
	})
	.next()
	.find('>.tipbubble')
	.hover(
	 function(){
     		$(this)
			.stop(true)
         	.fadeIn(100);
 	 },
	 function(){
     		$(this)
			.stop()
			.delay(500)
        	.fadeOut(100)
 	 })
	 .click(function(e){
    		e.stopPropagation();
 	 });
 });

 $('html,body').click(function(){
	 $('.tipbubble')
		.hide()
		.removeClass('left-tip-pos right-tip-pos upper-pos');
 });

 function showTip(e){
    var PIP = $(this),
	TIP = $(this).next().find('>.tipbubble'),
	TipW = TIP.outerWidth(),
	TipH = TIP.outerHeight(), 
	PipW = PIP.outerWidth(),
	PipH = PIP.outerHeight(),
	CurW = $(this).offset().left - $(window).scrollLeft()
	CurH = $(this).offset().top - $(window).scrollTop(),
	LastCoord = $(window).width() - CurW - PipW;

  if (LastCoord >= TipW+20){
	TIP.removeClass('left-tip-pos').addClass('right-tip-pos').css({ right : -PipW });
  } else {
	TIP.removeClass('right-tip-pos').addClass('left-tip-pos').css({ right : PipW });
  }
  if (CurH > TipH+20){
	TIP.addClass('upper-pos');
  } else {
	TIP.removeClass('upper-pos');
  }
    TIP.stop(true).fadeToggle(100);
  e.stopPropagation();
 }
});