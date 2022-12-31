import { motion } from "framer-motion";
import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
  display: flex;
  grid-gap: 80px;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 15px;
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  div {
    flex-shrink: 0;
    width: 100%;
    max-width: 300px;
  }
`;
