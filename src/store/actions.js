const types = {
  success: { color: "success", icon: "check_circle_outline" },
  info: { color: "info", icon: "info" },
  warning: { color: "warning", icon: "warning" },
  error: { color: "error", icon: "mdi-error" },
};

export default {
  show({ commit }, { text, type, details = null }) {
    commit("setText", text);
    commit("setColor", types[`${type}`].color);
    commit("setIcon", types[`${type}`].icon);
    commit("setDetails", details);
    commit("setSnackbar", true);
  },
};
