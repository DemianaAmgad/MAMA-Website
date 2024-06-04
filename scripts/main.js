// show the list when I click on the picture and make it a little bit bigger when the mouseover 
document.addEventListener("DOMContentLoaded", function() {
    const dataset = [ // db prototype
        { id: "1", name: "Demiana", rating: "4.5/5", specialty: "Italian cuisine" },
        { id: "2", name: "Mother 2", rating: "4.8/5", specialty: "Indian cuisine" },
        { id: "3", name: "Mother 3", rating: "4.3/5", specialty: "Egyptian cuisine" }
    ];

    const images = document.querySelectorAll(".gallery-container img");
    const modal = document.getElementById("myModal");
    const motherName = document.getElementById("motherName");
    const motherSpecialty = document.getElementById("motherSpecialty");
    const motherRating = document.getElementById("motherRating");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("mouseover", function() {
            img.style.transform = "scale(1.1)";
        });

        img.addEventListener("mouseout", function() {
            img.style.transform = "scale(1)";
        });

        // Ensure smooth transition
        img.style.transition = "transform 0.3s ease";

        // Show modal on click
        img.addEventListener("click", function() {
            const dishId = img.dataset.id;
            const dishDetails = dataset.find(dish => dish.id === dishId);

            if (dishDetails) {
                motherName.textContent = `Prepared by  ${dishDetails.name}`;
                motherSpecialty.textContent = `She is special at preparing  ${dishDetails.specialty}`;
                motherRating.textContent = `Her rating over the previous orders is  ${dishDetails.rating}`;
                modal.style.display = "block";
            }
        });
    });

    // Close the modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Contact form validation
    const contactForm = document.getElementById("contactForm");
    const contactName = document.getElementById("name");
    const contactEmail = document.getElementById("email");
    const contactMessage = document.getElementById("message");
    const contactSuccessMessage = document.getElementById("successMessage");

    const contactNameError = document.getElementById("nameError");
    const contactEmailError = document.getElementById("emailError");
    const contactMessageError = document.getElementById("messageError");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let isContactValid = true;

            // Clear previous error messages
            contactNameError.textContent = "";
            contactEmailError.textContent = "";
            contactMessageError.textContent = "";

            // Validate name
            if (contactName.value.trim() === "") {
                contactNameError.textContent = "Please enter your name!";
                isContactValid = false;
            }

            // Validate email
            if (contactEmail.value.trim() === "") {
                contactEmailError.textContent = "Please enter your email!";
                isContactValid = false;
            } else if (!validateEmail(contactEmail.value.trim())) {
                contactEmailError.textContent = "Please enter a valid email address!";
                isContactValid = false;
            }

            // Validate message
            if (contactMessage.value.trim() === "") {
                contactMessageError.textContent = "Please enter your message!!";
                isContactValid = false;
            }

            // If all fields are valid, show success message
            if (isContactValid) {
                contactSuccessMessage.style.display = "block";
                setTimeout(() => {
                    contactSuccessMessage.style.display = "none";
                    contactForm.reset();
                }, 3000);
            }
        });
    }

    // Order form validation
    const orderForm = document.getElementById("orderForm");
    const orderMeal = document.getElementById("meal");
    const orderMother = document.getElementById("mother");
    const orderQuantity = document.getElementById("quantity");
    const successMessage = document.getElementById("successMessage");

    const orderMealError = document.getElementById("mealError");
    const orderMotherError = document.getElementById("motherError");
    const orderQuantityError = document.getElementById("quantityError");

    if (orderForm) {
        orderForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let isOrderValid = true;

            // Clear previous error messages
            orderMealError.textContent = "";
            orderMotherError.textContent = "";
            orderQuantityError.textContent = "";

            // Validate meal selection
            if (orderMeal.value === "") {
                orderMealError.textContent = "Please select a meal!";
                isOrderValid = false;
            }

            // Validate mother selection
            if (orderMother.value === "") {
                orderMotherError.textContent = "Please select a mother!";
                isOrderValid = false;
            }

            // Validate quantity
            if (orderQuantity.value === "" || orderQuantity.value <= 0) {
                orderQuantityError.textContent = "Please enter a valid quantity!";
                isOrderValid = false;
            }

            // If all fields are valid, show success message
            if (isOrderValid) {
                successMessage.style.display = "block";
                setTimeout(() => {
                    successMessage.style.display = "none";
                    orderForm.reset();
                }, 3000);
            }
        });
    }

    // Sign up form validation
    const signUpForm = document.getElementById("signupForm");
    const usernameForm = document.getElementById("username");
    const passwordForm = document.getElementById("password");
    const emailForm = document.getElementById("email");
    const roleMother = document.getElementById("role-mother");
    const roleStudent = document.getElementById("role-student");

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const emailError = document.getElementById("emailError");
    const roleMotherError = document.getElementById("roleMotherError");

    if (signUpForm) {
        signUpForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;
    
            if (usernameForm.value === "") {
                usernameError.textContent = "Please enter a username!";
                isValid = false;
            }
    
            if (emailForm.value === "") {
                emailError.textContent = "Please enter an email!";
                isValid = false;
            }
    
            if (passwordForm.value === "") {
                passwordError.textContent = "Please enter a password!";
                isValid = false;
            }
    
            if (!roleMother.checked && !roleStudent.checked) {
                roleMotherError.textContent = "Please select a role!";
                isValid = false;
            }
    
            // If all fields are valid, show success message
           if (isValid) {
                successMessage.style.display = "block";
                setTimeout(() => {
                    successMessage.style.display = "none";
                    signUpForm.reset();
                }, 3000);
            }
        });
    }
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// mother profile handler
document.addEventListener("DOMContentLoaded", function() {
    // profiles dataset
    const profiles = [
        { id: "1", name: "Demiana", rating: "4.5/5", specialty: "Italian cuisine", description: "Mother 1 is an expert in Italian cuisine with over 20 years of experience...", offeredDishes: "Offered Dishes:, Pizza, Italian pasta,Lasagna, Risotto", image: "pictures/mother1.jpeg" },
        { id: "2", name: "Mother 2", rating: "4.8/5", specialty: "Indian cuisine", description: "Mother 2 specializes in Indian cuisine and has a passion for creating authentic flavors...", offeredDishes: "Offered Dishes:, Curry, Korma, Chicken Bryani, Noodles ",image: "pictures/mother2.jpeg" },
        { id: "3", name: "Mother 3", rating: "4.3/5", specialty: "Egyptian cuisine", description: "Mother 3 brings the rich and diverse flavors of Egyptian cuisine to life...", offeredDishes: "Offered Dishes:, Koshary, Mahshy, Pasta with Bachamel ",image: "pictures/mother3.jpeg" }
    ];

    const profileButtons = document.querySelectorAll(".profile-button");
    const modal = document.getElementById("profileModal");
    const modalName = document.getElementById("modalName");
    const modalSpecialty = document.getElementById("modalSpecialty");
    const modalRating = document.getElementById("modalRating");
    const modalDescription = document.getElementById("modalDescription");
    const modalDishes = document.getElementById("modalDishes");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    profileButtons.forEach(button => {
        button.addEventListener("click", function() {
            const profileId = this.getAttribute("data-profile-id");
            const profileDetails = profiles.find(profile => profile.id === profileId);

            if (profileDetails) {
                modalName.textContent = `Name: ${profileDetails.name}`;
                modalSpecialty.textContent = `Specialty: ${profileDetails.specialty}`;
                modalRating.textContent = `Rating: ${profileDetails.rating}`;
                modalDescription.textContent = profileDetails.description;
                modalDishes.innerHTML = profileDetails.offeredDishes.split(',').join('<br>');
                modalImage.src = profileDetails.image;
                modal.style.display = "block";
            }
        });
    });

    // Close the modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
