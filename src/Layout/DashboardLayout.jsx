import  { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBookOpen,
  FaCalendar,
  FaEnvelope,
  FaHandHoldingMedical,
  FaHome,
  FaList,
  FaRegListAlt,
  FaShoppingCart,
  FaUser,

} from "react-icons/fa";


const DashboardLayout = () => {

  // const [isAdmin] = useAdmin();
  // console.log("admin dashboard:", isAdmin);
  const isAdmin = true;
  

  const [isDrawerOpen , setIsDrawerOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (isDrawerOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="flex h-[100vh]">      

      {/* NEW */}
      {/* <div className="drawer lg:drawer-open "> */}
      <div className={`drawer lg:drawer-open ${isDrawerOpen ? "open" : ""}`}>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" 
        checked={isDrawerOpen}
        onChange={toggleDrawer}
        />
      
        <div className="drawer-content flex flex-col  justify-center">
       
          {/* Page content here */}
          <label
         
            htmlFor="my-drawer-2"
            className="btn justify-start drawer-button lg:hidden"
          >
          <svg
          
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16 w-10"></path></svg>
        
          </label>
          <div className="flex-1 p-8 ">
            <Outlet></Outlet>
          </div>
          
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/organizer-profile">
                    <FaUser/>
                    Profile Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-a-camp">
                    <FaHandHoldingMedical />
                    Add Camp
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/manage-camps">
                    <FaList />
                    Manage Camps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-registered-camps">
                    <FaRegListAlt />
                   
                    Manage Register Camps
                  </NavLink>
                </li>
               
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar />
                    Reservation
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart />
                    My cart {cart?.length}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaAd />
                    Add review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaList />
                    Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome/>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaBookOpen />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaEnvelope />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
