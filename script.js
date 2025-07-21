
   const products = [
    {
      name: "Mini Wok",
      price: "₱250.00",
      image: "image/palengke_image_1.jpg",
      alt: "Mini Wok"
    },
    {
      name: "Container Bucket (timba)",
      price: "₱180.00",
      image: "image/palengke_image_2.jpg",
      alt: "Container Bucket (timba)"
    },
    {
      name: "Toilet Brush",
      price: "₱95.00",
      image: "image/palengke_image_3.jpg",
      alt: "Toilet Brush"
    },
    {
      name: "Container Bucket (timba)",
      price: "₱350.00",
      image: "image/palengke_image_4.jpg",
      alt: "Container Bucket (timba)"
    },
     {
      name: "Jug",
      price: "₱350.00",
      image: "image/palengke_image_5.jpg",
      alt: "Jug"
    },
     {
      name: "Water Dipper",
      price: "₱350.00",
      image: "image/palengke_image_6.jpg",
      alt: "Water Dipper"
    },
     {
      name: "Foot Doormat",
      price: "₱350.00",
      image: "image/palengke_image_7.jpg",
      alt: "Foot Doormat"
    },
     {
      name: "Chicken Feather Brush",
      price: "₱350.00",
      image: "image/palengke_image_8.jpg",
      alt: "Chicken Feather Brush"
    },

     {
      name: "Brush",
      price: "₱350.00",
      image: "image/palengke_image_9.jpg",
      alt: "Brush"
    }, {
      name: "Whisk",
      price: "₱350.00",
      image: "image/palengke_image_10.jpg",
      alt: "Whisk"
    },

     {
      name: "Drinking Glass",
      price: "₱350.00",
      image: "image/palengke_image_11.jpg",
      alt: "Drinking Glass"
    },
     {
      name: "Kawali",
      price: "₱350.00",
      image: "image/palengke_image_12.jpg",
      alt: "Kawali"
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
