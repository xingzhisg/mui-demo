import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { Container } from '@mui/material';

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();
  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function DemoNavBar() {

  const routeMatch = useRouteMatch(['/projects', '/api', '/member', '/']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='transparent' sx={{backdropFilter:"blur(20px)"}}>
        <Container maxWidth={"xl"}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Demo
          </Typography>

          <Tabs value={currentTab}>
            <Tab label="Home" value="/" to="/" component={Link} />
            <Tab label="Projects" value="/projects" to="/projects" component={Link} />
            <Tab label="API" value="/api" to="/api" component={Link} />
            <Tab label="Member" value="/member" to="/member" component={Link} />
          </Tabs>
        </Toolbar></Container>
      </AppBar>
    </Box>
  );
}