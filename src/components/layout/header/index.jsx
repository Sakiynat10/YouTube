import { Fragment, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { TbVideoPlus } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { MdExplore , MdHistory ,MdSubscriptions , MdOutlineVideoLibrary ,MdHome, MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { GoVideo } from "react-icons/go";
import { RiMenuFoldFill } from "react-icons/ri";
import "./index.scss";






const Header = () => {
  const[search , setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }


  return (
    <Fragment>
        <nav>
            {/* <div className="container"> */}
                <div className="header-content">
                    <div className="header-content__left">
                        <img src="/toggle-aside.svg" alt="toggle" />
                        <img src="/logo.png" className="logo" alt="logo" />
                    </div>
                    <form className="header-content__middle">
                        <input type="text" placeholder="Search" value={search}  onChange={handleSearch}/>
                        <button type="submit" className="search-icon">
                           <CiSearch  />
                        </button>
                        <FaMicrophone />
                    </form>
                    <div className="header-content__right">
                        <TbVideoPlus className />
                        <FaRegBell />
                        <img src="/user-img.svg" alt="user" />
                    </div>
                </div>
            {/* </div> */}
        </nav>
        <aside>
            <div className="aside-content">
                <ul>
                    <li>
                        <a href="3">
                           <MdHome className="aside-img" />
                           Home
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <MdExplore className="aside-img" />
                           Explore
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <SiYoutubeshorts className="aside-img" />
                           Shorts
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <MdSubscriptions className="aside-img" />
                           Subscription
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="3">
                           <MdOutlineVideoLibrary className="aside-img" />
                           Library
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <MdHistory className="aside-img" />
                           History
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <GoVideo className="aside-img" />
                           Your videos
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <MdOutlineWatchLater className="aside-img" />
                           Watch later
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <RiMenuFoldFill className="aside-img" />
                           Pop
                        </a>
                    </li>
                </ul>
                {/* <ul>
                    <li>
                        <a href="3">
                           <MdHome className="aside-img" />
                           Pop
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <MdHome className="aside-img" />
                           Home
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <MdHome className="aside-img" />
                           Home
                        </a>
                    </li>
                    <li>
                        <a href="3">
                           <MdHome className="aside-img" />
                           Home
                        </a>
                    </li>
                </ul> */}
            </div>
        </aside>
    </Fragment>
  )
}

export default Header;