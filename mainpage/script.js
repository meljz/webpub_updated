
   const products = [
    {
      name: "Food Storage Set",
      price: "₱250.00",
      image: "image/food_container.jpg",
      alt: "Food Container"
    },
    {
      name: "Water Jug 5L",
      price: "₱180.00",
      image: "image/water_jug.jpg",
      alt: "Water Jug"
    },
    {
      name: "Garbage Bin",
      price: "₱95.00",
      image: "image/garbage.jpg",
      alt: "Garbage Bin"
    },
    {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    },
     {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    },
     {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    },
     {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    },
     {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    },

     {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    }, {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    },

     {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    },
     {
      name: "Storage Box 10L",
      price: "₱350.00",
      image: "image/broom.jpg",
      alt: "Storage Box"
    }

  ];

  const productList = document.getElementById("productList");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.alt}" />
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="btn">Add to Cart</button>
    `;
    productList.appendChild(card);
  });

function displayInput() {
  const form = document.getElementById("signupForm");
  const outputBox = document.getElementById("outputContainer");
  const output = document.getElementById("submittedData");

  output.innerHTML = ""; // Clear previous entries

  const gender = form.querySelector('input[name="gender"]:checked');
  const genderValue = gender ? gender.value : "";

  const entries = [
    { label: "First Name", value: form.first_name.value },
    { label: "Last Name", value: form.last_name.value },
    { label: "Gender", value: genderValue },
    { label: "Address", value: form.address.value },
    { label: "Contact Number", value: form.contact.value },
    { label: "Email", value: form.email.value },
    { label: "Date of Birth", value: form.dob.value },
    { label: "Username", value: form.username.value },
    { label: "Password", value: form.password.value }
  ];

  entries.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.label}: ${entry.value}`;
    output.appendChild(li);
  });

  // Show the output box
  outputBox.style.display = "block";

  // Reset the form
  form.reset();
  document.getElementById("resetBtn").addEventListener("click", () => {
  const outputBox = document.getElementById("outputContainer");
  const output = document.getElementById("submittedData");

  // Hide output box and clear list
  outputBox.style.display = "none";
  output.innerHTML = "";
});
v
}
