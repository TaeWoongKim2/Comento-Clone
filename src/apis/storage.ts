export function saveItem(key:string, value:any) {
  localStorage.setItem(key, value);
}

export function loadItem(key:string) {
  return localStorage.getItem(key);
}
