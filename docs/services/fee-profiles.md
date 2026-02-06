# Fee profiles

## Overview

<div class="tw-lead">
  The <b>Fee profiles</b> section describes how transaction fees are configured for a service.
  A fee profile defines the rules used to calculate fees for different transaction types processed through the service.
</div>

Fee profiles are typically configured per currency and become effective from a defined start date.

<hr class="tw-sep" />

## Where to find

<div class="tw-card tw-card--note">
  <div class="tw-card__title">Navigation</div>
  <div class="tw-path">Service details page → Fee profiles</div>
</div>

This navigation path opens the fee profiles view for the selected service.

<hr class="tw-sep" />

## Fee profiles view

Fee profiles are displayed as a table listing all profiles configured for the service.

<img src="/assets/images/fee profiles.jpg" alt="Fee Profiles View">

The table allows users to quickly review fee settings and identify which rules are currently active.

Typical information displayed includes:

<ul class="tw-list">
  <li>profile name</li>
  <li>currency</li>
  <li>start date</li>
  <li>configured fee components</li>
</ul>

<hr class="tw-sep" />

## Fee profile structure

A fee profile consists of one or more <b>fee components</b>, each defining how a specific transaction type is charged.

Common fee components include:

<ul class="tw-list">
  <li>deposit fees</li>
  <li>withdrawal fees</li>
  <li>refund fees</li>
  <li>decline fees</li>
  <li>chargeback fees</li>
  <li>settlement fees</li>
  <li>rolling reserve settings</li>
</ul>

The availability of components depends on provider capabilities and service configuration.

<hr class="tw-sep" />

## Create a fee profile

To create a new fee profile:

<ol class="tw-list">
  <li>Select <b>Create fee profile</b>.</li>
  <li>Enter a profile name.</li>
  <li>Select the currency.</li>
  <li>Set the start date.</li>
  <li>Configure required fee components.</li>
  <li>Save the configuration.</li>
</ol>

After creation, the fee profile becomes available for use by the service when the start date is reached.

<hr class="tw-sep" />

## Fee components

Fee components define how fees are calculated for a given transaction type.

Each component may include the following parameters:

<div class="tw-table-wrap">
  <table class="tw-table">
    <thead>
      <tr>
        <th class="tw-col-220">Parameter</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>Fee %</code></td>
        <td>Percentage-based fee applied to the transaction amount.</td>
      </tr>
      <tr>
        <td><code>Fee fix</code></td>
        <td>Fixed fee amount.</td>
      </tr>
      <tr>
        <td><code>Min fee</code></td>
        <td>Minimum fee value.</td>
      </tr>
      <tr>
        <td><code>Max fee</code></td>
        <td>Maximum fee value.</td>
      </tr>
    </tbody>
  </table>
</div>

Not all parameters are required for every component.

<hr class="tw-sep" />

## Rolling reserve

Rolling reserve defines a portion of funds that is temporarily withheld to mitigate financial risk.

Typical rolling reserve configuration includes:

<ul class="tw-list">
  <li>reserve percentage</li>
  <li>holding period</li>
</ul>

Rolling reserve behavior and availability depend on provider support.

<hr class="tw-sep" />

## Settlement

Settlement settings define how and when funds are settled.

Settlement configuration may include:

<ul class="tw-list">
  <li>settlement period</li>
  <li>settlement delay</li>
  <li>settlement-related fees</li>
</ul>

Settlement behavior may vary by provider and currency.

<hr class="tw-sep" />

## Configuration model example

The following example illustrates a simplified fee profile configuration.

Values shown are placeholders and do not represent real commercial conditions.

<div class="tw-codeblock">
  <pre><code class="language-json">{
  "profileId": "fee_20491",
  "serviceId": "srv_10293",
  "currency": "EUR",
  "startDate": "2024-07-01",
  "components": {
    "deposit": {
      "percentage": 2.5,
      "fixed": 0.30
    },
    "withdrawal": {
      "percentage": 1.8,
      "min": 1.00
    }
  }
}</code></pre>
</div>

<hr class="tw-sep" />

## API example (optional reference)

Fee profiles can also be managed programmatically.

### Create a fee profile

<div class="tw-codeblock">
  <pre><code class="language-http">POST /api/v1/services/{serviceId}/fee-profiles
Authorization: Bearer &lt;access_token&gt;
Content-Type: application/json</code></pre>
</div>

<div class="tw-codeblock">
  <pre><code class="language-json">{
  "name": "Standard EUR fees",
  "currency": "EUR",
  "startDate": "2024-07-01"
}</code></pre>
</div>

### Successful response

<div class="tw-codeblock">
  <pre><code class="language-json">{
  "profileId": "fee_20491",
  "status": "ACTIVE"
}</code></pre>
</div>

Fee calculation details are applied internally and are not exposed in transaction responses.

<hr class="tw-sep" />

## Notes and considerations

<ul class="tw-list">
  <li>Fee profiles are applied per currency.</li>
  <li>Only one fee profile can be active for a currency at a given time.</li>
  <li>Changes to fee profiles may affect transaction costs immediately after activation.</li>
  <li>Provider limitations may restrict available fee components.</li>
</ul>

<hr class="tw-sep" />

## Next steps

After configuring fee profiles:

<ul class="tw-list">
  <li>
    review balances in the
    <a href="/services/balances/"><b>Balances</b></a>
    section
  </li>
  <li>
    verify overall configuration on the
    <a href="/services/service-details-page/"><b>Service details</b></a>
    page
  </li>
</ul>
