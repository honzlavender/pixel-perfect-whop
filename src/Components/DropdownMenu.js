import "../custom.css";
import styled from "styled-components";
import DeleteIcon from "../iconComponents/deleteIcon";
import EditIcon from "../iconComponents/editIcon";
import EllipsesIcon from "../iconComponents/ellipsesIcon";

import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

export default function DropdownMenu({ handleDelete, handleEdit, item }) {
  return (
    <Menu
      menuButton={
        <Button className="btn-primary">
          <EllipsesIcon />
        </Button>
      }
    >
      <MenuItem>
        <Body onClick={() => handleEdit(item.key)}>
          <HeadEdit>
            <EditIcon />
            &nbsp;Edit
          </HeadEdit>
        </Body>
      </MenuItem>
      <MenuItem>
        <Body onClick={() => handleDelete(item.key)}>
          <Head>
           <DeleteIcon />
           &nbsp;Delete
          </Head>
        </Body>
      </MenuItem>
    </Menu>
  );
}

const Body = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  padding: 16px 12px;
  font-size: 18px;
  font-weight: 600;
`;

const HeadEdit = styled.p`
  color: #242424;
  font-size: 18px;
  font-weight: 600;
  padding: 0 4px;
  margin: 0;
  display: flex;
  line-height: 22px;
  &:hover {
    color: #2fe6ff;
    fill: #2fe6ff;
  }
`;

const Head = styled.p`
  // color: #242424;
  font-size: 18px;
  font-weight: 600;
  padding: 0 4px;
  margin: 0;
  display: flex;
  line-height: 22px;
  &:hover {
    color: #FF3333;
    fill: #FF3333;
  }
`;

const Button = styled.button`
  // color: #242424;
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
