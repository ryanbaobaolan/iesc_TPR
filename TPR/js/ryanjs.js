// tab高度自适应
  $(".tab_block").css({
  	"height":$(".right").css("height"),
  	"background-color":"#f4ffff"
  })
  // 字数提示
 	function words_count(){
          var curLength=$("#number").val().length;
          if(curLength>500){
              var num=$("#number").val().substr(0,500);
              var over=curLength-500;
               $("#number").val(num);
               alert("超出"+over+"字，多出的字将被删除哦" );
            }else{
               $(".s3").text(
                500-$("#number").val().length);
            }
        }
    // tab_block
    $('.b1 li').last().css('border-bottom','0');
    $('.b2 li').last().css('border-bottom','0');
    $('.b3 li').last().css('border-bottom','0');
    $('.order div').last().css('border-right','0');
    // 表格斑马线
    $('.fhlist_b1 ul li a:odd').addClass('bg_fa');
    $('.pswait .table tbody tr:odd').addClass('bg_fa');
    $('.send .table tbody tr:odd').addClass('bg_fa');

    $('.send .block3 input').focus(function(event) {
      if($(this).val()=='请填写要送审专家的Email'){
          $(this).val('');  
        } 
    });