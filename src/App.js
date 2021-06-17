import logo from './logo.svg';

import './App.css';
import {useState,useEffect} from "react";
import './Css/SideBar.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';
import {Styles} from "@material-ui/core/styles/withStyles";

import DataTable from "./EmployeeGeneralTable";

function Nav(){

    const [Componet,setComponent]=useState("Workers Management System");

    return(
        <>
            <div className="Navigation">
                <div className="Topic">{Componet}</div>
                <div>Home</div>
                <div>Employee Performance Stats</div>
                <div>Attendence</div>
                <div>Employee Usage</div>
                <div>Money and Budget</div>
            </div>
        </>
    );


};
function SideBar(){

    const [open,setOpen]=useState("openBar");
    const [mywidth,setWidth]=useState("0%");
    const action=()=>{

        if(open=="closeBar") {
            setOpen("openBar");
        }
        else {
            setOpen("closeBar");
        }

    };


  return(
      <div className="Sidebar">
          <ul className= {open}>
              <li>Add Employee</li>
              <li>Add Employee Group</li>
              <li>Edit Employee</li>
              <li>Delete Employee</li>
              <li>Delete Employee Group</li>
          </ul>

          <ArrowForwardIosIcon className="icon" onClick={action}></ArrowForwardIosIcon>

      </div>

  );
};

function MainScreen(){

    return(
        <div className="mainScreen">
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravnind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravnind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravind
                Grade :20th
                Salary:10,000
            </div>
            <div>
                Name:Aravnind
                Grade :20th
                Salary:10,000
            </div>
        </div>
    );



}

function App() {

  return (
    <div className="MyApp">


       <div className="header">
           <Nav/>
       </div>

        <div className="AppBody">
            <SideBar></SideBar>
            <DataTable></DataTable>


        </div>


        <div className="Footer">
            Created By Aravind Alluri. 2021
        </div>

    </div>
  );
}

export default App;
