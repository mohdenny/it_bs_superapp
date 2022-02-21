import React, { useMemo } from 'react'
import { useTable, useSortBy ,useGlobalFilter ,usePagination } from 'react-table'
import FormControl from '../form/FormControl'
import TablePagination from './TablePagination'
import ButtonControl from '../button/ButtonControl'

export const Table = ({ columnsTable, datas, onClick, BadgeControl }) => {
    const columns = useMemo(() => columnsTable, [columnsTable])
    const data = useMemo(() => datas, [datas])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        setGlobalFilter
    } = useTable(
        {
        columns,
        data
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    const { pageIndex, pageSize, globalFilter } = state

    return (
        <div className='space-y-4'>
            <FormControl control='globalfilter' filter={globalFilter} setFilter={setGlobalFilter} />
            { page &&
                (
                    <>
                        <table className="min-w-full divide-y border-2 divide-gray-200 table-fixed" {...getTableProps()}>
                            <thead className="bg-gray-50">
                                {
                                    headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                <th 
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                                >
                                                    {column.render('Header')}
                                                    <span>
                                                        {column.isSorted
                                                        ? column.isSortedDesc
                                                            ? ' 🔽'
                                                            : ' 🔼'
                                                        : ''}
                                                    </span>
                                                </th>
                                            ))}
                                        </tr>
                                    ))
                                }
                            </thead>
                            <tbody 
                                className="bg-white divide-y divide-gray-200"
                                {...getTableBodyProps()}
                            >
                                {
                                    page.map(row => {
                                        prepareRow(row)
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map(cell => {
                                                    return (
                                                        <td 
                                                            className="px-6 py-4 capitalize" 
                                                            {...cell.getCellProps()}
                                                        >
                                                            {cell.render('Cell', {onClick: onClick, BadgeControl: BadgeControl, ButtonControl: ButtonControl})}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <TablePagination 
                            gotoPage={gotoPage}
                            previousPage={previousPage}
                            nextPage={nextPage}
                            canPreviousPage={canPreviousPage}
                            canNextPage={canNextPage}
                            pageIndex={pageIndex}
                            pageCount={pageCount}
                            pageOptions={pageOptions}
                            setPageSize={setPageSize}
                            pageSize={pageSize}
                        />
                    </>
                )
            }
        </div>
    )
}
