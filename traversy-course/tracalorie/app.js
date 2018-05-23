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

  const data = {
    items: [],
    currentItem: null,
    totalCalories: 0
  };

  return {
    getItems: () => {
      return data.items;
    },
    addItem: (name, calories) => {
      let ID;

      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      calories = parseInt(calories);

      newItem = new Item(ID, name, calories);

      data.items.push(newItem);

      return newItem;
    },
    getTotalCalories: () => {
      let total = 0;
      data.items.forEach(item => {
        total += item.calories;
      });
      data.totalCalories = total;

      return data.totalCalories;
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
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
    addBtn: '.add-btn',
    updateBtn: '.update-button',
    deleteBtn: '.delete-button',
    backBtn: '.back-button'
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
    },
    addListItem: item => {
      document.querySelector(UISelectors.itemList).style.display = 'block';

      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `
				<strong>${item.name}</strong>
				<em>${item.calories} Calories</em>
				<a href="#" class="secondary-content">
					<i class="edit-item fa fa-pencil-alt"></i>
				</a>
			`;

      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },
    clearInput: () => {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: () => {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: total => {
      document.querySelector(UISelectors.totalCalories).textContent = total;
    },
    clearEditState: () => {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
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
      UICtrl.addListItem(newItem);
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      UICtrl.clearInput();
    }
  };

  return {
    init: function() {
      const items = ItemCtrl.getItems();
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        UICtrl.populateItemList(items);
      }
      UICtrl.clearEditState();
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

App.init();
