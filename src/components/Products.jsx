import ProductCard from "./ProductCard";

import touchSwitch from "../assets/images/Products/TouchPanelSystem.jpg";
import behindModule from "../assets/images/Products/BehindModule.jpg";
import curtains from "../assets/images/Products/Curtains.jpg";
import lighting from "../assets/images/Products/Lighting.jpg";
import theatre from "../assets/images/Products/homeTheater.jpg";
import security from "../assets/images/Products/Security.jpg";

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

function Products() {
  return (
    <section
      id="products"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-900">
            Our Products
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            Smart automation products designed to make every home and
            business safer, smarter and more comfortable.
          </p>

        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

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

export default Products;