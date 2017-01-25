// Code goes here

/*
$(document).ready(function() {
  var Product = GetProduct();
  var Quantity = 100;
  var TotalCost = GetCost(Product.CostPerUnit, Quantity);
  document.getElementById("divMessage").innerHTML = 'Cost of ' + Quantity + ' units of Product ' + Product.Name + ' is ' + TotalCost;

});
*/

define(["jquery", "Product", "Cost"], function($, Product, Cost){
  return {
    init: function(){
            $(document).ready(function() {
                var _product = Product.GetProduct();
                var _quantity = 100;
                //var TotalCost = Cost.GetCost(_product.CostPerUnit, _quantity);
                var TotalCost = Cost.GetTotalCost(_quantity);
                document.getElementById("divMessage").innerHTML = 'Cost of ' + _quantity + ' units of Product ' + _product.Name + ' is ' + TotalCost;
              });

          }
  }
})