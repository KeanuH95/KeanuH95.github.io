import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { container, item } from "../../utils/textAnimation";
import { Box, Text } from "@chakra-ui/react";

const experiences = [
	{
		jobTitle: "Senior Software Engineer",
		employer: "Quality Products",
		employerLink: "https://buildqp.com",
		location: "Brooklyn, NY",
		time: "September 2025 – Present",
		descriptions: [
			"Developed and launched an AI prompt-optimization Google Chrome Extension, PromptGoat, enabling users to automatically improve and refine prompts for generative AI workflows",
			"Architected and deployed a conversational AI platform processing 5,000+ messages daily across iMessage, RCS, and SMS, owning the end-to-end messaging and AI infrastructure",
			"Designed and implemented a secure crowdfunding payment system that routes donations directly from individual contributors to private beneficiaries, owning the end-to-end payment architecture and transaction flow",
		],
	},
	{
		jobTitle: "Product Engineer",
		employer: "Stepful",
		employerLink: "https://stepful.com/",
		location: "New York, NY",
		time: "December 2023 – September 2025",
		descriptions: [
			"Designed and maintained platforms for coordinators, coaches, and managers to optimize student success in finding job opportunities post-graduation",
			"Implemented features to enable 20k monthly active students to match with clinics and pharmacies all over the US",
			"Designed and developed an integration with Hubspot to import and synchronize over 200k healthcare companies to the platform",
		],
	},
	{
		jobTitle: "Software Engineer",
		employer: "Newco: An IAC Incubator",
		employerLink: "https://buildwithnewco.com/",
		location: "Brooklyn, NY",
		time: "August 2020 – October 2023",
		descriptions: [
			"Collaborated closely with UX/UI designers to implement engaging and intuitive user experiences on web platforms",
			"Built and maintained multiple data layers and APIs to serve and support applications",
			"Designed and developed multiple key features and refactors across different microservices",
			"Led collaborative initiatives with partner companies, ensuring compatibility and interoperability of software systems",
		],
	},
	{
		jobTitle: "Pre-Calculus/Robotics Teacher",
		employer: "Northwood School",
		employerLink: "https://www.northwoodschool.org/",
		location: "Lake Placid, NY",
		time: "June 2019 – June 2020",
		descriptions: [
			"Assisted students in learning the proper methods for Robotics programming",
			"Assisted students in building and testing robot drivetrains and components",
		],
	},
	{
		jobTitle: "Software Engineer Intern",
		employer: "Friends & Family",
		employerLink: "http://www.friendsfamily.co/",
		location: "Brooklyn, NY",
		time: "June 2018 – August 2018",
		descriptions: [
			"Developed frontend code for various applications (HTML, CSS, JavaScript)",
			"Developed backend code for various applications (Ruby)",
			"Built features for internal and customer-facing applications (RoR)",
		],
	},
];

export const Experience: React.FC = () => {
	return (
		<Box
			as={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
			exit={{ opacity: 0 }}
			pb="80px"
		>
			<Helmet>
				<title>Keanu Moreno-Hilaire | My Experience</title>
			</Helmet>
			<Box width="100%" className="pageWrapper">
				<Text as="h1" textStyle="pageTitle" textAlign="center" color="lilac.500" mb={{ base: 4, md: 6 }}>
					Where I've Worked
				</Text>
				{/* Left-rail timeline: a single gold line with a dot per role. */}
				<Box
					position="relative"
					width="100%"
					maxW="760px"
					mx="auto"
					sx={{
						_before: {
							content: '""',
							position: "absolute",
							left: "7px",
							top: "6px",
							bottom: "6px",
							width: "2px",
							background:
								"linear-gradient(180deg, var(--chakra-colors-gold-400) 0%, rgba(212, 175, 55, 0.15) 100%)",
						},
					}}
				>
					{experiences.map((experience, index) => (
						<Box
							key={index}
							position="relative"
							pl={{ base: "28px", md: "40px" }}
							pb={index === experiences.length - 1 ? "0" : "40px"}
						>
							{/* dot on the rail */}
							<Box
								position="absolute"
								left="0"
								top="6px"
								width="16px"
								height="16px"
								borderRadius="full"
								bg="gold.400"
								boxShadow="0 0 0 4px rgba(212, 175, 55, 0.15), 0 0 12px rgba(212, 175, 55, 0.5)"
							/>
							<Text
								as="span"
								display="block"
								textStyle="sectionTitle"
								color="lilac.500"
							>
								{experience.jobTitle}
							</Text>
							<Text
								as="a"
								href={experience.employerLink}
								target="_blank"
								rel="noopener noreferrer"
								display="inline-block"
								fontFamily="heading"
								fontWeight="medium"
								textDecoration="none"
								color="gold.500"
								fontSize={{ base: "lg", md: "xl" }}
								transition="color 0.2s ease"
								_hover={{ color: "gold.400", textDecoration: "underline" }}
							>
								{experience.employer}
							</Text>
							<Text
								textStyle="eyebrow"
								display="block"
								color="gray.500"
								mt="2px"
								mb="12px"
							>
								{`${experience.location} · ${experience.time}`}
							</Text>
							<Box
								as={motion.ul}
								variants={container}
								initial="hidden"
								animate="show"
								color="whiteAlpha.800"
								fontSize={{ base: "sm", md: "md" }}
								sx={{
									"li::marker": {
										content: '"• "',
										color: "var(--chakra-colors-gold-400)",
										fontSize: "15px",
									},
								}}
							>
								{experience.descriptions.map((desc, descIndex) => (
									<Box as={motion.li} key={descIndex} variants={item} mb="6px" lineHeight="1.5">
										{desc}
									</Box>
								))}
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};
