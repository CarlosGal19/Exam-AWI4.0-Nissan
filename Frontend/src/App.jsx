import { useState } from 'react'
import Form from './components/Form'
import Options from './components/Options';
import data from './mocks/data'
import Elements from './components/Elements';

function App() {

  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [collection, setCollection] = useState('');

  return (
    <>
    {/* Tailwind classes */}
    <div className="container mx-auto px-8">
      <h1 className="text-3xl font-bold text-center my-8">Form</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data.map((type, index) => (
          <Options key={index} type={type} setShowAll={setShowAll} setShowForm={setShowForm} setCollection={setCollection} />
        ))}
      </div>
      <div className="mt-4">
        {
          showForm && (
            <div>
              <Form collection={collection} />
            </div>
          )
        }
        {
          showAll && (
            <div>
              <Elements collection={collection} />
            </div>
          )
        }
      </div>
    </div>

    </>
  )
}

export default App
