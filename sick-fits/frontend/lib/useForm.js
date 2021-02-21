import { useState } from 'react';

export default function useForm(initial = {}) {
  // custom hook!
  // create a state object for our inputs
  //   {
  //       name: 'wes',
  //       description: 'nice shoes',
  //       price: 1000
  //   }
  const [inputs, setInputs] = useState(initial);
  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      // funky way file upload works
      [value] = e.target.files;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
