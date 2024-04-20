const products = [
    { name: "Sony WH-1000XM3 ", price: "2,900", description: "WH-1000XM3 Wireless Noise-Canceling Over-Ear Headphones from Sony. Noise cancellation is accomplished with Sony's dedicated HD Noise-Canceling QN1 processor and Sense Engine. Sense Engine is designed to automatically adjust the level of ambient sound based on your environment. If quick communication is needed, the Quick Attention feature lets you quickly connect with the outside world by simply covering the right earcup with your hand.", image: "images/sony.jpg" },
    { name: "Noise Cancelling Bluetooth", price: "1,333", description: "Leyeet Bluetooth Headphones with Microphone Rechargeable Wireless Noise Cancelling Over Ear Headsets Bluetooth Headohones Features: Wear comfortable and secure: No pressure for your ear.This headset earpad is equipped with soft PU skin materials over the ear, feel lightweight and soft.", image: "images/noise.webp" },
    { name: "Samsung Galaxy Z Flip", price: "66,696", description: "The Samsung Galaxy Z Flip features a foldable AMOLED display for a compact form factor, high-end performance driven by a powerful processor, and a versatile camera system for capturing stunning photos and videos. Additionally, it offers fast charging and wireless charging capabilities, along with innovative software features tailored to the foldable design, providing a unique and futuristic smartphone experience.", image: "images/samsung.jpg" },
    { name: "vivo x50 pro+", price: "53,982", description: "Vivo X50 Pro+ specs feature with a 6.56-inch AMOLED with a resolution of 1440 x 2376 pixels. Under the hood, Vivo X50 Pro+ ships with Android 10.0 -based One UI 2.1 and drives the Qualcomm Snapdragon 865 chipset. Moreover, Vivo X50 Pro+ arrives with 8GB/ 12GB of RAM and 128GB/ 256GB ROM", image: "images/vivo.jpeg" },
    { name: "Ogling Apple's purple iPhone 12", price: "89,970", description: "Ogling Apple's purple iPhone 12 introduces a vibrant color option to the lineup, maintaining the device's signature features like the A14 Bionic chip for high performance, dual-camera system for impressive photography, and compatibility with MagSafe accessories. Its sleek design, coupled with iOS enhancements, offers users a stylish and immersive mobile experience, ideal for those seeking both aesthetics and functionality.", image: "images/iphone.jpeg" },
    { name: "Lenovo 15.6 inch IdeaPad S340 Multi-Touch Laptop", price: "78,580", description: "the 15.6inch IdeaPad S340 Laptop from Lenovo has the power to support your on-the-go computing needs. Designed with an onyx black-colored exterior and a backlit keyboard with a numeric keypad, this laptop features a 1.6 GHz Intel Core i5-8265U Quad-Core processor with 8GB of DDR4 RAM and integrated Intel UHD Graphics to power a variety of different applications.", image: "images/lenovo.jpg" },
    { name: "Asus ROG Strix G17 G712LU-EV019T Specs", price: "1,35,000", description: "Asus ROG Strix G17 G712LU-EV019T is a high-end gaming laptop powered by the 10th Gen Intel Core i7-10750H Hexa-core processor. It has a base clock speed of 2.60Ghz and a max clock speed of 5.0Ghz. For graphics, Asus has equipped this model with a dedicated 6GB NVIDIA GeForce GTX 1660Ti GPU.", image: "images/asus.png" },
    { name: "HP 15 15s-gy0003AU Laptop Specs", price: "27,699", description: "HP 15 15s-gy0003AU is an entry-level laptop powered by the AMD 3020e Dual-core processor. It has a base clock speed of 1.2GHz and a max boost clock of 2.6GHz. For graphics, it uses integrated AMD Radeon Graphics GPU. This is an entry-level processor from AMD and comes below AMD Ryzen and Intel Core i3 10th gen in terms of performance.", image: "images/product8.jpg" },
    { name: "Canon EOS 1400D", price: "36,500", description: "Canon EOS 1400D also know as EOS Rebel T7, is a budget DSLR camera aimed at beginners. Canon EOS 1400D is replacing older 1300D which is a very popular budget DSLR in India. ", image: "images/canon.png" },
    { name: "FUJIFILM X-A2 Mirrorless Digital Camera with 16-50mm Lens ", price: "90,000", description: "thesilver X-A2 Mirrorless Digital Camera from Fujifilm is a versatile camera featuring a 16.3MP APS-C CMOS sensor and EXR Processor II to deliver high-resolution stills and full HD 1080p video. The two technologies combine to realize a top continuous shooting rate of 5.6 fps, extended sensitivity of ISO 25600 to benefit working in a variety of shooting conditions, and fast performance speeds for quick and candid shooting. The sleek form factor incorporates a 3.0inch 920k-dot LCD screen", image: "images/fu.jpeg" }
    // Add more products as needed
];

function displayProducts(productsArray) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    productsArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p>${product.description}</p>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) ||
        product.description.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Display all products initially
displayProducts(products);
