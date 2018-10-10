# coding: utf-8
from flask import (Flask, url_for, redirect, render_template)
import config

app = Flask(__name__)
app.config.from_object(config)


@app.route("/<is_login>/")
def index(is_login):
    index_params = {
        "note": "Student logs",
        "meta_info" : {
            "identity": "Student",
            "nantionality": "China"
        }
    }

    class Person(object):
        name = "John Doe"
        age = 18
    default_p = Person()

    if is_login == 1:
        class User_login(Person):
            name = u"陈士震"
            age = 22
            def keys(self):
                return ('name', 'age')
            def __getitem__(self, item):
                return getattr(self, item)
        user = User_login()
        print(dict(user))
        index_params["person"] = user
        return render_template("index.html", **index_params)
    else:
        index_params["person"] = default_p
        return render_template("index.html", **index_params)

@app.route("/articles/")
def articles():
    return render_template("articles.html")

@app.route("/articles/item/<id>/")
def items(id):
    return redirect(url_for("articles"))
    print(f"{id}")

@app.route("/deutsch/")
def deutsch():
    return url_for("index")

if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 3000)
