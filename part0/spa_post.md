sequenceDiagram
    participant Browser
    participant Server

    Note right of Browser: User types a note and clicks the Save button

    Note right of Browser: JavaScript captures the input and prepares a note object

    Browser->>Server: POST /exampleapp/new_note_spa (note in JSON)
    activate Server
    Server-->>Browser: 201 Created (or success response)
    deactivate Server

    Note right of Browser: Browser updates the local notes list and re-renders the DOM
