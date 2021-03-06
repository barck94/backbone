import Backbone from "backbone";
import router from "../router";
import navLinkModel from "../models/NavLinkModel";
import navTemplate from "../templates/nav.html";
import $ from "jquery"

const NavLinkView = Backbone.View.extend({
    initialize(){
        router.on("route", (page) =>{
            console.log(page);
            navLinkModel.set("routeUrl", page);
        });
        // при изменении атрибутов модели перерисовать эту вьюху
        // this.model.on("change", this.render, this);
        this.listenTo(this.model, "change", this.render);
    },
    tagName: "div",
    className: "container",
    events: {
        "click .navbar li": "navigate"
    },
    navigate: function (e) {
        router.navigate(e.currentTarget.dataset.url, {trigger: true});
    },
    render: function () {
        this.$el.html(navTemplate(this.model.attributes));
        return this;
    }
});

let navLinkView = new NavLinkView({
    model: navLinkModel
});

export default navLinkView;

