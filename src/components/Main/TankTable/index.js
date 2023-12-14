import React from 'react';
import { TableContainer, TankTable, PlayerTankHeaders } from './styles';

function PlayerPageTable({ data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        state,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageNum, pageSize },
    } = useTable({
        columns,
        data,
        initialState : {
            pageNum: 0,
            pageSize: 20,
            sortBy : [
                {
                    id: "tier",
                    des: "true"
                }
            ]
        },
        useFilters,
        useSortBy,
        useExpanded,
        usePagination
    });

    const columns = React.useMemo(() => [
        {
            Header: playerTankHeaders.tank
        },
        {
            Header: playerTankHeaders.wn8
        },
    ], []);

    return (
        <TableContainer>
            <TankTable {...getTableProps()}>
                <thead>
                </thead>
                <tbody>
                </tbody>
            </TankTable>
        </TableContainer>
    );
}

export default PlayerPageTable;