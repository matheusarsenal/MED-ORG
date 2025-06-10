import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function PrescricaoMedica() {
  const navigate = useNavigate();

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
  const tipoUsuario = usuarioSalvo?.tipo;

  // useEffect(() => {
  //   if (tipoUsuario !== "medico" && tipoUsuario !== "paciente") {
  //     alert("Acesso restrito a médicos e pacientes.");
  //     navigate("/");
  //   }
  // }, [tipoUsuario, navigate]);

  const [form, setForm] = useState({
    medico: "",
    hospital: "",
    enderecoHospital: "",
    telefone: "",
    dataPrescricao: "",
    paciente: "",
    nascimento: "",
    enderecoPaciente: "",
    medicamento: "",
    dosagem: "",
    duracao: "",
    observacoes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalvar = () => {
    // Lógica para salvar a prescrição
    console.log("Prescrição salva:", form);
    alert("Prescrição salva com sucesso!");
  };

  return (
    <div className="prescricao-container">
      <div className="prescricao-header">
        <button className="voltar-btn" onClick={() => navigate(-1)}>← Voltar</button>
        <h2>Prescrição</h2>
      </div>

      <form className="prescricao-form">
        {Object.entries(form).map(([campo, valor]) => (
          <input
            key={campo}
            name={campo}
            placeholder={(campo.charAt(0).toUpperCase() + campo.slice(1)).replace(/([A-Z])/g, " $1").trim()}
            value={valor}
            onChange={handleChange}
          />
        ))}

        {/* Comentado temporariamente para visualização */}
        {/* {tipoUsuario === "medico" && ( */}
        <div className="botoes">
          <button type="button" className="btn azul" onClick={handleSalvar}>Salvar Prescrição</button>
        </div>
        {/* )} */}
      </form>
    </div>
  );
}
