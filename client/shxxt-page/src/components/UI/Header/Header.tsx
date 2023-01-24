import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import Menu from "./Menu";

const HeaderContainer = styled.div`
  /* position: "fixed";
  top: 0;
  left: 0;
  width: "100%";
  height: "10rem";
  justify-content: "space-between";
  background-color: "black"; */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 6rem;
  background-color: #7c5fe6;
  z-index: 2;
  .wrapper {
    display: flex;
    width: 96%;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    color: #03d4fe;
    font-size: 3rem;
    font-weight: bold;
  }
  .nav {
    ul {
      padding: 0;
      display: flex;
      list-style: none;
      width: 100%;
    }
    li {
      padding: 0.5rem 1.5rem;
      border: 1px solid #8b005d;
      color: white;
      background: #8b005d;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
      cursor: pointer;
      &:hover,
      &:active {
        background: #ac0e77;
        border-color: #ac0e77;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
      }
    }
  }
`;

// const MenuContainer = styled.div`
//   top: "100px";
//   left: "100px";
//   width: "100%";
// `;

function Header() {
  const pages = ["Home", "Guide", "Design", "Reference"];
  // const [selectedPage, setSelectedPage] = useState("Home");
  // return (
  //   <HeaderContainer>
  //     <MenuContainer>
  //       {pages.map((page) => (
  //         <Menu key={page} type="button">
  //           {page}
  //         </Menu>
  //       ))}
  //     </MenuContainer>
  //   </HeaderContainer>
  // );

  return (
    <HeaderContainer>
      <div className="wrapper">
        <div className="logo">Shxxt-Maker</div>
        <nav className="nav">
          <ul className="ul">
            {pages.map((page) => (
              <NavLink key={page} to={page}>
                <li key={page}>{page}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  );
}
export default Header;
