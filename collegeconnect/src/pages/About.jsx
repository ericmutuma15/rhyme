import aboutImage from './../assets/campus.jpeg';
export default function About() {
  return (
    <div className="w-full min-h-screen bg-white py-0 px-0 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <img src={aboutImage} alt="Campus" className="w-full h-64 object-cover rounded-lg shadow mb-8" />
        <h2 className="text-3xl font-bold mb-4 text-blue-700">About RHYME TRAINING INSTITUTE</h2>
        <p className="mb-4 text-gray-700 font-semibold italic">“Training for self‑reliance and wellness”</p>
        <p className="mb-4 text-gray-700">RHYME TRAINING INSTITUTE is dedicated to providing quality education and fostering a diverse, inclusive campus. Our mission is to empower students to achieve their academic and professional goals through practical, market-driven training.</p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Established history of academic excellence</li>
          <li>Modern facilities and resources</li>
          <li>Supportive faculty and staff</li>
          <li>Vibrant campus life</li>
          <li>Accommodation available for students</li>
        </ul>
        <div className="mb-4">
          <div className="font-bold mb-1">Contact & Location</div>
          <div>Head Office (Meru): Rhema HSE, Runogone (opposite EAPC Church)</div>
          <div>Phone: <a href="tel:0113678958" className="text-blue-700 hover:underline">0113 678 958</a> / <a href="tel:0720838566" className="text-blue-700 hover:underline">0720 838 566</a></div>
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
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Call Us Today: 0113 678 958 / 0720 838 566</span>
        </div>
      </div>
    </div>
  );
}
