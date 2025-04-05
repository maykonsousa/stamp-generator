"use client";

import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ThemeToggle } from "../ThemeToggle";

interface IPageMenu {
  label: string;
  href: string;
  isActive: boolean;
}

export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const path = usePathname();

  const pages: IPageMenu[] = [
    {
      label: "Home",
      href: "/",
      isActive: path === "/",
    },
    {
      label: "Meu selo",
      href: "/stamp",
      isActive: path === "/stamp",
    },
    {
      label: "Sobre o autor",
      href: "/about",
      isActive: path === "/about",
    },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              width: "max-content",

              justifyContent: "center",
            }}
          >
            <Link
              sx={{
                //nao quebrar a linha
                whiteSpace: "nowrap",
                width: "100%",
                flexWrap: "nowrap",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "inherit",
                textDecoration: "none",
              }}
              href="/"
            >
              STAMP GENERATOR
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                return (
                  <MenuItem
                    key={page.label}
                    sx={{
                      display: "flex",
                      padding: "1rem",
                      gap: "1rem",
                    }}
                    href={page.href}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Link
              sx={{
                fontSize: "1.25rem",
                textDecoration: "none",
                fontWeight: "bold",
                color: "inherit",
              }}
              href="/"
            >
              STAMP GENERATOR
            </Link>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                href={page.href}
                onClick={() => {
                  handleCloseNavMenu();
                }}
                variant="text"
                color="inherit"
                sx={{
                  gap: "1rem",

                  borderBottom: `${page.isActive ? "2px solid" : "none"}`,

                  borderColor: "error.main",
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: "1rem" }}>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
