function compute()
{
    prinflag = checkPrincipal()
    if (prinflag==false)
    {
        document.getElementById("principal").style.backgroundColor = "#fd5656"
        document.getElementById("result_val").innerHTML = ""
        return false;
    }
    var prin = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;
    document.getElementById("principal").style.backgroundColor = "#ffffff"
    var interest = prin * year * rate /100;
    var formatted_year = new Date().getFullYear()+parseInt(year);

    document.getElementById("result_val").innerHTML ="If you deposit \<span\ id = 'highlight'>"+prin+"\</span\>,\<br\>at an interest rate of \<span\ id = 'highlight'>"+rate+"%\</span\><br>You will receive an amount of \<span\ id = 'highlight'>"+interest+"\</span\>,\<br\>in the year \<span\ id = 'highlight'>"+formatted_year+"\</span\>\<br\>"
}

function updateRate()
{
    var retval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = retval;
}

function checkPrincipal()
{
   var prin = document.getElementById("principal").value;
   if (prin <=0)
   {
        document.getElementById("principal").focus();   
        alert("Enter a positive number");
        
       return false;
   }
   return true;

}