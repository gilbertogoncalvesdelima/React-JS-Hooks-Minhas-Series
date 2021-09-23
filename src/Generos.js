import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Generos = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/genres").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const deleteGenero = (id) => {
    axios.delete("/api/genres/" + id).then((res) => {
      const filtrado = data.filter((item) => item.id !== id);
      setData(filtrado);
    });
  };

  const renderizaLinha = (record) => {
    return (
      <tr key={record.id} >
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td className="justify-content-between">
          <button className="btn btn-danger" onClick={() => deleteGenero(record.id)}>Remover</button>
          <Link to={"/generos/" + record.id} className="btn btn-warning">Editar</Link>
        </td>
      </tr>
    );
  };

  if (data.length === 0) {
    return (
      <div className="container">
          <div className="d-flex justify-content-between align-items-center">
              <div className="col-sm">
                  <h1>Gêneros</h1>
              </div>
              <div className="col-sm">

              </div>
              <div className="col-sm">
                  <Link to="/generos/novo" className="btn btn-primary">Novo Gênero</Link>
              </div>
          </div>


        <div className="alert alert-warning" role="alert">
          Nenhum gênero encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <div className="col-sm">
                <h1>Gêneros</h1>
            </div>
            <div className="col-sm">

            </div>
            <div className="col-sm ">
                <Link to="/generos/novo" className="btn btn-primary">Novo Gênero</Link>
            </div>
        </div>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Gênero</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>{data.map(renderizaLinha)}</tbody>
      </table>
    </div>
  );
};

export default Generos;