//Storage controller

//Item controller
const ItemCtrl = (function() {
  class Item {
    constructor(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  }
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

  return {
    getItems: () => {
      return data.items;
    },
    addItem: (name, calories) => {
      console.log(name, calories);
    },
    logData: () => {
      return data;
    }
  };
})();

//UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  };
  return {
    populateItemList: items => {
      let html = '';
      items.forEach(item => {
        html += `
      <li id=item-${item.id} class="collection-item">
        <strong>${item.name}</strong>
        <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil-alt"></i>
        </a>
      </li>
      `;
      });
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: () => {
      return UISelectors;
    },
    getItemInput: () => {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    }
  };
})();

//App Controller
const App = (function(ItemCtrl, UICtrl) {
  const loadEventListeners = () => {
    const UISelectors = UICtrl.getSelectors();

    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
  };

  const itemAddSubmit = e => {
    e.preventDefault();

    const input = UICtrl.getItemInput();
    if (input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }
  };

  return {
    init: function() {
      const items = ItemCtrl.getItems();
      UICtrl.populateItemList(items);
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

App.init();
