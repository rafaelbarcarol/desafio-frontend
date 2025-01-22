import React, { useState } from "react";
import "./CepModal.scss";
import closeCepModal from "../../assets/images/close-cep-modal.svg";

const CepModal = ({ closeModal }) => {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      if (!response.ok) {
        throw new Error("CEP não encontrado");
      }

      const data = await response.json();

      if (data.erro) {
        setError("CEP não localizado. Tente novamente");
        alert("CEP não localizado. Tente novamente!");
        closeModal(null);
      } else {
        const city = data.localidade;
        closeModal(city);
      }
    } catch (error) {
      setError("Erro ao consultar o CEP");
      alert("Erro ao consultar o CEP! Tente novamente.");
      closeModal(null);
    }
  };

  return (
    <div className="cep-modal">
      <div className="cep-modal__content">
        <div
          className="cep-modal__content__close close-cep-modal"
          onClick={() => closeModal(null)}
        >
          <img src={closeCepModal} alt="fechar modal" />
        </div>
        <p className="cep-modal__content__title">
          Personalize sua experiência e encontre produtos perto de você!
        </p>
        <form className="cep-modal__form" onSubmit={handleSubmit}>
          <label htmlFor="cep">Digite o seu CEP</label>
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={handleCepChange}
            placeholder="00000000"
            maxLength="8"
          />
          <button className="cep-modal__form__button" type="submit">
            Salvar endereço
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default CepModal;
