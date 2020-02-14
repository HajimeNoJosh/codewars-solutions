/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
*/

function cakes(recipe, available) {
  const amount = {}

  const entries = Object.entries(recipe)
    for (const [item, count] of entries) {
      if (available[item]) {
        if(!amount.num) {
          amount.num = Math.floor(available[item] / recipe[item])
        } else if (amount.num > Math.floor(available[item] / recipe[item])){
          amount.num = Math.floor(available[item] / recipe[item])
        }
      } else {
        return 0
      }
    }
  return amount.num
}
