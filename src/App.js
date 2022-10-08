import React, { Suspense } from "react";

import "./App.css";
import { ErrorBoundary } from "./ErrorBoundary";
import { lazyRetry } from "./lazyRetry";

const Component1 = React.lazy(() =>
  lazyRetry(() => import("./Component1"), "1")
);
const Component2 = React.lazy(() =>
  lazyRetry(() => import("./Component2"), "2")
);

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Suspense>
          <Component1 />
          <Component2 />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
