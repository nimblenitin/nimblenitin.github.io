'use client';

import { useEffect, useRef } from 'react';
import { Network } from 'vis-network/peer';
import { DataSet } from 'vis-data/peer';

function Cluster({ id, nodeCount, style }: { id: string; nodeCount: number; style?: React.CSSProperties }) {
    const netNodes = useRef(new DataSet<{ id: number }>([]));
    const netEdges = useRef(new DataSet<{ id: number; from: number; to: number }>([]));
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const nodes = netNodes.current;
        const edges = netEdges.current;

        for (let i = 0; i < nodeCount; i++) {
            nodes.add({ id: i });
        }

        let cid = 0;
        for (let i = 0; i < nodeCount; i++) {
            const r1 = Math.floor(Math.random() * nodeCount);
            const r2 = Math.floor(Math.random() * nodeCount);
            if (r1 !== r2) {
                edges.add({ id: cid, from: r1, to: r2 });
                cid++;
            }
        }

        const data = { nodes, edges };
        const options = {
            edges: { chosen: false, color: { color: '#475569', highlight: '#475569' }, width: 1.5 },
            nodes: { chosen: false, color: { background: '#334155', border: '#1e293b' }, size: 6, borderWidth: 2 },
            physics: {
                enabled: true,
                stabilization: { iterations: 50 },
                repulsion: {
                    centralGravity: 0.2,
                    springLength: 200,
                    springConstant: 0.5,
                    nodeDistance: 80,
                    damping: 0.09
                },
            },
            interaction: { dragNodes: false, dragView: false, zoomView: false, hover: false },
        };

        const container = document.getElementById(id);
        if (container) {
            container.setAttribute("style", "width:100%;height:100%");
            const network = new Network(container, data, options);
            network.once("stabilizationIterationsDone", () => {
                network.setOptions({ physics: { enabled: false } });
            });
        }
    }, [nodeCount, id]);

    return (
        <div className="absolute pointer-events-none" style={style}>
            <div id={id} className="w-full h-full" />
        </div>
    );
}

export default function GraphBackground() {
    return (
        <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
            <Cluster id="c1" nodeCount={6} style={{ top: '10%', left: '5%', width: '300px', height: '300px' }} />
            <Cluster id="c2" nodeCount={5} style={{ top: '30%', right: '5%', width: '250px', height: '250px' }} />
            <Cluster id="c3" nodeCount={5} style={{ top: '55%', left: '10%', width: '280px', height: '280px' }} />
            <Cluster id="c4" nodeCount={4} style={{ top: '70%', right: '8%', width: '250px', height: '250px' }} />
        </div>
    );
}
