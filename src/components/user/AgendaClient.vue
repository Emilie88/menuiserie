<template>
  <DxScheduler
    time-zone="America/Los_Angeles"
    :data-source="dataSource"
    :current-date="currentDate"
    :views="views"
    :height="600"
    :start-day-hour="9"
    current-view="month"
  />
</template>
<script>
import DxScheduler from "devextreme-vue/scheduler";

export default {
  components: {
    DxScheduler,
  },
  data() {
    return {
      views: ["day", "week", "month"],
      currentDate: new Date(),
      dataSource: [],
    };
  },
  mounted() {
    console.log(this.dataSource);
  },
  methods: {
    async addEvent() {
      try {
        const token = localStorage.getItem("token");
        await this.$http.post(
          "https://127.0.0.1:8000/api/add-scheduler",
          this.dataSource,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        this.dialogDate = false;

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your event has been added",
          type: "success",
        });
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
        this.$refs.form.reset();
      }
    },
  },
};
</script>
<style>
.dx-scheduler-work-space {
  background-color: #1e1e1e !important;
}
.dx-scheduler-header {
  background-color: #9e9d24 !important;
  border: none !important;
  color: #fff !important;
}
.dx-scheduler-view-switcher.dx-tabs .dx-tab.dx-tab-selected,
.dx-scheduler-view-switcher.dx-tabs .dx-tab.dx-tab-selected::before {
  background-color: #9e9d24 !important;
  color: #fff !important;
}

.dx-scheduler-all-day-table-cell.dx-state-focused,
.dx-scheduler-date-table-cell.dx-state-focused,
.dx-state-hover {
  background-color: #9e9d24 !important;
  color: #fff !important;
}
.dx-scheduler-header-panel-cell {
  color: #959595 !important;
}
.dx-button-content {
  background-color: #9e9d24 !important;
}
.dx-popup-wrapper > .dx-overlay-content {
  background-color: #1e1e1e !important;
}
.dx-field-item-help-text,
.dx-field-item-label-text {
  color: #fff !important;
}
.dx-layout-manager .dx-label-h-align.dx-flex-layout {
  display: none !important;
}
.dx-scheduler-appointment {
  background-color: #9e9d24 !important;
  /* background-color: #828245 !important; */
}
</style>
