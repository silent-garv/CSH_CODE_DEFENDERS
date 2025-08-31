"use client";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Sign in</h1>
      <a
        href="/api/auth/login"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Sign in with Auth0
      </a>
    </div>
  );
}
