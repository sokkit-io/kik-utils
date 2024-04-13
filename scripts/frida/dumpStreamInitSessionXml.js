Java.perform(function () {
    const StreamInitBuilder = Java.use("vm.l");

    const serverUuid = "00000000-0000-0000-0000-000000000000";
    const accountJid = "ted_w6w@talk.kik.com";
    const serverDomain = "talk.kik.com";
    const canDeviceId = "CAN12345678901234567890123456789012";
    const passwordHash = "broPlsDontHackMe";
    const cvHmacSecret = "1234567890123456789012345678901234567890";
    const timestamp = "0000000000000";
    const connectionType = "WIFI";
    const loginAttemptIdx = 1337;
    const kikApkVersion = "9.11.0.69420";
    const languageCode = "en_US";


    const streamInitXml = StreamInitBuilder.c(serverUuid, accountJid, serverDomain, canDeviceId, passwordHash, cvHmacSecret, timestamp, connectionType, loginAttemptIdx, kikApkVersion, languageCode);
    const padCount = streamInitXml.length - streamInitXml.trimStart().length;

    console.log('=== Session Stream Init ===')
    console.log(`XML: '${streamInitXml}'`);
    console.log(`Pad: ${padCount}`);
});