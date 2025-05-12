interface Routes {
    HOME_ROUTE: string;
    WORK_ROUTE: string;
    SKILLS_ROUTE: string;
    EXPERIENCE_ROUTE: string;
    CONTACT_ROUTE: string;
    LINKEDIN: string;
    EMAIL_ME: string;
}

const routes: Routes = {
    HOME_ROUTE: "/",
    WORK_ROUTE: "/work",
    SKILLS_ROUTE: "/skills",
    EXPERIENCE_ROUTE: "/experience",
    CONTACT_ROUTE: "/contact",
    LINKEDIN: "https://www.linkedin.com/in/keanu-hilaire-60ab26127/",
    EMAIL_ME: "mailto:keanuhilaire@gmail.com",
};

export const {
    HOME_ROUTE,
    WORK_ROUTE,
    SKILLS_ROUTE,
    EXPERIENCE_ROUTE,
    CONTACT_ROUTE,
    LINKEDIN,
    EMAIL_ME
} = routes;

export default routes;