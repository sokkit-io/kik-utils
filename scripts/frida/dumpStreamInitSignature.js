Java.perform(function () {
    const StreamInitBuilder = Java.use("vm.l");

    const serverUuid = "00000000-0000-0000-0000-000000000000";
    const timestamp = "0000000000000";
    const kikApkVersion = "9.11.0.69420";
    const jidOrDeviceId = "ted_w6w@talk.kik.com";

    const signatureDump = StreamInitBuilder.a(serverUuid, timestamp, kikApkVersion, jidOrDeviceId);

    console.log('=== Stream Init Signature ===')
    console.log(`signed: '${signatureDump}'`);
});