const { Post } = require('../models');

// recipes found at allrecipes.com
const postdata = [
  {
    title: 'Orange Pinapple Drink',
    recipe: '⅔ cup orange juice, ⅓ cup pineapple juice, 3 scoops orange sherbet, 2 pineapple ring, alcohol (optional). Place orange juice, pineapple juice, and orange sherbet into a blender, and blend until smooth. Pour into two glasses, and garnish each with a pineapple ring.',
    user_id: 1
  },
  {
    title: 'Chicken Parmesan Sandwich',
    recipe: '6 frozen chicken nuggets, 2 tablespoons tomato sauce, 1 hamburger bun, split, 1 slice American cheese, 1 tablespoon grated Parmesan cheese. Step 1: Place the chicken nuggets on a microwave-safe plate. Cook in microwave until hot in the middle, about 2 minutes. Step 2: Spread 1 tablespoon tomato sauce on one piece of the hamburger bun; cover the sauce with the American cheese slice. Arrange the chicken nuggets onto the cheese. Pour the remaining tomato sauce over the nuggets; sprinkle with the Parmesan cheese. Top with the other half of the hamburger bun to finish the sandwich.',
    user_id: 3
  },
  {
    title: 'Steak Alfredo',
    recipe: ' ALFREDO: 1 ½ cups 2% milk, 1 ½ cups heavy cream, ½ cup grated Parmesan cheese , ½ cup grated Romano cheese, 6 jumbo egg yolks , salt and ground black pepper to taste. MARINADE: 1 ½ cups Italian-style salad dressing, 1 tablespoon fresh rosemary, 1 tablespoon lemon juice, 2 pounds flat iron steak, cut into 3-inch squares, 4 cups chopped fresh spinach, 4 tablespoons crumbled Gorgonzola cheese, divided, 1 pound dry fettuccine pasta, 2 tablespoons balsamic glaze, chopped fresh parsley, or as needed. Step 1: Heat milk and cream in a saucepan over medium heat until simmering, about 5 minutes. Slowly whip in Parmesan and Romano cheeses and remove from heat. Whisk egg yolks together in a heat-proof bowl and slowly add about 1/4 cup of the hot sauce to temper eggs. Whisk egg mixture into the saucepan slowly. Season with salt and pepper. Allow Alfredo sauce to cool and refrigerate until needed. Step 2: Combine salad dressing, rosemary, and lemon juice in a large bowl. Add steak and stir to coat. Marinate in the refrigerator for 4 hours. Step 3: When ready to prepare the meal, preheat an outdoor grill for medium heat and lightly oil the grate. Step 4: Fill a large pot with lightly salted water and bring to a rolling boil. Cook fettuccine at a boil until tender yet firm to the bite, about 8 minutes. Step 5: Heat 2 cups refrigerated Alfredo sauce in a saucepan over medium heat. Add spinach and 2 tablespoons Gorgonzola cheese. Step 6: Remove steak from marinade and cook on the preheated grill to desired doneness, 5 to 10 minutes. Step 7: Pour hot Alfredo sauce into a large serving bowl. Add cooked pasta and mix to combine. Sprinkle remaining Gorgonzola cheese on top. Add grilled steak and drizzle the meat with balsamic glaze. Garnish with parsley.: ',
    user_id: 1
  },
  {
    title: 'Baked Penne',
    recipe: '¼ cup all-purpose flour, or more as needed, 1 (16 ounce) package refrigerated pizza crust, 1 tablespoon cornmeal, or as needed, 6 cups water, ⅓ cup baking soda, coarse salt. Step 1:  Heat oven to 350 degrees F. Step 2: Brown meat with vegetables in large nonstick skillet. Stir in spaghetti sauce, 3/4 cup cooking creme and 1/2 cup mozzarella: cook and stir 2 to 3 min. or until mozzarella is melted. Add pasta; mix lightly. Step 3: Spoon into 2-qt. casserole; top with remaining cooking creme and mozzarella. Cover. Step 4: Bake 20 min. or until heated through, uncovering after 15 min.',
    user_id: 4
  },
  {
    title: 'Banana Tortilla Snack',
    recipe: '1 (6 inch) flour tortilla, 2 tablespoons peanut butter, 1 tablespoon honey, 1 banana, 2 tablespoons raisins. Step 1: Spread peanut butter and honey on tortillas. Step 2: sprinkle raisins and put banana on tortilla.',
    user_id: 2
  },
  {
    title: 'Trail Mix',
    recipe: '¼ cup almonds, ¼ cup walnuts, ¼ cup sunflower seeds, ¼ cup dried cranberries, ¼ cup raisins, ¼ cup semisweet chocolate chips (Optional). Step 1: Combine all ingredients.',
    user_id: 4
  },
  {
    title: 'Minestrone Soup',
    recipe: '3 tablespoons olive oil, 3 cloves garlic, chopped, 2 onions, chopped, 2 cups chopped celery, 5 carrots, sliced, 2 cups chicken broth, 2 cups water, 4 cups tomato sauce, ½ cup red wine (Optional), 1 cup canned kidney beans, drained, 1 (15 ounce) can green beans, 2 cups baby spinach, rinsed, 3 zucchinis, quartered and sliced, 1 tablespoon chopped fresh oregano, 2 tablespoons chopped fresh basil, salt and pepper to taste, ½ cup seashell pasta, 2 tablespoons grated Parmesan cheese for topping, 1 tablespoon olive oil. Step 1: In a large stock pot, over medium-low heat, heat olive oil and saute garlic for 2 to 3 minutes. Add onion and saute for 4 to 5 minutes. Add celery and carrots, saute for 1 to 2 minutes.Step 2: Add chicken broth, water and tomato sauce, bring to boil, stirring frequently. If desired add red wine at this point. Reduce heat to low and add kidney beans, green beans, spinach leaves, zucchini, oregano, basil, salt and pepper. Simmer for 30 to 40 minutes, the longer the better. Step 3: Fill a medium saucepan with water and bring to a boil. Add macaroni and cook until tender. Drain water and set aside. Step 4: Once pasta is cooked and soup is heated through place 2 tablespoons cooked pasta into individual serving bowls. Ladle soup on top of pasta and sprinkle Parmesan cheese on top. Spray with olive oil and serve.',
    user_id: 1
  },
  {
    title: 'Cajun Fries',
    recipe: '2 tablespoons olive oil, ½ teaspoon Cajun seasoning, ½ (18 ounce) package prepared polenta, cut into 3/4-inch wedges, salt to taste. Step 1: Preheat an air fryer to 356 degrees F (180 degrees C). Step 2: Combine oil and Cajun seasoning in a small bowl. Brush seasoned oil onto the polenta wedges with a pastry brush. Sprinkle lightly with salt. Place the wedges into the bowl of the air fryer, overlapping slightly if needed. Step 3: Cook in the preheated air fryer for 10 minutes. Flip carefully with a silicone spatula. Cook, shaking basket occasionally and using spatula if wedges stick, until crispy, 15 to 20 minutes more.',
    user_id: 1
  },
  {
    title: 'Fried Mashed Potato Cakes',
    recipe: '1 cup leftover mashed potatoes, cooled, 1 egg, 2 ½ tablespoons all-purpose flour, ¼ teaspoon salt, 1 tablespoon vegetable oil, or as needed. Step 1: Mix mashed potatoes, egg, flour, and salt together in a bowl. Step 2: Heat a thin layer of vegetable oil in a frying pan. Drop large spoonfuls of the potato mixture into the frying pan. Flatten into a patties as you flip; cook until browned on both sides, 6 to 7 minutes per cake. Repeat with remaining potato mixture.',
    user_id: 2
  },
  {
    title: 'Honey Bourbon Fire Sauce',
    recipe: '2 quarts water, 1 (750 milliliter) bottle dark rum, 2 cups brown sugar, ¼ cup butter, 3 cinnamon sticks, 6 whole cloves, 1 teaspoon salt, 1 teaspoon ground nutmeg. Step 1: In a large saucepan over medium heat, saute the onion and garlic for 10 to 15 minutes, or until onion is caramelized. Reduce heat to low and pour in about 1 cup of bourbon to deglaze the pan. Return saucepan to medium high heat, add the remaining bourbon, and bring to a slow boil for 5 to 10 minutes, allowing the alcohol to cook out of the bourbon. Step 2: Add the honey, picante sauce, hot pepper sauce, tomato paste, tomato-vegetable juice and ground black pepper and stir well. Bring this mixture to a slow, rolling boil for about 5 to 10 minutes. Remove from heat, cover and cool in the refrigerator. Step 3: Marinate your meat in a separate large, nonporous bowl for 3 to 4 hours, pouring sauce over meat. Boil remaining sauce for 10 minutes and serve with meat, if desired. Discard any excess marinade.',
    user_id: 2
  },
  {
    title: 'Chicken Wings',
    recipe: '2 cups brown sugar, 1 cup yellow mustard, ¼ cup soy sauce, 5 pounds chicken wings, cut into thirds and tips discarded. Step 1: Mix brown sugar, mustard, and soy sauce together in a bowl. Measure 1/4 cup marinade for basting and transfer to a small bowl; cover and refrigerate. Step 2: Place wings in a large resealable bag. Pour remaining marinade over wings, coating well. Seal and marinate wings at least 2 hours and up to overnight. Step 3: Preheat oven to 375 degrees F (190 degrees C). Step 4: Remove chicken wings from resealable bag and transfer to a baking sheet. Discard marinade. Step 5: Bake in the preheated oven for 30 minutes. Baste wings with reserved 1/4 cup marinade; cook, basting every 10 minutes, until chicken is no longer pink in the center, about 30 more minutes.',
    user_id: 3
  },
  {
    title: 'Pig Burger',
    recipe: '2 slices focaccia bread, 1 tablespoon herb mayonnaise, ⅛ cup shredded lettuce, 2 slices ripe tomato, ¼ pound grilled chicken breast, 3 slices bacon, 2 tablespoons guacamole. Step 1: Place bacon in a large, deep skillet. Cook over medium high heat until evenly brown. Drain, crumble and set aside. Step 2: Toast focaccia. Spread mayonnaise on one side of one slice, then top with lettuce, tomato, chicken, bacon and guacamole. Top with second slice of focaccia.',
    user_id: 1
  },
  {
    title: 'Plantain Chips',
    recipe: 'Vegetable oil, for deep-frying, 2 green plantains, peeled and sliced 1/8-inch thick, salt to taste. Step 1: Heat oil in deep-fryer to 375 degrees F (190 degrees C). Step 2: Deep fry the plantain slices, about a dozen at a time, until golden brown on both sides, 3 to 4 minutes. Drain in a large bowl lined with paper towels, and salt to taste while still warm.',
    user_id: 4
  },
  {
    title: 'Lobster Casserole',
    recipe: '3 tablespoons butter, 1 pound lobster meat, cut into bite-sized pieces, 3 tablespoons all-purpose flour, ¾ teaspoon dry mustard, salt and pepper to taste, 1 cup heavy cream, ½ cup milk, 3 slices bread, crust removed. Step 1: Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 2 quart baking dish. Step 2: Melt butter in a medium sized pot over low heat. Saute the lobster meat in butter until it starts to change color. Do not cook too long or too fast, or the lobster meat will toughen. With a slotted spoon, remove lobster meat from pan and set aside. Step 3: To the remaining butter in the pot, stir in the flour, dry mustard, salt and pepper. Gradually whisk in cream and milk. Cook, stirring constantly, until thickened, about 5 minutes. Return lobster meat to the pot. Tear the bread into small pieces and stir into the mixture. Pour into prepared baking dish. Step 4: Bake in preheated oven for 20 to 25 minutes or until bubbly and delicately browned.',
    user_id: 3
  },
  {
    title: 'Crab Cakes',
    recipe: '1 pound fresh crab meat, 1 egg, 2 tablespoons mayonnaise, ½ teaspoon ground mustard, 1 dash Worcestershire sauce, salt and pepper to taste, 4 ounces buttery round crackers, crushed, 2 cups oil for frying, or as needed. Step 1: In a medium-size mixing bowl, combine crabmeat, egg, mayonnaise, mustard powder, Worcestershire sauce, and salt and pepper to taste. Step 2: In a large skillet, heat 1/4 inch of vegetable oil to a high heat. Roll heaping spoonfuls on the crab mixture in the crackers, then place the ball in the hot oil. Flatten lightly with a spatula so that the crab cake is 1/2 inch thick. Fry the crab cakes, flipping to ensure both sides get browned.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

