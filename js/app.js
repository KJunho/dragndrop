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
		console.log(id + "/" + name + "/" + detail + "/" + price);

		var buy= "<tr>";
		buy+="<td>" + id + "</td>"
		buy+="<td>" + name + "</td>"
		buy+="<td>" + detail + "</td>"
		buy+="<td>" + price + "</td>"
		buy+="<td></td>";
		buy+="<td></td>";
		buy+="</tr>";
		$("#shoppinglist table tr:last").after(buy);
	}

});

/*function getShoppingHtml(){
}*/