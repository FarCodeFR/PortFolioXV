import SiteShell from "./components/layout/SiteShell";
import ProjectGrid from "./components/home/ProjectGrid";

function App() {
  return (
    <SiteShell>
      <main className="main">
        <ProjectGrid />
      </main>
    </SiteShell>
  );
}

export default App;
