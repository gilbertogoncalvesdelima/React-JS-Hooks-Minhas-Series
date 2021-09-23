import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const EditarGenero = ({ match }) => {
  // input controlado
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const onChange = (evt) => {
    setName(evt.target.value);
  };

  useEffect(() => {
    axios.get("/api/genres/" + match.params.id).then((res) => {
      setName(res.data.name);
    });
  }, [match.params.id]);

  const save = () => {
    axios
      .put("/api/genres/" + match.params.id, {
        name: name,
      })
      .then((res) => {
        setSuccess(true);
      });
  };
  if (success) {
    return <Redirect to="/generos" />;
  }

  return (
    <div className="container">
      <h1>Editar Gênero</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="email"
            value={name}
            onChange={onChange}
            className="form-control"
            name=""
            id="name"
            placeholder="Nome do Gênero"
          />
        </div>
        <button type="button" onClick={save} className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditarGenero;