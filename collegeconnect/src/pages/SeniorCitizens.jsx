import computerLiteracyImg from '../assets/complit.jpg';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from '../utils/api';

export default function SeniorCitizens() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img src={computerLiteracyImg} alt="Computer Literacy" className="w-full md:w-1/3 rounded-lg object-cover" />
          <div className="md:flex-1">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Computer Literacy for Senior Citizens</h2>
            <p className="text-gray-700 mb-4">Course intended to train senior citizens on computer literacy so they can catch up with the current digital lifestyle, access government services, and use smartphones and social media.</p>
            <div className="mb-4">
              <h3 className="font-semibold text-blue-700 mb-2">What you'll learn</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Basic device and smartphone use (calls, messaging, camera)</li>
                <li>Using email and accessing government e-services</li>
                <li>Browsing the web safely and using social media</li>
                <li>Introduction to online safety and privacy</li>
                <li>Practical, hands-on exercises with patient instruction</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-blue-700">Benefits</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Increase confidence using digital tools</li>
                <li>Stay connected with family and community</li>
                <li>Access critical government services easily</li>
                <li>Small class sizes and supportive instructors</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <button onClick={() => navigate('/apply?course=17')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Apply Now</button>
              <a href="mailto:rhemaprosper.1@gmail.com?subject=Computer%20Literacy%20Enquiry" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Email Admissions</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Duration: 3 months • No prior experience required • Open to senior citizens</p>
          </div>
        </div>
      </div>
    </div>
  );
}
