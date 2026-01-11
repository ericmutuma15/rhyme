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

const coursesByDepartment = [
  {
    department: "Department of Health",
    subcategories: [
      {
        // NOTE: Department of Oral Health Sciences is our wing for Corporate Social Responsibility (CSR).
        // Courses in this subcategory are geared towards offering good oral health to the public to mitigate the oral health burden.
        // To that end, courses are offered at subsidized fees and there are scholarships for deserving candidates.
        // Needy students are also provided accommodation and upkeep at subsidized cost.
        name: "Oral Health Sciences",
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
            id: 200,
            title: "Diploma in Community Dental Hygienist",
            description:
              "Comprehensive diploma program for training as a community dental hygienist.",
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
            description:
              "Certificate program for entry-level community dental hygienist skills.",
            requirements: ["KCSE Certificate", "Interest in dental hygiene"],
            image: diplomaCommunityDentalImg,
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
              overview: `...` // original long overview kept in course details where needed
            }
          }
        ],
      },
      {
        name: "Clinical & Diagnostic Imaging",
        courses: [
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
          }
        ],
      },
      {
        name: "Community & Public Health",
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
            id: 3,
            title: "Community Health & Development",
            description:
              "Develop skills for community health improvement and sustainable development.",
            requirements: ["KCSE Certificate", "Passion for community work"],
            image: communityImg,
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
            id: 10,
            title: "Environment, Climate Change & Health",
            description:
              "Study the impact of environment and climate on health and wellness.",
            requirements: ["KCSE Certificate", "Interest in environment"],
            image: environmentImg,
          }
        ]
      },
      {
        name: "Emergency, First Response & Caregiving",
        courses: [
          {
            id: 8,
            title: "First Aid, Home-Based Care & Drug Addiction Intervention",
            description:
              "Skills for emergency response, caregiving, and addiction support.",
            requirements: ["KCSE Certificate", "Interest in caregiving"],
            image: firstAidImg,
          }
        ]
      }
    ]
  },

  {
    department: "Department of Vocational & Technical",
    subcategories: [
      {
        name: "Technical Trades & Skills",
        courses: [
          {
            id: 7,
            title: "Water Technology & Plumbing",
            description:
              "Technical training in water systems and plumbing for infrastructure development.",
            requirements: ["KCSE Certificate", "Interest in technical trades"],
            image: waterImg,
          }
        ]
      },
      {
        name: "Hospitality & Service",
        courses: [
          {
            id: 9,
            title: "Food & Beverage",
            description:
              "Training in food preparation, safety, and service for hospitality careers.",
            requirements: ["KCSE Certificate", "Interest in hospitality"],
            image: foodImg,
          }
        ]
      }
    ]
  },

  {
    department: "Department of Business & ICT",
    subcategories: [
      {
        name: "Business & Management",
        courses: [
          {
            id: 5,
            title: "Business Management",
            description:
              "Practical business management skills for entrepreneurs and professionals.",
            requirements: ["KCSE Certificate", "Interest in business"],
            image: businessImg,
          }
        ]
      },
      {
        name: "Computer Applications & ICT",
        courses: [
          {
            id: 6,
            title: "Computer Applications",
            description: "Essential computer skills for the modern workplace.",
            requirements: ["KCSE Certificate", "Basic computer literacy"],
            image: computerImg,
          }
        ]
      }
    ]
  },

  {
    department: "Department of Theology & Social Studies",
    subcategories: [
      {
        name: "Theology & Ministry",
        courses: [
          {
            id: 11,
            title: "Bible Studies & Theology",
            description:
              "In-depth study of the Bible and theology for ministry and personal growth.",
            requirements: ["KCSE Certificate", "Interest in theology"],
            image: bibleImg,
          }
        ]
      }
    ]
  },

  {
    department: "Continuing Education & Short Courses",
    subcategories: [
      {
        name: "Health Short Courses",
        courses: [
          {
            id: 12,
            title: "Certificate in HIV & HIV Counselling & Testing",
            description: "Short course for HIV counselling and testing skills.",
            requirements: ["KCSE Certificate"],
            image: hivShortImg,
          }
        ]
      },
      {
        name: "ICT Short Courses",
        courses: [
          {
            id: 13,
            title: "Computer Packages",
            description: "Short course in essential computer packages for all careers.",
            requirements: ["KCSE Certificate"],
            image: computerShortImg,
          },
          {
            id: 17,
            title: "Computer Literacy",
            description:
              "Course intended to train senior citizens on computer literacy so they can catch up with the current digital lifestyle, access government services, and use smartphones and social media.",
            requirements: ["Open to senior citizens", "No prior experience required"],
            image: computerLiteracyImg,
          }
        ]
      },
      {
        name: "Caregiving & Community",
        courses: [
          {
            id: 14,
            title: "Home Management & Basic Caregiving",
            description:
              "Skills for home management and caregiving for families and communities.",
            requirements: ["KCSE Certificate"],
            image: homeShortImg,
          }
        ]
      },
      {
        name: "Literacy & Language",
        courses: [
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
          }
        ]
      }
    ]
  },

  {
    department: "New / Special Intake",
    subcategories: [
      {
        name: "Recently Added",
        courses: [
          // These are highlights referencing the new courses (IDs exist above in full form)
          { id: 100, title: "Diploma in Dental Nursing" },
          { id: 101, title: "Certificate in Chairside Dental Assisting" },
          { id: 102, title: "Certificate in Ultrasound Technology" },
          { id: 103, title: "Certificate in Emergency X-ray Technology" },
          { id: 200, title: "Diploma in Community Dental Hygienist" },
          { id: 210, title: "Certificate in Community Dental Hygienist" }
        ]
      }
    ]
  }
];

export default function Courses() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // helper to safely get image or fallback
  const getCourseImage = (course) => {
    return course?.image || coursesHero;
  };

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

        {coursesByDepartment.map((dept) => (
          <div key={dept.department} className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">
              {dept.department}
            </h3>

            {/* If this is the Department of Health, show CSR message (visible on page) */}
            {dept.department === "Department of Health" && (
              <div className="mb-6 bg-white p-4 rounded shadow-sm border-l-4 border-blue-300">
                <h4 className="font-semibold text-blue-700 mb-2">Oral Health: Our CSR Wing</h4>
                <p className="text-gray-700">
                  The Department of Oral Health Sciences is our Corporate Social Responsibility (CSR) wing.
                  Courses in this department are geared towards offering good oral health to the public in order to mitigate the oral health burden.
                  To that end, these courses are offered at subsidized fees and scholarships are available for deserving students.
                  Needy students are also provided with subsidized accommodation and upkeep.
                </p>
              </div>
            )}

            {dept.subcategories.map((subcat) => (
              <div key={subcat.name} className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-blue-700">{subcat.name}</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {subcat.courses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
                      onClick={() => setSelected(course)}
                    >
                      <img
                        src={getCourseImage(course)}
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
                src={getCourseImage(selected)}
                alt={selected.title}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-blue-200"
              />
              <h3 className="text-2xl font-bold mb-2 text-blue-700 text-center">
                {selected.title}
              </h3>
              <p className="mb-4 text-gray-700 text-center">
                {selected.description || "More details available upon request."}
              </p>
              <div className="mb-4">
                <div className="font-semibold mb-1">Requirements:</div>
                <ul className="list-disc pl-6 text-gray-700">
                  {(selected.requirements || []).map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Show extra details for Dental Assistant Technology (id === 4) */}
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
