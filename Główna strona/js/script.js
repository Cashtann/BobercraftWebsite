// Get elements
const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
//const closeModalBtn = document.querySelector('.close-btn');
const closeModalBtns = document.querySelectorAll('.close-btn');

//////////////////////////////////////////////////////////
// Select all buttons with the class 'shop-product-button'
const shopProductButtons = document.querySelectorAll('.shop-product-button');

const shopCategoryDonateButton = document.getElementById('shop-category-donate-button');
const shopCategorySkyblockButton = document.getElementById('shop-category-skyblock-button');
const shopCategoryHardcoreButton = document.getElementById('shop-category-hardcore-button');
const shopCategorySurvivalButton = document.getElementById('shop-category-survival-button');

shopCategoryDonateButton.addEventListener('click', () => {
    window.location.href = 'https://tipply.pl/@bobercraft'
});
shopCategorySkyblockButton.addEventListener('click', () => {
    window.location.href = 'https://bobercraft.craftingstore.net/category/460883'
});
shopCategoryHardcoreButton.addEventListener('click', () => {
    window.location.href = 'https://bobercraft.craftingstore.net/category/462203'
});
shopCategorySurvivalButton.addEventListener('click', () => {
    window.location.href = 'https://bobercraft.craftingstore.net/category/460826'
});

// Loop through each button and add a click event listener
shopProductButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to the desired URL
        window.location.href = 'https://tipply.pl/@bobercraft';
    });
});


// Function to open modal
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';  // Disable body scroll
});

// Function to close modal on "x" click or outside modal
// closeModalBtn.addEventListener('click', () => {
//     modalOverlay.classList.remove('active');
//     document.body.style.overflow = '';  // Enable body scroll
// });
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      modalOverlaySurvival.classList.remove('active');
      document.body.style.overflow = '';  // Enable body scroll
    });
  });

modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';  // Enable body scroll
    }
});


function copyToClipboard() {
    const textToCopy = 'bobercraft.com';
    navigator.clipboard.writeText(textToCopy)
}


function createModalContent(modalContainerId, title, description, price, time="") {
    // Znalezienie kontenera modal-u
    const modalContainer = document.getElementById(modalContainerId);
    if (!modalContainer) {
        console.error("Nie znaleziono kontenera o podanym id.");
        return;
    }

    // Tworzenie zawartości modal-u
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Tytuł modal-u
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = title;
    modalContent.appendChild(modalTitle);

    // Główna zawartość modal-u
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // Obrazek w modal-u
    const imageWrapper = document.createElement('div');
    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-image');
    modalImage.src = 'images/Bobercraftlogo.png';  // Ścieżka do obrazka
    modalImage.style.borderRadius = '15px';
    modalImage.alt = 'Obrazek w modal-u';
    imageWrapper.appendChild(modalImage);
    modalBody.appendChild(imageWrapper);

    // Opis w modal-u
    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.style.display = 'flex';
    descriptionWrapper.style.flexDirection = 'column';
    descriptionWrapper.style.justifyContent = 'center';
    descriptionWrapper.style.alignItems = 'center';
    descriptionWrapper.style.width = '525px';

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('modal-body-padding');
    descriptionParagraph.textContent = description;
    descriptionParagraph.innerHTML += '<br>';
    descriptionParagraph.innerHTML += '<br>';
    const boldElement = document.createElement('b');
    boldElement.textContent = 'Cena: ' + price + ' zł';
    descriptionParagraph.appendChild(boldElement);
    if(time !== ""){
        descriptionParagraph.innerHTML += '<br>';
        const boldElement2 = document.createElement('b');
        boldElement2.textContent = 'Czas: ' + time;
        descriptionParagraph.appendChild(boldElement2);
    }
    descriptionWrapper.appendChild(descriptionParagraph);

    // Przycisk płatności w modal-u
    const modalButtons = document.createElement('div');
    modalButtons.classList.add('modal-buttons', 'modal-body-padding');
    const paymentLink = document.createElement('a');
    paymentLink.href = 'https://tipply.pl/@bobercraft';
    paymentLink.classList.add('shop-product-button', 'small-button');
    paymentLink.style.backgroundColor = '#0de44e';
    const paymentButton = document.createElement('div');
    paymentButton.classList.add('shop-product-inside-button');
    const paymentText = document.createElement('p');
    paymentText.textContent = 'Tipply';
    paymentButton.appendChild(paymentText);
    paymentLink.appendChild(paymentButton);
    modalButtons.appendChild(paymentLink);
    descriptionWrapper.appendChild(modalButtons);

    modalBody.appendChild(descriptionWrapper);
    modalContent.appendChild(modalBody);

    // Dodanie zawartości modal-u do kontenera
    modalContainer.appendChild(modalContent);
}


createModalContent('modal-container-id', 'VIP', 'Chcesz zostać elitarnym sponsorem serwera? Naciśnij na dostępną płatność, aby dowiedzieć się więcej o randze ELITA!', 5, "30 dni");
createModalContent('modal-container-id', 'VIP', 'Chcesz zostać elitarnym sponsorem serwera? Naciśnij na dostępną płatność, aby dowiedzieć się więcej o randze ELITA!', 10, "edycja");
createModalContent('modal-container-id', 'VIP', 'Chcesz zostać elitarnym sponsorem serwera? Naciśnij na dostępną płatność, aby dowiedzieć się więcej o randze ELITA!', 10, "edycja");




