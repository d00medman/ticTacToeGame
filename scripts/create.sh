#!/bin/bash
curl --request POST http://localhost:4741/games \
  --header "Content-Type: application/json" \
  --data'{
  "game": {
    "id": 3,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": null
  }
}'
