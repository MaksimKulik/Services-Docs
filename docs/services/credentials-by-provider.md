# Credentials by provider

## Overview

<div class="tw-lead">
  Each payment provider requires a specific set of credentials for authentication and communication.
  The required credential fields depend on the selected provider and are validated by the system during service configuration.
</div>

This page provides an overview of credential requirements for supported providers.

<hr class="tw-sep" />

## How credentials work

When a provider is selected during service creation or editing, the system dynamically displays the credential fields required for that provider.

All required credential fields must be completed before a service can be saved or activated.

<hr class="tw-sep" />

## Provider credential requirements

The table below lists credential fields required for each provider.

<div class="tw-table-wrap">
  <table class="tw-table">
    <thead>
      <tr>
        <th class="tw-col-180">Provider</th>
        <th class="tw-col-220">Credential field</th>
        <th>Description</th>
        <th class="tw-col-120">Required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Paylogic</td>
        <td><code>POINT</code></td>
        <td>Provider access point identifier.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Paylogic</td>
        <td><code>SERVICE</code></td>
        <td>Provider service identifier.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Paylogic</td>
        <td><code>PUBLIC-KEY</code></td>
        <td>Public key used for authentication.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Paylogic</td>
        <td><code>PRIVATE-KEY</code></td>
        <td>Private key used for authentication.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Bill Line</td>
        <td><code>MERCHANT</code></td>
        <td>Merchant identifier.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Bill Line</td>
        <td><code>SECRET-KEY</code></td>
        <td>Secret key for API authentication.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Thedex</td>
        <td><code>API-KEY</code></td>
        <td>API key issued by the provider.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Thedex</td>
        <td><code>SECRET-KEY</code></td>
        <td>Secret key used for request signing.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Thedex</td>
        <td><code>MERCHANT-ID</code></td>
        <td>Merchant identifier assigned by the provider.</td>
        <td>Yes</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="tw-muted">
  Credential names and formats are defined by the provider.
</p>

<hr class="tw-sep" />

## Validation rules

The system validates provider credentials before saving a service.

Validation behavior includes:

<ul class="tw-list">
  <li>required fields cannot be empty</li>
  <li>credential values must match provider-defined formats</li>
  <li>missing or invalid credentials prevent service activation</li>
</ul>

If validation fails, the system highlights the affected field and displays a corresponding error message.

<hr class="tw-sep" />

## Credential updates

Provider credentials can be updated through the service edit workflow.

When credentials are updated:

<ul class="tw-list">
  <li>changes are applied immediately after validation</li>
  <li>provider connectivity may be affected</li>
  <li>related operations may be temporarily unavailable</li>
</ul>

<hr class="tw-sep" />

## Security considerations

<ul class="tw-list">
  <li>Credential values are handled as sensitive information.</li>
  <li>Access to credential configuration should be restricted to authorized users.</li>
  <li>Credentials should be updated according to provider security requirements.</li>
</ul>

<hr class="tw-sep" />

## Notes

<ul class="tw-list">
  <li>Credential requirements may change if a provider updates its integration specifications.</li>
  <li>Additional providers may introduce new credential fields.</li>
  <li>Always verify credential accuracy before activating a service.</li>
</ul>

<hr class="tw-sep" />

## Next steps

After configuring provider credentials:

<ul class="tw-list">
  <li>
    review service status on the
    <a href="/services/service-details-page/"><b>Service details</b></a> page
  </li>
  <li>
    configure balances in the
    <a href="/services/balances/"><b>Balances</b></a>
    section
  </li>
  <li>
    assign fee rules in the
    <a href="/services/fee-profiles/"><b>Fee profiles</b></a>
    section
  </li>
</ul>
