"use client";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-medium" />
      <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float-fast" />
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float-diagonal" />

      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-indigo-500/8 rounded-full blur-2xl animate-float-medium" />
      <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-teal-500/8 rounded-full blur-2xl animate-float-fast" />
      <div className="absolute top-2/3 right-1/6 w-44 h-44 bg-orange-500/8 rounded-full blur-2xl animate-float-diagonal" />

      <div className="absolute top-1/6 left-1/2 w-32 h-32 bg-violet-500/70 rounded-full blur-xl animate-float-fast" />
      <div className="absolute bottom-1/6 right-1/6 w-40 h-40 bg-emerald-500/70 rounded-full blur-xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/6 w-36 h-36 bg-rose-500/70 rounded-full blur-xl animate-float-diagonal" />
      <div className="absolute bottom-1/2 right-1/2 w-28 h-28 bg-amber-500/70 rounded-full blur-xl animate-float-medium" />
    </div>
  );
};

export { AnimatedBackground };
