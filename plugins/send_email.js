var outbound = require('./outbound');

exports.hook_data = function (next, connection) {

    this.loginfo("in hook data");

    next();
}

exports.hook_data_post = function (next, connection) {

    this.loginfo("in hook data post");

    next();

}

exports.hook_queue = function (next, connection) {
    var plugin = this;

    var to = 'test2@myserver.com';
    var from = 'test@myserver.com';

    var contents = [
        "From: test@myserver.com",
        "To: test2@myserver.com",
        "MIME-Version: 1.0",
        "Content-type: text/plain; charset=us-ascii",
        "Subject: Some subject here",
        "",
        "Some email body here",
        ""].join("\n");

    var outnext = function (code, msg) {
        switch (code) {
            case DENY:  plugin.logerror("Sending mail failed: " + msg);
                        break;
            case OK:    plugin.loginfo("mail sent");
                        next();
                        break;
            default:    plugin.logerror("Unrecognised return code from sending email: " + msg);
                        next();
        }
    };

    outbound.send_email(from, to, contents, outnext);
}

exports.hook_rcpt = function (next, connection, params) {

    this.loginfo("in hook receipt");
    
    next();
}