let app=angular.module('myapp',['ng','ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/nava1',{
            templateUrl:'template/homePage.html',
            controller:'kongzhi1'
        })
        .when('/nava2',{
            templateUrl:'template/reXiaoChanPin.html',
            controller:'kongzhi2'
        })
        .when('/nava3',{
            templateUrl:'template/chanPinZhanShi.html',
            controller:'kongzhi3'
        })
        .when('/nava4',{
            templateUrl:'template/xinWenDongTai.html',
            controller:'kongzhi4'
        })
        .when('/nava5',{
            templateUrl:'template/gerenliuyan.html',
            controller:'kongzhi5'
        })
        .when('/nava6',{
            templateUrl:'template/login.html',
            controller:'kongzhi6'
        })
        .when('/nava7',{
            templateUrl:'template/Register.html',
            controller:'kongzhi7'
        })
})
app.controller('head',function($scope,$rootScope){
    $scope.arr=[
        {href:'#/nava1',content:'首页'},
        {href:'#/nava2',content:'热销产品'},
        {href:'#/nava3',content:'产品展示'},
        {href:'#/nava4',content:'新闻动态'},
        {href:'#/nava5',content:'个人留言'}
    ]
    $scope.inde = 0;
    $scope.fn=function(index){
        $scope.inde=index;
    }
    $rootScope.liebia=[
        {ziti:'瑞士品牌'},
        {ziti:'欧美品牌'},
        {ziti:'日韩品牌'},
        {ziti:'国产品牌'},
        {ziti:'手表配件'}
    ]
})
app.controller('kongzhi1',function($scope,$timeout,$interval){
    $scope.src='img/homePage/AD0Ihd_PBhACGAAglbyQxQUonuqklwUwwQc4zAM.jpg';
    $scope.xinxi=[
        {ziti:'潜水表圈到底应该怎么玩？'},
        {ziti:'斯沃琪集团缺席，GPHG 2016大有不同'},
        {ziti:'在手表上动刀子 品读金雕艺术的胆大心细'},
        {ziti:'拨开神秘的面纱 看藏在画中的那个梵·高'},
        {ziti:'全方位的客户关系和品牌的全球传播'},
        {ziti:'从跑道到泳池 欧米茄的奥运精神'},
        {ziti:'潜水表圈到底应该怎么玩？'},
        {ziti:'奖项更迭，中国元素，斯沃琪集团缺席，GPHG 2016大有不同'},
        {ziti:'在手表上动刀子 品读金雕艺术的胆大心细'},
        {ziti:'在手表上动刀子 卓越的传统-传奇经典的戒指'}
    ]

    $scope.shoubiao=[
        {sb:'男士手表'},
        {sb:'女士手表'},
        {sb:'情侣手表'}
    ]
    $scope.ind = 0;
    $scope.fnx=function(index){
        $scope.ind=index;
    }
    $scope.img=[
        [
        {sbming:'自动机械表瑞士手表',tupiao:'img/homePage/img11.jpg'},
        {sbming:'自动机械日历皮带男表',tupiao:'img/homePage/img12.jpg'},
        {sbming:'恒意系列自动机械手表',tupiao:'img/homePage/img13.jpg'},
        {sbming:'正品石英男士手表',tupiao:'img/homePage/img14.jpg'},
        {sbming:'动能电波万年历男表',tupiao:'img/homePage/img15.jpg'},
        {sbming:'摩纹手表天文台手表机械男表',tupiao:'img/homePage/img16.jpg'}
        ],
        [
        {sbming:'自动机械表瑞士女士手表',tupiao:'img/homePage/nvshi1.jpg'},
        {sbming:'自动机械日历皮带女士表',tupiao:'img/homePage/nvshi2.jpg'},
        {sbming:'恒意系列自动机械女士手表',tupiao:'img/homePage/nvshi3.jpg'},
        {sbming:'机械手表防水女士时尚皮带',tupiao:'img/homePage/nvshi4.jpg'},
        {sbming:'防水皮带女士手表休闲',tupiao:'img/homePage/nvshi5.jpg'},
        {sbming:'时尚情侣表休闲女士手表皮带',tupiao:'img/homePage/nvshi6.jpg'}
        ],
        [
        {sbming:'水晶光动能情侣表',tupiao:'img/homePage/qinglv1.jpg'},
        {sbming:'男女士钨钢情侣手表对表',tupiao:'img/homePage/qinglv2.jpg'},
        {sbming:'恒意系列自动机械情侣表',tupiao:'img/homePage/qinglv3.jpg'},
        {sbming:'金色圈商务情侣皮带',tupiao:'img/homePage/qinglv4.jpg'},
        {sbming:'精钢日历正品情侣款防水',tupiao:'img/homePage/qinglv5.jpg'},
        {sbming:'摩纹手表天文台手表情侣表',tupiao:'img/homePage/qinglv6.jpg'}
        ]
    ]

    
    $scope.dongtai=[
        {dongtaiimg:'img/homePage/dongtai2.jpg',p1:'潜水表圈到底应该怎么玩？',p2:'保证始终如一的卓越质量-亦秉持着一份尊重',p3:'拨开神秘的面纱 看藏在画中的那个梵·高'},
        {
           dongtaiimg:'img/homePage/dongtai3.jpg',p1:'从跑道到泳池 欧米茄的奥运精神',p2:'潜水表圈到底应该怎么玩？',p3:'拨开神秘的面纱 看藏在画中的那个梵·高' }
    ]
    $scope.pinpaiimg=[
        [
            {img:'img/homePage/pinpai1.jpg'},
            {img:'img/homePage/pinpai2.jpg'},
            {img:'img/homePage/pinpai3.jpg'},
            {img:'img/homePage/pinpai4.jpg'},
            {img:'img/homePage/pinpai5.jpg'}
        ],
        [
            {img:'img/homePage/pinpai1.jpg'},
            {img:'img/homePage/pinpai2.jpg'},
            {img:'img/homePage/pinpai3.jpg'},
            {img:'img/homePage/pinpai4.jpg'},
            {img:'img/homePage/pinpai5.jpg'}
        ]
    ]
})

app.controller('kongzhi2',function($scope){
    $scope.src='img/rexiaochanpin/AD0Ihd_PBhACGAAgsryQxQUog4DDoAIwwAc4kAM.jpg';

    $scope.rexcpimg=[
        {img:'img/rexiaochanpin/rexiaochanpin1.jpg',text:'进口DW时尚男士腕表'},
        {img:'img/rexiaochanpin/rexiaochanpin2.jpg',text:'手表男丹尼尔惠灵顿腕表'},
        {img:'img/rexiaochanpin/rexiaochanpin3.jpg',text:'大表盘男士自动机械表'},
        {img:'img/rexiaochanpin/rexiaochanpin4.jpg',text:'儒雅系列机械男表'},
        {img:'img/rexiaochanpin/rexiaochanpin5.jpg',text:'优雅系列光动能女表'},
        {img:'img/rexiaochanpin/rexiaochanpin6.jpg',text:'商务系列男表石英表'}
    ]
})
app.controller('kongzhi3',function($scope){
    $scope.src='img/chanpinzhanshi/AD0Ihd_PBhACGAAgxbyQxQUouLTzygYwwAc4kAM.jpg';

    $scope.rexcpimg=[
        {img:'img/rexiaochanpin/rexiaochanpin1.jpg',text:'进口DW时尚男士腕表'},
        {img:'img/rexiaochanpin/rexiaochanpin2.jpg',text:'手表男丹尼尔惠灵顿腕表'},
        {img:'img/rexiaochanpin/rexiaochanpin3.jpg',text:'大表盘男士自动机械表'},
        {img:'img/rexiaochanpin/rexiaochanpin4.jpg',text:'儒雅系列机械男表'},
        {img:'img/rexiaochanpin/rexiaochanpin5.jpg',text:'优雅系列光动能女表'},
        {img:'img/rexiaochanpin/rexiaochanpin6.jpg',text:'国手表男自动机械表'},
        {img:'img/rexiaochanpin/rexiaochanpin7.jpg',text:'时尚商务防水间金钢带'},
        {img:'img/rexiaochanpin/rexiaochanpin8.jpg',text:'手表男多功能石英表'},
        {img:'img/rexiaochanpin/rexiaochanpin9.jpg',text:'商务系列男表石英表'},
    ]
})
app.controller('kongzhi4',function($scope){
    $scope.src='img/xinwendongtai/AD0Ihd_PBhACGAAg27yQxQUouIzCmAQwwAc4kAM.jpg';

    $scope.xwneirong=[
        {biaoti:'潜水表圈到底应该怎么玩？',text:'潜水表除了外形靓丽、经久耐用外，最有意思的莫过于其旋转表圈。旋转表圈也可以说是潜水表最具有标志性的特征。具体来说，...'},
        {biaoti:'斯沃琪集团缺席，GPHG 2016大有不同',text:'日前，GPHG（日内瓦高级钟表大赏）官网刚刚公布了175枚参赛时计名单。依照规则，评委团将为12个奖项类别各挑选出...'},
        {biaoti:'在手表上动刀子 品读金雕艺术的胆大心细',text:'金雕，源自于传统雕刻，而雕刻，则源自于人类文明形成之初。在远古时期，雕刻是作为记录的一种方式，保存着当时的人类智慧...'},
        {biaoti:'拨开神秘的面纱 看藏在画中的那个梵·高',text:'[腕表之家 钟表文化] 不知这是一种宿命，还是一种悲哀，历史上影响至今的很多伟大艺术家，都在死后才得以成名，荷兰后...'},
        {biaoti:'全方位的客户关系和品牌的全球传播',text:'在工作坊内，生产程序不断地改进，各种技艺得以培育、更新和传承，以保证始终如一的卓越质量。創造出的不只是璀璨光采，更...'}
    ]
})
app.controller('kongzhi5',function($scope,$http,$window){
    $scope.src='img/guanyuwomen/AD0Ihd_PBhACGAAg3ryQxQUo2u-Z0wIwwAc4kAM.jpg';
    $scope.fm=function(){
        //$scope.name2=/^[a-zA-Z0-9_]{3,16}&/;
        if($scope.names==undefined||$scope.names==""){
            $scope.noName="姓名不能为空";
        }else{
            $scope.noName="";
        }
    }
    $scope.fe=function(){
        //$scope.name2=/^[a-zA-Z0-9_]{3,16}&/;
        if($scope.emails==undefined||$scope.emails==""){
            $scope.noEmail="邮箱不能为空";
        }else{
            $scope.noEmail="";
        }
    }
    $scope.fp=function(){
        //$scope.name2=/^[a-zA-Z0-9_]{3,16}&/;
        if($scope.phones==undefined||$scope.phones==""){
            $scope.noPhone="手机号不能为空";
        }else{
            $scope.noPhone="";
        }
    }
    $scope.fw=function(){
        //$scope.name2=/^[a-zA-Z0-9_]{3,16}&/;
        if($scope.watchs==undefined||$scope.watchs==""){
            $scope.noWatch="爱好酒品不能为空";
        }else{
            $scope.noWatch="";
        }
    }
    //在需要刷新页面的地方调用函数$scope.reloadRoute
    $scope.reloadRoute = function () {
        $window.location.reload();
    };
    var arr=[];
    $scope.click=function(){
        $http.get("php/liuyanban.php",
            {
                params:{
                    bct:"add",
                    name:$scope.names,
                    email:$scope.emails,
                    phone:$scope.phones,
                    watch:$scope.watchs,
                    content:$scope.text,
                }
            }).success(function(){
                alert("添加成功");
                //添加成功后刷新
                $scope.reloadRoute();
            }).error(function(){
                alert("添加失败");
            })
    } 
})

app.controller('kongzhi6',function($scope,$http,$window){
    //在需要刷新页面的地方调用函数$scope.reloadRoute
    $scope.reloadRoute = function () {
        $window.location.reload();
    };
    $scope.login=function(){
        $scope.arr=[];
        $http.get("php/loginZhuce.php",
        {
            params:{
                bct:'list',
            }
        }).success(function(data){
            $scope.arr=data;
            $scope.add=$scope.arr;
            lenght=$scope.add.length;
            for(var i=0;i<lenght;i++){
               if($scope.add[i].name==$scope.texts&&$scope.add[i].password==$scope.passwords){
                    $window.location.href="#/nava1";
               }else{
                    $scope.dlsb="帐号或密码错误";
               }
            }
        }) 
    }  
})
app.controller('kongzhi7',function($scope,$http,$window){
    //在需要刷新页面的地方调用函数$scope.reloadRoute
    $scope.reloadRoute = function () {
        $window.location.reload();
    };
    $scope.arr=[];
    $scope.mimayz=function(){
        if($scope.password1===$scope.password2){
            $scope.mima=" ";
            $scope.register=function(){
                $http.get("php/loginZhuce.php",
                    {
                        params:{
                            bct:"add",
                            name:$scope.names,
                            password:$scope.password1,
                            phone:$scope.phones
                        }
                    }).success(function(){
                        alert("注册成功");
                        //添加成功后刷新
                        $window.location.href="#/nava5";
                    }).error(function(){
                        alert("注册失败");
                    })
            }
        }else{
            $scope.mima="密码不一致！";
        }
    }
})