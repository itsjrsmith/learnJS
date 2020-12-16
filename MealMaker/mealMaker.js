
// Set up menu object

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
  
  
    get appetizers() {
      return this.appetizers;
    },
    set appetizers(appetizer) {
      this.appetizers.push(appetizer);
    },
  
  
    get mains() {
      return this.mains;
    },
    set mains(main) {
      this.mains.push(main);
    },
  
  
    get desserts() {
      return this.desserts;
    },
    set desserts(dessert) {
      this.desserts.push(dessert);
    },
  
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
  
  
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
  
  
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      let index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
  
  
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      
      let total = appetizer.price + main.price + dessert.price;
  
      return `To start, ${appetizer.name}, followed by ${main.name} and of course ${dessert.name} to finish. Price? It's on the menu but - $${total}.`;
    }
  };
  
  
// Test menu by adding on dishes and printing

  menu.addDishToCourse('appetizers', 'pot stickers', 7);
  menu.addDishToCourse('appetizers', 'edemame', 7);
  menu.addDishToCourse('appetizers', 'wings', 10);
  
  menu.addDishToCourse('mains', 'tacos', 12);
  menu.addDishToCourse('mains', 'burger', 12);
  menu.addDishToCourse('mains', 'steak', 15);
  
  menu.addDishToCourse('desserts', 'icecream', 6);
  menu.addDishToCourse('desserts', 'cheesecake', 7);
  menu.addDishToCourse('desserts', 'flan', 6);
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal);