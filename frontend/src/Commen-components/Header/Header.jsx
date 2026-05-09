import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "../../data/Navbar/Navbar";
import { ContactInfo } from "../../data/contact/ContactData";
import { GetCard, GetCategory } from "../../Api/Api";
import AddToCard from "./AddToCard";
import FevouriteCard from "./FevouriteCard";
import { AddToCardVal } from "../../UseContext/AddToCardContext";
import { MobileHeader } from "./MobileHeader";

export default function Header() {
  const [isOpen, setIsOpen] = useState(null);
  const [addCardOpen, setAddCardOpen] = useState(false);
  const [federatedOpen, setFederatedOpen] = useState(false);
  const [addCardData, setAddCardData] = useState([]);
  const [isTopPosition, setIsTopPosition] = useState(false);
  const [issetSearchOpen, setIsSearchOpen] = useState(false);
  const [isReload, setIsReload] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [IsMobile,setIsMobile] = useState(false)
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { count } = useContext(AddToCardVal);

  const handleReload = (data) => {
    setIsReload(data);
  };

  const getAllCategories = async () => {
    const response = await GetCategory();
    setAllCategory(response || []);
  };

  useEffect(() => {
    const fetchApiData = async () => {
      const data = await GetCard();
      setAddCardData(data);
      getAllCategories();
    };
    fetchApiData();
  }, [isReload]);

  useEffect(() => {
    const changed = () => setIsMobile(window.innerWidth <= 992)
    changed()
    window.addEventListener('resize', changed)
    return () => window.removeEventListener('resize', changed)
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsTopPosition(window.scrollY >= 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if(IsMobile){
    return (
      <MobileHeader/>
    )
  }
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 relative">
      {/* Add to Cart Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-screen bg-white z-50 shadow-2xl
          transition-all duration-300 ease-in-out
          ${addCardOpen ? "w-80" : "w-0 overflow-hidden"}
        `}
      >
        <button
          onClick={() => setAddCardOpen(false)}
          className="absolute top-5 left-5 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <AddToCard addCardData={addCardData} onReload={handleReload} />
      </div>

      {/* Favourite Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-screen bg-white z-50 shadow-2xl
          transition-all duration-300 ease-in-out
          ${federatedOpen ? "w-80" : "w-0 overflow-hidden"}
        `}
      >
        <button
          onClick={() => setFederatedOpen(false)}
          className="absolute top-5 left-5 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <FevouriteCard />
      </div>

      {/* Top Contact Bar */}
      <div className="bg-indigo-50 text-black text-sm flex items-center gap-5 justify-end px-40">
        <div className="flex gap-6 items-center py-2">
          <p>
            <i className="fa-solid fa-phone mr-2 text-indigo-500"></i>
            {ContactInfo.phone}
          </p>
          <p>
            <i className="fa-solid fa-envelope mr-2 text-indigo-500"></i>
            {ContactInfo.email}
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 flex items-center justify-between px-40">
        {/* Logo */}
        <div className="h-[60px] w-[150px]">
          <img
            src="/logo.png"
            className="h-full w-full object-contain"
            alt="Logo"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <ul className="flex gap-5">
            {NavLinks.map((v, i) => (
              <li
                key={i}
                className="relative"
                onMouseLeave={() => setIsOpen(null)}
                onMouseEnter={() => setIsOpen(isOpen === i ? null : i)}
              >
                <NavLink
                  className={({ isActive }) =>
                    `py-5 ${isActive ? "text-indigo-500" : "text-black"}`
                  }
                  to={v.link}
                >
                  {v.name}{" "}
                  {v.submenu && allCategory.length > 0 && (
                    <i className="fa-solid fa-angle-down ml-1"></i>
                  )}
                </NavLink>

                {isOpen === i && v.submenu && (
                  <div
                    className={`fixed bg-white ${
                      isTopPosition ? "top-32" : "top-40"
                    } z-20 w-[60%] left-40 rounded-lg shadow`}
                  >
                    <ul className="grid grid-cols-4 gap-4 p-5">
                      {allCategory.map((subItem, subIndex) => (
                        <li key={subIndex} className="w-full">
                          <Link
                            to={`/shop/${subItem?.name}`}
                            className="text-gray-700 hover:text-blue-500 font-[500]"
                          >
                            {subItem?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar */}
        {issetSearchOpen && (
          <div className="flex-1 mx-4 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
        )}

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-gray-700 text-[22px]">
          <i
            className="fa-solid fa-magnifying-glass cursor-pointer"
            onClick={() => setIsSearchOpen(!issetSearchOpen)}
          ></i>

          <div
            className="relative cursor-pointer"
            onClick={() => setFederatedOpen(true)}
          >
            <i className="fa-regular fa-heart"></i>
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => setAddCardOpen(true)}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full px-1.5">
                {count}
              </span>
            )}
          </div>

          {user && (
            <div className="ml-4">
              <Link to="/profile" className="flex items-center space-x-2">
                <i className="fa-solid fa-circle-user"></i>
                <span className="text-[1.1rem] font-medium">My Account</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
