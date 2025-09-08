import { NavLink } from "react-router";
import { Home, Trophy, Play, Layers, User } from "lucide-react";
import { SiNintendogamecube } from "react-icons/si";

const BottomNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-slate-800 text-white flex justify-around items-center py-2 shadow-lg z-50">
      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center transition-all duration-300 ${
            isActive ? "text-yellow-400 scale-110" : "text-white"
          }`
        }
      >
        <Home size={22} />
        <span className="text-xs">Home</span>
      </NavLink>
      {/* My-Bets */}
      <NavLink
        to="/my-bets"
        className={({ isActive }) =>
          `flex flex-col items-center transition-all duration-300 ${
            isActive ? "text-yellow-400 scale-110" : "text-white"
          }`
        }
      >
        <SiNintendogamecube size={22}/>
        <span className="text-xs">My-Bets</span>
      </NavLink>

      {/* Sports */}
      <NavLink
        to="/sports"
        className={({ isActive }) =>
          `flex flex-col items-center transition-all duration-300 ${
            isActive ? "text-yellow-400 scale-110" : "text-white"
          }`
        }
      >
        <Trophy size={22} />
        <span className="text-xs">Sports</span>
      </NavLink>

      {/* In-Play */}
      <NavLink
        to="/play-in"
        className={({ isActive }) =>
          `flex flex-col items-center transition-all duration-300 ${
            isActive ? "text-yellow-400 scale-110" : "text-white"
          }`
        }
      >
        <Play size={22} />
        <span className="text-xs">In-Play</span>
      </NavLink>
      

      {/* Multi Market */}
      <NavLink
        to="/multi"
        className={({ isActive }) =>
          `flex flex-col items-center transition-all duration-300 ${
            isActive ? "text-yellow-400 scale-110" : "text-white"
          }`
        }
      >
        <Layers size={22} />
        <span className="text-xs">Multi M.</span>
      </NavLink>

      {/* Account */}
      <NavLink
        to="/account"
        className={({ isActive }) =>
          `flex flex-col items-center transition-all duration-300 ${
            isActive ? "text-yellow-400 scale-110" : "text-white"
          }`
        }
      >
        <User size={22} />
        <span className="text-xs">Account</span>
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
