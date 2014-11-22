var plugin = require('bootsie/plugin'),
    util = require("util"),
    markdown = require('markdown').markdown;

function bootsie_file_filter (conf){
    var __conf = conf;

    function __render(target_name, content){
        return markdown.toHTML(content);
    }

    return {
        render:__render
    }
}
util.inherits(bootsie_file_filter, plugin);

module.exports = bootsie_file_filter;

/**
 * MD
 *
 if(key.lastIndexOf("_md")!==-1){
                var c = markdown.toHTML(root[key]);
                delete root[key];
                key = key.substring(0, key.lastIndexOf("_md"));
                root[key] = c;
            }
 */