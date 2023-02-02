# Nostr 05 verification server

Set up your own nostr 05 verification server and show off your badge on Damus!

References:
- [NIP-05: Mapping Nostr keys to DNS-based internet identifiers](https://github.com/nostr-protocol/nips/blob/master/05.md)

## Quick Start

1. Rename `.env.example` to `.env` at root path, fill in pairs like `damus_username=damus_pubkey` below default configs
```
// .env
// ...default configs

bruski=my_pubkey_in_damus
// continue adding others...
```
2. Deploy this nodejs app online (using whatever way you like, I prepared the dockerfile for you!)
3. Make sure you have a domain name for the access to your service (e.g. `suiet.app`)
4. Open Damus -> Edit Profile -> NIP-05 blank: fill with `yourname@yourdomain` (e.g. `bruski@suiet.app`)
5. Check your Damus badge ✅ 
6. Show off to the world ❤️