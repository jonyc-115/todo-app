import React, { useState } from "react";
import { useAuth } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const initialValue = {
  username: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
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
        <h3 className="text-2xl font-semibold text-slate-700">Register</h3>
        <input
          name="username"
          className=" bg-[#f7f9ff] p-2 rounded-md border border-[#cbcfe3] outline-none text-slate-700"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={form.username}
        />
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
          Submit
        </button>
        <p className="flex justify-between ">
          Do you already have an account?{" "}
          <Link className="text-blue-700 font-semibold" to="/login">
            Log in.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
