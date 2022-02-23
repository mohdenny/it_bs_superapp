import React from 'react'
import ButtonControl from '../button/ButtonControl'

const TablePagination = ({ 
    gotoPage, 
    previousPage, 
    nextPage, 
    canPreviousPage, 
    canNextPage, 
    pageIndex, 
    pageCount, 
    pageOptions, 
    setPageSize, 
    pageSize 
}) => {
    return (
        <div className='space-x-1'>
            <ButtonControl
                control={'secondary'}
                name={'first'}
                label={'<<'}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
                canClicked={false}
            />
            <ButtonControl
                control={'secondary'}
                name={'previous'}
                label={'Previous'}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                canClicked={false}
            />
            <ButtonControl
                control={'secondary'}
                name={'Next'}
                label={'Next'}
                onClick={() => nextPage()}
                disabled={!canNextPage}
                canClicked={false}
            />
            <ButtonControl
                control={'secondary'}
                name={'last'}
                label={'>>'}
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                canClicked={false}
            />
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go to page:{' '}
                <input
                    type='number'
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                    style={{ width: '50px' }}
                />
            </span>{' '}
            <select
                value={pageSize}
                onChange={e => setPageSize(Number(e.target.value))}>
                    {[10, 25, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default TablePagination