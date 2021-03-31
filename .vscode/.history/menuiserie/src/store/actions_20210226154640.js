const types = {
  success: { color: "success", icon: "mdi-check-circle-outline" },
  info: { color: "info", icon: "mdi-info" },
  warning: { color: "warning", icon: "mdi-warning" },
  error: { color: "error", icon: "mdi-alert-outline" },
};

export default {
  show({ commit }, { text, type, details = null }) {
    commit("setText", text);
    commit("setColor", types[`${type}`]);
    commit("setIcon", types[`${type}`].icon);
    commit("setDetails", details);
    commit("setSnackbar", true);
  },
};
