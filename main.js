
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which ===13){

		//taking text from input
		var value=$(this).val();
		$(this).val(""); //setter
		//appending lis
		$("ul").append("<li><span><i class='fa fa-trash-o' area-hidden='true'></i></span>"+value+"</li>")
	}
}); 
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});