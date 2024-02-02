import * as rudderanalytics from "rudder-sdk-js";

rudderanalytics.ready(() => {
  console.log("rudder stack is alive!");
});

rudderanalytics.load(
  process.env.RUDDERSTACK_WRITE_KEY ?? "",
  process.env.RUDDERSTACK_DATA_PLANE_URL ?? ""
);

export { rudderanalytics };
