const { nip19 } = require("nostr-tools");

const args = process.argv;
const input = args[2];
if (args.length < 3 || ["-h", "--help"].includes(input)) {
  console.log("usage: node convert_pubkey_to_hex <your_pubkey>");
  return;
}

const hex = nip19.decode(input).data;
console.log(hex);
