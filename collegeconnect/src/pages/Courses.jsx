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
import diplomaCommunityDentalImg from './../assets/dnc.avif';
import computerLiteracyImg from './../assets/complit.jpg';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const groupedCourses = [
   {
	   category: "New Courses Now Offered",
	   courses: [
		   {
			   id: 100,
			   title: "Diploma in Dental Nursing",
			   description:
				   "Tailored for practicing or qualified nurses seeking to specialize in dental care.",
			   requirements: [
				   "KCSE and above",
				   "Healthcare professionals interested in upgrading to dental care",
				   "Interest in dental care"
			   ],
			   image: diplomaDentalImg,
		   },
		   {
			   id: 101,
			   title: "Certificate in Chairside Dental Assisting",
			   description:
				   "Equips learners with practical skills to assist dental professionals effectively.",
			   requirements: [
				   "Open to all",
				   "Certificate in certified nurse assistant course"
			   ],
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
		   {
			   id: 200,
			   title: "Diploma in Community Dental Hygienist",
			   description: "Comprehensive diploma program for training as a community dental hygienist.",
			   requirements: [
				   "KCSE Certificate",
				   "Interest in dental hygiene",
				   "Any qualification in community health course",
				   "Certified nurse assistant course"
			   ],
			   image: diplomaCommunityDentalImg,
		   },
		   {
			   id: 210,
			   title: "Certificate in Community Dental Hygienist",
			   description: "Certificate program for entry-level community dental hygienist skills.",
			   requirements: ["KCSE Certificate", "Interest in dental hygiene"],
			   image: diplomaCommunityDentalImg,
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
				title: "Dental Assistant Technology (TVET Accredited)",
				description:
					"Start your career in dentistry with our 1-Year Dental Assistant Certificate. This hands-on, TVET-accredited program equips you with the knowledge, skills, and confidence to work in dental clinics, hospitals, and community health settings. Includes 200+ hours of clinical placement, digital radiography, and modern facilities. High demand career with pathway to advanced dental programs.",
				requirements: [
					"KCSE D+ (or equivalent) or prior healthcare support training",
					"Passion for healthcare and patient care",
					"Good communication, attention to detail, manual dexterity"
				],
				image: dentalImg,
				details: {
					overview: `\
      \n**Course Overview**\n\nStart your career in dentistry with our 1-Year Dental Assistant Certificate. This hands-on, TVET-accredited program equips you with the knowledge, skills, and confidence to work in dental clinics, hospitals, and community health settings.\n\nYou'll learn everything from chairside assisting and radiography to infection control, dental office management, and community oral health promotion. With over 200 hours of clinical training, you'll graduate job-ready.\n\n**Program Structure**\n- Duration: 12 months (2 semesters / 3 terms)\n- Delivery: Lectures, skills lab, clinical practicum, assessments\n- Clinical Hours: 200+ hours of clinical placement\n\n**Entry Requirements**\n- KCSE D+ (or equivalent) or prior healthcare support training\n- Passion for healthcare and patient care\n- Good communication, attention to detail, manual dexterity\n\n**Course Benefits**\n- 1 Year Only - fast track into dentistry\n- Hands-On Training - extensive lab work\n- Career-Ready - high demand for dental assistants\n- Clinical placement guaranteed\n- Pathway to advanced dental programs\n- Digital radiography training included\n\n**Why Choose Our Dental Assistant Program?**\n- Comprehensive Curriculum: Covers all aspects of dental assisting from chairside techniques to radiography and office administration\n- Extensive Clinical Experience: 200+ hours of clinical placement in real dental settings\n- High Demand Career: Growing need for qualified dental assistants in Kenya and internationally\n- Expert Instruction: Learn from experienced dental professionals\n- Modern Facilities: Training includes digital radiography and modern dental equipment\n\n**Curriculum Overview**\n\n*Semester 1: Foundations of Dental Assisting (6 months)*\n- Introduction to Dentistry & Dental Assisting\n- Dental Anatomy & Physiology\n- Infection Prevention & Control\n- Dental Materials & Equipment\n- Basic Chairside Assisting\n- Practical & Clinical Skills\n\n*Semester 2: Advanced Skills & Clinical Practice (6 months)*\n- Dental Radiology\n- Dental Office Administration\n- Dental Specialties\n- Pharmacology & Dental Emergencies\n- Community & Preventive Dentistry\n- Clinical Practicum\n\n**Assessment & Certification**\n- Continuous Assessment (written & practical exams)\n- OSCE (skills-based)\n- Final Examination (theory & clinical)\n- Logbook & Portfolio (clinical competencies)\n\n**Career Paths**\n- Dental Assistant (private/public clinics)\n- Dental Radiography Assistant\n- Community Oral Health Promoter\n- Administrative support in dental offices\n- Pathway to further education: Diploma in Dental Technology, Oral Health, advanced certifications\n\n**Learning Outcomes**\n- Assist dentists during all routine dental procedures\n- Apply strict infection prevention and sterilization standards\n- Take and process dental radiographs safely\n- Manage patient records and office administration tasks\n- Educate patients on oral health and preventive practices\n- Respond appropriately to dental and medical emergencies\n\n**Enroll Today**\nAdmissions are ongoing.\n\n**Contact Us**\nMAIN CAMPUS, MERU MUNICIPALITY, RUNOGONE NEAR CHIEF'S NEXT TO E.A.P.C.CHURCH\nTelephone: 0113678958 or 0704478783\nEmail: rhemaprosper.1@gmail.com\nWebsite: https://rhymeinstitute.vercel.app\nCampuses: Machakos, Rongai\n\nRhyme Training Institute's strategic objective is to Train an Effective Workforce for the Global Market. We aspire to position ourselves as an institution of first choice in the training of world class Highly-Skilled vocational and technical Graduates.\n`
				}
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
				{
					id: 17,
					title: "Computer Literacy",
					description: "Course intended to train senior citizens on computer literacy so they can catch up with the current digital lifestyle, access government services, and use smartphones and social media.",
					requirements: ["Open to senior citizens", "No prior experience required"],
					image: computerLiteracyImg,
				},
		],
	},
];

export default function Courses() {
	const [selected, setSelected] = useState(null);
	const navigate = useNavigate();
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
						<div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
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
							{/* Show extra details for Dental Assistant Technology, only course-relevant info */}
							{selected.id === 4 && (
								<div className="mb-4 text-sm text-gray-800 whitespace-pre-line border-t pt-4">
									<div>
										<span className="font-bold">Program Overview</span><br/>
										1-Year TVET Accredited Dental Assistant Certificate. Hands-on training for dental clinics, hospitals, and community health settings. Includes chairside assisting, radiography, infection control, office management, and oral health promotion. 200+ hours clinical placement.
										<br/><br/>
										<span className="font-bold">Program Structure</span><br/>
										Duration: 12 months (2 semesters / 3 terms)<br/>
										Delivery: Lectures, skills lab, clinical practicum, assessments<br/>
										Clinical Hours: 200+ hours clinical placement
										<br/><br/>
										<span className="font-bold">Curriculum Overview</span><br/>
										Semester 1: Foundations of Dental Assisting<br/>
										- Introduction to Dentistry & Dental Assisting<br/>
										- Dental Anatomy & Physiology<br/>
										- Infection Prevention & Control<br/>
										- Dental Materials & Equipment<br/>
										- Basic Chairside Assisting<br/>
										Semester 2: Advanced Skills & Clinical Practice<br/>
										- Dental Radiology<br/>
										- Dental Office Administration<br/>
										- Dental Specialties<br/>
										- Pharmacology & Dental Emergencies<br/>
										- Community & Preventive Dentistry<br/>
										- Clinical Practicum
										<br/><br/>
										<span className="font-bold">Course Benefits</span><br/>
										- Fast track: 1 year only<br/>
										- Hands-on training & lab work<br/>
										- High demand career<br/>
										- Clinical placement guaranteed<br/>
										- Pathway to advanced dental programs<br/>
										- Digital radiography training included
										<br/><br/>
										<span className="font-bold">Career Paths</span><br/>
										- Dental Assistant (private/public clinics)<br/>
										- Dental Radiography Assistant<br/>
										- Community Oral Health Promoter<br/>
										- Administrative support in dental offices<br/>
										- Pathway to further education: Diploma in Dental Technology, Oral Health, advanced certifications
										<br/><br/>
										<span className="font-bold">Contact & Enrollment</span><br/>
										Admissions ongoing.<br/>
										Main Campus: Meru Municipality, Runogone near Chief's next to E.A.P.C. Church<br/>
										Tel: 0113678958 / 0704478783<br/>
										Email: rhemaprosper.1@gmail.com<br/>
										Website: https://rhymeinstitute.vercel.app
									</div>
								</div>
							)}
							<button
								className="block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
								onClick={() => {
									navigate(`/apply?course=${selected.id}`);
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
