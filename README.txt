AAFAT KI TOLI — standalone source bundle

Open index.html directly or from a local web server.

To update Instagram links later, edit the instagram-links JSON block in index.html.
Every member is listed there; use an empty string when a profile has no link yet.
All profile modals show an INSTAGRAM button. Empty links are placeholders and will
not navigate until a URL is added.

To change profile photos later, edit the asset-settings JSON block in index.html.
Set each member's value to a path relative to index.html, such as
assets/pfps/new-photo.jpg, and place the new image at that path. The three members
who did not have photos now use separate placeholder SVGs; replace their paths in
HTML whenever you have their real photos. Use "" to show initials instead.

To change the round archive logo later, set the "logo" value in asset-settings to
a path such as assets/my-logo.png and place that image in the bundle. The current
logo-placeholder.svg is only a replaceable default.

Files:
- index.html
- style.css
- script.js
- favicon.svg
- assets/logo-placeholder.svg
- assets/pfps/ (uploaded profile photos and placeholders)
- assets/aafat-soundtrack.mp3 (Badtameez Dil, starts at 00:35)
