export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 rounded-lg border p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold">Login Admin</h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-3 w-full rounded border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded border p-2"
        />

        <button className="w-full rounded bg-blue-600 py-2 text-white">
          Login
        </button>
      </div>
    </div>
  );
}
