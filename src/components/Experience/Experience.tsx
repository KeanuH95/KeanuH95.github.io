import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { container, item } from "../../utils/textAnimation";
import { Box, Text } from "@chakra-ui/react";

const experiences = [
	{
		jobTitle: "Product Engineer",
		employer: "Stepful",
		employerLink: "https://stepful.com/",
		time: "December 2023 - Present",
		descriptions: [
			"Designed and maintained platforms for coordinators, coaches, and managers to optimize student success in finding job opportunities post graduations",
			"Implemented features to enable thousands of students to match with clinics and pharmacies all over the US",
			"Designed and developed an integration with Hubspot to import and synchronize over 200k healthcare companies to the platform",
		],
	},
	{
		jobTitle: "Software Engineer",
		employer: "Newco: An IAC Incubator",
		employerLink: "https://buildwithnewco.com/",
		time: "August 2020 - October 2023",
		descriptions: [
			"Collaborated closely with UX/UI designers in order to implement engaging and intuitive user experiences on web platforms",
			"Built and maintained multiple data layers and APIs in order to serve and support applications",
			"Designed and developed multiple key features and refactors across different microservices",
			"Led collaborative initiatives with partner companies, ensuring compatibility and interoperability of software systems",
		],
	},
	{
		jobTitle: "Pre-Calculus/Robotics Teacher",
		employer: "Northwood School",
		employerLink: "https://www.northwoodschool.org/",
		time: "June 2019 - June 2020",
		descriptions: [
			"Assisted students in learning the proper methods for Robotics programming",
			"Assisted students in building and testing robot drivetrains and components",
		],
	},
	{
		jobTitle: "Software Engineer Intern",
		employer: "Friends & Family",
		employerLink: "http://www.friendsfamily.co/",
		time: "June 2018 - August 2018",
		descriptions: [
			"Developed frontend code for various applications (HTML, CSS, Javascript)",
			"Developed backend code for various applications (Ruby)",
			"Built features for internal and customer facing applications (RoR)",
		],
	},
];

export const Experience: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.8, ease: "easeInOut" }}
		>
			<Helmet>
				<title>Keanu Hilaire | My Experience</title>
			</Helmet>
			<Box fontFamily="'Poppins', sans-serif" width="100%" className="pageWrapper">
				<Text as="h1" textAlign="center" fontSize="50px" color="lilac.500">
					Where I've Worked
				</Text>
				<Box
					display="grid"
					gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
					gap="30px"
				>
					{experiences.map((experience, index) => (
						<Box key={index} width="100%">
							<Text
								as="span"
								display="block"
								textAlign="center"
								color="lilac.500"
								fontSize="1.9em"
							>
								{experience.jobTitle}
							</Text>
							<Text
								as="a"
								href={experience.employerLink}
								target="_blank"
								rel="noopener noreferrer"
								display="block"
								textAlign="center"
								textDecoration="none"
								color="gold.500"
								fontSize="30px"
							>
								{experience.employer}
							</Text>
							<Text
								as="span"
								display="block"
								textAlign="center"
								color="gray.500"
								fontSize="20px"
								fontFamily="'Roboto', monospace"
							>
								{experience.time}
							</Text>
							<Box
								color="gray.500"
								fontSize="18px"
								as="ul"
								sx={{
									"li::marker": {
										content: '"🟣 "',
										fontSize: "15px",
									},
								}}
								width={{ base: "80%", lg: "100%" }}
								margin={{ base: "0 auto", lg: "0" }}
							>
                <motion.ul variants={container} initial="hidden" animate="show">
                  {experience.descriptions.map((desc, descIndex) => (
                    <motion.li key={descIndex} variants={item}>
                      {desc}
                    </motion.li>
                  ))}
                </motion.ul>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</motion.div>
	);
};
