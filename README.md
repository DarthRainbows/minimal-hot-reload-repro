# Repro-Hot-Reload-Issue

## Installation

`pnpm i`

## Serve

`npx nx serve app`

## Reproduction

1. serve the app.
2. open `apps/app/src/app/components/home/home.component.html`
3. edit the contents
4. save
5. client auto-refreshes
6. observe the changes reflected in the client
7. make a 2nd edit to `HomeComponent`
8. save
9. client auto-refreshes
10. observe that the changes are NOT reflected in the client

## Expectation

Any edits are always reflected in the client on hot-reload.
