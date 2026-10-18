import Link from "next/link";

const LoginButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/sign-in"
        className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/4 px-5 text-sm font-medium text-white/85 shadow-sm transition duration-200 hover:border-white/35 hover:bg-white/10 hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#00040a]"
      >
        Sign in
      </Link>

      <Link
        href="/sign-up"
        className="inline-flex h-10 items-center justify-center rounded-full border border-violet-300/25 bg-linear-to-b from-violet-500 to-violet-700 px-5 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition duration-200 hover:-translate-y-0.5 hover:from-violet-400 hover:to-violet-600 hover:shadow-violet-900/50 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#00040a]"
      >
        <span className="l">Sign up</span>
      </Link>
    </div>
  );
};

export default LoginButtons;
