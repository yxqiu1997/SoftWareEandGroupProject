/**
 * Created by jetamie on 2018/4/2.
 */
$(function () {
    var mh=$('header').height()
    var wh=$(window).height()
    $("#setHeight").css("height",wh-mh)
    $(".nav-link").hover(function () {
        $(this).css("background","#cf7500")
    },function () {
        $(this).css("background","#f0a500")
    })

    $("#mi-f").addClass("fa-folder")
    var bool_f=false
    $("#mi-folder").click(function () {
        if(bool_f) {
            $("#mi-f").addClass("fa-folder")
            $("#mi-f").removeClass("fa-folder-open")
            bool_f=false
        }else {
            $("#mi-f").addClass("fa-folder-open")
            $("#mi-f").removeClass("fa-folder")
            bool_f=true
        }
    })
})
$("li").click(function() {
    var val=$(this).attr("id");
    if(val=="account"){
        $('#mi-account').show();
        $('#mi-note').hide();
        $('#mi-chart').hide();
    }else if(val=="chart"){
        $('#mi-chart').show();
        $('#mi-note').hide();
        $('#mi-account').hide();
    }else if(val=="note"){
        $('#mi-note').show();
        $('#mi-account').hide();
        $('#mi-chart').hide();
    }
})