import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import applyImage from './../assets/apply0.jpg';

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
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch('https://rhyme-xn72.onrender.com/api/courses', { headers: { 'Accept': 'application/json' } })
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
      const res = await fetch("https://rhyme-xn72.onrender.com/api/applications", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (success)
    return <div className="w-full flex justify-center items-center min-h-screen bg-green-50"><div className="py-16 text-green-700 font-bold text-xl">Application submitted successfully!</div></div>;

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
          <input name="kcse" type="file" accept=".pdf,.jpg,.jpeg,.png" required className="w-full" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Other Documents (optional, max 4)</label>
          <input name="others" type="file" multiple className="w-full" onChange={handleChange} />
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
