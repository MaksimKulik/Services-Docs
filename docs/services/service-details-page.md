# Service details page

## Overview

<div class="tw-lead">
  The <b>Service details</b> page provides a consolidated view of a single service configuration.
  It allows users to review base service information, current status, and navigate to related configurations such
  as balances and fee profiles.
</div>

<img src="/assets/images/service details.jpg" alt="Service Details Page">

<hr class="tw-sep" />

## Where to find

<div class="tw-card tw-card--note">
  <div class="tw-card__title">Navigation</div>
  <div class="tw-path">Services → Services list → Service name</div>
</div>

Selecting a service name opens the Service details page.

<hr class="tw-sep" />

## Base information

The upper section of the page displays base service information.

### Base information fields

<div class="tw-table-wrap">
  <table class="tw-table">
    <thead>
      <tr>
        <th class="tw-col-220">Field</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>Name</code></td>
        <td>Service name.</td>
      </tr>
      <tr>
        <td><code>Status</code></td>
        <td>Current service status (<b>Active</b> or <b>Inactive</b>).</td>
      </tr>
      <tr>
        <td><code>Provider</code></td>
        <td>Payment service provider.</td>
      </tr>
      <tr>
        <td><code>Provider ID</code></td>
        <td>Provider-specific identifier.</td>
      </tr>
      <tr>
        <td><code>Type</code></td>
        <td>Service type (<b>Internal</b> or <b>External</b>).</td>
      </tr>
      <tr>
        <td><code>ID</code></td>
        <td>Unique service identifier.</td>
      </tr>
      <tr>
        <td><code>Created</code></td>
        <td>Date and time when the service was created.</td>
      </tr>
      <tr>
        <td><code>Updated</code></td>
        <td>Date and time of the last update.</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="tw-muted">
  These fields provide a read-only overview of the service configuration.
</p>

<hr class="tw-sep" />

## Available actions

The Service details page provides quick access to related configurations.

<div class="tw-linkcards">
  <a class="tw-linkcard" href="../balances/">
    <div class="tw-linkcard__title">Balances</div>
    <div class="tw-linkcard__text">
      Select <b>Balances</b> to view and manage balances associated with the service.
    </div>
  </a>

  <a class="tw-linkcard" href="../fee-profiles/">
    <div class="tw-linkcard__title">Fee profiles</div>
    <div class="tw-linkcard__text">
      Select <b>Fee profiles</b> to view or configure fee rules applied to transactions processed through the service.
    </div>
  </a>

  <a class="tw-linkcard" href="../create-edit-service/">
    <div class="tw-linkcard__title">Edit service</div>
    <div class="tw-linkcard__text">
      Select <b>Edit</b> to update service configuration, credentials, or status.
    </div>
  </a>
</div>


<hr class="tw-sep" />

## Service status visibility

The service status displayed on this page reflects the current operational state of the service.

<ul class="tw-list">
  <li><b>Active</b> services can be used in operations.</li>
  <li><b>Inactive</b> services are disabled but remain available for review and configuration.</li>
</ul>

<hr class="tw-sep" />

## Notes and considerations

<ul class="tw-list">
  <li>The Service details page is read-only except for navigation actions.</li>
  <li>Changes to service configuration are performed through the edit workflow.</li>
  <li>Updates to a service may affect related balances and fee profiles.</li>
</ul>

<hr class="tw-sep" />

## Next steps

From this page, you can:

<ul class="tw-list">
  <li>
    manage balances in the
    <a href="/services/balances/"><b>Balances</b></a>
    section
  </li>
  <li>
    configure fees in the
    <a href="/services/fee-profiles/"><b>Fee profiles</b></a>
    section
  </li>
  <li>
    update service configuration using
    <a href="/services/create-edit-service/"><b>Edit</b></a>
  </li>
</ul>



