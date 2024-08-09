import { useEffect, useState } from "react";
import { values } from "../mocks/data";
import PropTypes from 'prop-types';
import axiosInstance from '../axios/axios';
const numbers = ['salary', 'holidays', 'model'];

const Form = ({ collection }) => {
  const [values_form, setValuesForm] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const values_form = values.find(value => value.name === collection.toLowerCase()).value;
    setValuesForm(values_form);

    // Inicializar el estado del formulario con valores vacíos
    const initialFormData = {};
    values_form.forEach(value => {
      initialFormData[value] = value === 'bonus' ? false : '';
    });
    setFormData(initialFormData);
  }, [collection]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const postData = async () => {
    try {
      if (formData.bonus) {
        setFormData(prevFormData => ({
          ...prevFormData,
          bonus: formData.bonus === 'true'
        }));
      }
      if (formData.salary) {
        setFormData(prevFormData => ({
          ...prevFormData,
          salary: parseInt(formData.salary)
        }));
      }
      if (formData.holidays) {
        setFormData(prevFormData => ({
          ...prevFormData,
          holidays: parseInt(formData.holidays)
        }));
      }
      if (formData.model) {
        setFormData(prevFormData => ({
          ...prevFormData,
          model: parseInt(formData.model)
        }));
      }
      const bodySent = formData
      const response = await axiosInstance.post(`/${collection.toLowerCase()}`, bodySent);
      console.log(response);
      alert('Data was successfully posted');
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    for (const key in formData) {
      if (formData[key] === '' || formData[key] === null) {
        isValid = false;
        alert(`Please fill out the ${key} field.`);
        break;
      }
    }
    if(!isValid) return;
    postData();
  };

  return (
    <div className="container mx-auto p-6">
      <form className="bg-white shadow-md rounded-lg p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">{collection} Form</h2>
        <div className="space-y-4">
          {values_form.map((value, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={value} className="text-lg font-medium mb-2">{value.toUpperCase()}</label>
              {value === 'bonus' ? (
                <input
                  type="checkbox"
                  id={value}
                  name={value}
                  checked={formData[value]}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <input
                  type={numbers.includes(value) ? 'number' : 'text'}
                  id={value}
                  name={value}
                  value={formData[value]}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  collection: PropTypes.string.isRequired,
};

export default Form;
