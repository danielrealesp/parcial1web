import React from 'react'
import { FormattedMessage } from 'react-intl'

export const CoffeDetail = ({ detailCoffe }) => {
  const { nombre, notas, fecha_cultivo, altura, imagen } = detailCoffe

  return (
    <div className='flex flex-col px-4 py-2 justify-center bg-[#F9F2F1] items-center border border-black w-full h-full'>
      <h1 className='text-lg font-bold'>{nombre.toUpperCase()}</h1>
      <p>{fecha_cultivo}</p>
      <img className='w-[50%]' src={imagen} alt={nombre} />
      <p><FormattedMessage id='notes' /></p>
      <p>{notas}</p>
      <p className='font-bold'>
        <FormattedMessage id='coffe_detail_message' />
        {altura}
        <FormattedMessage id='sea' />
      </p>
    </div>
  )
}
