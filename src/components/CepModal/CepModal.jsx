import React, { useState, useEffect } from "react";
import "./CepModal.scss";
import closeCepModal from "../../assets/images/close-cep-modal.svg";

const CepModal = ({ closeModal }) => {
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const states = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  useEffect(() => {
    const savedCep = sessionStorage.getItem("cep");
    const savedState = sessionStorage.getItem("state");

    if (savedCep) {
      setCep(savedCep);
    }

    if (savedState) {
      setSelectedState(savedState);
    }
  }, []);

  const maskCep = (value) => {
    let cleanValue = value.replace(/\D/g, "");

    if (cleanValue.length > 5) {
      cleanValue = cleanValue.slice(0, 5) + "-" + cleanValue.slice(5, 8);
    }

    return cleanValue.substring(0, 10);
  };

  const handleCepChange = (e) => {
    const formattedCep = maskCep(e.target.value);
    setCep(formattedCep);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const cityInput = document.getElementById("city").value;

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cep.replace("-", "")}/json/`
      );

      if (!response.ok) {
        throw new Error("CEP não encontrado");
      }

      const data = await response.json();

      if (data.erro) {
        if (cityInput.trim()) {
          sessionStorage.setItem("cep", cep);
          sessionStorage.setItem("state", selectedState);
          sessionStorage.setItem("city", cityInput);

          closeModal(cityInput);
        } else {
          setError("CEP não localizado e cidade não informada.");
          alert("CEP não localizado. Tente novamente!");
          closeModal(null);
        }
      } else {
        const city = data.localidade;
        sessionStorage.setItem("cep", cep);
        sessionStorage.setItem("state", selectedState);
        sessionStorage.setItem("city", city);

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
          <fieldset>
            <div className="input-wrapper">
              <label htmlFor="cep">Código postal*</label>
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={handleCepChange}
                placeholder="00000-000"
                maxLength="10"
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="input-wrapper">
              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" placeholder="Opcional" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="state">Estado</label>
              <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}
              >
                <option value="" disabled>
                  Opcional
                </option>
                {states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
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
