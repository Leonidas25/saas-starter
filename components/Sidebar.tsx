import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">My SaaS App</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="hover:bg-blue-700 block px-4 py-2 rounded">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/settings" className="hover:bg-blue-700 block px-4 py-2 rounded">
              Settings
            </Link>
          </li>
          <li className="mt-8">
            <button
              onClick={() => signOut()}
              className="w-full text-left hover:bg-blue-700 block px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}