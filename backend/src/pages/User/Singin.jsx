import React, { useEffect, useState } from "react";
import { SinginUserData } from "../../api/api";

// shadcn ui
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  RefreshCcw,
  Copy,
  Download,
  Eye,
  EyeOff,
  Users,
} from "lucide-react";

export default function Singin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPasswords, setShowPasswords] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  // fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await SinginUserData();

      setUsers(res);
    } catch (err) {
      setError(err.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7ff] p-6 md:p-10">

      <Card className="border border-[#9C21FA]/20 shadow-2xl rounded-3xl bg-white">
        <CardContent className="p-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#9C21FA]/10 flex items-center justify-center">
                <Users className="text-[#9C21FA]" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black">
                  All Users
                </h2>

                <p className="text-gray-500">
                  Accounts registered in the system
                </p>
              </div>
            </div>

            {/* actions */}
            <div className="flex flex-wrap items-center gap-3">

              {/* refresh */}
              <Button
                onClick={fetchUsers}
                className="bg-[#9C21FA] hover:bg-[#7d18c9] text-white"
              >
                <RefreshCcw size={16} className="mr-2" />
                Refresh
              </Button>

              {/* show password */}
              <div className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-[#faf7ff] border-[#9C21FA]/20">
                
                <Checkbox
                  checked={showPasswords}
                  onCheckedChange={() => {
                    if (!showPasswords) {
                      const confirmShow = confirm(
                        "Show passwords in plain text?"
                      );

                      if (!confirmShow) return;
                    }

                    setShowPasswords((s) => !s);
                  }}
                />

                <span className="text-sm text-gray-700">
                  Show Passwords
                </span>
              </div>
            </div>
          </div>

          {/* table */}
          <div className="overflow-hidden rounded-2xl border border-[#9C21FA]/10">

            <Table>
              
              {/* table header */}
              <TableHeader className="bg-[#9C21FA]">

                <TableRow>
                  <TableHead className="text-white">
                    Username
                  </TableHead>

                  <TableHead className="text-white">
                    Email
                  </TableHead>

                  <TableHead className="text-white">
                    Role
                  </TableHead>

                  <TableHead className="text-white">
                    Password
                  </TableHead>

                  <TableHead className="text-white text-right">
                    Actions
                  </TableHead>
                </TableRow>

              </TableHeader>

              {/* body */}
              <TableBody>

                {loading ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-10 text-gray-500"
                    >
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-10 text-red-500"
                    >
                      {error}
                    </TableCell>
                  </TableRow>
                ) : users.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-10 text-gray-500"
                    >
                      No Users Found
                    </TableCell>
                  </TableRow>
                ) : (
                  users.map((user, idx) => (
                    <TableRow
                      key={user._id ?? idx}
                      className="hover:bg-[#faf5ff]"
                    >
                      {/* username */}
                      <TableCell className="font-semibold text-black">
                        {user.username}
                      </TableCell>

                      {/* email */}
                      <TableCell className="text-gray-700">
                        {user.email}
                      </TableCell>

                      {/* role */}
                      <TableCell>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.role === "admin"
                              ? "bg-[#9C21FA]/10 text-[#9C21FA]"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {user.role ?? "user"}
                        </span>
                      </TableCell>

                      {/* password */}
                      <TableCell className="font-mono text-sm">
                        <div className="flex items-center gap-2">

                          {showPasswords ? (
                            <>
                              <Eye size={16} className="text-green-500" />

                              <span className="break-all text-black">
                                {user.password}
                              </span>
                            </>
                          ) : (
                            <>
                              <EyeOff
                                size={16}
                                className="text-gray-400"
                              />

                              <span className="tracking-widest text-gray-700">
                                {maskPassword(user.password)}
                              </span>
                            </>
                          )}
                        </div>
                      </TableCell>

                      {/* actions */}
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">

                          {/* export */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadUser(user)}
                            className="border-[#9C21FA]/30 hover:bg-[#faf5ff]"
                          >
                            <Download
                              size={15}
                              className="mr-1 text-[#9C21FA]"
                            />
                            Export
                          </Button>

                          {/* copy */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              navigator.clipboard?.writeText(
                                JSON.stringify(user)
                              )
                            }
                            className="border-gray-200 hover:bg-gray-50"
                          >
                            <Copy
                              size={15}
                              className="mr-1 text-gray-600"
                            />
                            Copy
                          </Button>

                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}

              </TableBody>
            </Table>

          </div>

          {/* footer note */}
          <div className="mt-5 rounded-xl bg-yellow-50 border border-yellow-200 p-4">
            <p className="text-sm text-yellow-700">
              ⚠ Showing passwords in plain text is insecure.
              Prefer hashed passwords and avoid displaying them.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

// mask password
function maskPassword(pass) {
  if (!pass) return "-";

  if (pass.length <= 2) {
    return "•".repeat(pass.length);
  }

  const first = pass[0];
  const last = pass[pass.length - 1];

  return `${first}${"•".repeat(
    Math.max(3, pass.length - 2)
  )}${last}`;
}

// export user
function downloadUser(user) {
  try {
    const blob = new Blob(
      [JSON.stringify(user, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = `${user.username ?? "user"}-export.json`;

    document.body.appendChild(a);

    a.click();

    a.remove();

    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Failed to export user:", err);
  }
}