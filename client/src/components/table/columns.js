import { format } from 'date-fns'

export const COLUMNS = [
    {
        Header: 'Subject',
        Footer: 'Subject',
        accessor: 'subject',
        sticky: 'left',
        Cell: ({ row, value }) =>{
            return (
                <div className='ml-4'>
                    <button 
                        className="text-sm text-gray-900 font-bold uppercase hover:text-gray-700" 
                        // onClick={() => handleCallModal('modal-detail', original.id)}
                        onClick={() => console.log(row.original.id)}
                    >
                        {value}
                    </button>
                </div>
            )
        }
    },
    {
        Header: 'Onduty',
        Footer: 'Onduty',
        accessor: 'onduty'
    },
    {
        Header: 'Department',
        Footer: 'Department',
        accessor: 'department'
    },
    {
        Header: 'Problem',
        Footer: 'Problem',
        accessor: 'problem'
    },
    {
        Header: 'Solution',
        Footer: 'Solution',
        accessor: 'solution'
    },
    {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Date',
        Footer: 'Date',
        accessor: 'date',
        Cell: ({ value }) => {
            return format(new Date(value), 'dd/MM/yyyy')
        }
    },
    {
        Header: 'Action',
        Footer: 'Action',
        accessor: 'action'
    },
]