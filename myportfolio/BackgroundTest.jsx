export default function BackgroundTest() {
  return (
    <div className="relative min-h-screen bg-[#050414]">
      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
        linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:14px_24px] opacity-30 pointer-events-none">
      </div>

      <div className="relative flex items-center justify-center h-screen text-white text-3xl font-semibold">
        🔥 Tailwind Grid Background Working!
      </div>
    </div>
  );
}
