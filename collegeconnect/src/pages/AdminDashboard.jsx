import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [apps, setApps] = useState([]);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    fetch("/api/applications", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setApps)
      .catch(() => setError("Failed to load applications"));
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username.value,
        password: form.password.value,
      }),
    });
    if (!res.ok) return setError("Login failed");
    const data = await res.json();
    setToken(data.token);
  };

  if (!token)
    return (
      <form onSubmit={handleLogin} className="max-w-sm mx-auto py-16 px-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Admin Login</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input name="username" required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input name="password" type="password" required className="w-full border rounded px-3 py-2" />
        </div>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</button>
      </form>
    );

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-blue-700">Pending Applications</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <table className="w-full border rounded bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Course</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => (
            <tr key={app.id} className="border-t">
              <td className="p-2">{app.first_name} {app.last_name}</td>
              <td className="p-2">{app.email}</td>
              <td className="p-2">{app.course_id}</td>
              <td className="p-2">{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
