import React, { useState } from 'react'
import Dropdown from './components/Dropdown'

const App: React.FC = () => {
  const [i, setI] = useState('')

  return (
    <form>
      <h1>Hello</h1>
      <Dropdown
        value={i}
        changeHandler={setI}
        placeholder="Placeholder text"
        options={[
          'Apple',
          'Apricot',
          'Asparagus',
          'Avocado',
          'Banana',
          'Bean',
          'Blueberry',
          'Broccoli',
          'Cabbage',
          'Capsicum',
          'Carrot',
          'Cauliflower',
          'Celery',
          'Corn',
          'Cherry',
          'Cucumber',
          'Durian',
          'Eggplant',
          'Garlic',
          'Ginger',
          'Grape',
          'Grapefruit',
          'Guava',
          'Honeydew',
          'Jackfruit',
          'Kale',
          'Kiwi',
          'Lemon',
          'Lettuce',
          'Lime',
          'Mango',
          'Onion',
          'Orange',
          'Papaya',
          'Pea',
          'Pear',
          'Peach',
          'Pepper',
          'Plum',
          'Potato',
          'Pineapple',
          'Radish',
          'Raspberry',
          'Rice',
          'Spinach',
          'Tomato',
          'Turnip',
          'Rockmelon',
          'Strawberry',
          'Watermelon',
          'Yam',
        ]}
      />
      <input type="text" style={{ border: '1px solid black' }} />
    </form>
  )
}

export default App
