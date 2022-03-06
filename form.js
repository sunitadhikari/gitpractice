let ShowInfo=function(){
    const name=document.getElementById('name').value;
    const roll=document.getElementById('roll').value;
    const gmail=document.getElementById('gmail').value;
    const address=document.getElementById('address').value;
    const age=document.getElementById('age').value;
    
    const output=document.createElement('h1');
    output.innerHTML=` My name is ${name} and my roll no is ${roll}. I am ${age} years old.MY gmail is ${gmail} also I am from ${address}`;
    document.body.appendChild(output);
}