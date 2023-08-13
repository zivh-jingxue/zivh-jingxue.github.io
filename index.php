<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/function.js"></script>
    <title>比薩茶坊 - 管理員後台</title>
    <?php session_start();?>
</head>
<body>
    
    <div class="container">
        <div class="navigation">
            <div class="menu-toggle"></div>
            <ul class="p-0">
                <li class="list active" id="index">
                    <a href="#">
                        <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span class="text">首頁</span>
                    </a>
                </li>
                <li class="list" id="material-cost">
                    <a href="#">
                        <span class="icon"><ion-icon name="rose-outline"></ion-icon></span>
                        <span class="text">原物料成本管理</span>
                    </a>
                </li>
                <li class="list" id="product-cost">
                    <a href="#">
                        <span class="icon"><ion-icon name="pizza-outline"></ion-icon></span>
                        <span class="text">產品成本管理</span>
                    </a>
                </li>
                <li class="list" id="employee-management">
                    <a href="#">
                        <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                        <span class="text">員工管理</span>
                    </a>
                </li>
                <li class="list" id="employee-salary">
                    <a href="#">
                        <span class="icon"><ion-icon name="calendar-outline"></ion-icon></span>
                        <span class="text">員工薪資管理</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="row justify-content-center" id="searching"></div>
            <div class="row justify-content-center" id="main"></div>
        </div>
    </div>
    <div class="modal fade" id="add-on-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="submit-check-title">編輯成本</h4>
                </div>
                <div class="modal-body" id="submit-check-body"> 
                    <div class="my-3"></div>
                    <div class="my-3"></div>
                    <br>
                    <h5>確定要送出以上內容？</h5>
                </div>
                <div class="modal-footer" id="submit-check-footer">
                    <button type="button" class="btn btn-logout" id="submit">送出</button>
                    <button type="button" class="btn btn-logout" data-bs-dismiss="modal">取消送出</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        
        const menuToggle = document.querySelector('.menu-toggle');
        const navigation = document.querySelector('.navigation');

        menuToggle.onclick = function () {
            navigation.classList.toggle('open');
            
        }

        const list = document.querySelectorAll('.list');

        function activeLink(){
            list.forEach((item) => item.classList.remove('active'));
            this.classList.add('active');
            const tool_id = $(this).attr('id');
            $('#main').removeClass('content-exist');
            switch (tool_id) {
                case 'material-cost':
                    setTimeout(function() {
                        materialCostPage();
                    }, 250);
                    break;
                case 'product-cost':
                    setTimeout(function() {
                        productCostPage();
                    }, 250);
                    break;
                case 'employee-management':
                    console.log('員工管理');
                    break;
                case 'employee-salary':
                    console.log('薪資管理');
                    break;
                default:
                    console.log('首頁');
            }
        }

        list.forEach((item) => item.addEventListener('click',activeLink));

        

        
    </script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script>
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    </script>
</body>
</html>