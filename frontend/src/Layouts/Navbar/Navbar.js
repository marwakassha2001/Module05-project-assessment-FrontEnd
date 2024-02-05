import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AuthContext } from "../../Context/AuthContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import login from "../../Pages/Login/Login.js"

function Navbar() {
  const [collapesed, setCollapsed] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [profOpen, setProfileOpen] = useState(false);

  // const handleLanguageChange = (e) => {
  //   setSelectedLanguage(e.target.value);
  // };

  // nav with active
  const navigate = useNavigate();
  useEffect(() => {
    function updateSize() {
      if (window.innerWidth > 960) {
        setCollapsed(false);
      }
    }
  }, []);

  const toggleClasses = [
    Styles.linksWrapperMobile,
    collapesed ? Styles.activeNav : "",
  ].join(" ");
  const bar1 = [Styles.line1, collapesed ? Styles.a : ""].join(" ");
  const bar2 = [Styles.line2, collapesed ? Styles.a : ""].join(" ");
  const bar3 = [Styles.line3, collapesed ? Styles.a : ""].join(" ");

  // Go to Login Page
  const goToLoginPage = () => {
    navigate("/Login");
  };


  // Go to cart page
  const goToCardPage = () => {
    navigate("/cart");
  };

  return (
    <section className={Styles.heroSection}>
      <header className={Styles.header}>
        <nav className={Styles.navBar}>

          <ul className={Styles.linksWrapperContainer}>
            <ul className={Styles.linksWrapper}>
              <li>
                <NavLink
                  to="/ProductsPage"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? Styles.active : ""
                  }
                >
                  Products
                </NavLink>
              </li>
            </ul>
         
              <ul className={Styles.linksWrapper}>
                <li>
                  <Stack spacing={2} direction="row">
                    <Button
                      onClick={goToLoginPage}
                      variant="outlined"
                      sx={{
                        color: "#352f5b",
                        borderColor: "#352f5b",
                        transition:
                          "background-color 0.3s ease, color 0.3s ease",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#4a5ca1",
                          backgroundColor: "#4a5ca1",
                          color: "white",
                        },
                      }}
                    >
                      Log In
                    </Button>
                  </Stack>
                </li>
              </ul>
         
            {user && (
              <div className={Styles.profileWrapper}>
                <Button
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={() => setProfileOpen(!profOpen)}
                  variant="contained"
                  sx={{
                    bgcolor: "#352f5b",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    height: "2.2rem",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#A0471D",
                      color: "white",
                    },
                  }}
                >
                  My Profile
                </Button>
                {profOpen === true && (
                  <div className={Styles.profileDiv}>
                    <ul className={Styles.profile}>
                      {user.role === "Admin" && (
                        <li className={Styles.profileLi}>
                          <Button
                            variant="outlined"
                            onClick={() => navigate("/dashboard")}
                            sx={{
                              padding: "0.7rem 1.5rem",
                              borderColor: "transparent",
                              textTransform: "none",
                              color: "#352f5b",
                              ":hover": {
                                borderColor: "transparent",
                              },
                            }}
                          >
                            Dashboard
                          </Button>
                        </li>
                      )}
                      <li className={Styles.profileLi}>
                        <Button
                          variant="outlined"
                          onClick={() => logOut()}
                          sx={{
                            padding: "0.7rem 1.5rem",
                            borderColor: "transparent",
                            color: "#352f5b",
                            textTransform: "none",
                            ":hover": {
                              borderColor: "transparent",
                            },
                          }}
                        >
                          Logout
                        </Button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            {/* SignUp LogIn ending */}
            <ul style={{ margin: "auto" }}>
              <li style={{ listStyle: "none" }}>
                {/* Badge beginning */}

                <IconButton
                  aria-label="cart"
                  onClick={goToCardPage}
                  sx={{
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  <Badge

                    color="secondary"
                    sx={{
                      color: "black",
                      "& .MuiBadge-badge": { bgcolor: "#C86823" },
                      "& .MuiBadge-badge:hover": {
                        bgcolor: "#A0471D",
                      },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </li>
            </ul>
          </ul>

          {/* ///////////////
          /////////////////

          this for burger 
          
          /////////////////
          ////////////*/}

          <ul className={toggleClasses}>
            <li>
              <NavLink
                to="/Products"
                onClick={() => setCollapsed(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? Styles.active : ""
                }
              >
                Products
              </NavLink>
            </li>

            {!user && (
              <li>
                <Stack
                  direction="row"
                  sx={{
                    flexDirection: "column",
                    rowGap: "30px",
                    margin: "0 20px",
                  }}
                >
                  <Button
                    onClick={goToLoginPage}
                    variant="outlined"
                    sx={{
                      color: "#C86823",
                      borderColor: "#C86823",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#C86823",
                        backgroundColor: "#C86823",
                        color: "white",
                      },
                    }}
                  >
                    Log In
                  </Button>

                </Stack>
              </li>
            )}
            {user && (
              <li className={Styles.profileWrapper2}>
                {profOpen === true && (
                  <div className={Styles.profileDiv2}>
                    <ul className={Styles.profile2}>
                      {user.role === "Admin" && (
                        <li className={Styles.profileLi2}>
                          <Button
                            variant="outlined"
                            onClick={() => navigate("/dashboard")}
                            sx={{
                              padding: "1.5rem 1.5rem",
                              borderColor: "transparent",
                              height: "2rem",
                              color: "#C86823",
                              ":hover": {
                                borderColor: "transparent",
                              },
                              textTransform: "none",
                            }}
                          >
                            Dashboard
                          </Button>
                        </li>
                      )}
                      <li className={Styles.profileLi2}>
                        <Button
                          variant="outlined"
                          onClick={() => navigate("/profile")}
                          sx={{
                            padding: "1.5rem 1.5rem",
                            height: "2rem",
                            borderColor: "transparent",
                            color: "#C86823",
                            ":hover": {
                              borderColor: "transparent",
                            },
                            textTransform: "none",
                          }}
                        >
                          Profile
                        </Button>
                      </li>
                      <li className={Styles.profileLi2}>
                        <Button
                          variant="outlined"
                          onClick={() => logOut()}
                          sx={{
                            padding: "1.5rem 1.5rem",
                            height: "2rem",
                            borderColor: "transparent",
                            color: "#C86823",
                            ":hover": {
                              borderColor: "transparent",
                            },
                            textTransform: "none",
                          }}
                        >
                          Logout
                        </Button>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            )}
          </ul>
          <div
            className={Styles.burgerButton}
            onClick={() => setCollapsed(!collapesed)}
          >
            <div className={bar1}></div>
            <div className={bar2}></div>
            <div className={bar3}></div>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;