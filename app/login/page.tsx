import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(200,155,60,0.18),_transparent_28%),linear-gradient(180deg,#1b262b_0%,#243137_100%)] px-6 py-12 text-white">
      <div className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-300">OptiZenqor Restaurant</p>
          <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight">
            Premium restaurant operations, coordinated branch by branch.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-300">
            Manage branches, menu, orders, kitchen flow, customer retention, promotions, and reporting from a single admin workspace.
          </p>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-panel backdrop-blur">
          <h2 className="text-2xl font-semibold">Dashboard Login</h2>
          <p className="mt-2 text-sm text-stone-300">Mock authentication screen for admin, managers, and kitchen viewers.</p>
          <form className="mt-8 space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3" placeholder="Email address" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3" placeholder="Password" type="password" />
            <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <option>Super Admin</option>
              <option>Branch Manager</option>
              <option>Kitchen Viewer</option>
            </select>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-sand px-4 py-3 font-medium text-ink"
            >
              Enter Dashboard
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}
