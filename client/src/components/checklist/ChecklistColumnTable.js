import { format } from 'date-fns'

export const CHECKLISTCOLUMNTABLE = [
    {
        Header: 'Onduty',
        Footer: 'Onduty',
        accessor: 'onduty',
        Cell: ({ row, value, onClick }) => {
            return (
                <>
                    <div className='ml-4'>
                        <button 
                            className="text-sm text-left text-gray-900 font-bold uppercase hover:text-gray-500 break-words w-full" 
                            onClick={() => onClick('modal-detail-live', row.original.id)}
                        >
                            {
                                value.map((item, index) => {
                                    return <p key={index}>{item}</p>
                                })
                            } 
                        </button>
                    </div>
                </>
            )
        }
    },
    {
        Header: 'Day',
        Footer: 'Day',
        accessor: 'day',
        Cell: ({ value }) => {
            return format(new Date(value), 'eeee')
        }
    },
    {
        Header: 'Time',
        Footer: 'Time',
        accessor: 'time'
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
                        colorType='light'
                        textColor='white'
                        onClick={() => onClick('modal-edit-form', row.original.id)}
                    />
                    <ButtonControl
                        control='primary'
                        icon='trash'
                        color='red'
                        colorType='light'
                        textColor='white'
                        onClick={null}
                    />
                </>
            )
        }
    },
]