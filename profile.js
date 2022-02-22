var btns = document.getElementsByClassName("menu_item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



let parent = document.getElementById("active_link")
    parent.innerHTML = profile();

    function profile(){
      return `<div id="card">
      <div class="card_img">
          <img src="https://mamaearthp.imgix.net/wysiwyg/male.png?auto=format" alt="">
      </div>
      <div class="card_details">
          <h3>Name</h3>
          <div><span>Email : </span>
          <span>demo@email.com</span>
          <p>Mobile : 1111111111</p>
          </div>
      </div>
      <div>
      <button id="edit_button">EDIT </button>
      </div>
      </div>`
    }
    
    document.getElementsByClassName("menu_item")[0].addEventListener("click",profile_show)
    document.getElementsByClassName("menu_item")[1].addEventListener("click",mama_cash)
    document.getElementsByClassName("menu_item")[2].addEventListener("click",orders)
    document.getElementsByClassName("menu_item")[3].addEventListener("click",address)
    document.getElementsByClassName("menu_item")[4].addEventListener("click",contact)

    function profile_show(){
      parent.innerHTML = profile();
    }

    function orders(){
      parent.innerHTML = orders_fn();
    }
    function orders_fn(){
      return `<div id="frame">
      <div id="order_div">
          <div id="empty_order">
              <img src="https://mamaearth.in/static/mamaearth/empty-box.svg" alt="">
          </div>
          <div>No Orders Placed yet!</div>
      </div>
  </div>`      
    }

    function address(){
      parent.innerHTML = show_address()
    }

    function show_address(){
      return ` <div id="frame">
      <div id="order_div">
          <div id="empty_order">
             <i class="fa-solid fa-location-dot"></i>
          </div>
          <div>No Address Available</div>
          <button>+ Add New Address</button>
      </div>
  </div>`
    }


    function contact()
    {
      window.location.href = "contact_us.html";      
    }

    function mama_cash(){
      parent.innerHTML = cash()
    }

    function cash(){
      return `<div id="frame">
      <div>
          <h3 class="top">Total Available Mama Cash</h3>
          <p id="wallet"><i class="fa-solid fa-wallet"></i> <span>₹ 0.00</span></p>
          <p id="intruction">Cashback will be credited in the Mamapay wallet account within 7 days of all products being delivered for eligible orders.</p>
      </div>
      <button>SHOP NOW</button>
  </div>`     
    }