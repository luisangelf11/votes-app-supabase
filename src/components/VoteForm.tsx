import { useState } from "react";
import { IFormVotes, initialValues } from "../interface/votesInterface";
import { useVotes } from "../hooks/useVotes";
import {supabase} from '../supabase/client'
import {Toaster, toast} from 'react-hot-toast'
import { useStore } from "../context/useStore";

export default function VoteForm() {
    const [form, setForm] = useState<IFormVotes>(initialValues);
    const {validateVotes, validateEmptyVote} = useVotes(form);
    const {registration} = useStore();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = async(event: React.FormEvent) => {
      event.preventDefault();
     try {
        if(!validateEmptyVote()){
            if(validateVotes()){
                    const {data} = await supabase.from('votes').select();
                    const student = data?.filter(el => el.registration === registration );
                    console.log(student)
                    if(!student?.length){
                        console.log('No existe')
                            await supabase.from('votes').insert({
                            registration: registration,
                            first: form.first,
                            second: form.second,
                            third: form.third,
                            fourth: form.fourth
                        });
                        setForm(initialValues);
                        toast.success('¡Sus votos se han guardado!'); 
                    }else toast.error('¡Usted ya votó!');
            }else{
                toast.error('¡No puedes votar dos veces por la misma persona!')
            }
        }else{
            toast.error('¡No deje campos vacíos!');
        }
     } catch (error) {
        if(error instanceof Error)
            console.error(error.message)
     }
     
    };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <select name="first" value={form.first} onChange={handleChange}>
          <option value="">--SELECCIONAR--</option>
          <option value="1">Persona 1</option>
          <option value="2">Persona 2</option>
          <option value="3">Persona 3</option>
          <option value="4">Persona 4</option>
          <option value="5">Persona 5</option>
        </select>
        <select name="second" value={form.second} onChange={handleChange}>
          <option value="">--SELECCIONAR--</option>
          <option value="1">Persona 1</option>
          <option value="2">Persona 2</option>
          <option value="3">Persona 3</option>
          <option value="4">Persona 4</option>
          <option value="5">Persona 5</option>
        </select>
        <select name="third" value={form.third} onChange={handleChange}>
          <option value="">--SELECCIONAR--</option>
          <option value="1">Persona 1</option>
          <option value="2">Persona 2</option>
          <option value="3">Persona 3</option>
          <option value="4">Persona 4</option>
          <option value="5">Persona 5</option>
        </select>
        <select name="fourth" value={form.fourth} onChange={handleChange}>
          <option value="">--SELECCIONAR--</option>
          <option value="1">Persona 1</option>
          <option value="2">Persona 2</option>
          <option value="3">Persona 3</option>
          <option value="4">Persona 4</option>
          <option value="5">Persona 5</option>
        </select>
        <button>Votar</button>
      </form>
      <Toaster position="top-center" />
      </>
  )
}
