function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ='flex';
}

function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ='none';
}

/* 
TODO: Noting this for further improvements later on 
*/
// function createNavBar(){
//     let nav = document.querySelector('.navbar');

//     nav.innerHTML = ` <ul class="sidebar">
//             <li onclick="closeSidebar()"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
//             <li><a href="index.html">Home</a></li>
//             <li><a href="merchandise.html">Merchandise</a></li>
//             <li><a href="products.html">Products</a></li>
//             <li><a href="productPriceSearch.html">Price Search</a></li>
//             <li><a href="login.html">Login</a></li>
//         </ul>
//         <ul>
//             <li><a href="index.html"><img src="images/Website Logo.png" id="navbar__logo" alt="DengkeeLogo"></a></li>
//             <li class="hideOnMobile"><a href="merchandise.html">Merchandise</a></li>
//             <li class="hideOnMobile"><a href="products.html">Products</a></li>
//             <li class="hideOnMobile"><a href="productPriceSearch.html">Price Search</a></li>
//             <li class="hideOnMobile"><a href="login.html">Login</a></li>
//             <li class="menuButton" onclick="showSidebar()"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
//         </ul>`;
// }