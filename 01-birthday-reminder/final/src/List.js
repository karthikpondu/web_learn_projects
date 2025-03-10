import React from 'react';

const List = ({ people, deleteP }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick={()=>deleteP(id)}>❌</button>
          </article>
        );
      })}
    </>
  );
};

export default List;
