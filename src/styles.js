import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    textAlign: "center",

    left: 0,
    bottom: 0,
    color: "black",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#85C1E9",
    height: "80px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },

  image: {
    marginLeft: 20,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: "3%",
    borderRadius: 10,
    color: "white",
    backgroundColor: "rgba(21, 101, 192)",
    margin: "0 12px",
    textAlign: "center",
    height: "25vmin",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      height: "initial",
      "&:nth-of-type(1)": {
        marginBottom: "12px",
      },
    },
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  logoContainer: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
  alanLogo: {
    height: "33vmin",
    borderRadius: "25%",
    padding: "0 5%",
    margin: "1% 0",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin",
    },
  },
}));
