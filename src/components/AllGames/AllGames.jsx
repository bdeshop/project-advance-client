import React from "react";

const games = [
  {
    id: 1,
    name: "Play8",
    image: "https://i.ibb.co/3zDqkfk/play8.jpg",
  },
  {
    id: 2,
    name: "FastSpin",
    image: "https://i.ibb.co/DY7gB1L/fastspin.jpg",
  },
  {
    id: 3,
    name: "ILoveU",
    image: "https://i.ibb.co/kJ8mN3Y/iloveu.jpg",
  },
  {
    id: 4,
    name: "AE Sexy",
    image: "https://i.ibb.co/NpB8yYB/aesexy.jpg",
  },
  {
    id: 5,
    name: "Casino",
    image: "https://i.ibb.co/LrRHmhM/livecasino.jpg",
  },
  {
    id: 6,
    name: "Ezugi",
    image: "https://i.ibb.co/YZt99Yh/ezugi.jpg",
  },
  {
    id: 7,
    name: "Evolution",
    image: "https://i.ibb.co/Y2hVtkn/evolution.jpg",
  },
  {
    id: 8,
    name: "Pragmatic",
    image: "https://i.ibb.co/jJcK9dY/pragmatic.jpg",
  },
  {
    id: 9,
    name: "Spade",
    image: "https://i.ibb.co/vXLJwSB/spade.jpg",
  },
  {
    id: 10,
    name: "Cricket",
    image: "https://i.ibb.co/vXLJwSB/spade.jpg",
  },
  {
    id: 11,
    name: "Soccer",
    image: "https://i.ibb.co/vXLJwSB/spade.jpg",
  },
  {
    id: 12,
    name: "Tennis",
    image: "https://i.ibb.co/vXLJwSB/spade.jpg",
  },
];

const AllGames = () => {
  return (
    <div className="p-2 lg:p-10">

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Game Image */}
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 md:h-56 lg:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-[2px] flex justify-between items-center">
              <span className="font-semibold">{game.name}</span>
              <button className="bg-green-600 px-1 py-1 text-sm rounded-md hover:bg-green-700 transition">
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
