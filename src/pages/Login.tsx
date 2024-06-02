import { useState } from "react";
import { useStore } from "../context/useStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [registration, setRegistration] = useState<string>("");
  const { login } = useStore();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistration(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login(registration);
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[300px] h-auto flex flex-col gap-2 p-4 items-center justify-center shadow-xl rounded-lg"
      >
        <h2 className="font-bold uppercase text-xl text-blue-700 p-2">
          Iniciar sesión
        </h2>
        <div className="w-[90%]">
          <label
            htmlFor="registration"
            className="font-semibold p-1 text-sm text-gray-500 flex gap-2 justify-left items-center w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                clipRule="evenodd"
              />
            </svg>
            Matrícula
          </label>
          <input
            type="text"
            name="registration"
            id="registration"
            placeholder="xxxx-xxxx"
            minLength={9}
            maxLength={9}
            value={registration}
            onChange={handleChange}
            className="w-full border text-sm p-2 text-left rounded-md outline-none focus:border-blue-600 focus:border-2"
          />
        </div>
        <button className="w-[80%] p-1 text-sm transition-all cursor-pointer hover:bg-green-800 bg-green-600 text-white mt-4 rounded-md font-semibold">
          Entrar
        </button>
      </form>
    </div>
  );
}
