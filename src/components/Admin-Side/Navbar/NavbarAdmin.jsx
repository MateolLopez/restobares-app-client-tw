import React from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTables } from "../../../redux/actions";
import Cookies from "js-cookie";
import Tables from "../Tables/Tables";

const NavbarAdmin = () => {
  const dispatch = useDispatch();
  const { idResto } = useParams();
  const token = useSelector((state) => state.token);
  const tables = useSelector((state) => state.tables);
  let tokenAdmin;
  let tokenStaff;

  if (token.admin.lenght > 0 && token.admin !== "") {
    tokenAdmin = Cookies.set('token-admin', `${token.admin}`, { expires: 0.35, secure: true });
  }
  if (token.staff.length > 0 && token.staff !== "") {
    tokenStaff = Cookies.set('token-staff', `${token.staff}`, { expires: 0.35, secure: true });
  }

  useEffect(() => {
    dispatch(getTables(idResto, Cookies.get('token-staff')));
  }, []);
  
  console.log("token staff",Cookies.get('token-staff'));
  console.log("tables",tables)

  return (
    <div className="bg-gray-200 h-screen">
      <Navbar/>
      <Tables/>
      
      <div className="flex items-center justify-center text-5xl text-gray-300 h-5/6">
      </div>
    </div>
  );
};

export default NavbarAdmin;