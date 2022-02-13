import { format } from 'date-fns'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true,
        sticky: 'left'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        sticky: 'left'
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
        Header: 'Department',
        Footer: 'Department',
        accessor: 'department'
    },
    {
        Header: 'Subject',
        Footer: 'Subject',
        accessor: 'subject'
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
        Header: 'Onduty',
        Footer: 'Onduty',
        accessor: 'onduty'
    },
    {
        Header: 'Status',
        Footer: 'Status',
        accessor: 'status'
    },
    {
        Header: '',
        Footer: '',
        accessor: 'action'
    },
]