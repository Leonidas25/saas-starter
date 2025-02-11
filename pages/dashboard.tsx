import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import Layout from "../components/Layout";
import CommonComponent from "../components/CommonComponent";

export default function Dashboard() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <CommonComponent message="This is a reusable component on the Dashboard." />
    </Layout>
  );
}