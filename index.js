 
class MyHead extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `

     
   

    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

		
		`;
      }
    }
 customElements.define("my-head", MyHead);
  
  class MySidebar extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `

     <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style=" background-color: #78160f; ">

            

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Tài khoản</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

       
			 <li class="nav-item active" style=" background: #b2241a; ">
                <a class="nav-link"  >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>   Quản lý tài khoản</span></a>
            </li>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="/index.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Thông tin tài khoản</span>
                </a>
               
            </li>
			<li class="nav-item">
                <a class="nav-link collapsed" href="/change-email.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Đổi địa chỉ Email</span>
                </a>
               
            </li>
             <li class="nav-item">
                <a class="nav-link collapsed" href="/change-password-game.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Đổi mật khẩu</span>
                </a>
               
            </li>
			<li class="nav-item">
                <a class="nav-link collapsed" href="/change-password2.html" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Đổi mật khẩu Cấp 2</span>
                </a>
               
            </li>
 
           

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
           <li class="nav-item active" style=" background: #b2241a; ">
                <a class="nav-link"  >
                    <i class="fas fa-money-bill fa-cog"></i>
                    <span>Nạp bạc</span></a>
            </li>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="/bank.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Nạp qua chuyển khoản Bank</span>
                </a>
                 
            </li>
             <li class="nav-item">
                <a class="nav-link collapsed" href="/card.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Nạp qua thẻ cào</span>
                </a>
                 
            </li>
			<li class="nav-item">
                <a class="nav-link collapsed" href="/history-bank.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Lịch sử giao dịch</span>
                </a>
                 
            </li>

            

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">
 <!-- Heading -->
             <li class="nav-item active" style=" background: #b2241a; ">
                <a class="nav-link"  >
                    <i class="fas fa-money-bill fa-cog"></i>
                    <span>Chuyển bạc vào game</span></a>
            </li>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="/send-money-to-game.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-money-bill fa-cog"></i>
                    <span>Chuyển bạc vào game</span>
                </a>
                 
            </li>
             
			<li class="nav-item">
                <a class="nav-link collapsed" href="/history-send-money-to-game.html" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Lịch sử chuyển bạc</span>
                </a>
                 
            </li>

            

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

             <li class="nav-item active">
                <a class="nav-link" onclick="logout()" href="#logout" >
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Đăng xuất</span></a>
            </li>

        </ul>
        <!-- End of Sidebar -->

		
		`;
      }
    }
 customElements.define("my-sidebar", MySidebar);
 

  class MyHeader extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `

<div id="check_login_off" style="display: block;">
                 <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >
                 <ul class="navbar-nav ml-auto">
                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a href="/" class=""><img src="img/logo.png?v=1" alt="logo" style="height: 90px;"></a>
                        </li>
					 
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/"  >
                              Trang chủ
                            </a>
                        </li>
						 <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/login.html"  >
                            Đăng nhập
                            </a>
                        </li>
						 <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="/register.html"  >
                              Đăng ký
                            </a>
                        </li> 
                    </ul>
                </nav>
                 </div>
				 <div id="check_login_on" style="display: none;">
                 <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" >
                  
<ul class="navbar-nav ml-auto">
                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a href="/" class=""><img src="img/logo.png?v=1" alt="logo" style="height: 90px;"></a>
                        </li>
					 
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle"   >
                              <i class="fas fa-user fa-cog"> </i>&nbsp;<span id="name"></span>
                            </a>
							
                        </li>
						  <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle"   >
                              <i class="fas fa-money-bill fa-cog"> </i>&nbsp; Bạc Web &nbsp;<span id="coin"></span>
                            </a>
							
                        </li>
						  <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle"   >
                              <i class="fas fa-money-bill fa-cog"> </i>&nbsp; Bạc Game &nbsp;<span id="point"></span>
                            </a>
							
                        </li>
						  <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle"   >
                              <i class="fas fa-money-bill fa-cog"> </i>&nbsp; Bạc Game Quy Đổi &nbsp;<span id="point_quy_doi"></span>
                            </a>
							
                        </li>
						 
						 
						
                        
						 
</ul>

</nav>
				
</div>

		
		`;
      }
    }
 customElements.define("my-header", MyHeader);
 
 
 