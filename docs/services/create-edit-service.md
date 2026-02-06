# Create and edit a service

<div class="tw-lead">
  This page describes how to create a new service and edit an existing one.
  A service represents a configured integration between the platform and a selected provider and defines
  how transactions are processed.
</div>

<p class="tw-muted">
  Service configuration includes general settings, provider selection, and provider-specific credentials.
</p>

<hr class="tw-sep" />

## Where to find

<div class="tw-card tw-card--note">
  <div class="tw-card__title">Navigation</div>
  <div class="tw-path">Services → New service</div>
  <div class="tw-path">Services → Services list → Row actions → Edit</div>
</div>

<hr class="tw-sep" />

## Create a service

To create a new service, open the **Create service** form from the Services list.

<img src="/assets/images/create service.jpg" alt="Create service">

### Basic information

<img src="/assets/images/create service_2.jpg" alt="Сreate service fields">

<p class="tw-muted">When creating a service, the following basic fields are required:</p>

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
        <td>Service name used for identification.</td>
      </tr>
      <tr>
        <td><code>Provider</code></td>
        <td>Selected service provider.</td>
      </tr>
      <tr>
        <td><code>Type</code></td>
        <td>Service type (for example, external or internal).</td>
      </tr>
      <tr>
        <td><code>Testing</code></td>
        <td>Indicates whether the service is used in a test environment.</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="tw-muted">
  After selecting a provider, additional provider-specific fields may become available.
</p>

<hr class="tw-sep" />

## Provider credentials

Provider credentials are required to authenticate requests sent to the provider system.

Credential fields are **dynamic** and depend on the selected provider. Typical credential types include:

<ul class="tw-list">
  <li>API keys</li>
  <li>merchant identifiers</li>
  <li>access tokens</li>
</ul>

<p class="tw-muted">
  Credential values are stored securely and are not displayed after saving.
</p>

<hr class="tw-sep" />

## Save behavior

If required fields are missing or invalid:

<ul class="tw-list">
  <li>the system highlights affected fields</li>
  <li>the service cannot be saved</li>
</ul>

After successful creation:

<ul class="tw-list">
  <li>the service is saved in <b>Inactive</b> status</li>
  <li>the service appears in the Services list</li>
</ul>

<hr class="tw-sep" />

## Edit a service

Existing services can be modified using the **Edit** action.

<img src="/assets/images/edit service.jpg" alt="Edit service">

The **Update service** form allows you to:

<ul class="tw-list">
  <li>update general service settings</li>
  <li>modify provider credentials</li>
  <li>enable or disable testing mode</li>
</ul>

<p class="tw-muted">
  Some fields may be restricted depending on provider or service state.
</p>

<hr class="tw-sep" />

## Service status

A service can be switched between statuses:

<ul class="tw-list">
  <li><b>Inactive</b> - the service is configured but not used</li>
  <li><b>Active</b> - the service is available for operations</li>
</ul>

A service can only be activated if:

<ul class="tw-list">
  <li>all required fields are completed</li>
  <li>provider credentials are valid</li>
</ul>

<hr class="tw-sep" />

## Credential handling and security

Credential values:

<ul class="tw-list">
  <li>are stored in a secure storage</li>
  <li>are not exposed in logs or responses</li>
  <li>are not returned by the API after creation</li>
</ul>

<p class="tw-muted">
  Only the presence of credentials is visible in the user interface.
</p>

<hr class="tw-sep" />

## Configuration model example

<p class="tw-muted">
  The following example illustrates a simplified service configuration model.
  Values shown are placeholders and do not represent real credentials.
</p>

<div class="tw-codeblock">
  <pre><code class="language-json">{
  "serviceId": "srv_10293",
  "name": "Main Provider Service",
  "provider": "THEDEX",
  "type": "EXTERNAL",
  "testing": false,
  "status": "INACTIVE",
  "credentialsRef": "secret://providers/thedex/prod"
}</code></pre>
</div>

<hr class="tw-sep" />

## API example 

<p class="tw-muted">Services can also be managed programmatically via API.</p>

### Create a service

<div class="tw-codeblock">
  <pre><code class="language-http">POST /api/v1/services
Content-Type: application/json
Authorization: Bearer &lt;access_token&gt;</code></pre>
</div>

<div class="tw-codeblock">
  <pre><code class="language-json">{
  "name": "Main Provider Service",
  "provider": "THEDEX",
  "type": "EXTERNAL",
  "testing": false
}</code></pre>
</div>

### Successful response

<div class="tw-codeblock">
  <pre><code class="language-json">{
  "serviceId": "srv_10293",
  "status": "INACTIVE",
  "createdAt": "2024-06-01T12:44:18Z"
}</code></pre>
</div>




<p class="tw-muted">
  Sensitive credential values are never returned in API responses.
</p>

<hr class="tw-sep" />

## Notes and considerations

<ul class="tw-list">
  <li>Credential requirements vary by provider.</li>
  <li>Services must be active before they can be used for transactions.</li>
  <li>Changes to provider credentials may temporarily affect service availability.</li>
</ul>

<hr class="tw-sep" />

## Next steps

After creating or updating a service:

<ul class="tw-list">
  <li>
    review configuration on the
    <a href="/services/service-details-page/"><b>Service details</b></a> page
  </li>
  <li>
    configure provider credentials in
    <a href="/services/credentials-by-provider/"><b>Credentials by provider</b></a>
  </li>
  <li>
    set up financial rules in
    <a href="/services/balances/"><b>Balances</b></a>
    and
    <a href="/services/fee-profiles/"><b>Fee profiles</b></a>
  </li>
</ul>
