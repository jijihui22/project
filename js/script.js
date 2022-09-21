$(function(){
    
    let $shopWrap = $('.shop');
    let $offset = 500;
    let $shopOst = $shopWrap.offset().top - $offset;
    let $todoOst = $('.todo').offset().top - $offset;
    let $timesOst = $('.times').offset().top - $offset;
    let $tourOst = $('.tour').offset().top - $offset;
    let $numberGameOst = $('.numberGame').offset().top - $offset;
    let $mountOst = $('.mount').offset().top - $offset;
    let $louisvuittonOst = $('.louisvuitton').offset().top - $offset;
    let $byeOst = $('.bye').offset().top - $offset;
        
    $(window).scroll(function(){
        if($(this).scrollTop() > $shopOst){
            $shopWrap.find('img').addClass('animate');
            
        }
        if($(this).scrollTop() > $todoOst){
            $('.todo').find('img').addClass('animate');
        }
        if($(this).scrollTop() > $timesOst){
            $('.times').find('img').addClass('animate');
        }
        if($(this).scrollTop() > $tourOst){
            $('.tour').find('img').addClass('animate');
        }        
        if($(this).scrollTop() > $mountOst){
            $('.mount').find('img').addClass('animate');
        }
        if($(this).scrollTop() > $numberGameOst){
            $('.numberGame').find('img').addClass('animate');
        }
        if($(this).scrollTop() > $mountOst){
            $('.mount').find('img').addClass('animate');
        }
        if($(this).scrollTop() > $louisvuittonOst){
            $('.louisvuitton').find('img').addClass('animate');
        }
        if($(this).scrollTop() > $byeOst){
            $('.bye').find('.contact-Box').addClass('contactBox');
        }
    })
})
