import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const initialValue = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initialValue);
  const { createdUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createdUser(form);
    navigate("/");

    console.log(res);
  };

  return (
    <div className="mx-full flex justify-center items-center p-3 min-h-[90vh]">
      <form
        onSubmit={handleSubmit}
        className="shadow-md w-[26rem] flex flex-col gap-2 bg-white p-4 rounded-md"
      >
        <h3 className="text-2xl font-semibold text-slate-700">Login</h3>
        <input
          type="email"
          className="bg-[#f7f9ff] rounded-md p-2 border border-[#cbcfe3] outline-none text-slate-700"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
        />

        <input
          type="password"
          className="bg-[#f7f9ff] rounded-md p-2 border border-[#cbcfe3] outline-none text-slate-700"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
        />

        <button className="bg-blue-500 text-white p-1 rounded-md text-md font-semibold">
          Login
        </button>
        <p className="flex justify-between gap-2">
          Don't you have an account yet?{" "}
          <Link className="text-blue-700 font-semibold" to="/register">
            Register!
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
