import { Route, Routes } from "react-router-dom";
import { routes } from "routes/Routes";
import "@fontsource/roboto";
import { UsersProvider } from "providers";
import { Layout } from "components";

function App() {
  return (
    <UsersProvider>
      <Layout>
        <Routes>
          {routes.map((route, key) => (
            <Route key={key} {...route} />
          ))}
        </Routes>
      </Layout>
    </UsersProvider>
  );
}

export default App;
