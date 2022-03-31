import styled from "styled-components";
import DeleteIcon from "../iconComponents/deleteIcon";

export default function MenuButtons({icon, title}) {
  return (
    <>
      <Body>
        <Head>
            {icon}
        </Head>
        <Head>{title}</Head>
      </Body>
    </>
  );
}

const Body = styled.div`
  display: flex;
padding: 16px 12px;
  &:hover {
    background-color: #f4f4f4;
  }
`;

const Head = styled.p`
  color: #242424;
  font-size: 18px;
  font-weight: 600;
  padding: 0 4px;
  margin: 0;
  display: flex;
  line-height: 22px;
`;