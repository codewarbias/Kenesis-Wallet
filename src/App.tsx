import "./App.css";
import Layout from "./components/Layout";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <div className="bg-[#0a0a1a]">
      <SidebarProvider>
        <Layout />
      </SidebarProvider>
    </div>
  );
}

export default App;
