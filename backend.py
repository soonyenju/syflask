# coding: utf-8
from flask import (Flask, url_for, redirect, render_template)
import config, os

app = Flask(__name__)
app.config.from_object(config)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/articles/")
def articles():
    return render_template("articles.html")


@app.route("/articles/poem/")
def poem():
    return render_template("poem.html")


@app.route("/articles/item/<id>/")
def items(id):
    return redirect(url_for("articles"))
    print(f"{id}")


@app.route("/codes/")
def codes():
    return render_template("codes.html")


@app.route("/test/")
def test():
    return render_template("index_test.html")

@app.route("/log/")
def log():
    return redirect(url_for("home"))

@app.route("/log/<is_login>/")
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
        def keys(self):
            return ('name', 'age')
        def __getitem__(self, item):
            return getattr(self, item)
    default_p = Person()

    if is_login == "1":
        class User_login(Person):
            name = u"陈士震"
            age = 22
            def keys(self):
                return ('name', 'age')
            def __getitem__(self, item):
                return getattr(self, item)
        user = User_login()
        index_params["person"] = dict(user)
        return render_template("index.html", **index_params)
    else:
        index_params["person"] = dict(default_p)
        return render_template("index.html", **index_params)


@app.route("/test2/")
def test2():
    return url_for("home")

if __name__ == '__main__':
    app.run(host = "127.0.0.1", port = 3000)
