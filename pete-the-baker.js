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
