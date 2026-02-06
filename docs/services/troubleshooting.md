# Troubleshooting

## Overview

This page collects the most common issues you may encounter while creating or updating services, configuring balances, and setting up fee profiles. Most problems are related to missing required fields, provider-specific credential requirements, or configuration mismatches (for example, currency or start date).

If you are unsure where to start, begin with the service configuration panel. In practice, the UI validation messages are usually the fastest way to identify what exactly needs to be corrected.

<hr class="tw-sep" />

## Service creation and update

### Required fields are missing

If you try to create or update a service with missing required fields, the system will block saving and highlight the fields that must be completed. This is especially common for provider credentials.

You may see messages similar to:

<ul class="tw-list">
  <li><code class="tw-path">SECRET-KEY cannot be empty</code></li>
  <li><code class="tw-path">MERCHANT-ID cannot be empty</code></li>
</ul>

Complete the missing values, then save the service again. If you are not sure which credentials are required for the provider, check the
<a href="/services/credentials-by-provider/"><b>Credentials by provider</b></a> page.

<hr class="tw-sep" />

### Credential value looks correct, but validation still fails

Some providers require credentials in a specific format. In such cases, even a seemingly valid value may be rejected by validation rules.

When this happens, re-check the credential format you received from the provider (for example, expected length, allowed characters, or whether the value should include prefixes). After correcting the value, try saving the service again.

<hr class="tw-sep" />

## Service status

### Service cannot be activated

If a service cannot be switched to <b>Active</b>, the most common reason is incomplete configuration or invalid credentials. In practice, activation problems almost always trace back to missing required fields in the provider credentials section.

Open the service in <b>Edit</b>, review all required fields, and save the configuration first. After the service is saved without validation errors, change its status again.

<hr class="tw-sep" />

## Balances

### Balance cannot be updated

If you cannot update a balance, first verify that a balance for the required currency actually exists for the service. A balance must be created before it can be edited.

If the balance exists but values still do not match expectations, use the <b>Update Balances</b> action. This action is typically used to refresh balance values and synchronize them with the provider, when supported.

Keep in mind that balance behavior may vary depending on provider capabilities.

<hr class="tw-sep" />

### Balance is not displayed

If a balance is not visible in the balances view, it is usually caused by one of the following:

<ul class="tw-list">
  <li>the balance was deleted</li>
  <li>you are looking at a different service than intended</li>
  <li>the service is inactive (depending on how the environment is configured)</li>
</ul>

Double-check the selected service and verify that the balance exists for the correct currency.

<hr class="tw-sep" />

## Fee profiles

### Fee profile does not apply as expected

If fees do not apply as expected, start by checking two common configuration mismatches: <b>start date</b> and <b>currency</b>.

If the fee profile start date is in the future, it may not be used yet. Also ensure that the fee profile currency matches the currency used in the service configuration and operations.

<hr class="tw-sep" />

## Practical tips

When troubleshooting configuration issues, these simple steps usually help:

<ul class="tw-list">
  <li>Read the validation message first. It often points directly to the incorrect or missing field.</li>
  <li>Save changes before navigating away from the page to avoid losing edits.</li>
  <li>If the issue is provider-specific, verify credential requirements and formats for that provider.</li>
  <li>Treat service activation as a final check: if a service cannot be activated, something in configuration still needs attention.</li>
</ul>

<hr class="tw-sep" />

## When to escalate

If you cannot resolve the issue with the checks above, prepare a short set of details before escalating:

<ul class="tw-list">
  <li>service ID and provider name</li>
  <li>current status (Active/Inactive)</li>
  <li>what you were trying to do (create, edit, update balance, create fee profile)</li>
  <li>the validation message or visible UI behavior</li>
</ul>

This makes it much easier for the support or technical team to reproduce the issue and respond quickly.
