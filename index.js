function result() {
  
    var students= {
        PAARESHA: {
            math:"98",
            mechanics:"80",
            dbms:"91"
        },
        MOHINI: {
            math:"89",
            mechanics:"70",
            dbms:"78"
        },
        NIKAT: {
            math:"80",
            mechanics:"90",
            dbms:"87"
        }
       
    }

    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if(definition==undefined) {
        output.innerHTML=`<hr> There is no information about this student. <hr>`;
    }else{
        output.innerHTML=`<hr> M3 score is ${definition.math}. <hr> Mechanics score is ${definition.mechanics}. <hr> DBMS score is ${definition.dbms}. <hr>`;

    };
};
