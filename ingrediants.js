var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var i = 0;
console.log("\nFor loop time \n");
while(i<ingredients.length){
	console.log(ingredients[i]);
	i++;
}
console.log("\nFor loop time \n");
// Write a for loop that prints out the contents of ingredients:
for(i=0;i<ingredients.length;i++){
	console.log(ingredients[i]);
}
console.log("\nBackwards loop time \n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(i=1;i<=ingredients.length;i++){
	console.log(ingredients[ingredients.length-i]);	
}