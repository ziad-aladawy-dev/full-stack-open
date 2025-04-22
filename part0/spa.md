sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET /exampleapp/spa
    activate Server
    Server-->>Browser: HTML document
    deactivate Server

    Browser->>Server: GET /exampleapp/main.css
    activate Server
    Server-->>Browser: CSS file
    deactivate Server

    Browser->>Server: GET /exampleapp/spa.js
    activate Server
    Server-->>Browser: JavaScript file
    deactivate Server

    Note right of Browser: Browser executes spa.js

    Browser->>Server: GET /exampleapp/data.json
    activate Server
    Server-->>Browser: JSON data (list of notes)
    deactivate Server

    Note right of Browser: Browser renders notes dynamically in the DOM
