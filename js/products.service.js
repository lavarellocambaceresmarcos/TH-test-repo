export async function getProducts() {
  return await fetch("./data/data.json").then((response) => response.json());
}
