import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Badge } from "reactstrap";


const InfoSerie = ({ match }) => {
  // input controlado
  const [form, setForm] = useState({
    name: ""
  });
  const [success, setSuccess] = useState(false);
  const [mode, setMode] = useState("INFO");
  const [genres, setGenres] = useState([]);

  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api/series/" + match.params.id).then((res) => {
      setData(res.data);
      setForm(res.data);
    });
  }, [match.params.id]);

  useEffect(() => {
    axios.get("/api/genres").then((res) => {
      setGenres(res.data.data);
    });
  }, [data]);

  // custom header
  const masterHeader = {
    height: "50vh",
    minHeight: "500px",
    backgroundImage: `url('${data.background}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const onChange = (field) => (evt) => {
    setForm({
      ...form,
      [field]: evt.target.value,
    });
  };

  const seleciona = (value) => () => {
    setForm({
      ...form,
      status: value,
    });
  };

  const save = () => {
    axios.put("/api/series/" + match.params.id, form).then((res) => {
      setSuccess(true);
    });
  };
  if (success) {
    return <Redirect to="/series" />;
  }

  return (
    <div>
      <header style={masterHeader}>
        <div className="h-100" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="h-100 container">
            <div className="row h-100 align-items-center">
              <div className="col-3">
                <img
                  alt={data.name}
                  className="img-fluid img-thumbnail"
                  src={data.poster}
                />
              </div>
              <div className="col-8">
                <h1 className="font-weight-light text-white">{data.name}</h1>
                <div className="lead text-white">
                  <div>
                    Gênero: {data.genre_name}
                  </div>
                  {data.status === "ASSISTIDO" && (
                    <Badge color="success">Assistido</Badge>
                  )}
                  {data.status === "PARA_ASSISTIR" && (
                    <Badge color="warning">Para Assistir</Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <button onClick={() => setMode("EDIT")} className="btn btn-warning">
          Editar
        </button>
      </div>
      {mode === "EDIT" && (
        <div className="container">
          <h1>Editar Série</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                value={form.name}
                onChange={onChange("name")}
                className="form-control"
                id="name"
                placeholder="Nome da Série"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Gênero</label>
              <select
                className="form-control"
                onChange={onChange("genre_id")}
                value={data.genre_id}
              >
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comentários</label>
              <input
                type="text"
                value={form.comments}
                onChange={onChange("comments")}
                className="form-control"
                id="comments"
                placeholder="Comentários"
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="paraAssistir"
                value="PARA_ASSISTIR"
                onChange={seleciona("PARA_ASSISTIR")}
                checked={form.status === "PARA_ASSISTIR"}
              />
              <label className="form-check-label" htmlFor="paraAssistir">
                Para Assistir
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                id="Assistido"
                value="ASSISTIDO"
                onChange={seleciona("ASSISTIDO")}
                checked={form.status === "ASSISTIDO"}
              />
              <label className="form-check-label" htmlFor="Assistido">
                Assistido
              </label>
            </div>

            <div>
              <button type="button" onClick={save} className="btn btn-primary">
                Salvar
              </button>{" "}
              <button
                onClick={() => setMode("INFO")}
                className="btn btn-danger"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default InfoSerie;