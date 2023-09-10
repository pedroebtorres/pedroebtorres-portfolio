import React from 'react';
import Header from "./components/HeaderComponent";
import Overview from "./components/OverviewComponent";
import Footer from "./components/FooterComponent";
import Abilities from "./components/AbilitiesComponent";

function App() {
  return (
    <div className="bg-blue-wave bg-cover text-custom-gray h-screen w-screen">
      <Header />
      <article className="flex items-stretch">
        <Overview />
        <Abilities />
      </article>
      <Footer />
    </div>
  );
}

export default App;
