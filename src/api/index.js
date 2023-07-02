const STORAGE_KEY = "list";
export function sentData(object) {
  const array = getData();
  array.push(object);
  saveData(array);
}
export function getData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}

export function saveData(array) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
}
