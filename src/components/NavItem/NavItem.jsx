import { NavLink } from "react-router";

export default function NavItem({ icon: Icon, label, active, avatar ,to }) {
  return (
    <NavLink to={to}>
      <div
        className={`flex items-center space-x-3 text-lg cursor-pointer ${
          active ? "font-bold" : " text-gray-600"
        }`}
      >
        {avatar ? (
          <img src={avatar} alt="Profile" className="w-6 h-6 rounded-full" />
        ) : (
          <Icon className="w-6 h-6" />
        )}
        <span>{label}</span>
      </div>
    </NavLink>
  );
}
