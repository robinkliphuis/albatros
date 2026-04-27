---
date: 2026-04-27
topic: albatros-studio-site
---

# Albatros.studio Website

## What We're Building
A single-page public website for Albatros.studio, hosted on Vercel and reachable at `https://albatros.studio`.

The page acts as a business card: organization name, concise mission statement, contact email, and country.

## Why This Approach
Two options were considered:
- Bare minimum page with only mission and contact.
- Minimum professional variant with legal/privacy pages.

The first option was chosen to move quickly and satisfy the Google eligibility prerequisite with the least complexity.

## Key Decisions
- Single static page: fastest path to publish and validate domain.
- Primary domain on apex (`albatros.studio`): clearer canonical URL.
- `www` redirected to apex: avoids duplicate URLs.
- Contact via `contact@albatros.studio`: credibility for organization identity.
- Legal notice line only: enough for this initial step.

## Open Questions
- Final destination mailbox for forwarding `contact@albatros.studio`.
- Whether to add a full legal/privacy page later.

## Next Steps
- Deploy this folder to Vercel.
- Configure email forwarding for `contact@albatros.studio` at DNS level.
- Submit Google nonprofit/workspace request with live URL.
