$(function(){

    $(".menu_toggle_btn").click(function(){

        $(".gnb").stop().slideToggle();

    })/* click */

    $(".search_select_box span").hover(function(){
        // $(this).stop().next().slideDown();
        $(".search_select_list").stop().slideDown()
    }, function(){
        $(".search_select_list").stop().slideUp()
    })/* hover */

    


})//jQ fin.