let links = ["Home", "Features", "Pricing", "About", "Contact"];
let activeLink = 2;
function print(arr, activeLink) {
  let result = arr.map((item, index) => {
    if (index === activeLink) {
      return item + " active";
    } else {
      return item;
    }
  });
  return result;
}
console.log(print(links, activeLink));
