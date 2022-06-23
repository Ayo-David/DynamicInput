import React from 'react'

const data = [
  { name: 'Ayo', age: 20 },
  { name: 'Line', age: 32 },
  { name: 'Kylie', age: 24 },
  { name: 'Femi', age: 18 },
]

const OrderList = () => {
  return (
    <div>
      <ul>
        {
          data.sort((a, b) => a.age - b.age).map((person, i) => {
            return <li
              key={`${person.name}-${Math.floor(Math.random())}`}>
              {person.name}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default OrderList