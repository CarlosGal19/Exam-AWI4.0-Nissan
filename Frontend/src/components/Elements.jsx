import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axiosInstance from '../axios/axios';
import EditForm from './EditForm';

const Elements = ({ collection }) => {
    const [elements, setElements] = useState([]);
    const [keys, setKeys] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axiosInstance.get(`${collection.toLowerCase()}`);
                const elements = response.data[`${collection.toLowerCase()}s`];
                if (elements.length > 0) {
                    const filteredKeys = Object.keys(elements[0]).filter((key) => key !== '_id');
                    filteredKeys.pop();
                    setKeys(filteredKeys);
                }
                setElements(elements);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [collection]);

    const handleDelete = async (id) => {
        try {
            const response = await axiosInstance.delete(`/${collection.toLowerCase()}/${id}`);
            console.log(response);
            setElements(elements.filter((element) => element._id !== id));
            alert('Element was successfully deleted');
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = async (id) => {
        try {
            const response = await axiosInstance.get(`/${collection.toLowerCase()}/${id}`);
            setEditData(response.data[`${collection.toLowerCase()}`]);
            setIsEditing(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFormSubmit = async (updatedData) => {
        try {
            const response = await axiosInstance.patch(`/${collection.toLowerCase()}/${updatedData._id}`, updatedData);
            console.log(response);
            setElements(elements.map((element) =>
                element._id === updatedData._id ? { ...element, ...updatedData } : element
            ));
            setIsEditing(false);
            alert('Element was successfully updated');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold my-4'>{collection}</h1>
            {isEditing && (
                <EditForm
                    keys={keys}
                    editData={editData}
                    onCancel={() => setIsEditing(false)}
                    onSubmit={handleFormSubmit}
                />
            )}
            {elements.map((element) => (
                <div key={element._id} className='border-2 border-gray-400 rounded-lg p-4 mb-4 w-1/5'>
                    {keys.map((key, index) => (
                        <div key={index} className='flex justify-between'>
                            <span className='font-bold'>{key.toUpperCase()}</span>
                            <span>{element[key]}</span>
                        </div>
                    ))}
                    <div className='flex justify-evenly'>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'
                            onClick={() => handleEdit(element._id)}
                        >Edit</button>
                        <button className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4'
                            onClick={() => handleDelete(element._id)}
                        >Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

Elements.propTypes = {
    collection: PropTypes.string.isRequired
};

export default Elements;
