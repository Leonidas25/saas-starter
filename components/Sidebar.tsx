import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">My SaaS App</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="hover:underline">
                Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/settings" className="hover:underline">
                Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}