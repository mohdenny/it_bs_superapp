import React, { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import { COLUMNS } from './columns'
import { GlobalFilter } from './GlobalFilter'

export const Table = ({ datas, handleCallModal }) => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => datas, [datas])
  
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data
        },
        useGlobalFilter
    )
  
    const { globalFilter } = state
  
    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table 
                className="min-w-full divide-y divide-gray-200"
                {...getTableProps()}
            >
                <thead className="bg-gray-50">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th 
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                                {...column.getHeaderProps()}
                            >
                            {column.render('Header')}
                            </th>
                        ))}
                        </tr>
                    ))}
                </thead>
                <tbody 
                    className="bg-white divide-y divide-gray-200"
                    {...getTableBodyProps()}
                >
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return  <td 
                                        className="px-6 py-4 whitespace-nowrap"
                                        {...cell.getCellProps()}>{cell.render('Cell')}

                                    </td>
                                    {/* YANG INI */}
                            })}
                        </tr>
                        )
                    })}
                </tbody>
                    <tfoot>
                        {footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => (
                                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                            ))}
                            </tr>
                        ))}
                    </tfoot>
            </table>
        </>
    )
  }