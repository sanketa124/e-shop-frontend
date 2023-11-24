import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MUI
      </Link>{" "}
      2021
      {"."}
    </Typography>
  );
};
