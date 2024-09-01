document.addEventListener('DOMContentLoaded', () => {
    // Function to add a new recipe
    const recipeForm = document.getElementById('recipeForm');
    const recipeContainer = document.getElementById('recipeContainer');

    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the input values
        const recipeName = document.getElementById('recipeName').value;
        const ingredients = document.getElementById('ingredients').value;
        const category = document.getElementById('category').value;
        const instructions = document.getElementById('instructions').value;

        // Create a new recipe element
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <h3>${recipeName}</h3>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
            <button class="close-button">X</button>
        `;

        // Append the new recipe to the container
        recipeContainer.appendChild(recipeItem);

        // Clear the form inputs
        recipeForm.reset();

        // Attach delete event to the new close button
        recipeItem.querySelector('.close-button').addEventListener('click', () => {
            recipeItem.remove();
        });
    });

    // Event delegation for existing recipes (if any)
    recipeContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-button')) {
            event.target.parentElement.remove();
        }
    });
});

