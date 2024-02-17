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
import { exportTankData } from '../../../api/apicalls';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const MarksHeaderCellStyle = {
    color: 'white', 
    fontSize: '18px', 
    fontFamily: 'Nunito'
};

const MarksCellStyle = {
    color: 'white', 
    fontSize: '14px', 
    fontFamily: 'Nunito'
};

function MarksOfExcellence() {
    const classes = useStyles();

    const cleanMarks = async () => {
        for (const val in marks['data']) {
            const tankJson = await exportTankData(marks['data'][val]['id']);
            console.log(marks['data'][val]['tank']);
            marks['data'][val]['tank'] = tankJson['name'];
        }
    };

    const defaultSort = marks['data'].sort((a, b) => {
        return(
            a['marks']['95'] > b['marks']['95'] ? 1 : 0
    )});

    const [rowData, setRowData] = useState(defaultSort);
    const [order, setOrder] = useState('desc');
    const [page, setPage] = useState(0);
    const [tanksPerPage, setTanksPerPage] = useState(10);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleTanksPerPage = (event) => {
        setTanksPerPage(parseInt(event.target.value, 10));
    };

    const sortMarks = (arr, orderBy, value) => {
        switch(orderBy) {
            case "desc":
                return arr.sort((a, b) =>
                        a['marks'][value] > b['marks'][value] ? 1 : a['marks'][value] < b['marks'][value] ? -1 : 0
                    );
            case "asc":
                default:
                    return arr.sort((a, b) =>
                        a['marks'][value] < b['marks'][value] ? 1 : a['marks'][value] > b['marks'][value] ? -1 : 0
                    );
        }
    };

    const handleSortTable = (value) => {
        setRowData(sortMarks(defaultSort, order, value.toString()));
        setOrder(order === "asc" ? "desc" : "asc");
    };
        
    useEffect(() => {
        window.scrollTo(0, 0);
        //cleanMarks();
    }, []);

    return( 
        <MarksContainer>
            <MarksGroup>
            <Paper style={{padding: '20px', background: '#626ed4' }}>
                <MarksTitle>
                    Marks of Excellence
                </MarksTitle>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{ background: '#626ed4' }}>
                        <TableRow>
                            <CustomMarksCell sx={MarksHeaderCellStyle}>
                                Tank
                            </CustomMarksCell>
                            <CustomMarksCell sx={MarksHeaderCellStyle} onClick={() => handleSortTable(65)}>
                                65
                            </CustomMarksCell>
                            <CustomMarksCell sx={MarksHeaderCellStyle} onClick={() => handleSortTable(85)}>
                                85
                            </CustomMarksCell>
                            <CustomMarksCell sx={MarksHeaderCellStyle} onClick={() => handleSortTable(95)}>
                                95
                                <TableSortLabel style={{ backgroundColor: 'white'}} active={true} direction={order} />
                            </CustomMarksCell>
                            <CustomMarksCell sx={MarksHeaderCellStyle} onClick={() => handleSortTable(100)}>
                                100
                            </CustomMarksCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{background: '#626ed4'}}>
                        {rowData.slice(page * tanksPerPage, page * tanksPerPage + tanksPerPage).map((row) => (
                            <TableRow key={row['id']}>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['tank']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['marks']['65']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['marks']['85']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['marks']['95']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['marks']['100']}
                                </CustomMarksCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            <TablePagination 
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={rowData.length}
                rowsPerPage={tanksPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleTanksPerPage}
                style={{ background: "#626ed4", width: '50vw', color: 'white', fontFamily: 'Rubik, sans-serif' }}
            />
            </Paper>
            </MarksGroup>
        </MarksContainer>
    );
}

export default MarksOfExcellence;