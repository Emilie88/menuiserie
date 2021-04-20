import { set, toggle } from "./methods";

export default {
  setSnackbar: set("snackbar"),
  setText: set("text"),
  setColor: set("color"),
  setIcon: set("icon"),
  setDetails: set("details"),
  setLoading: set("loading"),
  setDrawer: set("drawer"),
  toggleDrawer: toggle("drawer"),
};
