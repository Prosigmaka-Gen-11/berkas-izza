import { useState } from "react";
import FunctionFormHandlingHook from "./FunctionFormHandlingHook";
import ClassComponentFormHandling from "./ClassComponentFormHandling";

function App() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold mb-5 text-center">
            Function Component
          </h1>
          <FunctionFormHandlingHook />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-5 text-center">
            Class Component
          </h1>
          <ClassComponentFormHandling />
        </div>
      </div>
    </div>
  );
}

export default App;
