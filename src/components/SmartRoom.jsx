import { useState } from "react";

// Smart room visual states
const roomStates = [
  {
    light: false,
    curtains: false,
    climate: false,
    theatre: false,
  },
  {
    light: true,
    curtains: false,
    climate: false,
    theatre: false,
  },
  {
    light: true,
    curtains: true,
    climate: false,
    theatre: false,
  },
  {
    light: true,
    curtains: true,
    climate: true,
    theatre: false,
  },
  {
    light: true,
    curtains: true,
    climate: true,
    theatre: false,
  },
  {
    light: true,
    curtains: false,
    climate: true,
    theatre: false,
  },
  {
    light: false,
    curtains: false,
    climate: true,
    theatre: true,
  },
  {
    light: false,
    curtains: false,
    climate: true,
    theatre: false,
  },
  {
    light: false,
    curtains: false,
    climate: false,
    theatre: false,
  },
];

function SmartRoom({ activeStep }) {
  const [showDetails, setShowDetails] = useState(false);

  const state = roomStates[activeStep] || roomStates[0];

  return (
    <div className="relative">

      {/* Room */}
      <div
        className="
          relative
          w-full
          max-w-4xl
          mx-auto
          aspect-video
          rounded-3xl
          overflow-hidden
          bg-gradient-to-b
          from-slate-200
          to-slate-400
          shadow-2xl
          border
          border-white
        "
      >

        {/* Ceiling */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-white/70" />

        {/* Ambient lighting */}
        <div
          className={`
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-3/4
            h-20
            rounded-full
            blur-3xl
            transition-all
            duration-1000
            ${
              state.light
                ? "bg-yellow-300/70 opacity-100"
                : "bg-yellow-300/0 opacity-0"
            }
          `}
        />

        {/* Ceiling lights */}
        <div className="absolute top-10 left-1/4">
          <Light active={state.light} />
        </div>

        <div className="absolute top-10 left-1/2 -translate-x-1/2">
          <Light active={state.light} />
        </div>

        <div className="absolute top-10 right-1/4">
          <Light active={state.light} />
        </div>

        {/* Window */}
        <div className="absolute left-[8%] top-[18%] w-[34%] h-[48%] bg-sky-200 border-8 border-white shadow-xl overflow-hidden">

          {/* Outside view */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-100">
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-green-400/60" />
          </div>

          {/* Curtains */}
          <div
            className={`
              absolute
              top-0
              bottom-0
              left-0
              bg-slate-700
              transition-all
              duration-1000
              ${
                state.curtains
                  ? "w-[8%]"
                  : "w-1/2"
              }
            `}
          />

          <div
            className={`
              absolute
              top-0
              bottom-0
              right-0
              bg-slate-700
              transition-all
              duration-1000
              ${
                state.curtains
                  ? "w-[8%]"
                  : "w-1/2"
              }
            `}
          />
        </div>

        {/* Sofa */}
        <div className="absolute bottom-[12%] left-[8%] w-[42%] h-[22%] bg-slate-700 rounded-t-3xl shadow-xl">
          <div className="absolute -top-5 left-5 w-24 h-16 bg-slate-600 rounded-xl" />
          <div className="absolute -top-5 right-5 w-24 h-16 bg-slate-600 rounded-xl" />
        </div>

        {/* TV */}
        <div className="absolute right-[10%] top-[20%] w-[35%]">

          <div className="aspect-video bg-gray-900 rounded-lg shadow-xl border-4 border-gray-700 overflow-hidden">

            <div
              className={`
                w-full
                h-full
                flex
                items-center
                justify-center
                transition-all
                duration-700
                ${
                  state.theatre
                    ? "bg-black"
                    : "bg-slate-800"
                }
              `}
            >
              {state.theatre && (
                <span className="text-white text-xl md:text-2xl font-semibold">
                  MOVIE NIGHT
                </span>
              )}
            </div>

          </div>

          {/* TV stand */}
          <div className="h-3 bg-gray-700 rounded-b-lg mx-8" />
        </div>

        {/* AC */}
        <div
          className="
            absolute
            right-[8%]
            top-[8%]
            w-28
            h-8
            bg-white
            rounded-lg
            shadow-lg
            flex
            items-center
            justify-center
          "
        >
          <div className="flex gap-1">
            <span
              className={`w-1 h-4 rounded ${
                state.climate ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
            <span
              className={`w-1 h-4 rounded ${
                state.climate ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
            <span
              className={`w-1 h-4 rounded ${
                state.climate ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          </div>
        </div>

        {/* Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[12%] bg-gradient-to-r from-amber-100 to-amber-200" />

        {/* Automation status */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="
              bg-white/90
              backdrop-blur
              px-5
              py-2
              rounded-full
              shadow-lg
              text-sm
              font-semibold
              text-gray-800
              hover:bg-white
              transition
            "
          >
            {showDetails ? "Hide Status" : "View System Status"}
          </button>
        </div>
      </div>

      {/* System status */}
      {showDetails && (
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">

          <Status
            title="Lighting"
            active={state.light}
          />

          <Status
            title="Curtains"
            active={state.curtains}
          />

          <Status
            title="Climate"
            active={state.climate}
          />

          <Status
            title="Theatre"
            active={state.theatre}
          />

        </div>
      )}
    </div>
  );
}

function Light({ active }) {
  return (
    <div
      className={`
        w-7
        h-7
        rounded-full
        transition-all
        duration-700
        ${
          active
            ? "bg-yellow-300 shadow-[0_0_30px_10px_rgba(253,224,71,0.6)]"
            : "bg-gray-400"
        }
      `}
    />
  );
}

function Status({ title, active }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md text-center">
      <div
        className={`mx-auto mb-2 w-3 h-3 rounded-full ${
          active ? "bg-green-500" : "bg-gray-300"
        }`}
      />

      <p className="font-semibold text-gray-800">
        {title}
      </p>

      <p className="text-sm text-gray-500">
        {active ? "ON" : "OFF"}
      </p>
    </div>
  );
}

export default SmartRoom;