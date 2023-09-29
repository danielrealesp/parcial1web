import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'


export const TableCoffe = () => {
    const [tableItems, setTableItems] = useState([])
    const [currentCoffe, setCurrentCoffe] = useState(null)
    const [detailCoffe, setDetailCoffe] = useState(null)

    const fetchTableItems = async () => {
        const res = await fetch('http://localhost:3001/cafes')
        const data = await res.json()
        console.log(data)
        return data
    }

    const fetchCoffeDetail = async (id) => {

    }

    useEffect(() => {
        const getCoffeDetail = async () => {
            if (currentCoffe) {
                const coffeDetailFromServer = await fetchCoffeDetail(currentCoffe)
                console.log(coffeDetailFromServer)
            }
        }
        getCoffeDetail()
    }, [currentCoffe])

    useEffect(() => {
        const getTableItems = async () => {
            const tableItemsFromServer = await fetchTableItems()
            setTableItems(tableItemsFromServer)
        }
        getTableItems()
    }, [])

    return (
        //Map tableItems to Table
        <Table striped bordered hover size='mg'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Región</th>
                </tr>
            </thead>
            <tbody>
                {tableItems.map((tableItem) => {
                    return (
                        <tr key={tableItem.id}>
                            <td>{tableItem.id}</td>
                            <td>
                                <a className='w-full' onClick={()=> {setCurrentCoffe(tableItem.id)}}>
                                    {tableItem.nombre}
                                </a>
                            </td>
                            <td>{tableItem.tipo}</td>
                            <td>{tableItem.region}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
