import styled from "styled-components";
import EllipsesIcon from "../iconComponents/ellipsesIcon";


export default function ListItem({item}) {

  return (
    <>
      {/* <Link to="/newlist" style={{ textDecoration: "none", color: "#505050" }}> */}
        <Body>
          <Head>{item.value}</Head>
          <Head>
            <EllipsesIcon />
          </Head>
        </Body>
      {/* </Link> */}
    </>
  );
}

const Body = styled.div`
  border-style: solid;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ececec;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 24px 24px;
  &:hover {
    background-color: #f4f4f4;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  }
  @media (min-width: 1040px) {
    margin: 32px 40px 24px;
  }
`;

const Head = styled.p`
  color: #242424;
  font-size: 20px;
  font-weight: 600;
  margin: 0 16px;
`;

// const Title = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const Button = styled.button`
//   border: none;
//   background-color: #fff;
//   margin: 0;
//   padding: 0;
//   &:hover {
//     color: ##2fe6ff;
//   }
// `;
