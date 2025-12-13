import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import applyImage from './../assets/apply0.jpg';
import { API_BASE } from '../utils/api';

export default function Apply() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    courseId: "",
    kcse: null,
    others: [],
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitFailed, setSubmitFailed] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(`${API_BASE}/courses`, { headers: { 'Accept': 'application/json' } })
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(() => setCourses([]));
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      const courseParam = searchParams.get('course');
      if (courseParam) {
        const course = courses.find(c => c.id === courseParam);
        if (course) setForm(prev => ({ ...prev, courseId: course.id }));
      }
    }
  }, [courses, searchParams]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "kcse") {
      setForm((prev) => ({ ...prev, kcse: files[0] }));
    } else if (name === "others") {
      setForm((prev) => ({ ...prev, others: Array.from(files) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.kcse) {
      setError("KCSE certificate is required.");
      return;
    }
    if (form.others.length > 4) {
      setError("You can only upload up to 4 additional documents.");
      return;
    }
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => {
      if (k === "kcse" && v) {
        data.append("documents", v);
      } else if (k === "others" && v && v.length) {
        v.forEach((file) => data.append("documents", file));
      } else if (k !== "others" && k !== "kcse") {
        data.append(k, v);
      }
    });
    try {
      const res = await fetch(`${API_BASE}/applications`, {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        // try to get server error message
        let msg = 'Submission failed. Please try again later.';
        try {
          const json = await res.json();
          msg = json.error || json.message || msg;
        } catch {};
        setServerErrorMessage(msg);
        setSubmitFailed(true);
        return;
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
      setServerErrorMessage(err.message);
      setSubmitFailed(true);
    }
  };

  if (success)
    return <div className="w-full flex justify-center items-center min-h-screen bg-green-50"><div className="py-16 text-green-700 font-bold text-xl">Application submitted successfully!</div></div>;

  if (submitFailed)
    return (
      <div className="w-full flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 to-red-100">
        <div className="w-full max-w-xl py-16 px-8 bg-white rounded shadow-lg text-center">
          <svg className="mx-auto h-12 w-12 text-red-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-2 5a9 9 0 110-18 9 9 0 010 18z"/></svg>
          <h3 className="text-xl font-semibold text-red-700 mb-2">Submission Failed</h3>
          <p className="text-gray-700 mb-4">We couldn't submit your application due to a server error.</p>
          {serverErrorMessage && <p className="text-sm bg-red-50 border border-red-100 p-3 rounded text-red-600 mb-4">{serverErrorMessage}</p>}
          <p className="text-gray-700 mb-4">Please send a formal email to our admissions team or contact us on WhatsApp for faster assistance.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:rhemaprosper.1@gmail.com?subject=Application help" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Email Admissions</a>
            <a href="https://wa.me/254704478783" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 rounded-md text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">Contact via WhatsApp</a>
            <button onClick={() => { setSubmitFailed(false); setServerErrorMessage(''); setError(''); }} className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200">Try again</button>
          </div>
          <p className="mt-6 text-xs text-gray-500">If you choose to email, include your full name, course of interest, and any supporting documents to help us locate your submission.</p>
        </div>
      </div>
    );

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form onSubmit={handleSubmit} className="w-full max-w-xl py-16 px-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Apply Now</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">First Name</label>
          <input name="firstName" required className="w-full border rounded px-3 py-2" value={form.firstName} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Last Name</label>
          <input name="lastName" required className="w-full border rounded px-3 py-2" value={form.lastName} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input name="email" type="email" required className="w-full border rounded px-3 py-2" value={form.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone</label>
          <input name="phone" required className="w-full border rounded px-3 py-2" value={form.phone} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Education</label>
          <select name="education" required className="w-full border rounded px-3 py-2" value={form.education} onChange={handleChange}>
            <option value="">-- Select education level --</option>
            <option value="None">None</option>
            <option value="KCPE">KCPE</option>
            <option value="KCSE/CSE">KCSE/CSE</option>
            <option value="Diploma">Diploma</option>
            <option value="Degree">Degree</option>
            <option value="Post Graduate">Post Graduate</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Select Course</label>
          <select name="courseId" required className="w-full border rounded px-3 py-2" value={form.courseId} onChange={handleChange}>
            <option value="">-- Select a course --</option>
            {Array.isArray(courses) && courses.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">KCSE Certificate <span className="text-red-600">*</span></label>
          <div className="relative">
            <input name="kcse" type="file" accept=".pdf,.jpg,.jpeg,.png" required className="w-full bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l4-4m0 0l4 4m-4-4v12" /></svg>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Other Documents (optional, max 4)</label>
          <div className="relative">
            <input name="others" type="file" multiple className="w-full bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l4-4m0 0l4 4m-4-4v12" /></svg>
            </span>
          </div>
        </div>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Submit Application</button>
      </form>
      <div className="hidden md:block ml-12">
        <img src={applyImage} alt="Apply" className="w-96 h-96 object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
