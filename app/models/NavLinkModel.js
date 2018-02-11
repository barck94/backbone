const NavLinkModel = Backbone.Model.extend({
    defaults: {
        "links": [
            {"title": "Home", "url": ""},
            {"title": "Posts", "url": "posts"},
            {"title": "Photos", "url": "photos"},
            {"title": "Users", "url": "users"}
        ],
    }
});

let navLinkModel = new NavLinkModel;

export default navLinkModel;