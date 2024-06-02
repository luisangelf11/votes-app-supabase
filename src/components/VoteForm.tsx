import { useState } from "react";
import { IFormVotes, initialValues } from "../interface/votesInterface";
import { useVotes } from "../hooks/useVotes";
import { supabase } from "../supabase/client";
import { Toaster, toast } from "react-hot-toast";
import { useStore } from "../context/useStore";

export default function VoteForm() {
  const [form, setForm] = useState<IFormVotes>(initialValues);
  const { validateVotes, validateEmptyVote } = useVotes(form);
  const { registration } = useStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!validateEmptyVote()) {
        if (validateVotes()) {
          const { data } = await supabase.from("votes").select();
          const student = data?.filter(
            (el) => el.registration === registration
          );
          console.log(student);
          if (!student?.length) {
            console.log("No existe");
            await supabase.from("votes").insert({
              registration: registration,
              first: form.first,
              second: form.second,
              third: form.third,
              fourth: form.fourth,
            });
            setForm(initialValues);
            toast.success("¡Sus votos se han guardado!");
          } else toast.error("¡Usted ya votó!");
        } else {
          toast.error("¡No puedes votar dos veces por la misma persona!");
        }
      } else {
        toast.error("¡No deje campos vacíos!");
      }
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[300px] h-auto flex flex-col gap-2 p-4 items-center justify-center shadow-xl rounded-lg"
      >
        <h2 className="font-bold text-blue-600 uppercase flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-md"
          >
            <path
              fillRule="evenodd"
              d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
              clip-rule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xl">Vota aquí</span>
        </h2>
        <div className="w-[90%]">
          <label
            htmlFor="first"
            className="font-semibold p-1 text-sm text-gray-500 flex gap-2 justify-left items-center w-full"
          >
            Admin #01
          </label>
          <select
            name="first"
            id="first"
            value={form.first}
            onChange={handleChange}
            className="w-full border text-sm p-2 text-left rounded-md outline-none focus:border-blue-600 focus:border-2"
          >
            <option value="">--SELECCIONAR--</option>
            <option value="1">Persona 1</option>
            <option value="2">Persona 2</option>
            <option value="3">Persona 3</option>
            <option value="4">Persona 4</option>
            <option value="5">Persona 5</option>
          </select>
        </div>
        <div className="w-[90%]">
          <label
            htmlFor="second"
            className="font-semibold p-1 text-sm text-gray-500 flex gap-2 justify-left items-center w-full"
          >
            Admin #02
          </label>
          <select
            name="second"
            value={form.second}
            id="second"
            onChange={handleChange}
            className="w-full border text-sm p-2 text-left rounded-md outline-none focus:border-blue-600 focus:border-2"
          >
            <option value="">--SELECCIONAR--</option>
            <option value="1">Persona 1</option>
            <option value="2">Persona 2</option>
            <option value="3">Persona 3</option>
            <option value="4">Persona 4</option>
            <option value="5">Persona 5</option>
          </select>
        </div>
        <div className="w-[90%]">
          <label
            htmlFor="third"
            className="font-semibold p-1 text-sm text-gray-500 flex gap-2 justify-left items-center w-full"
          >
            Admin #03
          </label>
          <select
            name="third"
            value={form.third}
            id="third"
            onChange={handleChange}
            className="w-full border text-sm p-2 text-left rounded-md outline-none focus:border-blue-600 focus:border-2"
          >
            <option value="">--SELECCIONAR--</option>
            <option value="1">Persona 1</option>
            <option value="2">Persona 2</option>
            <option value="3">Persona 3</option>
            <option value="4">Persona 4</option>
            <option value="5">Persona 5</option>
          </select>
        </div>
        <div className="w-[90%]">
          <label
            htmlFor="fourth"
            className="font-semibold p-1 text-sm text-gray-500 flex gap-2 justify-left items-center w-full"
          >
            Admin #04
          </label>
          <select
            name="fourth"
            value={form.fourth}
            onChange={handleChange}
            id="fourth"
            className="w-full border text-sm p-2 text-left rounded-md outline-none focus:border-blue-600 focus:border-2"
          >
            <option value="">--SELECCIONAR--</option>
            <option value="1">Persona 1</option>
            <option value="2">Persona 2</option>
            <option value="3">Persona 3</option>
            <option value="4">Persona 4</option>
            <option value="5">Persona 5</option>
          </select>
        </div>
        <button className="w-[80%] p-1 text-sm transition-all cursor-pointer hover:bg-green-800 bg-green-600 text-white mt-4 rounded-md font-semibold">
          Votar
        </button>
      </form>
      <Toaster position="top-center" />
    </>
  );
}
