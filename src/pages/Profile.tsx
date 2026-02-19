import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "@/components/Layout";

interface UserType {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

export default function Profile() {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://careerpath-india.onrender.com/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        setUser(res.data);
      } catch (err) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex justify-center items-center bg-gray-100">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
            My Profile
          </h2>

          {loading ? (
            <p className="text-center">Loading...</p>
          ) : user ? (
            <div className="space-y-3">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p>
                <strong>Joined:</strong>{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>

              <button
                onClick={handleLogout}
                className="w-full mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <p className="text-center text-red-500">Unable to load profile</p>
          )}

        </div>
      </div>
    </Layout>
  );
}
