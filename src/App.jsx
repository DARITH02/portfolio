import Home from "./pages/Home";

// A reusable animated background component
const AnimatedBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-600/10 blur-[120px] mix-blend-screen animate-pulse-ring" style={{ animationDuration: '8s' }} />
    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-teal-600/10 blur-[140px] mix-blend-screen animate-pulse-ring" style={{ animationDuration: '12s', animationDelay: '2s' }} />
    <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px] mix-blend-screen animate-float" style={{ animationDuration: '10s' }} />
  </div>
);

function App() {
  return (
    <div className="antialiased overflow-x-hidden selection:bg-primary-500/30 selection:text-white">
      <AnimatedBackground />
      <Home />
    </div>
  );
}

export default App;
