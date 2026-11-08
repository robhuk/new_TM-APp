XC TM TOOLKIT — Unified CrossCountry Train Manager PWA
Build: 1.0.0
App identity: uk.co.crosscountry.tmtoolkit
Storage namespace: uk.co.crosscountry.tmtoolkit.data.v1
Service worker cache: xc-tm-toolkit-cache-v1.0.0-build-2026.11.08-001

CONTENTS
- index.html: single app shell and all module views
- style.css: responsive XC-branded styling
- app.js: module logic, local persistence, backup/restore, export tools
- manifest.webmanifest: single PWA identity
- service-worker.js: one isolated offline worker and versioned cache
- Root-level PNG assets: app logo and install icons

MODULES
Home dashboard; Shift log (including train records, chronological log, copy/email/print); Daily notes; Route cards and diversion notes; Roster & shifts with .ics calendar export; SMSF-003 incident, delay, SRS/crowding, lost-property and crew-overtime report builders; Passenger counts; Defect reports; Commission/scan calculator; BTP 61016 message builder; Station guide; Handy links; JSON backup and restore.

PWA / DATA RULES
- One manifest, one service worker, one app identity and one cache namespace.
- GitHub Pages compatible: all images and application assets remain in the package root and use relative paths.
- Update check on app launch no more than once every 12 hours; also checks when returning to the foreground after the interval.
- Data is saved in one app-specific localStorage record. Updates never clear or migrate-delete user data.
- Existing XC ShiftApp data under uk.co.crosscountry.shiftapp.shiftdata.v1 is imported on first launch if the new toolkit store does not yet exist. The old key is retained unchanged.
- Export a JSON backup before changing device/browser. Local data is not synchronised between devices.
- Service worker deletes only older caches with the xc-tm-toolkit-cache- prefix. It never deletes storage or caches belonging to other XC apps.

INSTALL / DEPLOY
1. Extract the ZIP and upload the contents (not the ZIP itself) to the root of a GitHub Pages repository.
2. Enable GitHub Pages for the required branch/folder.
3. Open the HTTPS GitHub Pages URL and install using the browser's Add to Home Screen / Install option.

NOTES / SCOPE
This is a unified working shell with functioning local modules and common export actions. Route cards and roster entries are user-maintained records. Roster PDF auto-parsing, live Darwin/RTT API feeds, and company-system integrations are not included in this build. External links open their respective websites. The app is an unofficial personal toolkit and does not replace current company procedures, safety instructions, or Control direction.
