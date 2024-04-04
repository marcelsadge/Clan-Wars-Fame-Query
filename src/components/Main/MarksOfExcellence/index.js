import React, { useEffect, useState } from 'react';

import { ClipLoader } from 'react-spinners';
import { 
    Table, 
    TableBody,
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
    CustomMarksCell,
    Loader
} from './styles';

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
    const [loading, setLoading] = useState(false);
    const [rowData, setRowData] = useState([]);
    const [order, setOrder] = useState('desc');
    const [page, setPage] = useState(0);
    const [tanksPerPage, setTanksPerPage] = useState(10);

    const classes = useStyles();

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
                        a[value] > b[value] ? 1 : a[value] < b[value] ? -1 : 0
                    );
            case "asc":
                default:
                    return arr.sort((a, b) =>
                        a[value] < b[value] ? 1 : a[value] > b[value] ? -1 : 0
                    );
        }
    };

    const handleSortTable = (value) => {
        setRowData(sortMarks(rowData, order, value.toString()));
        setOrder(order === "asc" ? "desc" : "asc");
    };
        
    useEffect(() => {
        async function retreiveMarks() {
            setLoading(true);

            const date = new Date();

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            
            try {
                await fetch(`https://project-fame-backend.onrender.com/get/moe?date=${day + "/" + month + "/" + year}`, {
                method: 'GET'})
                .then((response) => response.json())
                .then((result) => {
                    console.log(result[0].data);
                    setRowData(result[0].data.sort((a, b) => {
                        return(
                            a['95'] > b['95'] ? 1 : 0
                    )}));
                });

            } catch (e) {

            } finally {
                setLoading(false);
            }
        }

        window.scrollTo(0, 0);
        //cleanMarks();
        retreiveMarks();
    }, []);

    //onClick={() => handleSortTable(100)}

    return( 
        <>
        {loading ? 
            <Loader>
                <ClipLoader
                    size={150}
                    color={'white'}
                    loading={loading}
                />
            </Loader>
        :
        <MarksContainer>
            <MarksGroup>
            <Paper style={{padding: '20px', background: '#2a3142' }}>
                <MarksTitle>
                    Marks of Excellence
                </MarksTitle>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{ background: '#2a3142' }}>
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
                    <TableBody style={{background: '#2a3142'}}>
                        {rowData.slice(page * tanksPerPage, page * tanksPerPage + tanksPerPage).map((row) => (
                            <TableRow key={row['id']}>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    <img src={row['icon']} />
                                    {row['name']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['65']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['85']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['95']}
                                </CustomMarksCell>
                                <CustomMarksCell sx={MarksCellStyle}>
                                    {row['100']}
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
                style={{ background: "#2a3142", width: '50vw', color: 'white', fontFamily: 'Rubik, sans-serif' }}
            />
            </Paper>
            </MarksGroup>
        </MarksContainer>
                        }
        </>
    );
}

export default MarksOfExcellence;