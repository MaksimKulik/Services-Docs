# Balances

## Overview

<div class="tw-lead">
  The <b>Balances</b> section describes how funds are tracked and managed for a service.
  A balance represents the available amount for a specific currency and is used to support
  financial operations such as payments and payouts.
</div>

Each service can have one or more balances, depending on the currencies it supports.

<hr class="tw-sep" />

## Where to find

<div class="tw-card tw-card--note">
  <div class="tw-card__title">Navigation</div>
  <div class="tw-path">
    Services → Services list → Row actions → Balances<br />
    Service details page → Balances
  </div>
</div>

Both navigation paths open the balances view for the selected service.

<hr class="tw-sep" />

## Balances view


Balances are displayed as a set of cards grouped by currency.

<img src="/assets/images/balances.jpg" alt="Balances">

Each card represents the current balance amount for a specific currency.

From this view, users can:

<ul class="tw-list">
  <li>review available balances</li>
  <li>add a new balance for a currency</li>
  <li>update an existing balance</li>
  <li>remove a balance if it is no longer required</li>
  <li>refresh balance values using synchronization</li>
</ul>

<hr class="tw-sep" />

## Balance information

Each balance includes the following information:

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
        <td>Currency</td>
        <td>Currency code associated with the balance.</td>
      </tr>
      <tr>
        <td>Balance</td>
        <td>Current available amount.</td>
      </tr>
    </tbody>
  </table>
</div>

Balances are always linked to a specific service and currency.

<hr class="tw-sep" />

## Create a balance

A new balance can be added for a service if a required currency is not yet configured.

To create a balance:

<ol class="tw-list">
  <li>Select <b>New balance</b>.</li>
  <li>Choose a currency.</li>
  <li>Save the configuration.</li>
</ol>

After creation, the balance appears as a new card in the balances view.

<hr class="tw-sep" />

## Update a balance

Existing balances can be updated to reflect the current available amount.

To update a balance:

<ol class="tw-list">
  <li>Select <b>Edit</b> on the balance card.</li>
  <li>Update the balance value.</li>
  <li>Save the changes.</li>
</ol>

The updated amount is applied immediately after saving.

<hr class="tw-sep" />

## Delete a balance

Balances can be removed if they are no longer required for the service.

To delete a balance:

<ol class="tw-list">
  <li>Select <b>Delete</b> on the balance card.</li>
  <li>Confirm the action.</li>
</ol>

Once deleted, the balance is removed from the service configuration.

<hr class="tw-sep" />

## Update balances action

The <b>Update balances</b> action refreshes balance values for the service.

This action is typically used to:

<ul class="tw-list">
  <li>synchronize balances with the provider</li>
  <li>ensure balance values reflect the latest available data</li>
</ul>

The exact behavior of balance synchronization depends on provider capabilities and configuration.

<hr class="tw-sep" />

## API example 

### Get balances for a service

<div class="tw-codeblock">
  <pre><code class="language-http">GET /api/v1/services/{serviceId}/balances
Authorization: Bearer &lt;access_token&gt;</code></pre>
</div>

### Example response

<div class="tw-codeblock">
  <pre><code class="language-json">{
  "serviceId": "srv_10293",
  "balances": [
    {
      "currency": "EUR",
      "amount": 12500.75
    },
    {
      "currency": "USD",
      "amount": 8400.00
    }
  ]
}</code></pre>
</div>

<p>No sensitive payment data is included in balance responses.</p>


<hr class="tw-sep" />

## Configuration model example

<div class="tw-codeblock">
  <pre><code class="language-json">{
  "serviceId": "srv_10293",
  "currency": "EUR",
  "amount": 12500.75
}</code></pre>
</div>

<p>Values shown are illustrative and do not represent real account data.</p>

<hr class="tw-sep" />

## Notes and considerations

<ul class="tw-list">
  <li>Each balance is associated with a single currency.</li>
  <li>A balance must exist for a currency before it can be updated.</li>
  <li>Balance availability and synchronization behavior may vary by provider.</li>
  <li>Changes to balances may affect service operations.</li>
</ul>

<hr class="tw-sep" />

## Next steps

After configuring balances:

<ul class="tw-list">
  <li>
    review service configuration on the
    <a href="/services/service-details-page/"><b>Service details</b></a>
    page
  </li>
  <li>
    configure transaction fees in the
    <a href="/services/fee-profiles/"><b>Fee profiles</b></a>
    section
  </li>
</ul>

