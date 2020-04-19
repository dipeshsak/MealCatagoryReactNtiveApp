class Meal {
    constructor(
        id,
        catagoryIds,
        title,
        affordability,
        complexcity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    ){
        this.id=id,
        this.catagoryIds=catagoryIds,
        this.title=title,
        this.affordability=affordability,
        this.complexcity=complexcity,
        this.imageUrl=imageUrl,
        this.duration=duration,
        this.ingredients=ingredients,
        this.steps=steps,
        this.isGlutenFree=isGlutenFree,
        this.isVegan=isVegan,
        this.isVegetarian=isVegetarian,
        this.isLactoseFree=isLactoseFree
    }
}

export default Meal