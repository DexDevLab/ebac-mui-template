import { Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export default function Copyright({page, ...props}) {

    const STATUS = {
      HOVERED: "hovered",
      NORMAL: "normal",
    };
  
    const [status, setStatus] = React.useState(STATUS.NORMAL);
  
    const onMouseEnter = () => {
      setStatus(STATUS.HOVERED);
    };
  
    const onMouseLeave = () => {
      setStatus(STATUS.NORMAL);
    };
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {"Copyright © "}
        <Link
          color="inherit"
          href={page || '#'}
        //   href="https://github.com/DexDevLab"
        >
          Daniel Almeida
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }