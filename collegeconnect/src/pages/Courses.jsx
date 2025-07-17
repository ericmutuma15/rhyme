import coursesHero from './../assets/crs.jpg';
import hivImage from './../assets/hiv.jpeg'
import nutritionImg from './../assets/nutrition.jpeg';
import communityImg from './../assets/community.jpeg';
import dentalImg from './../assets/dental0.jpeg';
import businessImg from './../assets/business.jpeg';
import computerImg from './../assets/computer.jpeg';
import waterImg from './../assets/plumbing.jpeg';
import firstAidImg from './../assets/firstaid0.jpeg';
import foodImg from './../assets/foodbev.jpeg';
import environmentImg from './../assets/environment.jpeg';
import bibleImg from './../assets/theology.jpeg';
// Short courses images
import hivShortImg from './../assets/hivcert.jpeg';
import computerShortImg from './../assets/packages.jpeg';
import homeShortImg from './../assets/care.jpeg';
import literacyShortImg from './../assets/bible.jpeg';
import signLanguageShortImg from './../assets/signlang.jpeg';
import diplomaDentalImg from './../assets/ddn.jpeg';
import chairsideDentalImg from './../assets/ddc.jpeg';
import ultrasoundImg from './../assets/dus.jpeg';
import emergencyXrayImg from './../assets/dxr.jpeg';

import { useState } from "react";

const groupedCourses = [
	{
		category: "New Courses Now Offered",
		courses: [
			{
				id: 100,
				title: "Diploma in Dental Nursing",
				description:
					"Tailored for practicing or qualified nurses seeking to specialize in dental care.",
				requirements: ["KCSE Certificate", "Interest in dental care"],
				image: diplomaDentalImg,
			},
			{
				id: 101,
				title: "Certificate in Chairside Dental Assisting",
				description:
					"Equips learners with practical skills to assist dental professionals effectively.",
				requirements: ["KCSE Certificate", "Interest in dental care"],
				image: chairsideDentalImg,
			},
			{
				id: 102,
				title: "Certificate in Ultrasound Technology",
				description:
					"Hands-on course ideal for those interested in diagnostic imaging using ultrasound.",
				requirements: ["KCSE Certificate", "Interest in health sciences"],
				image: ultrasoundImg,
			},
			{
				id: 103,
				title: "Certificate in Emergency X-ray Technology",
				description:
					"Trains professionals in conducting X-ray imaging in emergency and clinical settings.",
				requirements: ["KCSE Certificate", "Interest in health sciences"],
				image: emergencyXrayImg,
			},
		],
	},
	{
		category: "Health, Vocational & Development Courses",
		courses: [
			{
				id: 1,
				title: "Community Health & HIV/AIDS Management",
				description:
					"Comprehensive training in community health and HIV/AIDS management for aspiring health workers.",
				requirements: ["KCSE Certificate", "Interest in health sciences"],
				image: hivImage,
			},
			{
				id: 2,
				title: "Nutrition & Dietetics",
				description:
					"Learn the science of nutrition and diet planning for wellness and disease prevention.",
				requirements: ["KCSE Certificate", "Interest in nutrition"],
				image: nutritionImg,
			},
			{
				id: 3,
				title: "Community Health & Development",
				description:
					"Develop skills for community health improvement and sustainable development.",
				requirements: ["KCSE Certificate", "Passion for community work"],
				image: communityImg,
			},
			{
				id: 4,
				title: "Dental Assistant Technology",
				description:
					"Hands-on training for dental clinic support roles and patient care.",
				requirements: ["KCSE Certificate", "Interest in dental care"],
				image: dentalImg,
			},
			{
				id: 5,
				title: "Business Management",
				description:
					"Practical business management skills for entrepreneurs and professionals.",
				requirements: ["KCSE Certificate", "Interest in business"],
				image: businessImg,
			},
			{
				id: 6,
				title: "Computer Applications",
				description: "Essential computer skills for the modern workplace.",
				requirements: ["KCSE Certificate", "Basic computer literacy"],
				image: computerImg,
			},
			{
				id: 7,
				title: "Water Technology & Plumbing",
				description:
					"Technical training in water systems and plumbing for infrastructure development.",
				requirements: ["KCSE Certificate", "Interest in technical trades"],
				image: waterImg,
			},
			{
				id: 8,
				title: "First Aid, Home-Based Care & Drug Addiction Intervention",
				description:
					"Skills for emergency response, caregiving, and addiction support.",
				requirements: ["KCSE Certificate", "Interest in caregiving"],
				image: firstAidImg,
			},
			{
				id: 9,
				title: "Food & Beverage",
				description:
					"Training in food preparation, safety, and service for hospitality careers.",
				requirements: ["KCSE Certificate", "Interest in hospitality"],
				image: foodImg,
			},
			{
				id: 10,
				title: "Environment, Climate Change & Health",
				description:
					"Study the impact of environment and climate on health and wellness.",
				requirements: ["KCSE Certificate", "Interest in environment"],
				image: environmentImg,
			},
			{
				id: 11,
				title: "Bible Studies & Theology",
				description:
					"In-depth study of the Bible and theology for ministry and personal growth.",
				requirements: ["KCSE Certificate", "Interest in theology"],
				image: bibleImg,
			},
		],
	},
	{
		category: "Short Courses",
		courses: [
			{
				id: 12,
				title: "Certificate in HIV & HIV Counselling & Testing",
				description: "Short course for HIV counselling and testing skills.",
				requirements: ["KCSE Certificate"],
				image: hivShortImg,
			},
			{
				id: 13,
				title: "Computer Packages",
				description: "Short course in essential computer packages for all careers.",
				requirements: ["KCSE Certificate"],
				image: computerShortImg,
			},
			{
				id: 14,
				title: "Home Management & Basic Caregiving",
				description:
					"Skills for home management and caregiving for families and communities.",
				requirements: ["KCSE Certificate"],
				image: homeShortImg,
			},
			{
				id: 15,
				title: "Basic Literacy, Theology & Biblical Studies",
				description: "Foundational literacy and biblical studies for all ages.",
				requirements: ["Open to all"],
				image: literacyShortImg,
			},
			{
				id: 16,
				title: "Kenyan Sign Language",
				description:
					"Learn Kenyan Sign Language for communication and inclusion.",
				requirements: ["Open to all"],
				image: signLanguageShortImg,
			},
		],
	},
];

export default function Courses() {
	const [selected, setSelected] = useState(null);
	return (
		<div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-0 md:px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
					Our Courses
				</h2>
				<img
					src={coursesHero}
					alt="Courses"
					className="w-full h-64 rounded-lg shadow mb-8 object-contain bg-white"
				/>
				{groupedCourses.map((group, idx) => (
					<div key={group.category} className="mb-12">
						<h3 className="text-2xl font-bold mb-6 text-blue-800">
							{group.category}
						</h3>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{group.courses.map((course) => (
								<div
									key={course.id}
									className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
									onClick={() => setSelected(course)}
								>
									<img
										src={course.image}
										alt={course.title}
										className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-blue-200"
									/>
									<h4 className="text-xl font-semibold mb-2 text-center">
										{course.title}
									</h4>
									<button
										className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
										onClick={(e) => {
											e.stopPropagation();
											setSelected(course);
										}}
									>
										View Details
									</button>
								</div>
							))}
						</div>
					</div>
				))}
				{selected && (
					<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
						<div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
							<button
								className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
								onClick={() => setSelected(null)}
							>
								&times;
							</button>
							<img
								src={selected.image}
								alt={selected.title}
								className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-blue-200"
							/>
							<h3 className="text-2xl font-bold mb-2 text-blue-700 text-center">
								{selected.title}
							</h3>
							<p className="mb-4 text-gray-700 text-center">
								{selected.description}
							</p>
							<div className="mb-4">
								<div className="font-semibold mb-1">Requirements:</div>
								<ul className="list-disc pl-6 text-gray-700">
									{selected.requirements.map((req, i) => (
										<li key={i}>{req}</li>
									))}
								</ul>
							</div>
<button
  className="block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
  onClick={() => {
	window.location.href = `/apply?course=${selected.id}`;
  }}
>
  Apply for this Course
</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
