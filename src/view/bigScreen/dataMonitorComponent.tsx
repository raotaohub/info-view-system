import React, { CSSProperties, useEffect, useState } from "react";
import { FullscreenOutlined, FullscreenExitOutlined} from '@ant-design/icons';
import styled from "styled-components";

let timeout: any = undefined;

export default function DataMonitorComponent() {
    const [isFull, setIsFull] = useState(false);

    const [style, setStyle] = useState<CSSProperties>({
        position: 'relative'
    })

    const [isShowNav, setShowNav] = useState(true);

    const fullScreen = () => {
        setIsFull(!isFull);
        setStyle(!isFull ? {
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            background: 'red',
            zIndex: 10000,
            top: 0,
            left: 0
        }: {
            position: 'relative'
        })
    }
    
    useEffect(() => {
        timeout = setTimeout(() => {
            setShowNav(false);
        }, 5000)
    }, [])
    

    useEffect(() => {
        console.log(timeout);
    }, [isShowNav])
    
    const mouseMove = (e: any) => {
        if (e) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setShowNav(false);
            }, 5000)
            setShowNav(true);
        }
    }


    return <div style={style} onMouseMove={mouseMove}>
            <SettingContainer style={{opacity: isShowNav ? 1:0}} onClick={fullScreen}>
                <SettingItem>
                    {!isFull ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
                </SettingItem>
            </SettingContainer>

            <div style={{height: 200}}></div>
        </div>
}

const SettingContainer = styled.div`
    position: absolute;
    transition: opacity .2s ease-in;
    top: 20px;
    right: 20px;
    width: 200px;
    height: 40px;
    padding: 0 10px;
    display: flex;
    border-radius: 3px;
    color: #fff;
    align-items: center;
    background: rgba(0, 0, 0, .7);
`;

const SettingItem = styled.div`
    background: #d1d1d1;
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 2px;
    font-size: 24px;
    align-items: center;
    justify-content: center;
`;




