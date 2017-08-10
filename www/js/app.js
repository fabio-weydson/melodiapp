/*!
 * Roots v 2.0.0
 * Follow me @adanarchila at Codecanyon.net
 * URL: http://codecanyon.net/item/roots-phonegapcordova-multipurpose-hybrid-app/9525999
 * Don't forget to rate Roots if you like it! :)
 */
// In this file we are goint to include all the Controllers our app it's going to need
(function() {
    'use strict';

    var app = angular.module('app', ['onsen', 'angular-images-loaded', 'ngAudio',  'angular-jwplayer']);

    // Filter to convert HTML content to string by removing all HTML tags
    app.filter('htmlToPlaintext', function() {
        return function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
        }
    });

    app.controller('networkController', function($scope) {

        $scope.logo = 'images/radio/logo_xx.png';


        // Check if is Offline
        document.addEventListener("offline", function() {

            offlineMessage.show();

            /*
             * With this line of code you can hide the modal in 8 seconds but the user will be able to use your app
             * If you want to block the use of the app till the user gets internet again, please delete this line.
             */

            setTimeout('offlineMessage.hide()', 8000);

        }, false);

        document.addEventListener("online", function() {
            // If you remove the "setTimeout('offlineMessage.hide()', 8000);" you must remove the comment for the line above
            // offlineMessage.hide();
        });


    });

    // This functions will help us save the JSON in the localStorage to read the website content offline

    Storage.prototype.setObject = function(key, value) {
        this.setItem(key, JSON.stringify(value));
    }

    Storage.prototype.getObject = function(key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    }

    // This directive will allow us to cache all the images that have the img-cache attribute in the <img> tag
    app.directive('imgCache', ['$document', function($document) {
        return {
            link: function(scope, ele, attrs) {
                var target = $(ele);

                scope.$on('ImgCacheReady', function() {

                    ImgCache.isCached(attrs.src, function(path, success) {
                        if (success) {
                            ImgCache.useCachedFile(target);
                        } else {
                            ImgCache.cacheFile(attrs.src, function() {
                                ImgCache.useCachedFile(target);
                            });
                        }
                    });
                }, false);

            }
        };
    }]);
    app.directive('fadeIn', function($timeout) {
        return {
            restrict: 'A',
            link: function($scope, $element, attrs) {
                $element.addClass("ng-hide-remove");
                $element.on('load', function() {
                    $element.addClass("ng-hide-add");
                });
            }
        }
    })

    // Radio Controller

    app.controller('radioController', function($scope, $sce, $interval, $timeout) {



 $('.bgbox img').width
        $scope.isPlaying = false;
        $scope.autoplay = false;
        $scope.lastradio = window.localStorage.getItem('lastradio');

        if (!$scope.lastradio) {
            $scope.lastradio = 0;
        }

         $scope.redes_sociais = [{
            id: '0',
            title: 'Facebook',
            icon: 'ion-social-facebook',
            link: 'https://m.facebook.com/radiomelodiamg'
        },
        {
            id: '1',
            title: 'Twitter',
            icon: 'ion-social-twitter',
            link: 'https://twitter.com/melodiavicosa'
        },
        {
            id: '2',
            title: 'Instagram',
            icon: 'ion-social-instagram',
            link: 'http://instagram.com/melodiavicosa'
        },
        {
            id: '3',
            title: 'WhatsApp',
            icon: 'ion-social-whatsapp',
            link: 'Em breve!'
        }];


        $scope.radios_arr = [{
            id: '0',
            title: 'Radio Melodia',
            menu: 'Melodia',
            icon: 'ion-ios7-calendar-outline',
            ip: '172.82.131.90:8808'
        }];

        $scope.radioOptions = {
            Background: true,
            Titulo: '',
            albumArt: 'images/radio/cover.png?v=3',
            Artista: 'Carregando...',
            Musica: 'Aguarde',
            songTitle: '',
            currentTime: '',
            Programa: '',
            Locutor: ''
        }
        $scope.keywords = ["melodia","diversos", "chamada", "trilha", "vh", "fm", "comercial", "break"];
                    
        //$scope.URLCover = 'http://helloradio.com.br/radios/player/capa_app.php?artista=';
        $scope.URLCover = 'images/radio/logo_grande.png?v=3';
        $scope.radioOptions.songTitle = '';
        $scope.URLText = '';
        $scope.Status = 'stopped';
        $scope.proximaFaixa = '';
        $scope.atualFaixa = '';
        $scope.TMPalbumArt = 'images/radio/logo_grande.png?v=3';
        $scope.BuscaAjax = false;

       

       $timeout(function() {
            $scope.$watch('radioOptions.songTitle', function() {  
                $('.descurtir,.curtir').removeClass('active');
                $scope.ExibeFavoritar = true;
            }, true);
        }, 7000);
       

        $scope.radioOptions.Titulo = $scope.radios_arr[$scope.lastradio].title;
        $scope.buttonIcon = '<span class="ion-ios-pause"></span>';

        $('#jquery_jplayer_1').jPlayer({
            swfPath: "http://jplayer.org/latest/dist/jplayer",
            supplied: "mp3",
            preload: "none",
            autoplay: true,
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: false,
            keyEnabled: true,
            toggleDuration: true,
            ready: function() {
                $scope.isPlaying = false;
                $scope.mudaRadio($scope.lastradio);
                console.log("Player pronto");
            },
            play: function() {
                $scope.Status = 'playing';
            },
            pause: function() {
                $scope.Status = 'paused';
            },
            stop: function() {
                $scope.Status = 'stopped';
            },
            ended: function() {
                
            }
        }).end();
        
        $scope.$watch('proximaFaixa', function(newValue, oldValue) {
            if(newValue==oldValue) {
               console.log('igual');
            }    else {
                console.log('diferente');
            }
        });

        $scope.getURL = function(id_rede) {
            if(id_rede==3) {
                window.plugins.toast.show($scope.redes_sociais[id_rede].link, 'long', 'center', null, null);
            } else {
                window.open($scope.redes_sociais[id_rede].link,'_system');
            }
        }

        $scope.mudaRadio = function(idRadio) {

            $scope.lastradio = idRadio;
            $scope.isPlaying = false;
           
            $('#jquery_jplayer_1').jPlayer('stop');

            var stream = {
                title: $scope.radios_arr[idRadio].title,
                mp3: 'http://' + $scope.radios_arr[idRadio].ip + '/;stream.mp3'
            };
            window.localStorage.setItem('lastradio', $scope.radios_arr[idRadio].id);
            window.localStorage.setItem('autoplay', true);

            $scope.radioOptions.Titulo = stream.title;

            $('#jquery_jplayer_1').jPlayer("setMedia", stream);
            $scope.startRadio();
            return false;
        }

        $scope.startRadio = function() {
            if ($scope.lastradio == '0') {
                $scope.BuscaAjax = true;
               
            } else {
                $scope.BuscaAjax = false;
                $scope.radioOptions.Background = false;
                $scope.radioOptions.ProximaMusica = false;
                $scope.radioOptions.Artista = "";
                $scope.radioOptions.Musica = $scope.radioOptions.Titulo;

                $scope.ExibeBanner();
                $scope.ExibeFavoritar = false;
            }
            if ($scope.isPlaying) {
                $scope.isPlaying = false;
                $scope.buttonIcon = '<span class="ion-ios-play"></span>';

                $('#jquery_jplayer_1').jPlayer('stop');
            } else {
                $('#jquery_jplayer_1').jPlayer('play');
                $scope.buttonIcon = '<img src="images/load.gif">';

                $timeout(function() {
                    $scope.buttonIcon = '<span class="ion-ios-pause"></span>';

                    $scope.isPlaying = true;
                }, 5000);
            }
            return false;
        }

        $scope.ExisteTexto = function(str, substrings) {
            for (var i = 0; i != substrings.length; i++) {
                var substring = substrings[i];
                if (str.indexOf(substring) != -1) {
                    return substring;
                }
            }
            return null;
        }

        $scope.limpa_str = function(str) {
            str = str.replace(/^\s+|\s+$/g, '');
            str = str.toLowerCase();
            var from = "ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to = "aaaaaeeeeiiiioooouuuunc------";
            for (var i = 0, l = from.length; i < l; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }
            //str = str.replace(/[^a-z0-9 -]/g, '').replace('  ', '+').replace('-', '').replace(' ', '+'); 
            return str;
        }

        $scope.curtir = function(valor) {
            if($('.botoes.curtir').attr('active')=='true'){
            if(window.localStorage.getItem('curtido')!=$scope.Base64($scope.radioOptions.songTitle)) {
                if(valor=='sim') {
                var voto = 'positivo';
                $('.descurtir').removeClass('active');
                $('.curtir').addClass('active');
                window.plugins.toast.show('Obrigado por curtir essa música!', 'long', 'center', null, null);
            } else if (valor=='nao') {
                var voto = 'negativo';
                $('.curtir').removeClass('active');
                $('.descurtir').addClass('active');
               window.plugins.toast.show('Descurtido. Obrigado pelo seu voto!', 'long', 'center', null, null);
            }
            console.log("http://helloradio.com.br/radios/curtir_app.php?id_radio=2&voto="+voto+"&musica="+$scope.Base64($scope.radioOptions.songTitle));
            var jqxhr = $.get("http://helloradio.com.br/radios/curtir_app.php?id_radio=2&voto="+voto+"&musica="+$scope.Base64($scope.radioOptions.songTitle), function(data) {

                window.localStorage.setItem('curtido', $scope.Base64($scope.radioOptions.songTitle));
            })
            } else {
                window.plugins.toast.show('Você já curtiu essa música!', 'long', 'center', null, null);
            }
            }
        }

        $scope.renderHtml = function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    
        $scope.RefreshFaixa = function() {
            var songTitle = '';
            var Artista = '';
            var Musica = '';
           
            var n = Math.floor(Math.random() * 9999) + 1;
            var largura_capa = $('.capa').width();

            if (document.location.hostname == "localhost") {
                var URLCurrentSong = 'http://helloradio.com.br/radios/shoutcast.php?ip='+$scope.radios_arr[$scope.lastradio].ip+'&v=' + n;
                $scope.URLProgramacao = 'http://helloradio.com.br/radios/programacao.php?id_radio=2&v=' + n;
            } else {
                var URLCurrentSong = 'http://helloradio.com.br/radios/shoutcast.php?ip='+$scope.radios_arr[$scope.lastradio].ip+'&v=' + n;
                $scope.URLProgramacao = 'http://helloradio.com.br/radios/programacao.php?id_radio=2&v=' + n;
            }
            if($scope.BuscaAjax==true) {
            $.get(URLCurrentSong, function(data) {
                var faixa = data.split(" - ");
                if (faixa[1] != undefined) {
                    Artista = faixa[1];
                }
                if (faixa[0] != undefined) {
                    Musica = faixa[0];
                }
                songTitle = Artista + ' - ' + Musica;
               
            }).done(function(data) {
                $scope.$apply(function() {

                    $scope.radioOptions.songTitle = songTitle;
                    $scope.radioOptions.Artista = Artista;
                    $scope.radioOptions.Musica = Musica;
                    $scope.atualFaixa = $scope.Base64($scope.radioOptions.Artista);
                });
                var result = $scope.ExisteTexto($scope.radioOptions.songTitle.toLowerCase(), 
                    $scope.keywords);

                if (result != null) {
                    $scope.ExibeBanner();
                } else {
                        $scope.radioOptions.Background = false;
                        var artista = $scope.radioOptions.Artista.split('PART. ');
                        artista = artista[0];
                        artista =artista.split('P .');
                        artista = artista[0];
                        console.log(artista);
                        $scope.URLText = $scope.Base64($scope.limpa_str(artista));
                          $.get($scope.URLCover+$scope.URLText+'&v=' + n, function(data) {
                            $scope.$apply(function() {
                            $scope.TMPalbumArt = data;
                            });
                        
                            // $timeout(function(){
                            //     $('#tmp_capa,.capa .reserva').hide().fadeIn('slow', function(){
                            //         $scope.$apply(function() {
                            //          $scope.radioOptions.albumArt =  data;
                            //         // var target = angular.element(document.querySelector('#capa'));
                            //         // var target2 =  angular.element(document.querySelector('#canvas'));
                                    
                            //         // stackBoxBlurCanvasRGB(target2, 0, 0, 500, 375, 8, 1);
                            //      });
                            //     }).delay(5000).fadeOut('slow')}, 1000);
                         });

                        //$scope.TMPalbumArt = $sce.trustAsResourceUrl($scope.URLCover+$scope.URLText);

                       


                    $scope.$apply(function() {
                        $("span.capa img").error(function() {
                            $scope.radioOptions.Background = false;
                            $scope.radioOptions.albumArt = 'images/radio/logo_grande.png?v=2';

                        });
                    });

                }
           
            })
            $scope.Programacao();
            }
        }
        $scope.ExibeBanner = function (){
            $scope.ExibeFavoritar = false;
            var b = Math.floor(Math.random() * 1) + 1;  
            $scope.radioOptions.Background = false;
            $scope.TMPalbumArt = 'images/banners/'+b+'.jpg';
            $timeout(function(){
                                $('#tmp_capa,.capa .reserva').hide().fadeIn('slow', function(){
                                    $scope.$apply(function() {
                                    $scope.radioOptions.albumArt = 'images/banners/'+b+'.jpg';
                                 });
                                }).delay(5000).fadeOut('slow')}, 1000);
              
        }
        $scope.ToBase64 = function(url) {
 
                var canvas = document.createElement('CANVAS');
                var ctx = canvas.getContext('2d');
                canvas.height = this.height;
                canvas.width = this.width;
                ctx.drawImage(this,0,0);
                var dataURL = canvas.toDataURL('image/png');
                console.log(dataURL);
        }
        $scope.Programacao = function() {
            var Programa = '';
            var Locutor = '';
            var d = new Date();
            var H = d.getHours();
            var M = d.getMinutes();

           if($scope.BuscaAjax=='truee') {
            $.get($scope.URLProgramacao+'&hora='+H+''+M, function(data) {
              
            }).done(function(data) {
                if (data != null) {
                var programacao = data.split("-");
                if (programacao[1] != undefined) {
                    Locutor = programacao[1];
                }
                if (programacao[0] != undefined) {
                    Programa = programacao[0];
                }
                $scope.$apply(function() {
                    $scope.radioOptions.Programa = Programa;
                    $scope.radioOptions.Locutor = Locutor;
                });
                } else {
                    $scope.radioOptions.Programa = 'Indisponivel';
                    $scope.radioOptions.Locutor = 'No momento';
                }
            })
          } else {
                    $scope.radioOptions.Programa = 'Indisponivel';
                    $scope.radioOptions.Locutor = 'No momento';
                }
        }
        $scope.RefreshFaixa();
        $scope.Programacao();

        $timeout(function(){
            $scope.RefreshFaixa();
            $scope.Programacao();
            $interval(function() {
                $scope.RefreshFaixa();
            }, 40000)
        }, 5000);
        $scope.shareMusica = function() {
            var subject = 'Radio ' + $scope.radioOptions.Titulo;
            if($scope.radioOptions.songTitle) {
               var message = 'Estou ouvindo ' + $scope.radioOptions.songTitle + " Via App oficial da Radio Melodia #radiomelodiavicosa";
            } else {
               var message = 'Estou ouvindo ' + $scope.radioOptions.Titulo + " Via App oficial da Radio Melodia #radiomelodiavicosa";
            }
            var imagem = 'http://i.imgur.com/N9MOjxI.png';
            //var imagem = $scope.radioOptions.albumArt;
            var link = 'http://www.melodiavicosa.com.br/';
            window.plugins.socialsharing.share(message, subject, imagem, link);
        }

        $scope.AbrePedidos = function(){
          pedidos.show();
        }
         $scope.FechaPedidos = function(){
          pedidos.hide();
        }
         $scope.enviaPedido = function(){
          var dados = {};
          $('#pedidos .text-input').each(function() {
            dados[$(this).attr('name')] = $(this).val();
        });         
          $.post("http://helloradio.com.br/radios/envia_contato.php?id_radio=5", dados , function(response) {
              $('#pedidos .form').hide();
              $('#pedidos .enviado').html('<h4>'+dados.nome.split(' ')[0] +', <br/>seu pedido foi enviado com sucesso! Obrigado</h4><ons-button modifier="small">Aguarde...</ons-button>').show();
               $timeout(function(){
                $scope.FechaPedidos();
                $('#pedidos .form').show();
                $('#pedidos .enviado').hide();
              }, 4000);
          })
            .done(function() {
               
            })
            .fail(function() {
              alert( "Ocorreu um erro, tente novamente." );
            });
        }  
        $scope.CloseApp = function(){
            $('#jquery_jplayer_1').jPlayer('stop');
             if (navigator.app) {
                        navigator.app.exitApp();
                    } else if (navigator.device) {
                        navigator.device.exitApp();
                    }
        }

        $scope.Base64 = function(string){
            var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
            var encodedString = Base64.encode(string);
            return encodedString;
        }

        $scope.BackgroundMode = function(){

            e.preventDefault();

        }

        ons.ready(function() {

            if(ons.platform.isIOS()){
                $('.navigation-bar').css({'padding-top':"20px"});
            }
            cordova.plugins.backgroundMode.setDefaults({  title:  $scope.radioOptions.Titulo, ticker: 'Entrando em segundo plano',  text:'Clique para abrir o aplicativo.'});
            cordova.plugins.backgroundMode.enable();
            cordova.plugins.backgroundMode.onactivate = function () {
                setTimeout(function () {
                    // Modify the currently displayed notification
                    if($scope.radioOptions.songTitle) {
                       var texto = $scope.radioOptions.songTitle;
                    } else {
                       var texto = 'Clique para abrir o aplicativo.';
                    }
                    cordova.plugins.backgroundMode.configure({
                        title:  $scope.radioOptions.Titulo,
                        text: texto

                    });
                }, 5000);
            }
                    StatusBar.styleBlackOpaque();
        });
        
       document.addEventListener("backbutton", $scope.BackgroundMode, true); 

        document.addEventListener("offline", function() {

            $scope.isPlaying = false;
            $('#jquery_jplayer_1').jPlayer('stop');
            $scope.buttonIcon = '<span class="ion-ios-play"></span>';
            $scope.radio = null;
            modal.show();
            setTimeout('modal.hide()', 8000);

        }, false);

    });

    var pad2 = function(number) {
        return (number < 10 ? '0' : '') + number;
    }

    app.filter('SecondsToTimeString', function() {
        return function(seconds) {
            var s = parseInt(seconds % 60);
            var m = parseInt((seconds / 60) % 60);
            var h = parseInt(((seconds / 60) / 60) % 60);
            if (seconds > 0) {
                return pad2(h) + ':' + pad2(m) + ':' + pad2(s);
            } else {
                return '';
            }
        }
    })
})();
