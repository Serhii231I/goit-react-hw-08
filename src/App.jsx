import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage ";
import RegistrationPage from "./pages/RegistrationPage ";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="contacts" element={<ContactsPage />}></Route>
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegistrationPage />} />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
