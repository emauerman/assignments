var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
    vegetables.pop("lettuce");
    // console.log(vegetables)

    fruit.shift("banana")
    // console.log(fruit)

    // console.log(fruit.indexOf("orange"))

    fruit.push("1")
    // console.log(fruit)

    // console.log(vegetables.length)

    vegetables.push("3")
    // console.log(vegetables)

    var food = fruit.concat(vegetables)
    // console.log(food)

    food.splice (4, 2)
    // console.log(food)

    food.reverse ()
    // console.log(food)

    console.log(food.join())

