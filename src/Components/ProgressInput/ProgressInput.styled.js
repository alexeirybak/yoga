import styled from "styled-components";

export const ProgressContainer = styled.div`
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

export const ProgressWrapper = styled.div`
    width: 444px;
    max-height: 554px;
    border-radius: 12px;
    background: #fff;
    padding: 36px 41px 44px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`

export const ProgressCloseButton = styled.svg`
    width: 20px;
    height: 23px;
    position: absolute;
    top: 15px;
    left: 410px;
    cursor: pointer;
`

export const ProgressHeader = styled.div`
    font-size: 32px;
    color: #000000;
`

export const ProgressList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 12px;
    // width: 365px;
    padding: 36px 15px 44px;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    -ms-overflow-style: none;  /* IE и Edge */
    scrollbar-width: none;  /* Firefox */
    
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.15);
        border-radius: 10px;   
    }
`

export const ProgressItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 24px;
    width: 361px;
    font-size: 18px;
    letter-spacing: -0.05px;
    text-align: left; 
    cursor: pointer;
    position: relative;
    color: #000;
`

export const ProgressItemInput = styled.input`
    font-family: "StratosSkyeng", sans-serif;
    color: #000;
    font-size: 18px; 
    line-height: 24px;
    letter-spacing: -0.05px; 
    margin-top: 20px;
    padding-bottom: 8px;
    width: 361px;
    border: none;
    height: 24px;
    border-bottom: 1px solid #D0CECE;
    outline: none;

    &::placeholder {
        color: #d0cece;
    }

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
    }
`

export const ProgressInputButton = styled.button`
    margin-top: 10px;
    font-family: "StratosSkyeng", sans-serif;
    width: 278px;
    min-height: 52px;
    background-color: #580EA2;
    color: #fff; 
    border-radius: 46px;
    font-size: 18px; 
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.05px;
    outline: none;
    border: none;
    flex-shrink: inherit; 
`