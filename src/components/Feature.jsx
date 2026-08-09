export default function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4 group">

      <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 mt-1">
          {text}
        </p>
      </div>

    </div>
  );
}