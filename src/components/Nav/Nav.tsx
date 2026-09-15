import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";

import routes from "../../utils/routes";
import { glassSurface } from "../../theme/glass";

// Chakra-styled motion element for the underline. NOTE: `layoutId` does NOT
// animate here — the underline is conditionally mounted with no LayoutGroup/
// AnimatePresence ancestor, so it hard-appears/disappears. This matches the
// legacy behavior exactly (legacy had the same structure and never slid).
// A sliding underline would be a future enhancement, not an equivalence fix.
const MotionUnderline = chakra(motion.div);
const MotionBar = chakra(motion.span);

/**
 * Site navigation. Implements BR-13 (single-select highlight): one underline
 * marks the selected item; clicking the KH logo clears it.
 * Migrated from Nav.module.scss to inline Chakra styling (Phase 1 pilot) with
 * observable behavior preserved exactly — see analysis/.../BASELINE.md.
 *
 * Responsive: on md+ the items live in a glass pill; on mobile they collapse
 * into a hamburger that drops a glass panel down from the top of the viewport.
 * The mobile panel is only mounted while open, so no duplicate links exist in
 * the default (closed) DOM.
 */
export const Nav: React.FC = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { title: "Home", path: routes.HOME_ROUTE },
        { title: "Experience", path: routes.EXPERIENCE_ROUTE },
        { title: "Work", path: routes.WORK_ROUTE },
        { title: "Skills", path: routes.SKILLS_ROUTE },
        { title: "Contact", path: routes.CONTACT_ROUTE },
    ];
    const [selected, setSelected] = useState<number | null>(navItems.findIndex(item => item.path === window.location.pathname));

    // Shared link styling (legacy `.navBar a { text-decoration: none; color: gold }`).
    const linkStyle = {
        textDecoration: "none",
        color: "gold.500",
        _hover: { textDecoration: "none" },
        _visited: { color: "gold.500" }, // legacy `.navBar a` stayed gold when visited
    };

    const barStyle = { width: "24px", height: "2px", borderRadius: "full", bg: "gold.400", display: "block" };

    return (
        <Flex
            as="nav"
            position="relative"
            // Lift the whole nav (and its fixed dropdown child) above the page
            // content + ThemeToggle when the mobile menu is open.
            zIndex={menuOpen ? 30 : 2}
            color="lilac.500"
            justify="space-between"
            width="100%"
            py="8px"
            alignItems="center"
        >
            <Box
                as="h1"
                ml="30px"
                position="relative"
                zIndex={2}
                fontFamily='"Gorehand"'
                fontSize="48px"
                sx={{ "@media screen and (max-width: 640px)": { fontSize: "30px" } }}
            >
                <Link as={RouterLink} to={routes.HOME_ROUTE} onClick={() => { setSelected(null); setMenuOpen(false); }} {...linkStyle}>
                    KH
                </Link>
            </Box>

            {/* Desktop: glass pill of links. Hidden on mobile via a max-width
                query (kept default-visible so it stays in the a11y tree under
                jsdom, which can't evaluate min-width media queries). */}
            <Flex
                as="ul"
                fontFamily="code"
                justify="space-around"
                align="center"
                listStyleType="none"
                mr="30px"
                gap="16px"
                px="20px"
                py="4px"
                borderRadius="full"
                maxH="50px"
                sx={{ ...glassSurface, "@media screen and (max-width: 767px)": { display: "none" } }}
            >
                {/* TODO(a11y): ul>div is invalid HTML; preserved from legacy structure, revisit post-migration */}
                {navItems.map(({ title, path }, i) => (
                    <Box key={path} data-nav-item onClick={() => setSelected(i)}>
                        <Link as={RouterLink} to={path} {...linkStyle}>
                            {title}
                        </Link>
                        {i === selected && (
                            <MotionUnderline
                                layoutId="underline"
                                data-testid="nav-underline"
                                width="100%"
                                height="2px"
                                borderRadius="4px"
                                bg="gold.400"
                            />
                        )}
                    </Box>
                ))}
            </Flex>

            {/* Mobile: hamburger button (morphs to an X when open) */}
            <Box
                as="button"
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                display={{ base: "flex", md: "none" }}
                position="relative"
                zIndex={2}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="4px"
                width="44px"
                height="44px"
                mr="24px"
            >
                <MotionBar {...barStyle} animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} />
                <MotionBar {...barStyle} animate={{ opacity: menuOpen ? 0 : 1 }} />
                <MotionBar {...barStyle} animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} />
            </Box>

            {/* Mobile dropdown: glass panel that slides down from the top */}
            <AnimatePresence>
                {menuOpen && (
                    <React.Fragment>
                        <Box
                            as={motion.div}
                            display={{ base: "block", md: "none" }}
                            position="fixed"
                            inset={0}
                            zIndex={0}
                            bg="blackAlpha.600"
                            onClick={() => setMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        <Flex
                            as={motion.nav}
                            display={{ base: "flex", md: "none" }}
                            position="fixed"
                            top={0}
                            left={0}
                            right={0}
                            zIndex={1}
                            direction="column"
                            align="center"
                            gap="22px"
                            pt="88px"
                            pb="32px"
                            fontFamily="code"
                            borderBottomRadius="2xl"
                            sx={glassSurface}
                            initial={{ y: "-100%" }}
                            animate={{ y: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                            exit={{ y: "-100%", transition: { duration: 0.25, ease: "easeInOut" } }}
                        >
                            {navItems.map(({ title, path }, i) => (
                                <Link
                                    key={path}
                                    as={RouterLink}
                                    to={path}
                                    fontSize="24px"
                                    onClick={() => { setSelected(i); setMenuOpen(false); }}
                                    {...linkStyle}
                                >
                                    {title}
                                </Link>
                            ))}
                        </Flex>
                    </React.Fragment>
                )}
            </AnimatePresence>
        </Flex>
    );
};
