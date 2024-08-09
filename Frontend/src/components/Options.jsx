import PropTypes from 'prop-types';

const Options = ({type, setShowAll, setShowForm, setCollection}) => {
  return (
    <div className='hover:cursor-pointer border-red-700 rounded-lg border-2 p-4 text-center'>
        <div className='mb-4'>
            <h3 className='text-2xl font-bold'>{type.title}</h3>
            <p>Show or edit {type.title}</p>
        </div>
        <div className='flex justify-evenly'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => {
                    setShowAll(true)
                    setShowForm(false)
                    setCollection(type.title)
                }}
            >Show</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => {
                  setShowForm(true)
                  setShowAll(false)
                  setCollection(type.title)
                }}
            >Add</button>
        </div>
    </div >
  )
}

Options.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  setShowAll: PropTypes.func.isRequired,
  setShowForm: PropTypes.func.isRequired,
  setCollection: PropTypes.func.isRequired
};

export default Options
