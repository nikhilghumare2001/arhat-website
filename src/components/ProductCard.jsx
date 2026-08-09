function ProductCard({ image, title, description }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {description}
        </p>

        {/* <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View Product →
        </button> */}

      </div>

    </div>
  );
}

export default ProductCard;