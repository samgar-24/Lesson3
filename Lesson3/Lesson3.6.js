function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Жауап дұрыс па?",
    () => alert("Жауап дұрыс"),
    () => alert("Жауап дұрыс емес.")
);