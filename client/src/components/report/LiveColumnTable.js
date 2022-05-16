import { format } from 'date-fns'

export const LIVECOLUMNSTABLE = [
    {
        Header: 'Program',
        Footer: 'Program',
        accessor: 'program',
        sticky: 'left',
        Cell: ({ row, value, onClick }) => {
            return (
                <div className='ml-4'>
                    <button 
                        className="text-sm text-left text-gray-900 font-bold uppercase hover:text-gray-500 break-words w-full" 
                        onClick={() => onClick('modal-detail-live', row.original.id)}
                    >
                        {value}
                    </button>
                </div>
            )
        }
    },
    {
        Header: 'Pukul',
        Footer: 'Pukul',
        accessor: 'pukul',
        Cell: ({ value }) => {
            return format(new Date(value), 'HH:mm')
        }
    },
    {
        Header: 'Onduty',
        Footer: 'Onduty',
        accessor: 'onduty',
        Cell: ({ value }) => {
            return (
                <>
                    {
                        value.map((item, index) => {
                            return <p key={index}>{item}</p>
                        })
                    } 
                </>
            )
        }
    },
    {
        Header: 'Unit',
        Footer: 'Unit',
        accessor: 'unit'
    },
    {
        Header: 'Server',
        Footer: 'Server',
        accessor: 'server'
    },
    {
        Header: 'Modem Up',
        Footer: 'Modem Up',
        accessor: 'modemup'
    },
    {
        Header: 'Lokasi',
        Footer: 'Lokasi',
        accessor: 'lokasi',
    },
    {
        Header: 'Description',
        Footer: 'Description',
        accessor: 'description',
    },
    {
        Header: 'Date Created',
        Footer: 'Date Created',
        accessor: 'date',
        Cell: ({ value }) => {
            return format(new Date(value), 'dd/MM/yyyy HH:mm')
        }
    },
    {
        Header: 'Action',
        Footer: 'Action',
        accessor: 'action',
        Cell: ({ row, onClick, ButtonControl }) => {
            return (
                <>
                    <ButtonControl
                        control='primary'
                        icon='pencil'
                        color='gray'
                        textColor='white'
                        onClick={() => onClick('modal-edit-form', row.original.id)}
                    />
                    <ButtonControl
                        control='primary'
                        icon='trash'
                        color='red'
                        textColor='white'
                        onClick={null}
                    />
                </>
            )
        }
    },
]