import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, Redirect} from "react-router-dom";

const NovaSerie = ({ match }) => {
  // input controlado
  const [form, setForm] = useState({});
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
    axios
        .post("/api/series", form)
        .then((res) => {
      setSuccess(true);
    });
  };

  if (success) {
    return <Redirect to="/series" />;
  }

  return (
            <div className="container">
              <h1>Nova Série</h1>
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
                      checked
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
                  />
                  <label className="form-check-label" htmlFor="Assistido">
                    Assistido
                  </label>
                </div>
                <br />
                <div>
                  <button type="button" onClick={save} className="btn btn-primary">
                    Salvar
                  </button>{" "}
                  <Link to="/" className="btn btn-danger">Cancelar</Link>
                </div>
              </form>
            </div>
        )
};

export default NovaSerie;