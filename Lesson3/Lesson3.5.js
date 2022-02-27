let san=10;
next:
for(let i=2; i<=san; i++){
    for(let j=2; j<i; j++){
        if(i%j == 0) continue next;
    }
    alert(i + " - Бұл жай сан")
}