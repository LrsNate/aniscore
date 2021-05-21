import { IconButton, Menu, MenuItem } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const setLanguage = (lang) => {
    console.log(router);
    router.push(router.asPath, "", { locale: lang });
  };

  return (
    <>
      <IconButton color="inherit" aria-label="language" onClick={openMenu}>
        <TranslateIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={() => setLanguage("en-us")}>
          {t("languages.en-us")}
        </MenuItem>
        <MenuItem onClick={() => setLanguage("ja-jp")}>
          {t("languages.ja-jp")}
        </MenuItem>
      </Menu>
    </>
  );
}
