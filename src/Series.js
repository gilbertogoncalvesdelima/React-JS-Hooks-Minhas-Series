import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Badge} from "reactstrap";

const Series = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/series").then((res) => {
      setData(res.data.data);
    });
  }, []);

  const deleteSerie = (id) => {
    axios.delete("/api/series/" + id).then((res) => {
      const filtrado = data.filter((item) => item.id !== id);
      setData(filtrado);
    });
  };

  const renderizaLinha = (record) => {
    return (
      <tr key={record.id}>
        <th scope="row">{record.name}</th>
        <td>{record.id}</td>
        <td>{record.status === "ASSISTIDO" && (
              <Badge color="success">Assistido</Badge>
            )}
            {record.status === "PARA_ASSISTIR" && (
                <Badge color="warning">Para Assistir</Badge>
            )}</td>
        <td>
          <button className="btn btn-danger" onClick={() => deleteSerie(record.id)}>
            Remover
          </button>
          <Link to={"/series/" + record.id} className="btn btn-warning">
            Info
          </Link>
        </td>
      </tr>
    );
  };

  if (data.length === 0) {
    return (
      <div className="container">
          <div className="row align-items-center">
              <div className="col-sm">
                  <h1> Séries </h1>
              </div>
              <div className="col-sm">
              </div>
              <div className="col-sm">
                  <Link to="/series/novo" className="btn btn-primary">
                      Nova Série
                  </Link>
              </div>
          </div>
        <div className="alert alert-warning" role="alert">
          Você não possui séries criadas ainda.
        </div>
      </div>
    );
  }
  return (
    <div className="container">
        <div className="row align-items-center">
            <div className="col-sm">
                <h1> Séries </h1>
            </div>
            <div className="col-sm">
            </div>
            <div className="col-sm">
                <Link to="/series/novo" className="btn btn-primary">
                    Nova Série
                </Link>
            </div>
        </div>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">NOME</th>
            <th scope="col">GÊNERO</th>
            <th scope="col">ASSISTIDO</th>
            <th scope="col">AÇÕES</th>
          </tr>
        </thead>
        <tbody>{data.map(renderizaLinha)}</tbody>
      </table>
    </div>
  );
};

export default Series;