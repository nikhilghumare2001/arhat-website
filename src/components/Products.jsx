// Import the reusable ProductCard component
import ProductCard from "./ProductCard";


// ==================== IMPORT PRODUCT IMAGES ====================

// Smart touch panel image
import touchSwitch from "../assets/images/Products/TouchPanelSystem.jpg";

// Smart behind-module image
import behindModule from "../assets/images/Products/BehindModule.jpg";

// Smart curtains and blinds image
import curtains from "../assets/images/Products/Curtains.jpg";

// Smart lighting image
import lighting from "../assets/images/Products/Lighting.jpg";

// Home theatre image
import theatre from "../assets/images/Products/homeTheater.jpg";

// Security and CCTV image
import security from "../assets/images/Products/Security.jpg";


// ==================== PRODUCT DATA ====================
// All product information is stored in one array.
// Each product contains an image, title and description.

const products = [

  {
    image: touchSwitch,
    title: "Smart Touch Switch Boards",
    description:
      "Elegant touch panels for lighting, scene control and smart home automation.",
  },

  {
    image: behindModule,
    title: "Smart Behind Modules",
    description:
      "Upgrade your existing switches into smart switches without replacing them.",
  },

  {
    image: curtains,
    title: "Smart Curtains & Blinds",
    description:
      "Automate curtains and blinds for greater comfort, privacy and convenience.",
  },

  {
    image: lighting,
    title: "Smart Lighting Control",
    description:
      "Create personalized lighting scenes while improving energy efficiency.",
  },

  {
    image: theatre,
    title: "Home Theatre Solutions",
    description:
      "Enjoy an immersive entertainment experience with premium audio and video.",
  },

  {
    image: security,
    title: "Security & CCTV Systems",
    description:
      "Protect your home and business with intelligent surveillance and access control.",
  },

];


// ==================== PRODUCTS COMPONENT ====================

function Products() {
  return (

    // ==================== PRODUCTS SECTION ====================
    <section
      id="products"
      className="py-24 bg-white"
    >

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6">


        {/* ==================== SECTION HEADING ==================== */}
        <div className="text-center mb-16">

        {/* ========================================
    SECTION TITLE
    Main heading for the products section
======================================== */}

<h2 className="text-4xl font-bold text-gray-900">
  Our Products
</h2>

{/* Blue line below heading */}
<div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

{/* ========================================
    SECTION DESCRIPTION
    Brief introduction to Arhat's products
======================================== */}

<p className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-8">
  Explore Arhat's range of intelligent automation products,
  thoughtfully selected to bring greater comfort, convenience,
  security and efficiency to modern spaces. Our solutions combine
  elegant design with advanced technology, delivering seamless
  control for lighting, curtains, entertainment, security and
  everyday living.
</p>

        </div>


        {/* ==================== PRODUCT GRID ==================== */}

        {/*
          Responsive layout:
          Mobile     → 1 column
          Tablet     → 2 columns
          Desktop    → 3 columns
        */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* 
            Loop through the products array.
            Each product is displayed using ProductCard.
          */}

          {products.map((product, index) => (

            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />

          ))}

        </div>

      </div>

    </section>
  );
}


// Export Products component
// This allows us to use Products.jsx in other files.
export default Products;