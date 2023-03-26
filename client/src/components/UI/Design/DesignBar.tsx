import React from "react";
import styled from "styled-components";
import {
  FormatAlignJustify,
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import DesignBarButton from "./DesignBarButton";
import FontSelectButton from "./FontSelectButton";

const Bar = styled.div`
  align-items: center;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  display: flex;
  height: 2rem;
  justify-content: center;
  padding: 1rem;
  width: 90%;
`;

export default function DesignBar() {
  return (
    <Bar>
      <DesignBarButton>
        <FormatAlignJustify fontSize="inherit" />
      </DesignBarButton>
      <DesignBarButton>
        <FormatAlignLeft fontSize="inherit" />
      </DesignBarButton>
      <DesignBarButton>
        <FormatAlignCenter fontSize="inherit" />
      </DesignBarButton>
      <DesignBarButton>
        <FormatAlignRight fontSize="inherit" />
      </DesignBarButton>
      <DesignBarButton>
        <FormatBold fontSize="inherit" />
      </DesignBarButton>
      <DesignBarButton>
        <FormatItalic fontSize="inherit" />
      </DesignBarButton>
      <DesignBarButton>
        <FormatUnderlined fontSize="inherit" />
      </DesignBarButton>
      <FontSelectButton />
    </Bar>
  );
}
