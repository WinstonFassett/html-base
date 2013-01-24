define(['knockout', 'sammy', './webmail', './fakeData'], function (ko, Sammy, webmail, fakeData) {

    // Client-side routes    
    Sammy(function () {
        this.get('#:folder', function () {
            var folder = this.params.folder;
            webmail.chosenFolderId(folder);
            webmail.chosenMailData(null);
            setTimeout(function () {
                webmail.chosenFolderData({ mails: fakeData[folder] })
            }, 0);
        });

        this.get('#:folder/:mailId', function () {
            var folder = this.params.folder,
                mailId = this.params.mailId;

            webmail.chosenFolderId(folder);
            webmail.chosenFolderData(null);
            setTimeout(function () {
                webmail.chosenMailData(ko.utils.arrayFirst(fakeData[folder], function (item) {
                    return item.id == mailId;
                }));
            }, 0);
        });

        this.get('', function () { this.app.runRoute('get', '#Inbox') });
    }).run();
});