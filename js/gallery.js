$(window).on('load resize', function(){
    //写真の高さ取得
    var photoH = $(".mod_gallery_photo>img").innerHeight();
    $(".mod_gallery_photo").css("height",photoH+"px"); 
});
$(function(){
    var click_flg = false;
    $(".mod_gallery_navi a").click(function(){
     if(click_flg == false) {
            click_flg = true;
            var classname = $(this).attr("class");
            $("div."+classname+" img").before("<img class='demo' src='"+$(this).attr("href")+"' alt=''>");
            $("div."+classname+" img:last").stop(true, false).fadeOut("fast",function(){
             $(this).remove();click_flg = false;});
                 return false;
        }else{
            return false;
        }
    });
});