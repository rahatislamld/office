import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ReportIcon from "@material-ui/icons/Report";
import SettingsIcon from "@material-ui/icons/Settings";

function AdminSidebar() {
  return (
    <div style={{ width: "250px", backgroundColor: "#f5f5f5" }}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ReportIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
}

export default AdminSidebar;
