import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'
import { CoffeDetail } from './CoffeDetail';
import { FormattedMessage } from 'react-intl'


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
        const res = await fetch(`http://localhost:3001/cafes/${id}`)
        const data = await res.json()
        console.log(data)
        return data
    }

    useEffect(() => {
        const getCoffeDetail = async () => {
            if (currentCoffe) {
                const coffeDetailFromServer = await fetchCoffeDetail(currentCoffe)
                const { nombre, notas, fecha_cultivo, altura, imagen } = coffeDetailFromServer
                setDetailCoffe({ nombre, notas, fecha_cultivo, altura, imagen })
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
        <div className='flex gap-4 h-96'>
            <div className='w-[70%] h-full'>
                <Table striped bordered hover size='mg'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><FormattedMessage id='table_name'/></th>
                            <th>
                                <FormattedMessage id='table_type'/>
                            </th>
                            <th>
                                <FormattedMessage id='table_region'/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableItems.map((tableItem) => {
                            return (
                                <tr key={tableItem.id}>
                                    <td>{tableItem.id}</td>
                                    <td>
                                        <a className='w-full' onClick={() => { setCurrentCoffe(tableItem.id) }}>
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
            </div>
            <div className='w-[30%] h-full'>
                {detailCoffe && <CoffeDetail detailCoffe={detailCoffe} />}
            </div>
        </div>
    )
}
