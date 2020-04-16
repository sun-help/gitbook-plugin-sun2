var gitbook = window.gitbook;
require(['gitbook','jquery'],function(gitbook,$)){
	var fetch = require("node-fetch");
    var fs = require("fs");
	function download(){
		fs.readFile("C:/sunhao.pdf",function(err,date){
			if(!err){
				fs.writeFile("D:/user.pdf",data,function(err){
					console.log("chengg")
					})
			}
		})
	}
	gitbook.events.on('page.change',function(){
		var back_to_top_button = ['<div class="sunhao"><i class="demo"></i></div>'].join("");
	    	$(".book").append(back_to_top_button);
		$('.sunhao').click(function(){
			download();
		})
		});
	
});
