//Skapa ett interface med index signatures där värdet på en key är av generisk typ.
// Här skapar du interfacet

interface storeData<T> {
  [key: string]: T;
}
function createDataStore<T>() {
  const store: storeData<T> = {}; // Byt ut any till ovan definerade interface

  function addItem(key: string, item: T): void {
    store[key] = item;
  }

  function getItem(key: string): T | undefined {
    return store[key];
  }

  return { addItem, getItem }; // Return the functions
}

const stringStore = createDataStore<string>();
stringStore.addItem("greeting", "Hello, world!");
console.log(stringStore.getItem("greeting"));

const numberStore = createDataStore<number>();
numberStore.addItem("age", 30);
console.log(numberStore.getItem("age"));
