var amount = new Array(101);
for(var i=0; i<amount.length; i++){
	amount[i]=0;
}
$.getJSON("data/products.json",function(data){
	for(var i=1;i<data.length;i++){
		$("#productsbox").append(getProductHtml(data[i]));
	}
});

function getProductHtml(data){
	if( ! data ) return "";
	var product = "<div class='product' data-id='" + data.id + "'>";
	product += "<p class='product-name'>" + data.product + "</p>";
	product += "<p class='product-price'>" + data.price + "</p>";
	product += "<p class='product-detail'>" + data.detail + "</p>";
	product += "<p class='product-btns'><button class='btn btn-warning btn-sm'><span class='glyphicon glyphicon-trash'></button></p>";
	product += "</div>";
	return product;
}

$("body").on("mouseover",".product",function(){
	$(this).draggable({
		helper: "clone"
	});	
});

$("#cartbox").droppable({
	drop: function( event, ui ){
		var target = $(ui.draggable);
		var id = $(target).attr("data-id");
		var name = $(target).children(".product-name").text();
		var detail = $(target).children(".product-detail").text();
		var price = $(target).children(".product-price").text();
		//console.log(id + "/" + name + "/" + detail + "/" + price);
		
		/*var tdids = $(".td-id");
		console.log(tdids);
		if(tdids)*/
		amount[id]+=1;

		if(amount[id]==1){
			var buy= "<tr>";
			buy+="<td class='td-id'>" + id + "</td>"
			buy+="<td>" + name + "</td>"
			buy+="<td>" + detail + "</td>"
			buy+="<td>" + price + "</td>"
			buy+="<td class='td-amount"+id+"'>"+ amount[id] +"</td>";
			buy+="<td></td>";
			buy+="</tr>";
			$("#shoppinglist table tr:last").after(buy);
		}
		else{
			$('.td-amount'+id).text(amount[id]);
		}

	}

});

/*function getShoppingHtml(){
}*/