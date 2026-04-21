import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from './../assets/edu.jpg';
import logoImg from './../assets/rhymelogo.png';
import applyImg from './../assets/applynow.jpg';
import coursesImg from './../assets/newcourse.png';
import aboutImg from './../assets/aboutus0.jpg';
import contactImg from './../assets/contact.jpg';
import admissionsImg from './../assets/admission.png';
import careerImg from './../assets/career.jpg';
import courseImg from './../assets/newcourses.jpg';
import janeImg from './../assets/jane.jpg';
import samuelImg from './../assets/samuel.jpg';
import computerLiteracyImg from './../assets/complit.jpg';
import aishaJpg from './../assets/aisha.jpg';
import brookImg from './../assets/Designer.png';
import bfhImg from './../assets/bfhlogo.png';
import uniImg from './../assets/uh.jpg';
import theoImg from './../assets/theo.jpg';
import redImg from './../assets/red.png';
import shaImg from './../assets/sha.png';

function useAutoRotatingCarousel(items, itemsPerPage = 1, autoRotateInterval = 6000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return undefined;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [items, itemsPerPage, autoRotateInterval]);

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return { currentIndex, visibleItems };
}

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function NewsEventsCarousel() {
  const newsItems = [
    {
      id: 1,
      title: 'Admissions Open for March Intake',
      date: 'March 2026',
      image: admissionsImg,
      description:
        'Apply now for our upcoming March intake. Limited slots available for diploma and certificate courses!',
    },
    {
      id: 2,
      title: 'Open Day & Career Fair',
      date: '20 April 2025',
      image: careerImg,
      description:
        'Join us for our annual open day and career fair. Meet our faculty and explore your future career options.',
    },
    {
      id: 3,
      title: 'New Short Courses Launched',
      date: '5 July 2025',
      image: courseImg,
      description:
        'We have introduced new short courses in ICT, Business, Health and Paralegal studies. Enroll today to upskill!',
    },
  ];

  const { currentIndex, visibleItems } = useAutoRotatingCarousel(newsItems, 1, 6000);

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-hidden">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center"
          >
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.date}</p>
            <p className="text-gray-700 text-center text-base flex-1">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {newsItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-blue-300'
            }`}
            aria-label={`Go to news item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: 'Jane M.',
      image: janeImg,
      text: 'Rhyme gave me the skills and confidence to start my own business. The instructors are amazing!',
    },
    {
      id: 2,
      name: 'Samuel K.',
      image: samuelImg,
      text: 'The campus environment is so supportive. I made lifelong friends and learned so much.',
    },
    {
      id: 3,
      name: 'Aisha L.',
      image: aishaJpg,
      text: 'The short courses are practical and flexible. I highly recommend Rhyme to anyone!',
    },
  ];

  const { currentIndex, visibleItems } = useAutoRotatingCarousel(testimonials, 1, 6000);

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-hidden">
        {visibleItems.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200 object-cover"
            />
            <h3 className="text-lg font-bold text-blue-700 mb-3">{testimonial.name}</h3>
            <p className="text-gray-700 text-center text-base italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-blue-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PartnersCarousel() {
  const partners = [
    { id: 1, name: 'Brook of Healing', image: brookImg },
    { id: 2, name: 'British Family Hospital', image: bfhImg },
    { id: 3, name: 'Universal Hospital', image: uniImg },
    { id: 4, name: 'Theophilus Institute', image: theoImg },
    { id: 5, name: 'Partner 5', image: redImg },
    { id: 6, name: 'Partner 6', image: shaImg },
  ];

  const { currentIndex, visibleItems } = useAutoRotatingCarousel(partners, 3, 6000);

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-wrap justify-center gap-8 items-center min-h-24">
          {visibleItems.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center transform transition-all duration-300 hover:scale-110"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-20 w-20 object-cover rounded-full border-2 border-blue-200 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(partners.length / 3) }, (_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === Math.floor(currentIndex / 3) ? 'w-8 bg-blue-600' : 'w-2 bg-blue-300'
            }`}
            aria-label={`Go to partners page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [seniorModalOpen, setSeniorModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center w-full">
      <RevealSection className="w-full max-w-5xl mx-auto px-4 md:px-0 mt-12">
        <div className="flex flex-col items-center mb-4">
          <img
            src={logoImg}
            alt="RHYME TRAINING INSTITUTE Logo"
            className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg mb-2"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center drop-shadow mb-2">
            RHYME TRAINING INSTITUTE
          </h1>
          <p className="text-lg md:text-2xl text-blue-700 font-semibold italic mb-4 text-center">
            “Training for self‑reliance and wellness”
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="flex-shrink-0 flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
            <img src={homeImage} alt="Campus" className="w-full max-w-md rounded-lg shadow object-contain" />
          </div>
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-2">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Diploma & Certificate Courses</span>
              <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium">Artisan Trades (Subsidized)</span>
              <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-medium">Accommodation Available</span>
            </div>
            <p className="text-gray-700 text-center md:text-left max-w-2xl mb-6">
              Welcome to RHYME TRAINING INSTITUTE, your gateway to practical, market-driven education. We offer a wide range of diploma, certificate, short courses, and artisan skills training — many at subsidized rates for community inclusion. Join our vibrant community and take the next step toward self-reliance, wellness, and prosperity!
            </p>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 mb-6 shadow flex flex-col items-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Our Strategic Objective</h3>
          <p className="text-gray-700 text-center mb-2">
            Rhyme Training Institute's strategic objective is to train an effective workforce for the global market while promoting inclusive community development. We aspire to position ourselves as an institution of first choice in the training of world-class, highly-skilled vocational and technical graduates with a commitment to affordability and accessibility.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full font-semibold">TVET Accredited</span>
            <span className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full font-semibold">Clinical Placement Guaranteed</span>
            <span className="inline-block bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full font-semibold">Community-Centered</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="text-lg font-bold text-blue-800">Our Mission</h4>
            <p className="text-gray-700">
              Empower learners with practical, industry-ready skills and digital confidence through accessible, affordable training to unlock employment, entrepreneurship, and community impact.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="text-lg font-bold text-blue-800">Our Vision</h4>
            <p className="text-gray-700">
              To be the region's leading community-centered vocational institute, transforming lives through inclusive, high-quality training, innovation, and commitment to social development.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="flex flex-col items-center mt-4" delay={100}>
        <a href="/apply" className="px-8 py-3 bg-green-600 text-white rounded-lg font-bold text-lg shadow hover:bg-green-700 transition mb-2 animate-pulse">
          Admission Ongoing: Apply Now
        </a>
        <a href="/courses" className="px-8 py-3 bg-blue-700 text-white rounded-lg font-bold text-lg shadow hover:bg-blue-800 transition mb-2">
          Explore Our Courses
        </a>
      </RevealSection>

      <RevealSection className="w-full max-w-4xl mx-auto mt-10" delay={120}>
        <div className="flex justify-center">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSeniorModalOpen(true)}
            onKeyDown={(e) => e.key === 'Enter' && setSeniorModalOpen(true)}
            className="w-full md:w-3/4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-2xl shadow-2xl p-6 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-6"
          >
            <img src={computerLiteracyImg} alt="Seniors" className="w-24 h-24 rounded-xl object-cover border-4 border-white shadow-lg" />
            <div>
              <h3 className="text-2xl font-extrabold">Senior Learners Programme</h3>
              <p className="mt-2 text-sm text-blue-100 max-w-xl">
                We welcome senior students — flexible timetables, tailored computer literacy and community-friendly courses to help older learners stay active, skilled and connected. Click to learn more.
              </p>
              <div className="mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSeniorModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-700 rounded-lg font-semibold shadow hover:opacity-95 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {seniorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSeniorModalOpen(false)} />
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden mx-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6 bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                <div className="text-center">
                  <img src={computerLiteracyImg} alt="Seniors" className="w-40 h-40 rounded-xl object-cover mb-4 shadow-xl border-4 border-white" />
                  <h3 className="text-2xl font-bold">Seniors Programme</h3>
                  <p className="mt-2 text-sm text-blue-100">Encouraging lifelong learning — flexible, friendly, and community-focused.</p>
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <h4 className="text-xl font-bold text-blue-800">Join our Seniors Programme</h4>
                <p className="mt-3 text-gray-700">
                  Rhyme Training Institute offers specially adapted courses for senior learners, including computer literacy, entrepreneurship, and community health topics. We prioritise accessibility, supportive instructors, and practical outcomes to help seniors stay engaged and skilled.
                </p>
                <ul className="mt-4 list-disc pl-6 text-gray-700">
                  <li>Flexible schedules and daytime classes</li>
                  <li>Friendly learning environment with peer support</li>
                  <li>Practical computer and life skills</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      setSeniorModalOpen(false);
                      navigate('/senior');
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Learn More & Apply
                  </button>
                  <button
                    onClick={() => setSeniorModalOpen(false)}
                    className="px-4 py-2 border border-blue-200 rounded-lg text-blue-700 font-semibold hover:bg-blue-50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <RevealSection className="w-full max-w-4xl mx-auto mt-16" delay={140}>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 border-l-4 border-green-500">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Skills for Community Development</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We're committed to empowering communities through affordable, industry-recognized vocational training. Our <span className="font-semibold text-green-700">artisan trades program</span> offers hands-on courses in carpentry, welding, plumbing, electrical installation, masonry, and automotive mechanics — all with TVET accreditation and at <span className="font-semibold text-green-700">subsidized rates</span> for inclusion and community uplift.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Affordable Access</p>
                    <p className="text-sm text-gray-600">Subsidized pricing for sustainability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Industry Certified</p>
                    <p className="text-sm text-gray-600">TVET-accredited programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Self-Reliance Focus</p>
                    <p className="text-sm text-gray-600">Pathways to employment & entrepreneurship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-800">Inclusive Training</p>
                    <p className="text-sm text-gray-600">Open to learners from all backgrounds</p>
                  </div>
                </div>
              </div>
              <a href="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                Explore Artisan Courses
                <span className="text-lg">→</span>
              </a>
            </div>
            <div className="hidden md:flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-md text-center min-w-fit">
              <div className="text-5xl mb-4">🛠️</div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Training for</p>
              <p className="text-2xl font-bold text-green-700">Empowerment</p>
              <p className="text-xs text-gray-600 mt-2">Community</p>
              <p className="text-xs text-gray-600">Development</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-green-200">
            <p className="text-sm text-gray-600 italic text-center">
              At Rhyme Training Institute, we believe quality skills training should be accessible to everyone. Our subsidized artisan programs are designed to lift communities and create pathways to prosperity.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="w-full max-w-4xl mx-auto mt-16" delay={160}>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border-l-4 border-blue-500">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-blue-800 mb-3">70% Scholarship Artisan Courses</h2>
              <p className="text-sm text-blue-600 font-semibold mb-2">In partnership with MOUNTAIN HOUSE OF GOD CHURCH</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are offering <span className="font-bold text-blue-700">70% scholarship</span> on practical 3-month artisan courses designed for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Form 4 leavers awaiting campus</li>
                <li>Class 8 leavers</li>
                <li>Hands-on individuals (watu wa mkono) upgrading to professional artisans</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 mb-6">
                {[
                  'Hair Dressing',
                  'Beauty Therapy',
                  'Carpentry',
                  'Masonry',
                  'Plumbing',
                  'Dressmaking',
                  'Electrical Wiring Technology',
                  'Home-Based Care',
                  'Counseling & HIV/AIDS Management',
                  'Home & Office Care Management',
                  'Mechanics',
                ].map((course, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic mb-6">
                These short courses focus on practical life skills, empowering students to become self-reliant and job-ready within just 3 months.
              </p>
              <a href="/apply" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Apply for Scholarship
                <span>→</span>
              </a>
            </div>
            <div className="hidden md:flex flex-col justify-center items-center bg-white rounded-xl p-6 shadow text-center min-w-fit">
              <div className="text-4xl mb-2">🎓</div>
              <p className="text-sm font-semibold text-gray-600">Duration</p>
              <p className="text-2xl font-bold text-blue-700">3 Months</p>
              <p className="text-xs text-gray-500 mt-2">Hands-on Training</p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="w-full max-w-4xl mx-auto mt-16" delay={180}>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border-l-4 border-purple-500">
          <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">Bridging Courses Programme</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
            Rhyme Training Institute, Meru, now offers <span className="font-semibold text-purple-700">bridging courses</span> designed to help students improve their KCSE grades and qualify for university or college programs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-5 shadow">
              <h3 className="font-bold text-purple-700 mb-2">📘 Subjects Offered</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Mathematics</li>
                <li>• Biology</li>
                <li>• Chemistry</li>
                <li>• Physics</li>
                <li>• English</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 shadow">
              <h3 className="font-bold text-purple-700 mb-2">🎯 Target Students</h3>
              <p className="text-gray-700 text-sm">
                KCSE leavers who narrowly missed university or college entry requirements and want a fast-track improvement.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow">
              <h3 className="font-bold text-purple-700 mb-2">⏳ Duration</h3>
              <p className="text-gray-700 text-sm">
                Short-term intensive program (approx. 3 months / one term) with flexible and weekend classes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow">
              <h3 className="font-bold text-purple-700 mb-2">🚀 Purpose</h3>
              <p className="text-gray-700 text-sm">
                To bridge academic gaps and unlock opportunities for higher education and career progression.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/apply" className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
              Join Bridging Programme
            </a>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="w-full max-w-4xl mx-auto mt-16" delay={200}>
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">News & Events</h2>
        <NewsEventsCarousel />
      </RevealSection>

      <RevealSection className="w-full max-w-4xl mx-auto mt-16" delay={220}>
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src={janeImg} alt="Student 1" className="w-16 h-16 rounded-full mb-3 border-2 border-blue-200" />
            <div className="font-semibold text-blue-700 mb-1">Jane M.</div>
            <p className="text-gray-700 text-center text-sm">“Rhyme gave me the skills and confidence to start my own business. The instructors are amazing!”</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src={samuelImg} alt="Student 2" className="w-16 h-16 rounded-full mb-3 border-2 border-blue-200" />
            <div className="font-semibold text-blue-700 mb-1">Samuel K.</div>
            <p className="text-gray-700 text-center text-sm">“The campus environment is so supportive. I made lifelong friends and learned so much.”</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src={aishaJpg} alt="Student 3" className="w-16 h-16 rounded-full mb-3 border-2 border-blue-200" />
            <div className="font-semibold text-blue-700 mb-1">Aisha L.</div>
            <p className="text-gray-700 text-center text-sm">“The short courses are practical and flexible. I highly recommend Rhyme to anyone!”</p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="w-full max-w-4xl mx-auto mt-16 mb-16" delay={240}>
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Partners & Affiliations</h2>
        <PartnersCarousel />
      </RevealSection>

      <RevealSection className="w-full max-w-4xl mx-auto mb-10" delay={260}>
        <div className="flex flex-col items-center">
          <div className="font-bold text-blue-800 mb-1">Contact Us</div>
          <div className="text-gray-700">Head Office (Meru): Rhema HSE, Runogone (opposite EAPC Church)</div>
          <div className="text-gray-700">
            Phone: <a href="tel:0113678958" className="text-blue-700 hover:underline">0113 678 958</a> /{' '}
            <a href="tel:0781104031" className="text-blue-700 hover:underline">0781 104 031</a>
          </div>
          <div className="text-gray-700">
            Email: <a href="mailto:rhemaprosper1@gmail.com" className="text-blue-700 hover:underline">rhemaprosper1@gmail.com</a>
          </div>
          <a
            href="https://wa.me/254704478783"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 text-green-600 hover:text-green-700"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.61 6.01L0 24l6.25-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.7 0-3.36-.34-4.92-1.01l-.35-.15-3.71.97.99-3.62-.18-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
            </svg>
            <span className="text-base font-medium">Message us on WhatsApp</span>
          </a>
          <form className="w-full max-w-md mt-6 flex flex-col gap-3" action="mailto:rhemaprosper1@gmail.com" method="POST" encType="text/plain">
            <label htmlFor="concern" className="text-blue-800 font-semibold">Your Concern</label>
            <textarea
              id="concern"
              name="concern"
              rows={4}
              required
              className="rounded border border-blue-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message here..."
            />
            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition">
              Send
            </button>
          </form>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Ongata Rongai</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Karen</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Machakos</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Voi</span>
        </div>
      </RevealSection>

      <footer className="w-full bg-blue-800 text-white py-8 flex flex-col items-center mt-8">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="font-bold mb-2">Connect with Us</div>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.4 3.661 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12s.012 3.584.07 4.85c.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647 2.175 15.267 2.163 12 2.163z" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://wa.me/254704478783" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.61 6.01L0 24l6.25-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.7 0-3.36-.34-4.92-1.01l-.35-.15-3.71.97.99-3.62-.18-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Quick Links</div>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/courses" className="hover:underline">Courses</a></li>
              <li><a href="/apply" className="hover:underline">Apply</a></li>
              <li><a href="/admin" className="hover:underline">Admin Login</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Contact</div>
            <ul className="space-y-1">
              <li>Head Office (Meru): Rhema HSE, Runogone</li>
              <li>Phone: <a href="tel:0113678958" className="hover:underline">0113 678 958</a></li>
              <li>Phone: <a href="tel:0781104031" className="hover:underline">0781 104 031</a></li>
              <li>Email: <a href="mailto:rhemaprosper1@gmail.com" className="hover:underline">rhemaprosper1@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm mt-4">&copy; {new Date().getFullYear()} RHYME TRAINING INSTITUTE. All rights reserved.</div>
      </footer>
    </div>
  );
}
