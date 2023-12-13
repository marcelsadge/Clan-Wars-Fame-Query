import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ForceGraph2D from 'react-force-graph-2d';
import SpriteText from 'three-spritetext';
import { ClipLoader } from 'react-spinners';

import { getClanMapData, getClanId } from '../../../api/apiCalls';

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
`

function ClanMap() {
    const isMounted = useRef(false);
    const [loading, setLoading] = useState(true);
    const [clanId, setClanId] = useState('');
    const [adjMap, setAdjMap] = useState(null);
    const [uniqueClans, setUniqueClans] = useState([]);

    const location = useLocation();

    const getData = async () => {
        const id = await getClanId(location.state.clanName.toUpperCase());
        if (isMounted.current) {
            setClanId(id);
            const results = await getClanMapData(id)
                .then((result) => {
                    return result;
                });
            setAdjMap(results[0]);
            setUniqueClans(results[1]);
            setLoading(false);
        }
    }

    const generateClanGraph = () => {
        let edgeArray = [];
        const edges = Array.from(adjMap.keys());
        for (const element of edges) {
            let temp = {
                source: element[0],
                target: element[1],
                weight: adjMap.get(element),
            };
            edgeArray.push(temp);
        }
        const uniqueNodes = uniqueClans.map((clan) => ({
            id: clan.clan_id,
            name: clan.tag,
            color: clan.color,
            img: `https://na.wargaming.net/clans/media/clans/emblems/cl_476/${clan.clan_id}/emblem_256x256.png`,
        }));
        return {
            nodes: uniqueNodes,
            links: edgeArray
        };
    };

    useEffect(() => {
        isMounted.current = true;
        getData();
        return () => {
            isMounted.current = false;
            setAdjMap('');
            setClanId('');
            setLoading(false);
            setUniqueClans([]);
        };
    }, []);
    
    return (
        <div style={{ position: 'fixed' }}>
            {loading ? 
                <Loader>
                    <ClipLoader 
                    size={150}
                    color={'white'}
                    loading={loading}
                    /> 
                </Loader>
                : 
            <ForceGraph2D
                width={window.innerWidth}
                height={window.innerHeight}
                graphData={generateClanGraph()}
                nodeThreeObject={(node) => {
                    const sprite = new SpriteText(node.name, 10);
                    sprite.color = node.color;
                    sprite.padding = [8, 4];
                    sprite.textHeight = 5;
                    sprite.borderRadius = 10;
                    return sprite;
                }}
            />
            }
        </div>
    );
}

export default ClanMap;