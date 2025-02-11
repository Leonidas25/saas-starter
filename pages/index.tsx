import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My SaaS App</h1>
      {session ? (
        <>
          <p className="mb-4">Signed in as {session.user?.email}</p>
          <div className="space-x-4">
            <Link href="/dashboard" className="text-blue-500 underline">
              Go to Dashboard
            </Link>
            <button onClick={() => signOut()} className="text-red-500 underline">
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <div className="space-x-4">
          <Link href="/auth/signin" className="text-blue-500 underline">
            Sign In
          </Link>
          <Link href="/auth/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}