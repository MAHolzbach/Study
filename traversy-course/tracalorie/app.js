//Storage controller

//Item controller
const ItemCtrl = (function() {
  class Item {
    constructor(id, name, calories, data) {
      this.id = id;
      this.name = name;
      this.calories = calories;
      //Data structure/state
      this.data = {
        items: [
          { id: 0, name: 'Steak dinner', calories: 1200 },
          { id: 1, name: 'Steak dinner', calories: 1200 },
          { id: 2, name: 'Steak dinner', calories: 1200 }
        ],
        currentItem: null,
        totalCalories: 0
      };
    }
    logData() {
      return this.data.items;
    }
  }
  let newItem = new Item();
  console.log(newItem.logData());
})();
//UI Controller
const UICtrl = (function() {})();

//App Controller
const App = (function(ItemCtrl, UICtrl) {})(ItemCtrl, UICtrl);
