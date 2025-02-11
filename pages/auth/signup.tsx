import { signIn } from "next-auth/react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <p className="mb-4 text-gray-600">
          To create an account, please register via the Keycloak sign up page.
        </p>
        <button
          onClick={() => signIn("keycloak")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          Register with Keycloak
        </button>
      </div>
    </div>
  );
}