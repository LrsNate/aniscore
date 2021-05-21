import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Language as LanguageIcon } from "@material-ui/icons";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const language = i18n.language.split("-")[0].toUpperCase();

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
      <Button
        color="inherit"
        aria-label="language"
        onClick={openMenu}
        startIcon={<LanguageIcon />}
      >
        {language}
      </Button>
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
