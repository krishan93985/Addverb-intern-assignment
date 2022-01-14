import React from "react";
import "./Country.css";

export default function Country({ country }) {
  return (
    <div className="country-card">
     <div className="flag-wrapper">
        <img src={country.flags.png} className="flag" />
     </div>
      <div className="info-wrapper">
        <span className="atbr">Name :</span>{" "}
        <span className="atbr-val">{country.name.common}</span>
        <br />
        <span className="atbr">Capital :</span>{" "}
        <span className="atbr-val">{country.capital} </span>
        <br />
        <span className="atbr">Region :</span>{" "}
        <span className="atbr-val">{country.region}</span> <br />
        <span className="atbr">Sub-region :</span>{" "}
        <span className="atbr-val">{country.subregion} </span>
        <br />
        <span className="atbr">Population :</span>{" "}
        <span className="atbr-val">{country.population}</span> <br />
        <span className="atbr">Borders :</span>
        <span>
          {country.borders?.map((border, i) => (
            <span className="atbr-val" key={i}>
              {border + (i === country.borders?.length - 1 ? "" : ", ")}
            </span>
          ))}
        </span>{" "}
        <br />
        <span className="atbr">Languages :</span>
        <span>
          {Object.entries(country.languages)?.map((language, i) => (
            <span className="atbr-val" key={i}>
              {language[1] +
                (i === Object.entries(country.languages)?.length - 1
                  ? ""
                  : ", ")}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}