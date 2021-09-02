const { Post } = require('../models');

// recipes found at allrecipes.com
const postdata = [
  {
    title: 'Orange Pinapple Drink',
    post_url: '⅔ cup orange juice, ⅓ cup pineapple juice, 3 scoops orange sherbet, 2 pineapple ring, alcohol (optional)',
    user_id: 1
  },
  {
    title: 'Chicken Parmesan Sandwich',
    post_url: '6 frozen chicken nuggets, 2 tablespoons tomato sauce, 1 hamburger bun, split, 1 slice American cheese, 1 tablespoon grated Parmesan cheese.',
    user_id: 3
  },
  {
    title: 'Fettuccine Alfredo',
    post_url: '1 lb Fettuccine Pasta, 6 Tablespoons Butter, 1 Garlic Clove (minced), 1 1/2 cups Heavy Cream, 1/4 teaspoon Salt, 1 1/4 cup Shredded Parmesan Cheese, 1/4 teaspoon Pepper, 2 Tablespoons Italian Parsley (optional).',
    user_id: 1
  },
  {
    title: 'Baked Penne',
    post_url: '¼ cup all-purpose flour, or more as needed, 1 (16 ounce) package refrigerated pizza crust, 1 tablespoon cornmeal, or as needed, 6 cups water, ⅓ cup baking soda, coarse salt',
    user_id: 4
  },
  {
    title: 'Banana Tortilla Snack',
    post_url: '1 (6 inch) flour tortilla, 2 tablespoons peanut butter, 1 tablespoon honey, 1 banana, 2 tablespoons raisins',
    user_id: 2
  },
  {
    title: 'Trail Mix',
    post_url: '¼ cup almonds, ¼ cup walnuts, ¼ cup sunflower seeds, ¼ cup dried cranberries, ¼ cup raisins, ¼ cup semisweet chocolate chips (Optional)',
    user_id: 4
  },
  {
    title: 'Minestrone Soup',
    post_url: '3 tablespoons olive oil, 3 cloves garlic, chopped, 2 onions, chopped, 2 cups chopped celery, 5 carrots, sliced, 2 cups chicken broth, 2 cups water, 4 cups tomato sauce, ½ cup red wine (Optional), 1 cup canned kidney beans, drained, 1 (15 ounce) can green beans, 2 cups baby spinach, rinsed, 3 zucchinis, quartered and sliced, 1 tablespoon chopped fresh oregano, 2 tablespoons chopped fresh basil, salt and pepper to taste, ½ cup seashell pasta, 2 tablespoons grated Parmesan cheese for topping, 1 tablespoon olive oil ',
    user_id: 1
  },
  {
    title: 'Cajun Fries',
    post_url: '2 tablespoons olive oil, ½ teaspoon Cajun seasoning, ½ (18 ounce) package prepared polenta, cut into 3/4-inch wedges, salt to taste',
    user_id: 1
  },
  {
    title: 'Fried Mashed Potato Cakes',
    post_url: '1 cup leftover mashed potatoes, cooled, 1 egg, 2 ½ tablespoons all-purpose flour, ¼ teaspoon salt, 1 tablespoon vegetable oil, or as needed.',
    user_id: 2
  },
  {
    title: 'Honey Bourbon Fire Sauce',
    post_url: '2 quarts water, 1 (750 milliliter) bottle dark rum, 2 cups brown sugar, ¼ cup butter, 3 cinnamon sticks, 6 whole cloves, 1 teaspoon salt, 1 teaspoon ground nutmeg',
    user_id: 2
  },
  {
    title: 'Chicken Wings',
    post_url: '2 cups brown sugar, 1 cup yellow mustard, ¼ cup soy sauce, 5 pounds chicken wings, cut into thirds and tips discarded',
    user_id: 3
  },
  {
    title: 'Pig Burger',
    post_url: '2 slices focaccia bread, 1 tablespoon herb mayonnaise, ⅛ cup shredded lettuce, 2 slices ripe tomato, ¼ pound grilled chicken breast, 3 slices bacon, 2 tablespoons guacamole',
    user_id: 1
  },
  {
    title: 'Plantain Chips',
    post_url: 'Vegetable oil, for deep-frying, 2 green plantains, peeled and sliced 1/8-inch thick, salt to taste',
    user_id: 4
  },
  {
    title: 'Lobster Casserole',
    post_url: '3 tablespoons butter, 1 pound lobster meat, cut into bite-sized pieces, 3 tablespoons all-purpose flour, ¾ teaspoon dry mustard, salt and pepper to taste, 1 cup heavy cream, ½ cup milk, 3 slices bread, crust removed',
    user_id: 3
  },
  {
    title: 'Crab Cakes',
    post_url: '1 pound fresh crab meat, 1 egg, 2 tablespoons mayonnaise, ½ teaspoon ground mustard, 1 dash Worcestershire sauce, salt and pepper to taste, 4 ounces buttery round crackers, crushed, 2 cups oil for frying, or as needed',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

