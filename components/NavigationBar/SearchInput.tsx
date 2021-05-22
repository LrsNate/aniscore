import { fade, InputBase, makeStyles } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchInput() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const router = useRouter();
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState(
    (router.query.q as string) ?? ""
  );

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchQuery);
    const query = encodeURIComponent(searchQuery);
    router.push(`/${language}/scores?q=${query}`);
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form onSubmit={handleSubmit}>
        <InputBase
          placeholder={t("search")}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={searchQuery}
          onChange={handleChange}
          inputProps={{ "aria-label": "search" }}
        />
      </form>
    </div>
  );
}
