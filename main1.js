    // Form validation code will come here.
function validate()


        {   
                var f = document.myform["myform"].elements;
                var cansubmit = true;
            
                for (var i = 0; i < f.length; i++) {
                    if (f[i].value.length == 0) cansubmit = false;
                }
            
                if (cansubmit) {
                    document.getElementById('submit').disabled = false;
                }
                else {
                    document.getElementById('submit').disabled = 'disabled';
                }
        if (
          myform.CHECKBOX_1.checked == false &&
          myform.CHECKBOX_2.checked == false &&
          myform.CHECKBOX_3.checked == false) 
          {
            alert ('You didn\'t choose any of the checkboxes!');
            return false;
        } 
        var num=document.myform.num.value;  
        if (isNaN(num)){  
          alert("enter a number between 0 and 9")  
          return false;  
        }else{  
          return true;  
        
          }  

        
       
        }  

        