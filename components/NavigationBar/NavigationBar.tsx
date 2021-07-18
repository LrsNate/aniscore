import {
  AppBar,
  Hidden,
  IconButton,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageSelector from "components/NavigationBar/LanguageSelector";
import SearchInput from "components/NavigationBar/SearchInput";
import { homeUrl } from "lib/routes";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    cursor: "pointer",
  },
  spacer: {
    flexGrow: 1,
  },
}));

interface NavigationBarProps {
  title: string;
}

export default function NavigationBar(props: NavigationBarProps) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Hidden xsDown>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={() => router.push(homeUrl(router))}
            >
              {props.title}
            </Typography>
          </Hidden>
          <SearchInput />
          <div className={classes.spacer} />
          <LanguageSelector />
        </Toolbar>
      </AppBar>
    </div>
  );
}
