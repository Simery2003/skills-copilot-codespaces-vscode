function skillsMember()
{
    var member = new Object();
    member.name = "John";
    member.age = 25;
    member.skills = ["C++", "Java", "Python"];
    member.address = {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    };
    member.print = function() {
        console.log(this.name + " is " + this.age + " years old.");
    };
    return member;
}
