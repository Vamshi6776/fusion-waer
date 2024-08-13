document.addEventListener('DOMContentLoaded', () => {
    const items = [
      { name: 'Apple', url: '/product/apple' },
      { name: 'Banana', url: '/product/banana' },
      { name: 'Carrot', url: '/product/carrot' },
      { name: 'Date', url: '/product/date' },
      { name: 'Eggplant', url: '/product/eggplant' },
      { name: 'Fig', url: '/product/fig' },
      { name: 'Grape', url: '/product/grape' },
      { name: 'Honeydew', url: '/product/honeydew' }
    ];
  
    const itemList = document.getElementById('item-list');
    const searchField = document.getElementById('search-field');
  
    function populateItemList(items) {
      itemList.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.name;
        a.className = 'item-link';
        li.appendChild(a);
        itemList.appendChild(li);
      });
    }
  
    function filterItems(query) {
      const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
      populateItemList(filteredItems);
    }
  
    // Populate list on page load
    populateItemList(items);
  
    document.getElementById('search-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      const query = searchField.value.trim();
      filterItems(query);
    });
  
    searchField.addEventListener('input', function() {
      const query = searchField.value.trim();
      filterItems(query);
    });
  });
  