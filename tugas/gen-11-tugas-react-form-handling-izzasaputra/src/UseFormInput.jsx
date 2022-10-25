import { useState } from "react";

export default function UseFormInput(inputData) {
  const [formInput, SetFormInput] = useState(inputData);

  function handleFormInput(evt, propName) {
    SetFormInput({ ...formInput, [propName]: evt.target.value });
  }

  function handleFormCheck(value, propName) {
    SetFormInput({ ...formInput, [propName]: value });
  }
  return {
    formInput,
    handleFormInput,
    handleFormCheck,
  };
}
