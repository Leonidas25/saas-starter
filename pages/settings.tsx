import { useSession, signIn } from "next-auth/react";
import Layout from "../components/Layout";
import { useEffect } from "react";
import CommonComponent from "../components/CommonComponent";

export default function Settings() {
  // const { data: session, status } = useSession();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("keycloak");
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-6">Settings </h1>
        <CommonComponent message="Settings content goes here." />
      </div>
    </Layout>
  );
}