import React from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import theme from "containers/styles/theme";
import {
  ArtTrackRounded,
  ContactMailRounded,
  HomeRounded,
  PersonRounded,
} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  navText: {
    "&:focus": {
      color: theme.palette.primary.main,
    },
    "&:active": {
      color: theme.palette.primary.main,
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesXs = useMediaQuery(theme.breakpoints.only("xs"));

  const dataNavigation = [
    {
      id: "home-section",
      label: "Home",
      icon: <HomeRounded />,
    },
    {
      id: "about-section",
      label: "About",
      icon: <PersonRounded />,
    },
    {
      id: "project-section",
      label: "Project",
      icon: <ArtTrackRounded />,
    },
    {
      id: "contact-section",
      label: "Contact",
      icon: <ContactMailRounded />,
    },
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {matchesLg ? (
        <div className="navbar">
          <div className="navbar-container">
            <div onClick={scrollToTop} className="navbar-title">
              Ray
            </div>
            <ul className="navbar-list">
              {dataNavigation.map((data, index) => (
                <li key={index} className="navbar-item">
                  <Link
                    activeClass="active"
                    to={data.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {data.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : matchesXs ? (
        <>
          <AppBar position="fixed" style={{ top: "auto", bottom: 0 }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              style={{ backgroundColor: theme.palette.secondary.accent }}
            >
              {dataNavigation.map((data, index) => (
                <Link
                  key={index}
                  activeClass="active"
                  to={data.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <BottomNavigationAction
                    label={data.label}
                    icon={data.icon}
                    className={classes.navText}
                  />
                </Link>
              ))}
            </BottomNavigation>
          </AppBar>
        </>
      ) : (
        <>
          <AppBar style={{ backgroundColor: theme.palette.secondary.accent }}>
            <Toolbar style={{ justifyContent: "center" }}>
              <Typography
                variant="h1"
                style={{ paddingRight: theme.spacing(10) }}
              >
                Ray
              </Typography>
              <Box
                display="flex"
                width="600px"
                justifyContent="space-between"
                align="center"
              >
                {dataNavigation.map((data, index) => (
                  <Link
                    activeClass="active"
                    to={data.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Typography
                      variant="h3"
                      style={{ cursor: "pointer" }}
                      className={classes.navText}
                    >
                      {data.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </>
      )}
    </>
  );
}

export default Navbar;
