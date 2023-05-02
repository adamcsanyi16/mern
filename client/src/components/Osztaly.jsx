import React from "react";

const Osztaly = ({elem}) => {
  return (
    <div className="osztaly">
      <h2>{elem.osztaly}</h2>
      <p>Diákok Száma: {elem.diakokSzama}</p>
      <p>Bejáró diákok Száma: {elem.bejaroDiakok}</p>
      <img src={elem.kep} alt="" />
    </div>
  );
};

export default Osztaly;
