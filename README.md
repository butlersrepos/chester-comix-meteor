Using Cordova InApp Purchase plugin by j3k0 in Meteor

- meteor add cordova:cc.fovea.cordova.purchase@4.0.0

- Created mobile.config.js as per the instructions at https://github.com/meteor/meteor/wiki/How-to-submit-your-Android-app-to-Play-Store

- Followed the rest of those instructions.

Enter keystore password:
Re-enter new password:
What is your first and last name?
  [Unknown]:  Eric Butler
What is the name of your organizational unit?
  [Unknown]:
What is the name of your organization?
  [Unknown]:
What is the name of your City or Locality?
  [Unknown]:  Columbus
What is the name of your State or Province?
  [Unknown]:  Ohio
What is the two-letter country code for this unit?
  [Unknown]:  US
Is CN=Eric Butler, OU=Unknown, O=Unknown, L=Columbus, ST=Ohio, C=US correct?
  [no]:  yes

Enter key password for <your-app-name>
	(RETURN if same as keystore password):

Used shitty password.

- Copied .keystore to my Dropbox.

GOTCHA! - I didn’t `meteor add-platform android` before I had run the `meteor build` command earlier, so my `build/` directory had no `android` folder. I ran `meteor add-platform android` and then re-ran the same build command.

Tried to run jar signer. GOTCHA! I ran the keygen tool with “your-app-name” in the command instead of changing it to my actual app name /facepalm. Re-ran the keystone gen.

Ran jar signer. Gotcha? jar signer command, as copied, complained about the reference to `unaligned.apk`, the directory did however have a `released-unsigned.apk` so I changed it to that.

Running Android zip align required me to edit the path to my particular android version directory and of course to reference `released-unsigned.apk` again.