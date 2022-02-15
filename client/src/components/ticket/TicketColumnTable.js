import { format } from 'date-fns'

export const COLUMNSTABLE = [
    {
        Header: 'Subject',
        Footer: 'Subject',
        accessor: 'subject',
        sticky: 'left',
        Cell: ({ row, value, onClick }) => {
            return (
                <div className='ml-4'>
                    <button 
                        className="text-sm text-left text-gray-900 font-bold uppercase hover:text-gray-500 break-words w-full" 
                        onClick={() => onClick('modal-detail', row.original.id)}
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
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status',
        Cell: ({ value, BadgeControl }) => {
            return (
                <BadgeControl 
                    control='ticket'
                    status={value}
                />
            )
        }
    },
    {
        Header: 'Date',
        Footer: 'Date',
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