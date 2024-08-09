import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const EditForm = ({ keys, editData, onCancel, onSubmit }) => {
    const [formData, setFormData] = useState({ ...editData });

    useEffect(() => {
        setFormData({ ...editData });
    }, [editData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className='w-1/5 mb-4'>
            {keys.map((key, index) => (
                <div key={index} className='mb-2'>
                    <label className='block text-sm font-bold mb-1'>{key.toUpperCase()}</label>
                    <input
                        type='text'
                        name={key}
                        value={formData[key] || ''}
                        onChange={handleInputChange}
                        className='w-full border rounded px-2 py-1'
                    />
                </div>
            ))}
            <div className='flex justify-between'>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>
                    Save
                </button>
                <button type='button' className='bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 ml-2'
                    onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

EditForm.propTypes = {
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    editData: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default EditForm;
