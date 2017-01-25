/*
function GetCost(CostPerUnit, Quantity){
 return CostPerUnit*Quantity;
}
*/

define(["Product"], function(Product){
  return {
    GetCost: function (CostPerUnit, Quantity){                
                 return CostPerUnit*Quantity;
                },
    GetTotalCost: function(Quantity){
      var _product = Product.GetProduct();
      return _product.CostPerUnit * Quantity;
    }

  };
});