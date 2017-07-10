(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;
  itemAdder.itemList=ShoppingListService.getAvailableItems();

  itemAdder.addItem = function (index) {
    ShoppingListService.addItem(itemAdder.itemList[index].name, itemAdder.itemList[index].quantity);
    ShoppingListService.removeAvailableItem(index);
  }
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;
  showList.items = ShoppingListService.getAddedItems();
}

function ShoppingListService() {
  var service = this;
  var availableItems= [
    {name: "Cookies", quantity: 10},
    {name: "Chips", quantity: 7},
    {name: "Soft Drinks", quantity: 6},
    {name: "Beers", quantity: 9},
    {name: "Biscuits", quantity: 8},
    {name: "Pretzels", quantity: 7},
    {name: "Doughnuts", quantity: 5},
    {name: "Milkshakes", quantity: 4},
    {name: "Juices", quantity: 2},
    {name: "Chocolates", quantity: 10},
    {name: "Pop Corns", quantity: 20}
  ];

  var addedItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    addedItems.push(item);
  };

  service.removeAvailableItem = function (index) {
    availableItems.splice(index,1);
  }

  service.getAddedItems = function () {
    return addedItems;
  };

  service.getAvailableItems = function () {
    return availableItems;
  }
}

})();
