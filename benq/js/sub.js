$(function(){
    var cover = $('.benqPeople .cover');
    
    $(window).resize(function() { // 창크기 바뀔때마다
        var h = $(window).height(); // 창높이값 가져와서
        var w = $(window).width();
        var depth1 = $('.depth1 li a');
        var depth2 = $('.depth2 li a');
        var cover = $('.benqPeople .cover');
        var i = 0;
        var th = 0;
        
        $('.benqPeople').css('margin-bottom', '0');
        $('.benqPeople .txt').removeClass('on');
        cover.removeClass('on');
        cover.css('opacity','0');
        cover.click(function(){
            coverclick($(this));
        });
        //모바일 .depth1클릭 방지 ***.depth2까지 안먹힘
        if(w>1280){
            depth1.unbind('click');
            $('nav').css('transition','none');
            //depth2 Pc hover
            $('.depth1 li').hover(function(){
                $(this).children().addClass('on');
            },function(){
                $(this).children().removeClass('on');
            });
            
            
            
        }else if((1280>w) && (w>1024)){
            depth1.unbind('click');
            $('nav').css('transition','none');
            //depth2 Pc hover
            $('.depth1 li').hover(function(){
                $(this).children().addClass('on');
            },function(){
                $(this).children().removeClass('on');
            });
           
            
        }else if((1024>w) && (w>768) ){
            depth1.unbind('click');
            depth1.click(function(event){
                event.preventDefault();
                $('nav').css('transition','.5s');
                depth2.unbind('click');
                if($(this).siblings().hasClass('down')){
                    
                    $(this).siblings().removeClass('down');
                    
                }
                else{
                    $('.depth2').removeClass('down');
                    $(this).siblings().addClass('down');
                }
            });
            
            
        }else{
            depth1.unbind('click');
            depth1.click(function(event){
                event.preventDefault();
                $('nav').css('transition','.5s');
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
    
    
    //depth2 Pc
   $('.depth1 li').hover(function(){
      $(this).children().addClass('on');
   },function(){
       $(this).children().removeClass('on');
   });
   $('.benqPeople').hover(function(){
      $(this).children('.cover').css('opacity', '1');
   },function(){
       $(this).children('.cover').css('opacity', '0');
   });
   
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
    
   // bxSlider
	$('.slider').bxSlider({
		auto:true,
		controls:false
	});
	
    
    
    
    //상세검색
    var btnWrap = $('.btnWrap');
    var img = $('.btnWrap button span');
    var cancel = $('.cancel');
    var select = $('.select  li button');
    var select2 = $('.select2');
    
    $(".menubox").hide();
    btnWrap.click(function(){
        $(".menubox").stop().slideToggle("fast");
        if(img.hasClass('on')){
            img.removeClass('on');
            select2.removeClass('down');
            select.removeClass('on');
        }else{
            img.addClass('on');
        }
        
    });
    cancel.click(function(){
        $(".menubox").stop().slideToggle("fast");
        img.removeClass('on');
        select2.removeClass('down');
        select.removeClass('on');
    });
    
    
    
    select.click(function(){
        
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).siblings().removeClass('down');
        }else{
            $(this).addClass('on');
            $(this).siblings().addClass('down');
        }
        
    });
    
    
    
    
    function coverclick(target){
        var i = 0;
        var th = 0;
        var cw=$(window).width();
        i = target.parent().index();
        th = target.next().next().height();
        th=th+100;
        
        if(target.hasClass('on')){
            target.removeClass('on');
            $('.benqPeople .txt').removeClass('on');
            $('.benqPeople').css('margin-bottom', '0');
            cover.css('opacity','0');
        }else{
            $('.benqPeople').css('margin-bottom', '0');
            $('.benqPeople .txt').removeClass('on');
            cover.removeClass('on');
            cover.css('opacity','0');
            target.css('opacity','1');
            target.addClass('on');
            target.next().next().addClass('on');
            if(cw>1280){
               if((i==1)||(i==5)){
                       $('.benqPeople').eq(i-1).css('margin-bottom', th);
                       $('.benqPeople').eq(i).css('margin-bottom', th);
                       $('.benqPeople').eq(i+1).css('margin-bottom', th);
                        $('.benqPeople').eq(i+2).css('margin-bottom', th);
                   }
                   else if((i==2)||(i==6)){
                       $('.benqPeople').eq(i-2).css('margin-bottom', th);
                       $('.benqPeople').eq(i-1).css('margin-bottom', th);
                       $('.benqPeople').eq(i).css('margin-bottom', th);
                       $('.benqPeople').eq(i+1).css('margin-bottom', th);
                   }else if((i==3)||(i==7)){
                       $('.benqPeople').eq(i-3).css('margin-bottom', th);
                       $('.benqPeople').eq(i-2).css('margin-bottom', th);
                       $('.benqPeople').eq(i-1).css('margin-bottom', th);
                       $('.benqPeople').eq(i).css('margin-bottom', th);
                   }
                    else{
                        $('.benqPeople').eq(i-4).css('margin-bottom', th);
                        $('.benqPeople').eq(i-3).css('margin-bottom', th);
                       $('.benqPeople').eq(i-2).css('margin-bottom', th);
                       $('.benqPeople').eq(i-1).css('margin-bottom', th);
                    } 
            }else if((1280>cw) && (cw>1024) ){
                $('.benqPeople').css('margin-bottom', '0');
               if((i==1)||(i==4)||(i==7)){
                       $('.benqPeople').eq(i-1).css('margin-bottom', th);
                       $('.benqPeople').eq(i).css('margin-bottom', th);
                       $('.benqPeople').eq(i+1).css('margin-bottom', th);
                }
                   else if((i==2)||(i==5)||(i==8)){
                       $('.benqPeople').eq(i-2).css('margin-bottom', th);
                       $('.benqPeople').eq(i-1).css('margin-bottom', th);
                       $('.benqPeople').eq(i).css('margin-bottom', th);
                   }else{
                       $('.benqPeople').eq(i-3).css('margin-bottom', th);
                       $('.benqPeople').eq(i-2).css('margin-bottom', th);
                       $('.benqPeople').eq(i-1).css('margin-bottom', th);
                   }
            
            }
            else if((1024>cw) && (cw>768) ){
               if(i%2==0){
                    $('.benqPeople').eq(i-1).css('margin-bottom', th);
                   $('.benqPeople').eq(i-2).css('margin-bottom', th);
                }else{
                    $('.benqPeople').eq(i).css('margin-bottom', th);
                    $('.benqPeople').eq(i-1).css('margin-bottom', th);
                }
            }
            
            
       }    
		
	}
    
    
    
    
    var newsbtn = $('.news button');
	var selectedNews = $('.selectedNews');
    var number = 0;
    
    newsbtn.click(function(){
        
		if($(this).hasClass('on')){
            $(this).removeClass('on');
            $(this).siblings().removeClass('on');
		}else{
            newsbtn.removeClass('on');
            selectedNews.removeClass('on');
			$(this).siblings().addClass('on');
			$(this).addClass('on');
            
		}
	});
    
    
	
});
    
    
    
    
    
    










