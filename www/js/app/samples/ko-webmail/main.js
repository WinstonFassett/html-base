require(['require.paths'], function main() {
    require(['knockout', 'app/samples/ko-webmail/webmail', 'app/samples/ko-webmail/routes'], function (ko, webmail) {
        ko.applyBindings(webmail);
    });
});