import { HashRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/reset.css';
import { Login } from "./container/Login/login";
import { Button } from 'antd';
function App() {
  return (
    <>
      <Button type="primary">Button</Button>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
