import MenuButtons from "./MenuButtons";
import styled from "styled-components";
import DeleteIcon from "../iconComponents/deleteIcon";
import EditIcon from "../iconComponents/editIcon";

export default function DropdownMenu() {
  return (
    <Body>
      <div>
        <List>
          <Link href="#">
            <MenuButtons icon={<EditIcon />} title="Edit" />
          </Link>
        </List>
        <List>
          <Link href="#">
            <MenuButtons icon={<DeleteIcon />} title="Delete" />
          </Link>
        </List>
      </div>
    </Body>
  );
}

const Body = styled.div`
  border-style: solid;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ececec;
  display: inline-block;
  &:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  }
`;

const List = styled.li`
  list-style-type: none;
  padding: 0;
  margins: 0;
`;

const Link = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;
`;
