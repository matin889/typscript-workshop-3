interface Menu {
  name: string;
  menu: string[];
  persons?: number;
}

function updateMenu(menu: Menu, items: Partial<Menu>) {
  return { ...menu, ...items };
}

const menu1 = {
  name: "Breakfast",
  menu: ["Bread", "Fruits", "Coffee"],
  persons: 4,
};

const menu2 = updateMenu(menu1, { persons: 6 });
// console.log(menu2);
const menu3 = updateMenu(menu1, {
  name: "Lunch",
  menu: ["Rice", "Vegetables"],
});
// console.log(menu3);

function showMenu(menu: Required<Menu>) {
  return menu;
}

const newMenu = {
  name: "Dinner",
  menu: ["Pizza", "Fruits", "Milk"],
  persons: 8,
};

// console.log(showMenu(newMenu));

function pickOneItem(menu: Pick<Menu, "name">) {
  return menu;
}

const pickName = {
  name: "Dinner",
};
// console.log(pickOneItem(pickName));
function removeSpecificItem(menu: Omit<Menu, "persons">) {
  return menu;
}

const hideMenu = {
  name: "Dinner",
  menu: ["Pizza", "Fruits", "Milk"],
};
console.log(removeSpecificItem(hideMenu));
