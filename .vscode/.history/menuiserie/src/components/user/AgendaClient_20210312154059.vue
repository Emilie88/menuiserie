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

import { data } from "../../datas";

export default {
  components: {
    DxScheduler,
  },
  data() {
    return {
      views: ["day", "week", "workWeek", "month"],
      currentDate: new Date(),
      dataSource: data,
    };
  },
};
</script>
<style>
.dx-scheduler-work-space {
  background-color: #1e1e1e;
}
.dx-scheduler-header {
  background-color: #9e9d24;
}
</style>
