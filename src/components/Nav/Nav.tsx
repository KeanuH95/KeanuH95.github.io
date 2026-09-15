import React, { useState } from "react";
import { motion } from "motion/react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";

import routes from "../../utils/routes";

// Chakra-styled motion element for the underline. NOTE: `layoutId` does NOT
// animate here — the underline is conditionally mounted with no LayoutGroup/
// AnimatePresence ancestor, so it hard-appears/disappears. This matches the
// legacy behavior exactly (legacy had the same structure and never slid).
// A sliding underline would be a future enhancement, not an equivalence fix.
const MotionUnderline = chakra(motion.div);

/**
 * Site navigation. Implements BR-13 (single-select highlight): one underline
 * marks the selected item; clicking the KH logo clears it.
 * Migrated from Nav.module.scss to inline Chakra styling (Phase 1 pilot) with
 * observable behavior preserved exactly — see analysis/.../BASELINE.md.
 */
export const Nav: React.FC = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const navItems = [
        { title: "Experience", path: routes.EXPERIENCE_ROUTE },
        { title: "Work", path: routes.WORK_ROUTE },
        { title: "Skills", path: routes.SKILLS_ROUTE },
        { title: "Contact", path: routes.CONTACT_ROUTE },
    ];

    // Shared link styling (legacy `.navBar a { text-decoration: none; color: gold }`).
    const linkStyle = {
        textDecoration: "none",
        color: "gold.500",
        _hover: { textDecoration: "none" },
        _visited: { color: "gold.500" }, // legacy `.navBar a` stayed gold when visited
    };

    return (
        <Flex
            as="nav"
            position="relative"
            zIndex={2}
            color="lilac.500"
            justify="space-between"
            width="100%"
        >
            <Box
                as="h1"
                ml="30px"
                fontFamily='"Gorehand"'
                fontSize="48px"
                sx={{ "@media screen and (max-width: 640px)": { fontSize: "30px" } }}
            >
                <Link as={RouterLink} to={routes.HOME_ROUTE} onClick={() => setSelected(null)} {...linkStyle}>
                    KH
                </Link>
            </Box>
            <Flex
                as="ul"
                fontFamily="'Roboto Mono', monospace"
                justify="space-around"
                align="center"
                listStyleType="none"
                mr="30px"
                gap="12px"
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
                                bg="gold.500"
                            />
                        )}
                    </Box>
                ))}
            </Flex>
        </Flex>
    );
};
