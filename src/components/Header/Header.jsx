
import { CiSearch } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
const Header = () => {
    return (
        <section>
    <div className="navbar bg-base-100 flex justify-between">
  <div className="">
    <a className=" text-3xl font-bold">Recipe Calories</a>
  </div>
  
  <div className='hidden md:flex lg:flex justify-between md:gap-3 lg:gap-8 text-[#555455]'> 
        <li className='list-none'>Home</li>
        <li  className='list-none'>Recipes</li>
        <li  className='list-none'>About</li>
        <li  className='list-none'>Search</li>
   </div>

    
  <div className="flex-none gap-2">
    <div className="form-control">
        <div className="flex gap-2 items-center input input-bordere bg-[#dbdbdce3] rounded-full"> 
     <CiSearch />
      <input type="text" placeholder="Search" className=" w-24 md:w-auto placeholder:text-[#555455]" />
        </div>
{/* input input-bordere */}
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn bg-[#0BE58A] btn-ghost btn-circle avatar">
        <div className=" rounded-full">
        <IoMdContact  className="text-[44px] " />

          {/* <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </section>
    );
};

export default Header;