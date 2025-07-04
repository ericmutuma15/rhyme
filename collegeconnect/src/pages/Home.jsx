export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 mt-12">
        <img src="/placeholder-logo.png" alt="RHYME TRAINING INSTITUTE Logo" className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 text-center drop-shadow mb-2">RHYME TRAINING INSTITUTE</h1>
        <p className="text-lg md:text-2xl text-blue-700 font-semibold italic mb-4 text-center">“Training for self‑reliance and wellness”</p>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium">Diploma & Certificate Courses</span>
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium">Short Courses</span>
          <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-medium">Accommodation Available</span>
        </div>
        <img src="/placeholder-campus.jpg" alt="Campus" className="w-full max-w-2xl rounded-lg shadow mb-6" />
        <p className="text-gray-700 text-center max-w-2xl mb-6">
          Welcome to RHYME TRAINING INSTITUTE, your gateway to practical, market-driven education. We offer a wide range of diploma, certificate, and short courses designed to equip you for self-reliance and wellness. Join our vibrant community and take the next step toward your future!
        </p>
        <a href="/courses" className="px-8 py-3 bg-blue-700 text-white rounded-lg font-bold text-lg shadow hover:bg-blue-800 transition mb-2">Explore Our Courses</a>
        <div className="flex flex-col items-center mt-8">
          <div className="font-bold text-blue-800 mb-1">Contact Us</div>
          <div className="text-gray-700">Head Office (Meru): Rhema HSE, Runogone (opposite EAPC Church)</div>
          <div className="text-gray-700">Phone: <a href="tel:0113678958" className="text-blue-700 hover:underline">0113 678 958</a> / <a href="tel:0720838566" className="text-blue-700 hover:underline">0720 838 566</a></div>
          <div className="text-gray-700">Email: <a href="mailto:rhemaprosper1@gmail.com" className="text-blue-700 hover:underline">rhemaprosper1@gmail.com</a></div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Ongata Rongai</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Karen</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Machakos</span>
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Voi</span>
        </div>
      </div>
    </div>
  );
}
