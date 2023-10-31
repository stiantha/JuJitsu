function userSettingsView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <section class="profile">
 <!-- Sidenav -->
 <div class="sidenav">
 <div class="profile">
     <img src="/JuJitsu Marie/images/profile2.png" alt="" width="100" height="100">

     <div class="name">
         Marie
     </div>
     <div class="job">
         Administrator
     </div>
 </div>

 <div class="sidenav-url">
     <div class="url">
         <a onclick="userGradeView()">Gradering</a>
         <hr align="center">
     </div>
     <div class="url">
         <a href="#settings" class="active">Innstillinger</a>
         <hr align="center">
     </div>
 </div>
</div>
<!-- End -->

<!-- Main -->
<div class="main_settings">
 <div class="card_settings">
     <div class="card-body">
         <table>
                 <tr>
                     <td>Navn</td>
                     <td>:</td>
                     <td>Marie</td>
                 </tr>
                 <tr>
                     <td>Email</td>
                     <td>:</td>
                     <td>marie@getacademy.no</td>
                 </tr>
                 <tr>
                     <td>..</td>
                     <td>:</td>
                     <td>..</td>
                 </tr>
                 <tr>
                     <td>..</td>
                     <td>:</td>
                     <td>..</td>
                 </tr>
                 <tr>
                     <td>..</td>
                     <td>:</td>
                     <td>..</td>
                 </tr>
                 <tr>
                     <td>..</td>
                     <td>:</td>
                     <td>..</td>
                 </tr>  
         </table>
     </div>
 </div>
</section>
`;
}
    
