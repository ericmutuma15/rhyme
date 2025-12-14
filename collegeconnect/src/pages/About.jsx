import aboutImage from './../assets/campus.jpeg';
export default function About() {
  return (
    <div className="w-full min-h-screen bg-white py-0 px-0 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <img src={aboutImage} alt="Campus" className="w-full h-64 object-cover rounded-lg shadow mb-8" />
        <h2 className="text-3xl font-bold mb-4 text-blue-700">About RHYME TRAINING INSTITUTE</h2>
        <p className="mb-4 text-gray-700 font-semibold italic">“Training for self‑reliance and wellness”</p>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-bold text-blue-800">Mission</h4>
            <p className="text-gray-700">Empower learners with practical, industry-ready skills and digital confidence to unlock employment and community impact.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-bold text-blue-800">Vision</h4>
            <p className="text-gray-700">To be the region’s leading vocational institute, transforming lives through accessible, high-quality training and innovation.</p>
          </div>
        </div>
        <p className="mb-4 text-gray-700">RHYME TRAINING INSTITUTE is dedicated to providing quality education and fostering a diverse, inclusive campus. Our mission is to empower students to achieve their academic and professional goals through practical, market-driven training.</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Established history of academic excellence</li>
          <li>Modern facilities and resources</li>
          <li>Supportive faculty and staff</li>
          <li>Vibrant campus life</li>
          <li>Accommodation available for students</li>
        </ul>
        {/* Strategic Objective & Accreditation */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6 shadow flex flex-col items-center">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Strategic Objective</h3>
          <p className="text-gray-700 text-center mb-2">Rhyme Training Institute's strategic objective is to train an effective workforce for the global market. We aspire to position ourselves as an institution of first choice in the training of world-class, highly-skilled vocational and technical graduates.</p>
          <span className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full font-semibold mb-2">TVET Accredited</span>
        </div>
        {/* TVET Accreditation Note */}
        <div className="mb-6 text-center">
          <span className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full font-semibold">Clinical Placement Guaranteed</span>
        </div>
        <div className="mb-4">
          <div className="font-bold mb-1">Contact & Location</div>
          <div>Head Office (Meru): Rhema HSE, Runogone (opposite EAPC Church)</div>
          <div>Phone: <a href="tel:0113678958" className="text-blue-700 hover:underline">0113 678 958</a> / <a href="tel:0781104031" className="text-blue-700 hover:underline">0781 104 031</a></div>
          <div>Email: <a href="mailto:rhemaprosper1@gmail.com" className="text-blue-700 hover:underline">rhemaprosper1@gmail.com</a></div>
        </div>
        <div className="mb-4">
          <div className="font-bold mb-1">Branches</div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Ongata Rongai</li>
            <li>Karen</li>
            <li>Machakos</li>
            <li>Voi</li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Call Us Today: 0113 678 958 / 0781 104 031</span>
        </div>
      </div>
    </div>
  );
}
