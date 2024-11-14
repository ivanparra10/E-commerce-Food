import React, { useEffect, useState } from 'react' // Solo una importación
import './List.css'
import { url, currency } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`)
      if (response.data.success) {
        setList(response.data.data)
      } else {
        toast.error("Error")
      }
    } catch (error) {
      toast.error("Error al cargar la lista")
      console.error(error)
    }
  }

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId
      })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error("Error")
      }
    } catch (error) {
      toast.error("Error al eliminar")
      console.error(error)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='list add flex-col'>
      <p>Lista de Comida</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Imagen</b>
          <b>Nombre</b>
          <b>Categoria</b>
          <b>Precio</b>
          <b>Eliminar</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p className='cursor' onClick={() => removeFood(item._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
