import styled from "styled-components";

export const ValidatedProgressContainer = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ValidatedProgressWrapper = styled.div`
    width: 444px;
    height: 360px;
    border-radius: 12px;
    background: #ffffff;
    padding: 41px 88px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ValidatedProgressHeader = styled.div`
    font-size: 40px;
    margin-bottom: 11px;
    color: #000000;
    text-align: center;
    line-height: 48px;
`

export const ValidatedProgressSvg = styled.svg`
    height: 212px;
    width: 196px;

`