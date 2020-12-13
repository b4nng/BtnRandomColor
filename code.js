$(function(){
    const setCor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        var cor = "#" + randomColor;
        $(".btn").css("background-color",cor);
      }
    $(".btn").click(function(){
        setCor();
    });



});
