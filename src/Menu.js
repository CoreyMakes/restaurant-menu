import React, { useState, useEffect } from 'react'
import Item from './Item'
import data from './data'

export const Menu = () => {
  const [items, SetItems] = useState(data)
  const [category, setCategory] = useState([])
  const handleFilter = (cat) => {
    if (cat === 'all') {
      SetItems(data)
    } else {
      const newCateg = data.filter((e) => e.category === cat)
      SetItems(newCateg)
    }
  }

  useEffect(() => {
    setCategory(['all', ...new Set(items.map((e) => e.category))])
  }, [data])

  return (
    <section>
      <header>
        <h1>Our menu</h1>
        <div className='underline'></div>
      </header>
      <div className='categories'>
        {category.map((c, index) => (
          <button key={index} onClick={() => handleFilter(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className='items'>
        {items.map((i) => (
          <Item key={i.id} {...i} />
        ))}
      </div>
    </section>
  )
}
