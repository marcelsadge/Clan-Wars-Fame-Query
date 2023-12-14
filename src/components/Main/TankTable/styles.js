import styled from 'styled-components';

const TableContainer = styled.div`
    font-family: 'Secular One' !important;
    overflow-x: auto;
    overflow-y: auto;
`;

const TankTable = styled.table`
    white-space: nowrap;
    position: sticky;
    border-spacing: 0;
    width: 100%;
    font-size: 0.75rem;
    font-family: 'Secular One' !important;
    backdrop-filter: blur(7px);
`;

const PlayerTankHeaders = {
    tank: "Tank",
    nation: "Nation",
    tier: "Tier",
    class: "Class",
    battles: "Battles",
    wn8: "WN8",
    winrate: "WR",
    dpg: "DPG",
    kills: "kills",
    exp: "Exp",
    spots: "Spots",
    survival: "Survival",
};

export { TableContainer, TankTable, PlayerTankHeaders };