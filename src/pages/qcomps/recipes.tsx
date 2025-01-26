export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function getIngredients(ingredients: Set<string>) {
  const list: JSX.Element[] = [];
  ingredients.forEach(value =>
      list.push(
          <li key={value}>{value}</li>
      ));
  return list;
}

export default function RecipeList() {
  const listItems = recipes.map(recipe =>
      <li key={recipe.id}>
      <h2>{recipe.name}</h2>
        <ul>{getIngredients(recipe.ingredients)}</ul>
      </li>
  );
  return (
    <div>
      <h1>Recipes</h1>
      {listItems}
    </div>
  );
}