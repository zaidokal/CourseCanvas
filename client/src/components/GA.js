import React, { useEffect, useState } from "react";
import styles from "./GA.module.css";

const GA = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClickOption = (event) => {
    const option = event.target.value;
    const index = selectedOptions.indexOf(option);
    if (index === -1) {
      // Add option to selectedOptions if it's not already selected
      setSelectedOptions([...selectedOptions, option]);
    } else {
      // Remove option from selectedOptions if it's already selected
      const selected = [...selectedOptions];
      selected.splice(index, 1);
      setSelectedOptions(selected);
    }
  };

  const displaySelectedOptions = selectedOptions.map((option) => (
    <div key={option} onClick={handleClickOption} value={option}>
      {option}
    </div>
  ));

  const displayIndicators = (
    <select multiple>
      <option>Select GA Indicator</option>
      <option onClick={handleClickOption}>KB 1</option>
      <option onClick={handleClickOption}>KB 2</option>
      <option onClick={handleClickOption}>KB 3</option>
      <option onClick={handleClickOption}>KB 4</option>
      <option onClick={handleClickOption}>PA 1</option>
      <option onClick={handleClickOption}>PA 2</option>
      <option onClick={handleClickOption}>PA 3</option>
      <option onClick={handleClickOption}>I 1</option>
      <option onClick={handleClickOption}>I 2</option>
      <option onClick={handleClickOption}>I 3</option>
      <option onClick={handleClickOption}>D 1</option>
      <option onClick={handleClickOption}>D 2</option>
      <option onClick={handleClickOption}>D 3</option>
      <option onClick={handleClickOption}>D 4</option>
      <option onClick={handleClickOption}>E 1</option>
      <option onClick={handleClickOption}>E 2</option>
      <option onClick={handleClickOption}>E 3</option>
      <option onClick={handleClickOption}>ITW 1</option>
      <option onClick={handleClickOption}>ITW 2</option>
      <option onClick={handleClickOption}>ITW 3</option>
      <option onClick={handleClickOption}>CS 1</option>
      <option onClick={handleClickOption}>CS 2</option>
      <option onClick={handleClickOption}>CS 3</option>
      <option onClick={handleClickOption}>PR 1</option>
      <option onClick={handleClickOption}>PR 2</option>
      <option onClick={handleClickOption}>PR 3</option>
      <option onClick={handleClickOption}>IESE 1</option>
      <option onClick={handleClickOption}>IESE 2</option>
      <option onClick={handleClickOption}>IESE 3</option>
      <option onClick={handleClickOption}>EE 1</option>
      <option onClick={handleClickOption}>EE 2</option>
      <option onClick={handleClickOption}>EE 3</option>
      <option onClick={handleClickOption}>EE 4</option>
      <option onClick={handleClickOption}>EPM 1</option>
      <option onClick={handleClickOption}>EPM 2</option>
      <option onClick={handleClickOption}>EPM 3</option>
      <option onClick={handleClickOption}>EPM 4</option>
      <option onClick={handleClickOption}>LL 1</option>
      <option onClick={handleClickOption}>LL 2</option>
    </select>
  );

  return (
    <>
      {displayIndicators}
      <div>{displaySelectedOptions}</div>
    </>
  );
};

export default GA;
