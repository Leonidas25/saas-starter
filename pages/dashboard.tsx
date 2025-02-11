import { useSession, signIn } from "next-auth/react";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("keycloak");
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Welcome, {session?.user?.name}</h2>
            <p className="text-gray-600">Email: {session?.user?.email}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Usage</h2>
            <p className="text-gray-600">Your usage statistics go here.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Account Info</h2>
            <p className="text-gray-600">Manage your account details.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}