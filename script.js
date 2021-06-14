function compute()
{
    var prin = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;

    var interest = prin * year * rate /100;
    var amount = parseInt(prin) + parseInt(interest)
    var formatted_year = new Date().getFullYear()+parseInt(year);

    document.getElementById("result_val").innerHTML ="If you deposit "+prin+",\<br\>at an interest rate of "+rate+"%<br>You will receive an amount of "+amount+",\<br\>in the year "+formatted_year+"\<br\>"
}

function updateRate()
{
    var retval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = retval;
}

function checkPrincipal()
{
   var prin = document.getElementById("principal").value;
   if (prin >=0)
   {
       alert("Please enter valid Principal");
       prin.focus();
       return false;
   }
   return true;

}