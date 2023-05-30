import React, { useState, useEffect } from "react";
import './Habilidades.css'


const Habilidades = ({ name, setHabilidade }) => {
  const [nivel, setNivel] = useState(0);
  const [Habilidades, setHabilidades] = useState([]);
  const [Inabilidades, setInabilidades] = useState([]);
  const [Proficiencias, setProficiencias] = useState([]);

  const handleHabilidades = (e) => {
    const habilidadesSeparadas = e.target.value.split(",");
    setHabilidades(habilidadesSeparadas);
  };

  const handleInabilidades = (e) => {
    const inabilidadesSeparadas = e.target.value.split(",");
    setInabilidades(inabilidadesSeparadas);
  };

  const handleProficiencias = (e) => {
    const proficienciasSeparadas = e.target.value.split(",");
    setProficiencias(proficienciasSeparadas);
  };

  useEffect(() => {
    setHabilidade({
      nivel,
      Inabilidades,
      Habilidades,
      Proficiencias
    });
  }, [nivel, Habilidades, Inabilidades, Proficiencias]);

  return (
    <div className="mainDiv">
      <div className="levelDiv">
        <input
          onChange={(e) => setNivel(e.target.value)}
          value={nivel}
          type="number"
          placeholder={`${name} nivel`}
        />
      </div>
      <div className="habDiv">
        <input
          onChange={handleHabilidades}
          value={Habilidades}
          type="text"
          placeholder="Habilidades separadas por ,"
        />
        <input
          value={Inabilidades}
          onChange={handleInabilidades}
          type="text"
          placeholder="Inabilidades separadas por ,"
        />
        <input
          value={Proficiencias}
          onChange={handleProficiencias}
          type="text"
          placeholder="Proficiencias separadas por ,"
        />
      </div>
    </div>
  );
};

export default Habilidades;