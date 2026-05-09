import React, { useEffect, useState } from "react";

export default function Myaccount() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userinfo = JSON.parse(sessionStorage.getItem('user'));
    if (userinfo) {
      setUser(userinfo[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-indigo-500 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold">My Account</h1>
        {user ? (
          <div className="text-right">
            <p className="font-medium text-white">{user.username}</p>
            <p className="text-sm opacity-80">{user.email}</p>
          </div>
        ) : (
          <p className="text-sm opacity-75">No user info</p>
        )}
      </header>

      {/* ===== Page Body ===== */}
      <div className="flex flex-1">
        {/* ===== Sidebar Navigation ===== */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
          <nav className="space-y-2">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-indigo-100 text-indigo-600 font-medium">
              Profile Info
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-indigo-100 text-indigo-600 font-medium">
              Orders
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-indigo-100 text-indigo-600 font-medium">
              Settings
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-indigo-100 text-indigo-600 font-medium">
              Help & Support
            </a>
          </nav>
        </aside>

        {/* ===== Main Content ===== */}
        <main className="flex-1 p-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <h2 className="text-2xl font-semibold text-indigo-500 mb-4">
              Account Information
            </h2>

            {user ? (
              <div className="space-y-3">
                <p><span className="font-semibold text-gray-700">Username:</span> {user.username}</p>
                <p><span className="font-semibold text-gray-700">Email:</span> {user.email}</p>
                <p><span className="font-semibold text-gray-700">Role:</span> {user.role || "User"}</p>
              </div>
            ) : (
              <p className="text-gray-500">No user data found in session.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
