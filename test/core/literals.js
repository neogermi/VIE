module("Core - Literals");

test("Literal API", function () {
    var v = new VIE();
    ok(v.Literal);
    
    var literal = new v.Literal();
    equal(typeof literal.toString, "function");
    equal(typeof literal.toTurtle, "function");
    equal(typeof literal.isLiteral, "boolean");
    ok(literal instanceof Backbone.Model);
});

test("TypedLiteral API", function () {
    var v = new VIE();
    ok(v.TypedLiteral);
    
    var literal = new v.TypedLiteral();
    equal(typeof literal.toString, "function");
    equal(typeof literal.toTurtle, "function");
    equal(typeof literal.isLiteral, "boolean");
    ok(literal.isTypedLiteral);
    
    ok(literal instanceof Backbone.Model);
});

test("BooleanLiteral API", function () {
    var v = new VIE();
    ok(v.BooleanLiteral);
    
    var literal = new v.BooleanLiteral();
    equal(typeof literal.toString, "function");
    equal(typeof literal.toTurtle, "function");
    equal(typeof literal.isLiteral, "boolean");
    ok(literal.isTypedLiteral);
    equal(literal.type, "<http://www.w3.org/2001/XMLSchema#boolean>");
    
    ok(literal instanceof Backbone.Model);
});

test("Boolean Literal - direct Instanciation", function () {
    var v = new VIE();

    ok(v.BooleanLiteral);
    var booleanliteral = new v.BooleanLiteral();
    
    var trueLit = new v.BooleanLiteral(true);
    var falseLit = new v.BooleanLiteral(false);
    var falseNosetLit = new v.BooleanLiteral();

    ok(trueLit);
    ok(falseLit);
    ok(falseNosetLit);
    
    var tr = trueLit.get();
    var fa = falseLit.get();
    var fa2 = falseNosetLit.get();

    equal(tr, true);
    equal(fa, false);
    equal(fa2, false);

    equal(trueLit.toString(), "true");
    equal(trueLit.toTurtle(), "\"true\"^^<http://www.w3.org/2001/XMLSchema#boolean>");
    equal(falseLit.toString(), "false");
    equal(falseLit.toTurtle(), "\"false\"^^<http://www.w3.org/2001/XMLSchema#boolean>");
    equal(falseNosetLit.toString(), "false");
    equal(falseNosetLit.toTurtle(), "\"false\"^^<http://www.w3.org/2001/XMLSchema#boolean>");
});

test("NumberLiteral API", function () {
    var v = new VIE();
    ok(v.NumberLiteral);
    
    var literal = new v.NumberLiteral();
    equal(typeof literal.toString, "function");
    equal(typeof literal.toTurtle, "function");
    equal(typeof literal.isLiteral, "boolean");
    ok(literal.isTypedLiteral);
    equal(literal.type, "<http://www.w3.org/2001/XMLSchema#number>");
    
    ok(literal instanceof Backbone.Model);
});

test("NumberLiteral - direct Instanciation", function () {
    var v = new VIE();

    var intLit = new v.NumberLiteral(3);
    var intLit2 = new v.NumberLiteral(3.0);
    var intLit3 = new v.NumberLiteral(3e0);
    var intLit4 = new v.NumberLiteral({value: 3});
    var doubLit = new v.NumberLiteral(17.12);
    var thouLit = new v.NumberLiteral(3200);
    var negIntLit = new v.NumberLiteral(-15);

    ok(intLit);
    ok(intLit2);
    ok(intLit3);
    ok(intLit4);
    ok(doubLit);
    ok(thouLit);
    ok(negIntLit);

    var inte = intLit.get();
    var inte2 = intLit2.get();
    var inte3 = intLit3.get();
    var inte3 = intLit4.get();
    var doub = doubLit.get();
    var thou = thouLit.get();
    var negInt = negIntLit.get();

    equal (typeof inte, "number");
    equal (typeof inte2, "number");
    equal (typeof inte3, "number");
    equal (typeof inte4, "number");
    equal (typeof doub, "number");
    equal (typeof thou, "number");
    equal (typeof negInt, "number");

    equal(inte, 3);
    equal(inte2, 3.0);
    equal(inte3, 3.0);
    equal(inte4, 3.0);
    equal(inte, inte2);
    equal(inte, inte3);
    equal(doub, 17.12);
    equal(thou, 3200);
    equal(negInt, -15);

    equal(intLit.toString(), (3).toLocaleString());
    equal(intLit.toTurtle(),  "\"3e0\"^^<http://www.w3.org/2001/XMLSchema#number>");
    equal(intLit2.toString(), 3.0.toLocaleString());
    equal(intLit2.toTurtle(), "\"3e0\"^^<http://www.w3.org/2001/XMLSchema#number>");
    equal(intLit3.toString(), 3e0.toLocaleString());
    equal(intLit3.toTurtle(), "\"3e0\"^^<http://www.w3.org/2001/XMLSchema#number>");
    equal(intLit4.toString(), 3e0.toLocaleString());
    equal(intLit4.toTurtle(), "\"3e0\"^^<http://www.w3.org/2001/XMLSchema#number>");
    equal(doubLit.toString(), 17.12.toLocaleString());
    equal(doubLit.toTurtle(), "\"17.12e0\"^^<http://www.w3.org/2001/XMLSchema#number>");
    equal(thouLit.toString(), (3200).toLocaleString());
    equal(thouLit.toTurtle(), "\"3200e0\"^^<http://www.w3.org/2001/XMLSchema#number>");
    equal(negIntLit.toString(), (-15).toLocaleString());
    equal(negIntLit.toTurtle(), "\"-15e0\"^^<http://www.w3.org/2001/XMLSchema#number>");
});

test("DateLiteral API", function () {
    var v = new VIE();
    ok(v.DateLiteral);
    
    var literal = new v.DateLiteral();
    equal(typeof literal.toString, "function");
    equal(typeof literal.toTurtle, "function");
    equal(typeof literal.isLiteral, "boolean");
    ok(literal.isTypedLiteral);
    equal(literal.type, "<http://www.w3.org/2001/XMLSchema#dateTime>");
    
    ok(literal instanceof Backbone.Model);
});

test("DateLiteral - direct Instanciation", function () {
    var v = new VIE();

    ok(false, "To be implemented!");
}); 

test("PlainLiteral API", function () {
    var v = new VIE();
    ok(v.PlainLiteral);
    
    var literal = new v.PlainLiteral();
    equal(typeof literal.toString, "function");
    equal(typeof literal.toTurtle, "function");
    equal(typeof literal.isLiteral, "boolean");
    ok(literal.isPlainLiteral);

    ok(literal instanceof Backbone.Model);
});

test("PlainLiteral - direct Instanciation / setter&getter", function () {
    var v = new VIE();

    var strLit1a = new v.PlainLiteral("foo");
    var strLit1b = new v.PlainLiteral({value: "foo"});
    var strLit1c = new v.PlainLiteral({value: "foo", lang : ""});
    var strLit1d = new v.PlainLiteral({value: "foo", lang : "*"});
    var strLit1e = new v.PlainLiteral({value: "foo", lang : false});

    var strLit2 = new v.PlainLiteral({value: "bar", lang: "en"});
    var strLit3 = new v.PlainLiteral({value: "baz", lang: "en-US"});

    ok(strLit1a);
    ok(strLit1b);
    ok(strLit1c);
    ok(strLit1d);
    ok(strLit1e);
    ok(strLit2);
    ok(strLit3);

    equal(strLit1a.get(), "foo");
    equal(strLit1a.get("value"), "foo");
    equal(strLit1a.value(), "foo");

    equal(strLit1b.get(), "foo");
    equal(strLit1b.get("value"), "foo");
    equal(strLit1b.value(), "foo");

    equal(strLit1c.get(), "foo");
    equal(strLit1c.get("value"), "foo");
    equal(strLit1c.value(), "foo");

    equal(strLit1d.get(), "foo");
    equal(strLit1d.get("value"), "foo");
    equal(strLit1d.value(), "foo");

    equal(strLit1e.get(), "foo");
    equal(strLit1e.get("value"), "foo");
    equal(strLit1e.value(), "foo");

    equal(strLit1a.getLang(), undefined);
    equal(strLit1a.get("lang"), undefined);
    equal(strLit1b.getLang(), undefined);
    equal(strLit1b.get("lang"), undefined);
    equal(strLit1c.getLang(), undefined);
    equal(strLit1c.get("lang"), undefined);
    equal(strLit1d.getLang(), undefined);
    equal(strLit1d.get("lang"), undefined);
    equal(strLit1e.getLang(), undefined);
    equal(strLit1e.get("lang"), undefined);

    equal(strLit2.get(), "bar");
    equal(strLit2.get("value"), "bar");
    equal(strLit2.value(), "bar");

    equal(strLit2.getLang(), "en");
    equal(strLit2.get("lang"), "en");

    equal(strLit3.get(), "baz");
    equal(strLit3.get("value"), "baz");
    equal(strLit3.value(), "baz");

    equal(strLit2.getLang(), "en-US");
    equal(strLit2.get("lang"), "en-US");

    strLit2.setLang("de");
    equal(strLit2.get("lang"), "de");

    strLit2.set("lang", "fr");
    equal(strLit2.get("lang"), "fr");

    //unset language
    strLit2.unset("lang");
    equal(strLit2.get("lang"), undefined);
    strLit2.set("lang", "");
    equal(strLit2.get("lang"), undefined);
    strLit2.set("lang", "*");
    equal(strLit2.get("lang"), undefined);
    strLit2.set("lang", false);
    equal(strLit2.get("lang"), undefined);
}); 

test("LiteralCollection API", function () {
    var v = new VIE();

    ok(v.LiteralCollection);
    equal(typeof v.LiteralCollection, "function");

    var collection = new v.LiteralCollection();
    ok(collection);
    ok(collection.isLiteralCollection);
    equal(typeof collection.isLiteralCollection, "boolean");
    equal(typeof collection.availableLanguages, "function");
    equal(typeof collection.closestLanguage, "function");
    equal(typeof collection.toString, "function");
    equal(typeof collection.toTurtle, "function");
});


test("LiteralCollection - TypedLiteral - Adding & Removing", function () {

    var v = new VIE();

    var collection = new v.LiteralCollection();

    var intLit = new v.NumberLiteral(3);
    var intLit2 = new v.NumberLiteral(5);

    collection.add(intLit);
    equal(collection.size(), 1);

    collection.add(intLit2);
    equal(collection.size(), 2);

    collection.remove(intLit);
    equal(collection.size(), 1);

    collection.add(3); //should internally create a NumberLiteral
    equal(collection.size(), 2);
    ok(collection.at(1).isNumberLiteral);

});

test("LiteralCollection - PlainLiteral - Adding & Removing", function () {

    var v = new VIE();

    var collection = new v.LiteralCollection();

    var strLit = new v.PlainLiteral("foo");
    var strLit2 = new v.PlainLiteral("bar");
    var strLit3 = new v.PlainLiteral({value : "baz", lang: "de-DE"});
    var strLit4 = new v.PlainLiteral({value : "baz", lang: "fr"});

    collection.add(strLit3);
    collection.add(strLit4);

    equal(collection.availableLanguages, ["de-DE", "fr"]);

    collection.add(strLit);

    equal(collection.availableLanguages, ["", "de-DE", "fr"]);

    collection.add(strLit2);

    equal(collection.availableLanguages, ["", "de-DE", "fr"]);

    strLit4.setLang("es");
    equal(collection.availableLanguages, ["", "de-DE", "es"]);

});

test("Literals - Entity set/get", function () {
    var v = new VIE();

    var p = new vie.Entity( {
        "@subject" : "_:bnode0",

        text : "lorem",
        position: 1
    });

    var p2 = new vie.Entity( {
        "@subject" : "_:bnode1",

        text : "ipsum",
        position: 2
    });

    vie.entities.add(p);
    vie.entities.add(p2);

    var entity = new vie.Entity({
        "@type": "Post",

        paragraphs : ["_:bnode0", "_:bnode1"]
    });

    ok(entity.get("paragraphs").isCollection);
    ok(entity.get("paragraphs").size(), 2);
    equal(entity.get("paragraphs").at(0).getSubjectUri(), "_:bnode0");
    ok(entity.get("paragraphs").at(0).get("text").isLiteralCollection);
    equal(entity.get("paragraphs").at(0).get("text").at(0).toString(), "lorem");

});
    
test("Literals - Entity set/get (cont.d)", function () {
    var v = new VIE();

    var entity = new v.Entity({
        firstname: "Sebastian",
        lastname: {value: "Germesin", lang: false},
        age: 29,
        today: new Date(),
        someNumber : new vie.NumberLiteral(42),
        name: [
            {value: "Sebastian G.", lang: "de-DE"},
            {value: "S. Germesin", lang: "fr"},
            {value: "S. Germesin", lang: v.getLang()}
        ],
        birthDay : new Date(),
        someIntStringValue : "123",
        someIntegerValue : 123e10,
        typedValue : [
            {value: "foo", type: "http://example.org/my/datatype"},
            {value: "bar", type: "http://example.org/my/other-datatype"}
        ]
    });

    var firstname = entity.get("firstname");
    var lastname = entity.get("lastname");
    var age = entity.get("age");
    var today = entity.get("today");
    var someNumber = entity.get("someNumber");

    var name = entity.get("name");
    var birthDay = entity.get("birthDay");

    var someIntStringValue = entity.get("someIntStringValue");
    var someIntegerValue = entity.get("someIntegerValue");

    var typedValue = entity.get("typedValue");

    ok(firstname.isLiteralCollection);
    ok(lastname.isLiteralCollection);
    ok(age.isLiteralCollection);
    ok(today.isLiteralCollection);
    ok(someNumber.isLiteralCollection);
    ok(name.isLiteralCollection);
    ok(birthDay.isLiteralCollection);
    ok(someIntStringValue.isLiteralCollection);
    ok(someIntegerValue.isLiteralCollection);
    ok(typedValue.isLiteralCollection);

    //TODO!
});

/*

var entity = ...;

entity.set("name", "Sebastian");
entity.setOrAdd("name", {value: "Szaby", lang: "fr"});
entity.setOrAdd("name", 3010201);
entity.setOrAdd("name", new Date());
entity.setOrAdd("name", true);

entity.setOrAdd("friend", vie.entities.at(0));
entity.setOrAdd("friend", vie.entities.at(0).id);
entity.setOrAdd("friend", {name: "Szaby", age: 35});

var entity = new vie.Entity({name: "Szaby", age: 35});
vie.entities.add(entity);


var name = vie.entities.at(0).get("name") ; <<-- LiteralCollection

//name.copyValue("en", "de");
//name.moveValue("en", "de");

var friends = vie.entities.at(0).get("foaf:friend") ; <<-- Collection

name.toTurtle(); <-- "\"\"\"Sebastian\"\"\"@en"
name.toString(); <-- "Sebastian"


name.availableLanguages(); <-- ["de-DE", "en-GB"];
name.toString("fr"); <-- undefined
name.toString("de"); <-- "de-DE"
name.toString("en-US"); <-- undefined
name.toString("en"); <-- "en-GB"

name.availableLanguages(); <-- ["de-DE", "en-GB", "en"];
name.toString("en-US"); <-- "en"
name.toString("en-GB"); <-- "en-GB"

name.at(0).toString();
name.at(0).getLang(); <-- undefined, "en"

name.isLiteralCollection; <<-- true
name.at(0).isLiteral; <<-- true

var firstname = vie.entities.at(0).get("firstname");

firstname.add("Sebastian");
firstname.add({value: "Sebastian", lang: "en"});

firstname.availableLanguages(); ["", "en"]
firstname.availLangs();

firstname.closestLanguage("en");
firstname.closestLang("en");

firstname.get("en").set("lang", "de");
firstname.get("en").setLang("de");

*/


/*

var entity = new v.Entity();

entity.setOrAdd("plays": [
    {name: "guitar"}, 
    {name: [
        {"@value": "vocals", "@lang": "en"}, 
        {"@value": "Gesang", "@lang": "de"}
        ]
    }
]);

entity.setOrAdd({name: [
        {"@value": "Thomas", "@lang": "en"}, 
        {"@value": "Thomas", "@lang": "de"}
]);


entity.get("plays").at(1); << EntityCollection
entity.get("plays").at(1).get("name"); << LiteralCollection
entity.get("plays").at(1).get("name").toString("de"); // Gesang
*/
