import React, { useEffect, useState } from 'react';

import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    TableSortLabel,
    TablePagination,
} from '@mui/material';

import { 
    MarksContainer, 
    MarksGroup, 
    MarksTitle,
    CustomMarksCell
} from './styles';

import marks from '../../../marks.json';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

function MarksOfExcellence() {
    const classes = useStyles();

    const data = marks['data'].sort((a, b) => {
        return(
            a['marks']['95'] > b['marks']['95'] ? 1 : 0
    )});

    const [rowData, setRowData] = useState(data);
    const [order, setOrder] = useState('desc');
    const [page, setPage] = useState(0);
    const [tanksPerPage, setTanksPerPage] = useState(10);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleTanksPerPage = (event) => {
        setTanksPerPage(parseInt(event.target.value, 10));
    };

    const sortTable = (arr, orderBy) => {
        switch(orderBy) {
            case "desc":
                return arr.sort((a, b) =>
                        a['marks']['95'] > b['marks']['95'] ? 1 : a['marks']['95'] < b['marks']['95'] ? -1 : 0
                    );
            case "asc":
                default:
                    return arr.sort((a, b) =>
                        a['marks']['95'] < b['marks']['95'] ? 1 : a['marks']['95'] > b['marks']['95'] ? -1 : 0
                    );
        }
    };

    const handleSortTable = () => {
        setRowData(sortTable(data, order));
        setOrder(order === "asc" ? "desc" : "asc");
    };
        
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return( 
        <MarksContainer>
            <MarksGroup>
            <Paper style={{padding: '20px', background: '#101221' }}>
                <MarksTitle>
                    Marks of Excellence
                </MarksTitle>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{ background: '#101221' }}>
                        <TableRow>
                            <CustomMarksCell sx={{ color: 'white', fontSize: '18px', fontFamily: 'Nunito'}}>Tank ID</CustomMarksCell>
                            <CustomMarksCell sx={{ color: 'white', fontSize: '18px', fontFamily: 'Nunito'}}>50</CustomMarksCell>
                            <CustomMarksCell sx={{ color: 'white', fontSize: '18px', fontFamily: 'Nunito'}}>60</CustomMarksCell>
                            <CustomMarksCell sx={{ color: 'white', fontSize: '18px', fontFamily: 'Nunito'}}>85</CustomMarksCell>
                            <CustomMarksCell sx={{ color: 'white', fontSize: '18px', fontFamily: 'Nunito'}} onClick={handleSortTable}>
                                95
                                <TableSortLabel style={{ backgroundColor: 'white'}} active={true} direction={order}>
                                </TableSortLabel>
                            </CustomMarksCell>
                            <CustomMarksCell sx={{ color: 'white', fontSize: '18px', fontFamily: 'Nunito'}}>100</CustomMarksCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{background: '#101221'}}>
                        {data.slice(page * tanksPerPage, page * tanksPerPage + tanksPerPage).map((row) => (
                            <TableRow key={row['id']}>
                                <CustomMarksCell sx={{ color: 'white', fontSize: '14px', fontFamily: 'Nunito'}}>
                                    {row['id']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={{ color: 'white', fontSize: '14px', fontFamily: 'Nunito'}}>{row['marks']['50']}</CustomMarksCell>
                                <CustomMarksCell sx={{ color: 'white', fontSize: '14px', fontFamily: 'Nunito'}}>{row['marks']['65']}</CustomMarksCell>
                                <CustomMarksCell sx={{ color: 'white', fontSize: '14px', fontFamily: 'Nunito'}}>{row['marks']['85']}</CustomMarksCell>
                                <CustomMarksCell sx={{ color: 'white', fontSize: '14px', fontFamily: 'Nunito'}}>{row['marks']['95']}</CustomMarksCell>
                                <CustomMarksCell sx={{ color: 'white', fontSize: '14px', fontFamily: 'Nunito'}}>{row['marks']['100']}</CustomMarksCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            <TablePagination 
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={data.length}
                rowsPerPage={tanksPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleTanksPerPage}
                style={{ background: "#101221", width: '50vw', color: 'white', fontFamily: 'Nunito' }}
            />
            </Paper>
            </MarksGroup>
        </MarksContainer>
    );
}

export default MarksOfExcellence;