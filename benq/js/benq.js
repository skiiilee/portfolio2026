$(function(){
    
    $(window).resize(function() { // 창크기 바뀔때마다
        var h = $(window).height(); // 창높이값 가져와서
        var w = $(window).width();
        var depth1 = $('.depth1 li a');
        var depth2 = $('.depth2 li a');
        var who = 0;
        $('.opening').height(h); // 해당태그에 창너비값 넣기
        $('.opening').width(w);
        $('.opening p').css("line-height",h+"px");
        $('section').height(h); 
        
        //모바일 .depth1클릭 방지 
        if(w>1024){
            $('section div').height(h);
            depth1.unbind('click');
            $('nav').css('transition','none');
            //depth2 Pc hover
            $('.depth1 li').hover(function(){
                $(this).children().addClass('on');
            },function(){
                $(this).children().removeClass('on');
            });
                
        }else if(1024>w>768){
            $('section div').height('22.460%');
            depth1.unbind('click');
            $('nav').css('transition','.5s');
        }else{
            $('section div').height('36.363%');
            $('nav').css('transition','.5s');
            depth1.click(function(event){
                event.preventDefault();
                depth2.unbind('click');
                if($(this).siblings().hasClass('down')){
                    
                    $(this).siblings().removeClass('down');
                    
                }
                else{
                    $('.depth2').removeClass('down');
                    $(this).siblings().addClass('down');
                }
            });
        }
    });
    $(window).trigger('resize'); // 페이지 처음 로딩될때 resize이벤트 실행하기


   
   
    //header 메뉴 버튼
    var btn = $('.toggle');
	var nav = $('nav');
    btn.click(function(){
		if(btn.hasClass('on')){
			nav.removeClass('on');
            btn.removeClass('on');
            $('.depth2').removeClass('down');
		}else{
			nav.addClass('on');
            btn.addClass('on');
            
		}
	});
    
    
	//header 검색 버튼
    var search = $('.search');
    var txt = $('.search span:nth-child(1)');
	var searchbox = $('.searchbox');
    var close1=$('.search span:nth-child(2)');
    var close2=$('.search span:nth-child(3)');
    
    search.click(function(){
		if(search.hasClass('on')){
			searchbox.stop().fadeOut();
			search.removeClass('on');
            txt.css("display", "block");
            close1.removeClass('on');
            close2.removeClass('on');
            nav.css("display", "block");
            
		}else{
			searchbox.stop().fadeIn();
			search.addClass('on');
            txt.css("display", "none");
            close1.addClass('on');
            close2.addClass('on');
            nav.css("display", "none");
		}
	});
    
    //페이징
    function aniLink(link){
		var target = $(link.attr('href')).offset().top;
		$('html,body').animate({scrollTop:target},1000);
        
	}
    
	
    
    
    $('a[href="#top"]').click(function(){
		aniLink($(this));
        
	});
     $('.nextbtn').click(function(){
        var a = 0;
		aniLink($(this));
        a = $(this).parent().parent().index();
        $('#main ul li a').removeClass('on');
        page.children().eq(a).addClass('on');
        $('#main section div a').removeClass('txtScroll');
        fadeObject(section.eq(a).find('div a'));
	});
    
    //스크롤 페이지
    var page = $('#main ul li');
    var section = $('#main section');
    
    var j = 0;
    page.click(function(){
        j = $(this).index();
        $('#main ul li a').removeClass('on');
        page.children().eq(j).addClass('on');
        $('#main section div a').removeClass('txtScroll');
        fadeObject(section.eq(j).find('div a'));
        var target = section.eq(j).offset().top;
		$("html, body").stop().animate({scrollTop:target},1000);
        
    });
    fadeObject(section.find('div a'));
    
    //마우스휠 이벤트
    section.mousewheel(function(event,delta){
        j=0;
		if(delta > 0){
            i = $(this).index();
            j = j +i-2 ;
            if(j<0){
                j=1;
            }
            $('#main ul li a').removeClass('on');
            page.children().eq(j).addClass('on');
			var prev = $(this).prev().offset().top;
            $('#main section div a').removeClass('txtScroll');
            fadeObject(section.eq(j).find('div a'));
			$('html,body').stop().animate({scrollTop:prev},1000);
            
		}else if(delta < 0){
            j = $(this).index();
            if(j>4){
                j=4;
            }
            $('#main ul li a').removeClass('on');
            page.children().eq(j).addClass('on');
			var next = $(this).next().offset().top;
            $('#main section div a').removeClass('txtScroll');
            fadeObject(section.eq(j).find('div a'));
			$('html,body').stop().animate({scrollTop:next},1000);
            
		}
        
	});
    
    function fadeObject(target){
		var object = target;
		var objectOffset = object.parent().parent().offset().top;
		if($(this).scrollTop() > objectOffset-1000){
			object.addClass('txtScroll');
		}else{
            
			object.removeClass('txtScroll');
		}
	}
  
    
    
    
    
   
    
	
});
    
    
    
    
    
    










