import { useState } from "react";
import { useStore } from "../context/useStore";
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [registration, setRegistration] = useState<string>("");
  const {login} = useStore();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegistration(event.target.value);
  };

  const handleSubmit =(event: React.FormEvent)=>{
    event.preventDefault();
    login(registration);
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="registration"
          placeholder="xxxx-xxxx"
          minLength={9}
          maxLength={9}
          value={registration}
          onChange={handleChange}
        />
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
}
