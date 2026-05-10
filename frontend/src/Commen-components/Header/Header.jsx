import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "../../data/Navbar/Navbar";
import { ContactInfo } from "../../data/contact/ContactData";
import { GetCard, GetCategory } from "../../Api/Api";
import AddToCard from "./AddToCard";
import FevouriteCard from "./FevouriteCard";
import { AddToCardVal } from "../../UseContext/AddToCardContext";
import { MobileHeader } from "./MobileHeader";
import FavouriteCard from "./FevouriteCard";
import { FavouriteContext } from "../../UseContext/FavouriteCardContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(null);
  const [addCardOpen, setAddCardOpen] = useState(false);
  const [FavouriteSideOpen, setFavouriteSideOpen] = useState(false);
  const [addCardData, setAddCardData] = useState([]);
  const [isTopPosition, setIsTopPosition] = useState(false);
  const [issetSearchOpen, setIsSearchOpen] = useState(false);
  const [isReload, setIsReload] = useState(false);
  const [allCategory, setAllCategory] = useState([]);
  const [IsMobile,setIsMobile] = useState(false)
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { count } = useContext(AddToCardVal);
  const {setFavIsOpen } = useContext(FavouriteContext)
  const handleReload = (data) => {
    setIsReload(data);
  };

  const getAllCategories = async () => {
    const response = await GetCategory();
    setAllCategory(response || []);
  };

  
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


 
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-zinc-200">

    {/* Main Header */}
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

      <div className="h-[75px] lg:h-[85px] flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-5 xl:gap-12">

          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <img
              src="/logo.png"
              className="h-[42px] sm:h-[48px] lg:h-[55px] object-contain"
              alt="Logo"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-5 xl:gap-8">

              {NavLinks.map((v, i) => (
                <li
                  key={i}
                  className="relative"
                  onMouseLeave={() => setIsOpen(null)}
                  onMouseEnter={() => setIsOpen(i)}
                >

                  <NavLink
                    to={v.link}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-[14px] xl:text-[15px] font-semibold transition-all duration-300
                      ${
                        isActive
                          ? "text-purple-600"
                          : "text-zinc-800 hover:text-purple-600"
                      }`
                    }
                  >
                    {v.name}

                    {v.submenu && (
                      <i className="fa-solid fa-angle-down text-[11px]"></i>
                    )}
                  </NavLink>

                  {/* MEGA MENU */}
                  {isOpen === i && v.submenu && (
                    <div className="absolute top-[55px] left-0 bg-white shadow-2xl rounded-2xl p-6 w-[700px] xl:w-[750px] border border-zinc-100">

                      <div className="grid grid-cols-4 gap-4">

                        {allCategory.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`/shop/${subItem?.name}`}
                            className="group"
                          >

                            <div className="bg-zinc-50 rounded-xl p-4 hover:bg-purple-50 transition-all duration-300">

                              <div className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center mb-3">
                                <i className="fa-solid fa-bag-shopping text-purple-600"></i>
                              </div>

                              <h3 className="font-semibold text-sm xl:text-base text-zinc-800 group-hover:text-purple-600">
                                {subItem?.name}
                              </h3>

                              <p className="text-xs xl:text-sm text-zinc-500 mt-1">
                                Explore collection
                              </p>

                            </div>
                          </Link>
                        ))}

                      </div>
                    </div>
                  )}
                </li>
              ))}

            </ul>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* SEARCH BAR */}
          <div className="hidden xl:flex items-center bg-zinc-100 rounded-full px-4 h-[46px] w-[240px] 2xl:w-[280px]">

            <i className="fa-solid fa-magnifying-glass text-zinc-500 text-sm"></i>

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-3 text-sm w-full"
            />
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-4 sm:gap-5 text-[19px] sm:text-[21px] text-zinc-700">

            {/* SEARCH MOBILE */}
            <button className="xl:hidden hover:text-purple-600 transition-all duration-300">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {/* WISHLIST */}
            <div
              onClick={() => setFavIsOpen(true)}
              className="relative cursor-pointer hover:text-purple-600 transition-all duration-300"
            >
              <i className="fa-regular fa-heart"></i>
            </div>

            

            {/* CART */}
            <div
              onClick={() => setAddCardOpen(true)}
              className="relative cursor-pointer hover:text-purple-600 transition-all duration-300"
            >
              <i className="fa-solid fa-cart-shopping"></i>

              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </div>

            {/* ACCOUNT */}
            {user ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 hover:text-purple-600 transition-all duration-300"
              >
                <i className="fa-regular fa-user"></i>

                <span className="hidden 2xl:block text-[15px] font-semibold">
                  Account
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex items-center gap-2 hover:text-purple-600 transition-all duration-300"
              >
                <i className="fa-regular fa-user"></i>

                <span className="hidden xl:block text-[15px] font-semibold">
                  Login
                </span>
              </Link>
            )}

          </div>
        </div>
        <FavouriteCard/>
      </div>
    </div>
    </header>
  );
  
}
