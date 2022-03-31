import MenuButtons from "./MenuButtons";
import styled from "styled-components";
import DeleteIcon from "../iconComponents/deleteIcon";
import EditIcon from "../iconComponents/editIcon";
import '../custom.css'

import {
    Menu,
    MenuItem,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
// import '@szhsin/react-menu/dist/transitions/slide.css';
import EllipsesIcon from "../iconComponents/ellipsesIcon";

export default function DropdownMenu() {
  return (
    <Menu  menuButton={<Button className="btn-primary"><EllipsesIcon/></Button>}>
    <MenuItem ><MenuButtons icon={<EditIcon />} title="Edit" /></MenuItem>
    <MenuItem ><MenuButtons icon={<DeleteIcon />} title="Delete" /></MenuItem>
</Menu>
  );
}

// display: flex;
// align-items: center;
// position: relative;
// padding: 0.375rem 1.5rem;

// const Body = styled.div`
//   border-style: solid;
//   border-radius: 8px;
//   border-width: 1px;
//   border-color: #ececec;
//   display: inline-block;
//   &:hover {
//     box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
//   }
// `;

// const List = styled.li`
//   list-style-type: none;
//   padding: 0;
//   margins: 0;
// `;

// const Link = styled.a`
//   text-decoration: none;
//   padding: 0;
//   margin: 0;
// `;


const Button = styled.button`
  color: #242424;
  font-size: 20px;
  font-weight: 600;
  background-color: #ffffff;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;