/**
 * Created by shenjian on 2017/4/25.
 */
$(function(){
    $("#box ul li").hover(function(e){
        //划入事件
        //console.log(1);
        //获取x,y轴的距离
        var x=e.pageX;
        var y=e.pageY;
        var top=$(this).offset().top;//获取元素距离浏览器的距离
        var bottom=top+$(this).height();//获取元素距离浏览器的距离
        var left=$(this).offset().left;//获取元素距离浏览器的距离
        var right=left+$(this).width();//获取元素距离浏览器的距离
        var sT=Math.abs(y-top);//获取当前鼠标距离元素的值
        var sB=Math.abs(y-bottom);
        var sL=Math.abs(x-left);
        var sR=Math.abs(x-right);
        var min=Math.min(sT,sB,sL,sR);
        console.log(sT,sB,sL,sR,min);
        switch (min){
            case sT:
                $(this).find("a").css({left:'0',top:'-360px'})
                    .stop().animate({
                    //发生动画运动下来
                    top:0
                },1000);
                break;
            case sB:
                $(this).find("a").css({left:'0',top:'360px'})
                    .stop().animate({
                    //发生动画运动下来
                    top:0
                },1000);
                break;
            case sL:
                $(this).find("a").css({left:'-230px',top:'0'})
                    .stop().animate({
                    //发生动画运动下来
                    left:0
                },1000);
                break;
            case sR:
                $(this).find("a").css({left:'230px',top:'0'})
                    .stop().animate({
                    //发生动画运动下来
                    left:0
                },1000);
                break;
        }
    },function(e){
        //划出事件
        console.log(2);
    });

});