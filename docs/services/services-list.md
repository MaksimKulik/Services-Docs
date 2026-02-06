<h1>Services list</h1>

<div class="tw-lead">
  The <b>Services list</b> page displays all configured services and provides access to key service management actions.
  From this page, users can review service status, identify provider connections, and navigate to detailed service configuration.
</div>

<img src="/assets/images/services.png" alt="Service diagram">

## Where to find

<div class="tw-card tw-card--note">
  <div class="tw-card__title">Navigation</div>
  <div class="tw-path">Left Sidebar → Services</div>
</div>

<hr class="tw-sep" />

## Services table 
<p class="tw-muted">The Services list is presented as a table containing all existing services.</p>

<img src="/assets/images/services table.jpg" alt="Services Table">

### Table columns

<div class="tw-table-wrap">
  <table class="tw-table">
    <thead>
      <tr>
        <th style="width: 220px;">Column</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>ID</code></td>
        <td>Unique identifier of the service</td>
      </tr>
      <tr>
        <td><code>Name</code></td>
        <td>Service name</td>
      </tr>
      <tr>
        <td><code>Status</code></td>
        <td>Current service status (Active or Inactive)</td>
      </tr>
      <tr>
        <td><code>SP</code></td>
        <td>Service provider name</td>
      </tr>
      <tr>
        <td><code>SP ID</code></td>
        <td>Provider-specific service identifier</td>
      </tr>
      <tr>
        <td><code>Type</code></td>
        <td>Service type (Internal or External)</td>
      </tr>
      <tr>
        <td><code>Created</code></td>
        <td>Date and time when the service was created</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="tw-muted">The table allows quick comparison of service configurations and operational states.</p>

<hr class="tw-sep" />

## Available actions

<div class="tw-grid">
  <div class="tw-card">
    <div class="tw-card__title">Create a new service</div>
    <p>
      To create a new service, select <b>New service</b>.
      This opens a configuration panel where provider details, credentials, and operational parameters can be defined.
    </p>
  </div>

  <div class="tw-card">
    <div class="tw-card__title">View service details</div>
    <p>
      Selecting a service name opens the <b>Service details</b> page, where base information and related configurations can be reviewed.
    </p>
  </div>
</div>

### Row actions
<p>Each service row provides additional actions via the row menu:</p>

<ul class="tw-list">
  <li><b>Balances</b> - opens the balances associated with the selected service</li>
  <li><b>Edit</b> - opens the service configuration panel for editing</li>
</ul>

<p class="tw-muted">Available actions depend on the current service configuration and status.</p>

<hr class="tw-sep" />

## Service status behavior
<p>Service status determines whether the service is available for use:</p>

<ul class="tw-list">
  <li><b>Active</b> - the service can be used in operations</li>
  <li><b>Inactive</b> - the service is disabled and not used for processing</li>
</ul>

<div class="tw-callout">
  Inactive services remain visible in the list for reference and configuration purposes.
</div>

<hr class="tw-sep" />

## Notes and considerations
<ul class="tw-list">
  <li>Only properly configured services can be activated.</li>
  <li>Provider credentials must be valid for the service to function correctly.</li>
  <li>Changes made to a service may affect related balances and fee profiles.</li>
</ul>

<hr class="tw-sep" />

## Next steps
<ul class="tw-list">
  <li>To configure a new provider connection, continue to 
  <a href="/services/create-edit-service/"><b>Create and edit a service</b></a>.
  </li>
  <li>To review existing configuration, open the 
  <a href="/services/service-details-page/"><b>Service details</b></a>
  </li>
</ul>
