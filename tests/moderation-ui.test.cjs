const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');
const blocks=fs.readFileSync(path.join(__dirname,'..','js','messaging-blocks.js'),'utf8');
const admin=fs.readFileSync(path.join(__dirname,'..','js','moderation-admin.js'),'utf8');
const stripe=fs.readFileSync(path.join(__dirname,'..','js','stripe-client.js'),'utf8');
assert.match(blocks,/message_my_blocks/);assert.match(blocks,/message_block_user/);assert.match(blocks,/Débloquer/);assert.match(blocks,/textContent/);assert.doesNotMatch(blocks,/\.innerHTML\s*=/);
assert.match(admin,/moderation_pending_count/);assert.match(admin,/moderation_notifications/);assert.match(admin,/moderation_get_report/);assert.match(admin,/moderation_decide_report/);assert.match(admin,/moderation_lift_sanction/);assert.match(admin,/Bannir communauté/);assert.doesNotMatch(admin,/\.innerHTML\s*=/);
assert.ok(stripe.includes("js/messaging-blocks.js"));assert.ok(stripe.includes("js/moderation-admin.js"));
console.log('moderation-ui: safe blocked-users and admin moderation bridges are wired');