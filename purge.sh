#!/bin/bash

# Replace these variables with your own values
API_TOKEN="Ab09L-pVrOje89Ho4jkgv_wOdeJEwNG8vWlm991I"
ZONE_ID="134d2676dfa6a8c139bddd004acd3428"

# Cloudflare API endpoint for purging cache


API_ENDPOINT="https://api.cloudflare.com/client/v4/zones/$ZONE_ID/purge_cache"
echo $API_ENDPOINT
# Purge everything
response=$(curl -s -X POST "$API_ENDPOINT" \
     -H "Authorization: Bearer $API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{"purge_everything":true}')

# Check if the purge was successful
if echo "$response" | grep -q '"success":true'; then
  echo "Cache purged successfully."
else
  echo "Failed to purge cache. Response from Cloudflare:"
  echo "$response"
fi