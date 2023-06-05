import {
  useAppInsightsContext,
  useTrackEvent,
} from "@microsoft/applicationinsights-react-js";
import { useEffect, useState } from "react";
import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { Box, Button, Grid } from "@mui/material";

export function TriggerReports() {
  useEffect(() => {
    document.title = "Appliction Insights Demo Page"; // Set the desired title
  }, []);

  const appInsights = useAppInsightsContext();
  const [testNumber, setTestNumber] = useState(0);
  const trackEvent = useTrackEvent(appInsights, "TestNumber", testNumber);

  useEffect(() => {
    trackEvent(testNumber);
  }, [testNumber, trackEvent]);

  function onClick() {
    let curTestNumber = testNumber;
    setTestNumber(curTestNumber + 1);
  }

  function flush() {
    appInsights.flush();
  }

  function trackException() {
    appInsights.trackException({
      error: new Error("A Simulated Error"),
      severityLevel: SeverityLevel.Error,
    });
  }

  function trackTrace() {
    appInsights.trackTrace({
      message: "A Simulated Trace",
      severityLevel: SeverityLevel.Information,
    });
  }

  function trackEvents() {
    appInsights.trackEvent({ name: "A Simulated Event" });
  }

  function throwError() {
    throw new Error("A Simulated Error");
  }

  function ajaxRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://httpbin.org/status/200");
    xhr.send();
  }

  function fetchRequest() {
    fetch("https://httpbin.org/status/200");
  }

  return (
    <>
      <h1>
        Test <code>Track Application Actions</code>
      </h1>
      <div>
        <p>
          Current Number: {testNumber} (This will generate an event with custom
          message of {testNumber})
        </p>
        <Button variant="contained" onClick={onClick}>
          Add Number
        </Button>
        (This will create an event)
      </div>

      <br />
      <div>
        <div>Flush</div>
        <Button variant="contained" onClick={flush}>
          Flush
        </Button>
      </div>
      <br />
      <div>
        <div>Test TrackEvent</div>
        <Button variant="contained" onClick={trackEvents}>
          Track Event
        </Button>
      </div>
      <br />
      <div>
        <div>Test TrackTrace</div>
        <Button variant="contained" onClick={trackTrace}>
          Track Trace
        </Button>
      </div>
      <br />
      <div>
        <div>Test Track AjaxRequest</div>
        <Button variant="contained" onClick={ajaxRequest}>
          Autocollect a Dependency (XMLHttpRequest)
        </Button>
      </div>
      <br />
      <div>
        <div>Test Track FetchRequest</div>
        <Button variant="contained" onClick={fetchRequest}>
          Autocollect a dependency (Fetch)
        </Button>
      </div>
      <br />
      <div>
        <div>Test trackException</div>
        <Button variant="contained" onClick={trackException}>
          Track Exception
        </Button>
      </div>
      <br />
      <div>
        <div>Test track Throw Error</div>
        <Button variant="contained" onClick={throwError}>
          Autocollect an Error
        </Button>
      </div>
      <br />
    </>
  );
}
