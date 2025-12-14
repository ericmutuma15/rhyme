import homeImage from './../assets/edu.jpg';
import logoImg from './../assets/rhymelogo.png';
import applyImg from './../assets/applynow.jpg';
import coursesImg from './../assets/newcourse.png';
import aboutImg from './../assets/aboutus0.jpg';
import contactImg from './../assets/contact.jpg';
import admissionsImg from './../assets/admission.png';
import careerImg from './../assets/career.jpg';
import courseImg from './../assets/newcourses.jpg'
import janeImg from './../assets/jane.jpg'
import samuelImg from './../assets/samuel.jpg'
import computerLiteracyImg from './../assets/complit.jpg';
import aishaJpg from './../assets/aisha.jpg'
import brookImg from './../assets/Designer.png'
import bfhImg from './../assets/bfhlogo.png'
import uniImg from './../assets/uh.jpg'
import theoImg from './../assets/theo.jpg'
import redImg from './../assets/red.png'
import shaImg from './../assets/sha.png'
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-0 mt-12">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center mb-4">
          <img src={logoImg} alt="RHYME TRAINING INSTITUTE Logo" className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg mb-2" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center drop-shadow mb-2">RHYME TRAINING INSTITUTE</h1>
          <p className="text-lg md:text-2xl text-blue-700 font-semibold italic mb-4 text-center">“Training for self‑reliance and wellness”</p>
        </div>
        {/* Side by side image and content */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Image Side */}
          <div className="flex-shrink-0 flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
            <img src={homeImage} alt="Campus" className="w-full max-w-md rounded-lg shadow object-contain" />
          </div>
          {/* Text Side */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-2">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Diploma & Certificate Courses</span>
              <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium">Short Courses</span>
              <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-medium">Accommodation Available</span>
            </div>
            <p className="text-gray-700 text-center md:text-left max-w-2xl mb-6">
              Welcome to RHYME TRAINING INSTITUTE, your gateway to practical, market-driven education. We offer a wide range of diploma, certificate, and short courses designed to equip you for self-reliance and wellness. Join our vibrant community and take the next step toward your future!
            </p>
          </div>
        </div>
        {/* Strategic Objective & Accreditation */}
        <div className="bg-blue-100 rounded-lg p-4 mb-6 shadow flex flex-col items-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Our Strategic Objective</h3>
          <p className="text-gray-700 text-center mb-2">Rhyme Training Institute's strategic objective is to train an effective workforce for the global market. We aspire to position ourselves as an institution of first choice in the training of world-class, highly-skilled vocational and technical graduates.</p>
          <span className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full font-semibold mb-2">TVET Accredited</span>
          <span className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full font-semibold">Clinical Placement Guaranteed</span>
        </div>
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="text-lg font-bold text-blue-800">Our Mission</h4>
            <p className="text-gray-700">Empower learners with practical, industry-ready skills and digital confidence to unlock employment and community impact.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h4 className="text-lg font-bold text-blue-800">Our Vision</h4>
            <p className="text-gray-700">To be the region’s leading vocational institute, transforming lives through accessible, high-quality training and innovation.</p>
          </div>
        </div>
      </div>

      {/* Admission Ongoing Area */}
      <div className="flex flex-col items-center mt-4">
        <a href="/apply" className="px-8 py-3 bg-green-600 text-white rounded-lg font-bold text-lg shadow hover:bg-green-700 transition mb-2 animate-pulse">
          Admission Ongoing: Apply Now
        </a>
        <a href="/courses" className="px-8 py-3 bg-blue-700 text-white rounded-lg font-bold text-lg shadow hover:bg-blue-800 transition mb-2">Explore Our Courses</a>
      </div>

      {/* Quick Links Section */}
      <section className="w-full max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <a href="/senior" className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:bg-blue-50 transition">
          <img src={computerLiteracyImg} alt="Computer Literacy" className="w-12 h-12 mb-2 rounded-full object-cover" />
          <span className="font-semibold text-blue-700">Computer Literacy (Seniors)</span>
        </a>
        <a href="/apply" className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:bg-blue-50 transition">
          <img src={applyImg} alt="Apply" className="w-12 h-12 mb-2 rounded-full object-cover" />
          <span className="font-semibold text-blue-700">Apply Now</span>
        </a>
        <a href="/courses" className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:bg-blue-50 transition">
          <img src={coursesImg} alt="Courses" className="w-12 h-12 mb-2 rounded-full object-cover" />
          <span className="font-semibold text-blue-700">Courses</span>
        </a>
        <a href="/about" className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:bg-blue-50 transition">
          <img src={aboutImg} alt="About" className="w-12 h-12 mb-2 rounded-full object-cover" />
          <span className="font-semibold text-blue-700">About Us</span>
        </a>
        <a href="/contact" className="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:bg-blue-50 transition">
          <img src={contactImg} alt="Contact" className="w-12 h-12 mb-2 rounded-full object-cover" />
          <span className="font-semibold text-blue-700">Contact</span>
        </a>
      </section>

      {/* News & Events Section */}
      <section className="w-full max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={admissionsImg} alt="News 1" className="w-full h-32 object-cover rounded mb-3" />
            <div className="font-semibold text-blue-700 mb-1">Admissions Open for September Intake</div>
            <div className="text-gray-600 text-sm mb-2">10 July 2025</div>
            <p className="text-gray-700 text-center text-sm">Apply now for our upcoming September intake. Limited slots available for diploma and certificate courses!</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={careerImg} alt="News 2" className="w-full h-32 object-cover rounded mb-3" />
            <div className="font-semibold text-blue-700 mb-1">Open Day & Career Fair</div>
            <div className="text-gray-600 text-sm mb-2">20 August 2025</div>
            <p className="text-gray-700 text-center text-sm">Join us for our annual open day and career fair. Meet our faculty and explore your future career options.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={courseImg} alt="News 3" className="w-full h-32 object-cover rounded mb-3" />
            <div className="font-semibold text-blue-700 mb-1">New Short Courses Launched</div>
            <div className="text-gray-600 text-sm mb-2">5 July 2025</div>
            <p className="text-gray-700 text-center text-sm">We have introduced new short courses in ICT, Business, and Health. Enroll today to upskill!</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-4xl mx-auto mt-16">
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
      </section>

      {/* Partners & Affiliations Section */}
      <section className="w-full max-w-4xl mx-auto mt-16 mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Our Partners & Affiliations</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <img src={brookImg} alt="Brook of Healing" className="h-16 w-16 object-cover rounded-full border-2 border-blue-200" />
          <img src={bfhImg} alt="British Family Hospital" className="h-16 w-16 object-cover rounded-full border-2 border-blue-200" />
          <img src={uniImg} alt="Universal Hospital" className="h-16 w-16 object-cover rounded-full border-2 border-blue-200" />
          <img src={theoImg} alt="Theophilus Institute" className="h-16 w-16 object-cover rounded-full border-2 border-blue-200" />
          <img src={redImg} alt="red" className="h-16 w-16 object-cover rounded-full border-2 border-blue-200" />
          <img src={shaImg} alt="sha" className="h-16 w-16 object-cover rounded-full border-2 border-blue-200" />
        </div>
      </section>

      {/* Contact & Branch Info Section */}
      <section className="w-full max-w-4xl mx-auto mb-10">
        <div className="flex flex-col items-center">
          <div className="font-bold text-blue-800 mb-1">Contact Us</div>
          <div className="text-gray-700">Head Office (Meru): Rhema HSE, Runogone (opposite EAPC Church)</div>
          <div className="text-gray-700">Phone: <a href="tel:0113678958" className="text-blue-700 hover:underline">0113 678 958</a> / <a href="tel:0781104031" className="text-blue-700 hover:underline">0781 104 031</a></div>
          <div className="text-gray-700">Email: <a href="mailto:rhemaprosper1@gmail.com" className="text-blue-700 hover:underline">rhemaprosper1@gmail.com</a></div>
          {/* WhatsApp Icon */}
          <a href="https://wa.me/254704478783" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-green-600 hover:text-green-700">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.61 6.01L0 24l6.25-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.7 0-3.36-.34-4.92-1.01l-.35-.15-3.71.97.99-3.62-.18-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            <span className="text-base font-medium">Message us on WhatsApp</span>
          </a>
          {/* Contact Form */}
          <form className="w-full max-w-md mt-6 flex flex-col gap-3" action="mailto:rhemaprosper1@gmail.com" method="POST" encType="text/plain">
            <label htmlFor="concern" className="text-blue-800 font-semibold">Your Concern</label>
            <textarea id="concern" name="concern" rows={4} required className="rounded border border-blue-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Type your message here..." />
            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-800 transition">Send</button>
          </form>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Ongata Rongai</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Karen</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Machakos</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Voi</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-blue-800 text-white py-8 flex flex-col items-center mt-8">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Socials */}
          <div>
            <div className="font-bold mb-2">Connect with Us</div>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.4 3.661 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12s.012 3.584.07 4.85c.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647 2.175 15.267 2.163 12 2.163z"/><circle cx="12" cy="12" r="3.5"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
              </a>
              <a href="https://wa.me/254704478783" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.61 6.01L0 24l6.25-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.7 0-3.36-.34-4.92-1.01l-.35-.15-3.71.97.99-3.62-.18-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
              </a>
            </div>
          </div>
          {/* Quick Links */}
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
          {/* Contact Info */}
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
