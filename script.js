// Create container
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

// Apply styles directly with JavaScript
container.style.width = '60%';
container.style.margin = 'auto';
container.style.fontFamily = 'Arial, sans-serif';

// Function to handle resizing for smaller screens
function applyResponsiveStyles() {
  if (window.innerWidth <= 768) {
    container.style.width = '90%';
    h1.style.fontSize = '200%';
  } else {
    container.style.width = '60%';
    h1.style.fontSize = 'initial';
  }
}

// Run on window resize
window.onresize = applyResponsiveStyles;
applyResponsiveStyles();

// Create header with image
const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = 'How to make Tea';
h1.style.textAlign = 'center';
header.appendChild(h1);

const img = document.createElement('img');
img.src = 'https://codeinstitute.s3-eu-west-1.amazonaws.com/5DCC/images/Content/oSVKMED.jpg';
img.alt = 'A man drinking tea';
header.appendChild(img);

const p = document.createElement('p');
p.textContent = 'At the very least, tea is a flavourful way of getting enough fluid into your body each day. On top of that, studies have shown teas can help protect your teeth and your heart';
header.appendChild(p);
container.appendChild(header);

// Create ingredients section
const ingredientsSection = document.createElement('section');
ingredientsSection.id = 'ingredients-section';
ingredientsSection.onmouseover = ingredientsHover;
ingredientsSection.onmouseout = ingredientsNormal;

const ingredientsHeading = document.createElement('h2');
ingredientsHeading.style.textAlign = 'center';
const ingredientsIcon = document.createElement('i');
ingredientsIcon.id = 'ingredients';
ingredientsIcon.className = 'fa fa-leaf';
ingredientsIcon.style.marginRight = '10px';
ingredientsHeading.appendChild(ingredientsIcon);
ingredientsHeading.appendChild(document.createTextNode(' Ingredients'));
ingredientsSection.appendChild(ingredientsHeading);

const ingredientsList = document.createElement('ul');
['Tea Bag', 'Water', 'Milk - Dairy/Plant based (Optional)', 'Sugar/Honey (Optional)'].forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ingredientsList.appendChild(li);
});
ingredientsSection.appendChild(ingredientsList);
container.appendChild(ingredientsSection);

// Create preparation section
const preparationSection = document.createElement('section');
preparationSection.id = 'preparation-section';
preparationSection.onmouseover = preparationHover;
preparationSection.onmouseout = preparationNormal;

const preparationHeading = document.createElement('h2');
preparationHeading.style.textAlign = 'center';
const preparationIcon = document.createElement('i');
preparationIcon.id = 'preparation';
preparationIcon.className = 'fa fa-coffee';
preparationIcon.style.marginRight = '10px';
preparationHeading.appendChild(preparationIcon);
preparationHeading.appendChild(document.createTextNode(' Preparation'));
preparationSection.appendChild(preparationHeading);

const preparationList = document.createElement('ol');
[
  "Run the tap a little so the water's nicely aerated, and only boil it once to keep the oxygen level up. Oxygen in water helps flavour!",
  'Pop a tea bag into your mug (always a big mug)',
  'Pour the hot water over the tea bag and stir briefly.',
  'Give it 3-4 minutes to unlock all its flavour.',
  'Gently squish the tea bag with a spoon. Not too much or it’ll turn bitter.',
  'Add milk, sugar, or enjoy plain.'
].forEach(step => {
  const li = document.createElement('li');
  li.textContent = step;
  preparationList.appendChild(li);
});
preparationSection.appendChild(preparationList);
container.appendChild(preparationSection);

// Create footer
const footer = document.createElement('footer');
const copyright = document.createElement('p');
copyright.textContent = 'Copyright Me 2020';
footer.appendChild(copyright);
container.appendChild(footer);

// Styling footer
footer.style.textAlign = 'center';
footer.style.padding = '20px 0';

// Hover effects for ingredients
function ingredientsHover() {
  document.getElementById("ingredients").style.fontSize = "300%";
}

function ingredientsNormal() {
  document.getElementById("ingredients").style.fontSize = "100%";
}

// Hover effects for preparation
function preparationHover() {
  document.getElementById("preparation").style.fontSize = "300%";
}

function preparationNormal() {
  document.getElementById("preparation").style.fontSize = "100%";
}
